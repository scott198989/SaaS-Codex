import { useMemo, useState } from "react";
import clsx from "clsx";

const materials = ["HDPE", "LDPE", "HDP", "LLDP", "EVOH"] as const;

type Material = (typeof materials)[number];

type ZoneTemps = {
  feed: number;
  compression: number;
  metering: number;
  die: number;
};

type MaterialProfile = {
  material: Material;
  baselineRate: number;
  baselineOD: number;
  baselineWall: number;
  temps: ZoneTemps;
  screwRpm: number;
  lineSpeed: number;
  meltPressure: number;
  bur: number;
  frostLineHeight: number;
  airRing: string;
  gaugeControl: string;
  bubbleStability: string;
  nipRollerSpeed: number;
  ibc: string;
  criticalParameters: string[];
  defectWatch: { defect: string; note: string }[];
  window: {
    tempMin: number;
    tempMax: number;
    pressureMin: number;
    pressureMax: number;
  };
  confidenceNotes: string[];
};

const materialProfiles: Record<Material, MaterialProfile> = {
  HDPE: {
    material: "HDPE",
    baselineRate: 120,
    baselineOD: 160,
    baselineWall: 0.8,
    temps: { feed: 175, compression: 185, metering: 195, die: 205 },
    screwRpm: 55,
    lineSpeed: 140,
    meltPressure: 2600,
    bur: 2.4,
    frostLineHeight: 8,
    airRing: "Dual-lip air ring, 30% top flow",
    gaugeControl: "Auto die bolt trim, 1.5% tolerance",
    bubbleStability: "High, ensure uniform airflow",
    nipRollerSpeed: 140,
    ibc: "On, 20% cooling",
    criticalParameters: ["Melt temp", "Line speed", "BUR", "IBC"],
    defectWatch: [
      { defect: "Gauge bands", note: "Watch die lip temperature balance" },
      { defect: "Gels", note: "Improve filtration and melt mixing" },
      { defect: "Bubble instability", note: "Maintain stable IBC and airflow" },
    ],
    window: {
      tempMin: 170,
      tempMax: 220,
      pressureMin: 1800,
      pressureMax: 3200,
    },
    confidenceNotes: [
      "HDPE tolerates higher output rates but is sensitive to melt fracture.",
      "Keep die temps above 200°C for clarity and gloss.",
    ],
  },
  LDPE: {
    material: "LDPE",
    baselineRate: 95,
    baselineOD: 140,
    baselineWall: 0.6,
    temps: { feed: 160, compression: 170, metering: 180, die: 190 },
    screwRpm: 50,
    lineSpeed: 165,
    meltPressure: 2300,
    bur: 2.2,
    frostLineHeight: 7,
    airRing: "Single-lip air ring, 20% top flow",
    gaugeControl: "Manual die bolts, 2% tolerance",
    bubbleStability: "Moderate, watch ambient drafts",
    nipRollerSpeed: 165,
    ibc: "Optional, 10-15% cooling",
    criticalParameters: ["Melt temp", "Air ring", "Line speed"],
    defectWatch: [
      { defect: "Wrinkles", note: "Adjust air ring balance and nip tension" },
      { defect: "Blocking", note: "Increase frost line height and IBC" },
      { defect: "Poor clarity", note: "Raise melt temp or lower output" },
    ],
    window: {
      tempMin: 150,
      tempMax: 200,
      pressureMin: 1600,
      pressureMax: 2800,
    },
    confidenceNotes: [
      "LDPE handles broader processing windows but clarity drops with low melt temps.",
      "Avoid excessive BUR to limit haze.",
    ],
  },
  HDP: {
    material: "HDP",
    baselineRate: 110,
    baselineOD: 150,
    baselineWall: 0.7,
    temps: { feed: 170, compression: 180, metering: 190, die: 205 },
    screwRpm: 52,
    lineSpeed: 150,
    meltPressure: 2500,
    bur: 2.3,
    frostLineHeight: 8,
    airRing: "Dual-lip air ring, 25% top flow",
    gaugeControl: "Auto die bolts, 1.5% tolerance",
    bubbleStability: "High, keep IBC on",
    nipRollerSpeed: 150,
    ibc: "On, 15-20% cooling",
    criticalParameters: ["Melt pressure", "BUR", "Gauge control"],
    defectWatch: [
      { defect: "Gauge bands", note: "Check die bolt response and heat balance" },
      { defect: "Blocking", note: "Increase cooling or add anti-block" },
      { defect: "Gels", note: "Improve purging and screen pack" },
    ],
    window: {
      tempMin: 165,
      tempMax: 215,
      pressureMin: 1700,
      pressureMax: 3100,
    },
    confidenceNotes: [
      "HDP requires consistent melt pressure to prevent gauge variation.",
      "Maintain uniform die temps to avoid die lines.",
    ],
  },
  LLDP: {
    material: "LLDP",
    baselineRate: 105,
    baselineOD: 150,
    baselineWall: 0.65,
    temps: { feed: 165, compression: 175, metering: 185, die: 200 },
    screwRpm: 53,
    lineSpeed: 155,
    meltPressure: 2400,
    bur: 2.5,
    frostLineHeight: 9,
    airRing: "Dual-lip air ring, 35% top flow",
    gaugeControl: "Auto die bolts, 1.5% tolerance",
    bubbleStability: "Moderate, monitor bubble oscillation",
    nipRollerSpeed: 155,
    ibc: "On, 20-25% cooling",
    criticalParameters: ["Frost line", "Air ring", "IBC"],
    defectWatch: [
      { defect: "Bubble instability", note: "Increase IBC or adjust air ring" },
      { defect: "Wrinkles", note: "Tune nip tension and cage alignment" },
      { defect: "Blocking", note: "Raise frost line height" },
    ],
    window: {
      tempMin: 160,
      tempMax: 210,
      pressureMin: 1700,
      pressureMax: 3000,
    },
    confidenceNotes: [
      "LLDP is shear-sensitive; avoid excessive screw speeds.",
      "Higher BUR improves orientation but stresses stability.",
    ],
  },
  EVOH: {
    material: "EVOH",
    baselineRate: 70,
    baselineOD: 120,
    baselineWall: 0.5,
    temps: { feed: 175, compression: 185, metering: 195, die: 205 },
    screwRpm: 38,
    lineSpeed: 120,
    meltPressure: 2800,
    bur: 2.1,
    frostLineHeight: 6,
    airRing: "Low-shear air ring, 20% top flow",
    gaugeControl: "Auto die bolts, 1% tolerance",
    bubbleStability: "Sensitive, maintain stable airflow",
    nipRollerSpeed: 120,
    ibc: "On, 10-15% cooling",
    criticalParameters: ["Melt temp", "Moisture control", "Melt pressure"],
    defectWatch: [
      { defect: "Poor clarity", note: "Dry resin and elevate metering temp" },
      { defect: "Gels", note: "Reduce residence time and purge" },
      { defect: "Bubble instability", note: "Lower BUR or increase cooling" },
    ],
    window: {
      tempMin: 170,
      tempMax: 215,
      pressureMin: 2000,
      pressureMax: 3400,
    },
    confidenceNotes: [
      "EVOH needs tight moisture control to prevent bubbles.",
      "Keep output conservative to protect barrier performance.",
    ],
  },
};

