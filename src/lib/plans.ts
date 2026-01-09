export type PlanQuota = {
  monthlyPages: number;
  monthlyRuns: number;
  monthlyBytes: number;
};

export type PlanConfig = {
  key: string;
  name: string;
  stripePriceId: string | null;
  quota: PlanQuota;
};

const basePlans: PlanConfig[] = [
  {
    key: "starter",
    name: "Starter",
    stripePriceId: process.env.STRIPE_PRICE_STARTER || null,
    quota: { monthlyPages: 10000, monthlyRuns: 20, monthlyBytes: 2_000_000_000 },
  },
  {
    key: "growth",
    name: "Growth",
    stripePriceId: process.env.STRIPE_PRICE_GROWTH || null,
    quota: { monthlyPages: 100000, monthlyRuns: 100, monthlyBytes: 10_000_000_000 },
  },
  {
    key: "scale",
    name: "Scale",
    stripePriceId: process.env.STRIPE_PRICE_SCALE || null,
    quota: { monthlyPages: 500000, monthlyRuns: 500, monthlyBytes: 50_000_000_000 },
  },
];

export function allPlans() {
  return basePlans;
}

export function findPlanByPrice(priceId: string | null | undefined) {
  if (!priceId) {
    return null;
  }
  return basePlans.find((plan) => plan.stripePriceId === priceId) ?? null;
}

export function fallbackPlan() {
  return basePlans[0];
}
