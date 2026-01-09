import { prisma } from "@/lib/db";
import type { PlanQuota } from "@/lib/plans";

type UsageCheck = {
  ok: boolean;
  reason?: string;
};

export function currentPeriodRange(reference = new Date()) {
  const start = new Date(Date.UTC(reference.getUTCFullYear(), reference.getUTCMonth(), 1));
  const end = new Date(Date.UTC(reference.getUTCFullYear(), reference.getUTCMonth() + 1, 1));
  return { start, end };
}

export async function getUsageRecord(workspaceId: string) {
  const { start, end } = currentPeriodRange();
  return prisma.usageRecord.upsert({
    where: { workspaceId_periodStart_periodEnd: { workspaceId, periodStart: start, periodEnd: end } },
    update: {},
    create: {
      workspaceId,
      periodStart: start,
      periodEnd: end,
    },
  });
}

export async function checkQuota(
  workspaceId: string,
  quota: PlanQuota,
  delta: { pages?: number; bytes?: number; runs?: number }
): Promise<UsageCheck> {
  const record = await getUsageRecord(workspaceId);
  const nextPages = record.pagesProcessed + (delta.pages ?? 0);
  const nextRuns = record.runsStarted + (delta.runs ?? 0);
  const nextBytes = record.bytesProcessed + (delta.bytes ?? 0);

  if (nextPages > quota.monthlyPages) {
    return { ok: false, reason: "Monthly page quota exceeded" };
  }
  if (nextRuns > quota.monthlyRuns) {
    return { ok: false, reason: "Monthly run quota exceeded" };
  }
  if (nextBytes > quota.monthlyBytes) {
    return { ok: false, reason: "Monthly byte quota exceeded" };
  }
  return { ok: true };
}

export async function consumeUsage(
  workspaceId: string,
  delta: { pages?: number; bytes?: number; runs?: number }
) {
  const { start, end } = currentPeriodRange();
  return prisma.usageRecord.update({
    where: { workspaceId_periodStart_periodEnd: { workspaceId, periodStart: start, periodEnd: end } },
    data: {
      pagesProcessed: { increment: delta.pages ?? 0 },
      runsStarted: { increment: delta.runs ?? 0 },
      bytesProcessed: { increment: delta.bytes ?? 0 },
    },
  });
}