type OptimizeInputs = {
  material: Material;
  targetOD: number;
  targetWall: number;
  productionRate: number;
};

type DiagnoseInputs = {
  material: Material;
  currentSettings: string;
  defect: string;
};

const defects = [
  "melt fracture",
  "shark skin",
  "die lines",
  "voids/bubbles",
  "warping",
  "inconsistent wall thickness",
  "surface roughness",
] as const;

type Defect = (typeof defects)[number];

type DefectRule = {
  cause: string;
  adjustment: string;
  parameters: string[];
  severity: number;
};

const defectMatrix: Record<Defect, DefectRule[]> = {
  "melt fracture": [
    {
      cause: "Shear stress too high at the die",
      adjustment: "Reduce output rate or screw speed; increase melt temperature",
      parameters: ["Screw RPM", "Melt temp", "Die temp"],
      severity: 5,
    },
    {
      cause: "Die land length too short",
      adjustment: "Inspect die, add land length or reduce die lip gap",
      parameters: ["Die geometry", "Melt pressure"],
      severity: 3,
    },
  ],
  "shark skin": [
    {
      cause: "Surface melt temperature too low",
      adjustment: "Increase die temperature and reduce line speed",
      parameters: ["Die temp", "Line speed"],
      severity: 4,
    },
    {
      cause: "Contaminants or buildup at die lip",
      adjustment: "Clean die lips and replace screen pack",
      parameters: ["Screen pack", "Die lip"],
      severity: 3,
    },
  ],
  "die lines": [
    {
      cause: "Die lip damage or buildup",
      adjustment: "Polish/clean die lip, improve filtration",
      parameters: ["Die lip", "Screen pack"],
      severity: 5,
    },
    {
      cause: "Uneven die bolt temperature",
      adjustment: "Balance die zone temperatures",
      parameters: ["Die temp", "Gauge control"],
      severity: 4,
    },
  ],
  "voids/bubbles": [
    {
      cause: "Moisture in resin",
      adjustment: "Dry resin and reduce residence time",
      parameters: ["Drying", "Screw RPM"],
      severity: 5,
    },
    {
      cause: "Entrained air from poor melt seal",
      adjustment: "Increase back pressure and check screw wear",
      parameters: ["Melt pressure", "Screw"],
      severity: 4,
    },
  ],
  warping: [
    {
      cause: "Uneven cooling across bubble",
      adjustment: "Balance air ring flow and stabilize frost line",
      parameters: ["Air ring", "Frost line"],
      severity: 4,
    },
    {
      cause: "Incorrect nip tension",
      adjustment: "Reduce nip tension and align rollers",
      parameters: ["Nip speed", "Roller alignment"],
      severity: 3,
    },
  ],
  "inconsistent wall thickness": [
    {
      cause: "Gauge control response lag",
      adjustment: "Tune gauge control loop and reduce output spikes",
      parameters: ["Gauge control", "Screw RPM"],
      severity: 5,
    },
    {
      cause: "Unstable bubble",
      adjustment: "Increase IBC, adjust air ring, lower BUR",
      parameters: ["IBC", "Air ring", "BUR"],
      severity: 4,
    },
  ],
  "surface roughness": [
    {
      cause: "Low melt temperature or contamination",
      adjustment: "Increase metering temperature and improve filtration",
      parameters: ["Metering temp", "Screen pack"],
      severity: 4,
    },
    {
      cause: "Excessive output rate",
      adjustment: "Reduce output and stabilize line speed",
      parameters: ["Line speed", "Screw RPM"],
      severity: 3,
    },
  ],
};

