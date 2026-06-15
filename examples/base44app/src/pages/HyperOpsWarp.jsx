import React from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Cpu, Rocket, Timer } from "lucide-react";

const lanes = [
  {
    name: "Warp Lane Alpha",
    speed: 92,
    state: "stable",
    note: "A2A-first settlement path",
  },
  {
    name: "Warp Lane Sigma",
    speed: 88,
    state: "boost",
    note: "Autonomous liquidity splice",
  },
  {
    name: "Warp Lane Delta",
    speed: 84,
    state: "monitor",
    note: "Multi-chain prefetch enabled",
  },
];

const macros = [
  "Macro: scan → simulate → deploy",
  "Macro: audit → lock → route",
  "Macro: hedge → settle → attest",
];

export default function HyperOpsWarp() {
  return (
    <div className="p-6 md:p-10 space-y-6">
      <header className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="text-3xl font-bold text-slate-900">HyperOps Warp</h1>
          <p className="text-slate-500">
            Macro & micro ops layers for the fastest sovereign execution.
          </p>
        </div>
        <Button className="bg-emerald-600 text-white hover:bg-emerald-500">
          Boost Warp
        </Button>
      </header>

      <section className="grid gap-4 md:grid-cols-3">
        {lanes.map((lane) => (
          <Card key={lane.name} className="shadow-xl border-slate-200">
            <CardHeader>
              <CardTitle className="flex items-center justify-between text-base">
                <span>{lane.name}</span>
                <Badge
                  variant="secondary"
                  className={
                    lane.state === "stable"
                      ? "bg-emerald-100 text-emerald-700"
                      : lane.state === "boost"
                      ? "bg-indigo-100 text-indigo-700"
                      : "bg-amber-100 text-amber-700"
                  }
                >
                  {lane.state}
                </Badge>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <Progress value={lane.speed} className="h-2" />
              <p className="text-sm text-slate-500 mt-2">Speed {lane.speed}%</p>
              <p className="text-xs text-slate-500 mt-2">{lane.note}</p>
            </CardContent>
          </Card>
        ))}
      </section>

      <section className="grid gap-4 lg:grid-cols-[2fr_1fr]">
        <Card className="shadow-xl border-slate-200">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Rocket className="w-5 h-5 text-indigo-600" />
              Macro Layer Launchers
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3 text-sm text-slate-600">
            {macros.map((macro) => (
              <div key={macro} className="rounded-lg border border-slate-200 p-3">
                {macro}
              </div>
            ))}
            <Button variant="outline">Build New Macro</Button>
          </CardContent>
        </Card>

        <Card className="shadow-xl border-slate-200">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Timer className="w-5 h-5 text-amber-500" />
              Micro Layers
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3 text-sm">
            {[
              { label: "Latency p95", value: "84ms" },
              { label: "Auto-heal", value: "enabled" },
              { label: "A2A sync", value: "live" },
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
            <Cpu className="w-5 h-5 text-indigo-600" />
            Bazaar Codex Directive
          </CardTitle>
        </CardHeader>
        <CardContent className="text-sm text-slate-600">
          “Macro commands steer the market, micro layers protect the flow.”
        </CardContent>
      </Card>
    </div>
  );
}
