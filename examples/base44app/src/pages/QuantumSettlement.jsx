import React from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Sparkles, SwitchCamera, Zap } from "lucide-react";

const settlements = [
  {
    name: "Q-Bridge 9",
    success: 99,
    mode: "warp",
  },
  {
    name: "Photon Rail",
    success: 96,
    mode: "adaptive",
  },
  {
    name: "Sovereign Pulse",
    success: 93,
    mode: "secure",
  },
];

const steps = [
  "Pre-sign via A2A consensus",
  "Select fastest chain corridor",
  "Apply policy guardrails",
  "Finalize with Codex attestation",
];

export default function QuantumSettlement() {
  return (
    <div className="p-6 md:p-10 space-y-6">
      <header className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="text-3xl font-bold text-slate-900">Quantum Settlement Engine</h1>
          <p className="text-slate-500">
            Multi-chain settlement orchestration with Codex-speed assurances.
          </p>
        </div>
        <Button className="bg-indigo-600 text-white hover:bg-indigo-500">
          Initiate Quantum Run
        </Button>
      </header>

      <section className="grid gap-4 md:grid-cols-3">
        {settlements.map((settlement) => (
          <Card key={settlement.name} className="shadow-xl border-slate-200">
            <CardHeader>
              <CardTitle className="flex items-center justify-between text-base">
                <span>{settlement.name}</span>
                <Badge variant="secondary">{settlement.mode}</Badge>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <Progress value={settlement.success} className="h-2" />
              <p className="text-sm text-slate-500 mt-2">Success {settlement.success}%</p>
            </CardContent>
          </Card>
        ))}
      </section>

      <section className="grid gap-4 lg:grid-cols-[2fr_1fr]">
        <Card className="shadow-xl border-slate-200">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <SwitchCamera className="w-5 h-5 text-indigo-600" />
              Settlement Flow
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3 text-sm text-slate-600">
            {steps.map((step, index) => (
              <div key={step} className="flex items-start gap-3">
                <div className="w-7 h-7 rounded-full bg-indigo-100 text-indigo-700 flex items-center justify-center text-xs font-semibold">
                  {index + 1}
                </div>
                <p>{step}</p>
              </div>
            ))}
          </CardContent>
        </Card>

        <Card className="shadow-xl border-slate-200">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Zap className="w-5 h-5 text-emerald-600" />
              Throughput Matrix
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3 text-sm">
            {[
              { label: "Ops/min", value: "18.4k" },
              { label: "Latency p95", value: "74ms" },
              { label: "Route certainty", value: "99%" },
            ].map((item) => (
              <div key={item.label} className="flex items-center justify-between">
                <span className="text-slate-500">{item.label}</span>
                <span className="font-semibold text-slate-900">{item.value}</span>
              </div>
            ))}
          </CardContent>
        </Card>
      </section>

      <Card className="shadow-xl border-slate-200">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-amber-500" />
            Bazaar Codex Command
          </CardTitle>
        </CardHeader>
        <CardContent className="text-sm text-slate-600">
          “Settle in quantum: route fast, attest faster.”
        </CardContent>
      </Card>
    </div>
  );
}