const clamp = (value: number, min: number, max: number) =>
  Math.min(max, Math.max(min, value));

const roundTo = (value: number, digits = 0) => {
  const factor = 10 ** digits;
  return Math.round(value * factor) / factor;
};

const buildRecommendations = (inputs: OptimizeInputs) => {
  const profile = materialProfiles[inputs.material];
  const rateFactor = inputs.productionRate / profile.baselineRate;
  const sizeFactor =
    (profile.baselineOD / inputs.targetOD) *
    (profile.baselineWall / inputs.targetWall);

  const adjustedTemps = {
    feed: roundTo(profile.temps.feed + 8 * (rateFactor - 1), 0),
    compression: roundTo(profile.temps.compression + 10 * (rateFactor - 1), 0),
    metering: roundTo(profile.temps.metering + 12 * (rateFactor - 1), 0),
    die: roundTo(profile.temps.die + 10 * (rateFactor - 1), 0),
  };

  const screwRpm = roundTo(profile.screwRpm * (0.85 + 0.25 * rateFactor), 0);
  const lineSpeed = roundTo(profile.lineSpeed * rateFactor * sizeFactor, 0);
  const meltPressure = roundTo(
    profile.meltPressure * (0.9 + 0.2 * rateFactor) * (inputs.targetWall / profile.baselineWall),
    0
  );

  const bur = roundTo(clamp(profile.bur * (inputs.targetOD / profile.baselineOD), 1.8, 3.2), 2);
  const frostLineHeight = roundTo(clamp(profile.frostLineHeight * (1 + (rateFactor - 1) * 0.4), 5, 12), 1);

  const confidence = Math.max(
    58,
    92 - Math.abs(rateFactor - 1) * 18 - Math.abs(sizeFactor - 1) * 14
  );

  const confidenceNotes = [
    ...profile.confidenceNotes,
    `Rate scaling factor: ${roundTo(rateFactor, 2)}. Size factor: ${roundTo(sizeFactor, 2)}.`,
  ];

  return {
    profile,
    adjustedTemps,
    screwRpm,
    lineSpeed,
    meltPressure,
    bur,
    frostLineHeight,
    confidence,
    confidenceNotes,
  };
};

const buildDiagnosis = (inputs: DiagnoseInputs) => {
  const profile = materialProfiles[inputs.material];
  const rules = defectMatrix[inputs.defect as Defect];

  const ranked = rules
    .map((rule) => ({
      ...rule,
      score: rule.severity + (profile.criticalParameters.some((param) => rule.parameters.includes(param)) ? 2 : 0),
    }))
    .sort((a, b) => b.score - a.score);

  return {
    profile,
    ranked,
  };
};

export default function App() {
  const [mode, setMode] = useState<"optimize" | "diagnose">("optimize");
  const [optimizeInputs, setOptimizeInputs] = useState<OptimizeInputs>({
    material: "HDPE",
    targetOD: 160,
    targetWall: 0.8,
    productionRate: 120,
  });
  const [diagnoseInputs, setDiagnoseInputs] = useState<DiagnoseInputs>({
    material: "HDPE",
    currentSettings: "Melt 200°C, screw 55 RPM, line 140 ft/min, BUR 2.4",
    defect: "melt fracture",
  });

  const recommendations = useMemo(
    () => buildRecommendations(optimizeInputs),
    [optimizeInputs]
  );

  const diagnosis = useMemo(
    () => buildDiagnosis(diagnoseInputs),
    [diagnoseInputs]
  );

  return (
    <div className="min-h-screen bg-slate-ink text-slate-100">
      <div className="mx-auto max-w-6xl px-6 py-10">
        <header className="flex flex-col gap-4 border-b border-slate-800 pb-6">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-slate-400">Extrusion Expert System</p>
              <h1 className="text-3xl font-semibold">Process Parameter Recommendation Tool</h1>
            </div>
            <div className="flex items-center gap-3 rounded-full border border-slate-700 bg-slate-900/50 p-1">
              <button
                className={clsx(
                  "rounded-full px-4 py-2 text-sm font-semibold transition",
                  mode === "optimize" ? "bg-accent text-slate-900" : "text-slate-300"
                )}
                onClick={() => setMode("optimize")}
              >
                Optimize Parameters
              </button>
              <button
                className={clsx(
                  "rounded-full px-4 py-2 text-sm font-semibold transition",
                  mode === "diagnose" ? "bg-accent text-slate-900" : "text-slate-300"
                )}
                onClick={() => setMode("diagnose")}
              >
                Diagnose Defect
              </button>
            </div>
          </div>
          <p className="max-w-3xl text-sm text-slate-300">
            Configure process inputs and receive expert-system recommendations grounded in polymer processing fundamentals.
            This tool scales baseline operating windows for each resin and highlights critical stability levers.
          </p>
        </header>

        {mode === "optimize" ? (
          <section className="mt-8 grid gap-6 lg:grid-cols-[320px_1fr]">
            <div className="rounded-2xl border border-slate-800 bg-panel p-6 shadow-panel">
              <h2 className="text-lg font-semibold">Optimize Inputs</h2>
              <div className="mt-6 grid gap-4">
                <div className="grid gap-2">
                  <label>Material</label>
                  <select
                    value={optimizeInputs.material}
                    onChange={(event) =>
                      setOptimizeInputs((prev) => ({
                        ...prev,
                        material: event.target.value as Material,
                      }))
                    }
                  >
                    {materials.map((material) => (
                      <option key={material} value={material}>
                        {material}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="grid gap-2">
                  <label>Target OD (mm)</label>
                  <input
                    type="number"
                    value={optimizeInputs.targetOD}
                    onChange={(event) =>
                      setOptimizeInputs((prev) => ({
                        ...prev,
                        targetOD: Number(event.target.value),
                      }))
                    }
                  />
                </div>
                <div className="grid gap-2">
                  <label>Target Wall Thickness (mm)</label>
                  <input
                    type="number"
                    step="0.05"
                    value={optimizeInputs.targetWall}
                    onChange={(event) =>
                      setOptimizeInputs((prev) => ({
                        ...prev,
                        targetWall: Number(event.target.value),
                      }))
                    }
                  />
                </div>
                <div className="grid gap-2">
                  <label>Production Rate Target (kg/hr)</label>
                  <input
                    type="number"
                    value={optimizeInputs.productionRate}
                    onChange={(event) =>
                      setOptimizeInputs((prev) => ({
                        ...prev,
                        productionRate: Number(event.target.value),
                      }))
                    }
                  />
                </div>
              </div>
            </div>

            <div className="grid gap-6">
              <div className="rounded-2xl border border-slate-800 bg-panel p-6 shadow-panel">
                <div className="flex flex-wrap items-center justify-between gap-4">
                  <div>
                    <h2 className="text-lg font-semibold">Recommended Settings</h2>
                    <p className="text-xs uppercase tracking-[0.2em] text-slate-500">
                      {recommendations.profile.material} baseline scaled by throughput + geometry
                    </p>
                  </div>
                  <span className="badge bg-emerald-400/20 text-emerald-200">
                    Confidence {Math.round(recommendations.confidence)}%
                  </span>
                </div>

                <div className="mt-6 overflow-hidden rounded-xl border border-slate-800">
                  <div className="grid grid-cols-2 gap-0 bg-slate-900/60 text-sm">
                    <div className="border-b border-slate-800 p-4">
                      <p className="table-header">Barrel Zone Temps (°C)</p>
                      <p className="mt-2 text-lg font-semibold">
                        Feed {recommendations.adjustedTemps.feed} / Comp {recommendations.adjustedTemps.compression} / Meter {recommendations.adjustedTemps.metering} / Die {recommendations.adjustedTemps.die}
                      </p>
                    </div>
                    <div className="border-b border-slate-800 p-4">
                      <p className="table-header">Screw Speed (RPM)</p>
                      <p className="mt-2 text-lg font-semibold">{recommendations.screwRpm}</p>
                    </div>
                    <div className="border-b border-slate-800 p-4">
                      <p className="table-header">Line Speed (ft/min)</p>
                      <p className="mt-2 text-lg font-semibold">{recommendations.lineSpeed}</p>
                    </div>
                    <div className="border-b border-slate-800 p-4">
                      <p className="table-header">Melt Pressure Target (psi)</p>
                      <p className="mt-2 text-lg font-semibold">{recommendations.meltPressure}</p>
                    </div>
                    <div className="border-b border-slate-800 p-4">
                      <p className="table-header">Blow-Up Ratio (BUR)</p>
                      <p className="mt-2 text-lg font-semibold">{recommendations.bur}</p>
                    </div>
                    <div className="border-b border-slate-800 p-4">
                      <p className="table-header">Frost Line Height (ft)</p>
                      <p className="mt-2 text-lg font-semibold">{recommendations.frostLineHeight}</p>
                    </div>
                    <div className="border-b border-slate-800 p-4">
                      <p className="table-header">Air Ring Settings</p>
                      <p className="mt-2 text-lg font-semibold">{recommendations.profile.airRing}</p>
                    </div>
                    <div className="border-b border-slate-800 p-4">
                      <p className="table-header">Gauge Control</p>
                      <p className="mt-2 text-lg font-semibold">{recommendations.profile.gaugeControl}</p>
                    </div>
                    <div className="border-b border-slate-800 p-4">
                      <p className="table-header">Bubble Stability</p>
                      <p className="mt-2 text-lg font-semibold">{recommendations.profile.bubbleStability}</p>
                    </div>
                    <div className="border-b border-slate-800 p-4">
                      <p className="table-header">Nip Roller Speed (ft/min)</p>
                      <p className="mt-2 text-lg font-semibold">{recommendations.profile.nipRollerSpeed}</p>
                    </div>
                    <div className="border-b border-slate-800 p-4">
                      <p className="table-header">IBC</p>
                      <p className="mt-2 text-lg font-semibold">{recommendations.profile.ibc}</p>
                    </div>
                    <div className="p-4">
                      <p className="table-header">Critical Parameters</p>
                      <ul className="mt-2 list-disc space-y-1 pl-4 text-sm text-slate-200">
                        {recommendations.profile.criticalParameters.map((item) => (
                          <li key={item}>{item}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              <div className="grid gap-6 lg:grid-cols-2">
                <div className="rounded-2xl border border-slate-800 bg-panel p-6 shadow-panel">
                  <h3 className="text-sm uppercase tracking-[0.2em] text-slate-400">
                    Defect Watchlist
                  </h3>
                  <div className="mt-4 space-y-3">
                    {recommendations.profile.defectWatch.map((item) => (
                      <div key={item.defect} className="rounded-lg border border-slate-800 bg-slate-900/40 p-3">
                        <p className="text-sm font-semibold text-slate-100">{item.defect}</p>
                        <p className="text-xs text-slate-400">{item.note}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="rounded-2xl border border-slate-800 bg-panel p-6 shadow-panel">
                  <h3 className="text-sm uppercase tracking-[0.2em] text-slate-400">Confidence Notes</h3>
                  <ul className="mt-4 space-y-3 text-sm text-slate-300">
                    {recommendations.confidenceNotes.map((note) => (
                      <li key={note} className="rounded-lg border border-slate-800 bg-slate-900/40 p-3">
                        {note}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </section>
        ) : (
          <section className="mt-8 grid gap-6 lg:grid-cols-[320px_1fr]">
            <div className="rounded-2xl border border-slate-800 bg-panel p-6 shadow-panel">
              <h2 className="text-lg font-semibold">Diagnose Inputs</h2>
              <div className="mt-6 grid gap-4">
                <div className="grid gap-2">
                  <label>Material</label>
                  <select
                    value={diagnoseInputs.material}
                    onChange={(event) =>
                      setDiagnoseInputs((prev) => ({
                        ...prev,
                        material: event.target.value as Material,
                      }))
                    }
                  >
                    {materials.map((material) => (
                      <option key={material} value={material}>
                        {material}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="grid gap-2">
                  <label>Current Settings Summary</label>
                  <textarea
                    rows={4}
                    value={diagnoseInputs.currentSettings}
                    onChange={(event) =>
                      setDiagnoseInputs((prev) => ({
                        ...prev,
                        currentSettings: event.target.value,
                      }))
                    }
                  />
                </div>
                <div className="grid gap-2">
                  <label>Defect</label>
                  <select
                    value={diagnoseInputs.defect}
                    onChange={(event) =>
                      setDiagnoseInputs((prev) => ({
                        ...prev,
                        defect: event.target.value,
                      }))
                    }
                  >
                    {defects.map((defect) => (
                      <option key={defect} value={defect}>
                        {defect}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>

            <div className="grid gap-6">
              <div className="rounded-2xl border border-slate-800 bg-panel p-6 shadow-panel">
                <div className="flex flex-wrap items-center justify-between gap-4">
                  <div>
                    <h2 className="text-lg font-semibold">Probable Causes & Adjustments</h2>
                    <p className="text-xs uppercase tracking-[0.2em] text-slate-500">
                      {diagnosis.profile.material} context | {diagnoseInputs.defect}
                    </p>
                  </div>
                  <span className="badge bg-amber-400/20 text-amber-200">Ranked</span>
                </div>
                <div className="mt-6 space-y-4">
                  {diagnosis.ranked.map((rule, index) => (
                    <div key={rule.cause} className="rounded-xl border border-slate-800 bg-slate-900/50 p-4">
                      <div className="flex items-start justify-between">
                        <div>
                          <p className="text-sm uppercase tracking-[0.2em] text-slate-500">#{index + 1}</p>
                          <h3 className="text-lg font-semibold">{rule.cause}</h3>
                        </div>
                        <span className="badge bg-cyan-400/20 text-cyan-200">Score {rule.score}</span>
                      </div>
                      <p className="mt-3 text-sm text-slate-300">{rule.adjustment}</p>
                      <div className="mt-3 flex flex-wrap gap-2">
                        {rule.parameters.map((param) => (
                          <span key={param} className="rounded-full border border-slate-700 px-3 py-1 text-xs text-slate-300">
                            {param}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-2xl border border-slate-800 bg-panel p-6 shadow-panel">
                <h3 className="text-sm uppercase tracking-[0.2em] text-slate-400">Context Notes</h3>
                <p className="mt-4 text-sm text-slate-300">
                  Input summary: {diagnoseInputs.currentSettings}
                </p>
                <ul className="mt-4 space-y-3 text-sm text-slate-300">
                  {diagnosis.profile.confidenceNotes.map((note) => (
                    <li key={note} className="rounded-lg border border-slate-800 bg-slate-900/40 p-3">
                      {note}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>
        )}

        <section className="mt-12 rounded-2xl border border-slate-800 bg-panel p-6 shadow-panel">
          <h2 className="text-lg font-semibold">How This Works</h2>
          <div className="mt-4 grid gap-4 text-sm text-slate-300 lg:grid-cols-2">
            <div className="space-y-3">
              <p>
                The tool uses an expert-system rules engine built from polymer processing fundamentals.
                Each material profile encodes baseline temperature windows, output rates, and stability constraints.
              </p>
              <p>
                When you optimize, the engine scales those baselines for geometry and throughput, then flags the most
                critical levers that protect melt quality and bubble stability. Outputs include explicit recommendations
                for process control subsystems like IBC, air rings, and gauge control loops.
              </p>
            </div>
            <div className="space-y-3">
              <p>
                The diagnose workflow references a defect-cause matrix mapped to actionable adjustments.
                It ranks causes based on severity and the material&apos;s sensitivity to each parameter group.
              </p>
              <p>
                This approach is more transparent than black-box ML because every recommendation is traceable to a
                specific processing rule, enabling operators to validate, tune, and document decisions with confidence.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
