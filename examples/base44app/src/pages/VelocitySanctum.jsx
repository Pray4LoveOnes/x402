import React from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Gauge, ShieldCheck, Timer } from "lucide-react";

const accelerators = [
  { name: "Hyperlane Boost", output: 94, status: "on" },
  { name: "Fastlane Cache", output: 90, status: "on" },
  { name: "Quantum Relay", output: 86, status: "sync" },
];

const layers = [
  "Macro: velocity → verify → seal",
  "Micro: prefetch → parallelize → commit",
  "A2A: sync → sign → deliver",
];

export default function VelocitySanctum() {
  return (
    <div className="p-6 md:p-10 space-y-6">
      <header className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="text-3xl font-bold text-slate-900">Velocity Sanctum</h1>
          <p className="text-slate-500">
            The core of speed: macro and micro layers fused for elite throughput.
          </p>
        </div>
        <Button className="bg-indigo-600 text-white hover:bg-indigo-500">
          Enable Overdrive
        </Button>
      </header>

      <section className="grid gap-4 md:grid-cols-3">
        {accelerators.map((accelerator) => (
          <Card key={accelerator.name} className="shadow-xl border-slate-200">
            <CardHeader>
              <CardTitle className="flex items-center justify-between text-base">
                <span>{accelerator.name}</span>
                <Badge variant="secondary">{accelerator.status}</Badge>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <Progress value={accelerator.output} className="h-2" />
              <p className="text-sm text-slate-500 mt-2">Output {accelerator.output}%</p>
            </CardContent>
          </Card>
        ))}
      </section>

      <section className="grid gap-4 lg:grid-cols-[2fr_1fr]">
        <Card className="shadow-xl border-slate-200">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Gauge className="w-5 h-5 text-indigo-600" />
              Velocity Layers
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3 text-sm text-slate-600">
            {layers.map((layer) => (
              <div key={layer} className="rounded-lg border border-slate-200 p-3">
                {layer}
              </div>
            ))}
            <Button variant="outline">Calibrate Velocity</Button>
          </CardContent>
        </Card>

        <Card className="shadow-xl border-slate-200">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-emerald-600" />
              Integrity Checks
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3 text-sm">
            {[
              { label: "Throughput", value: "19.1k ops/min" },
              { label: "Latency p95", value: "68ms" },
              { label: "A2A certainty", value: "99%" },
            ].map((item) => (
              <div key={item.label} className="flex items-center justify-between">
                <span className="text-slate-500">{item.label}</span>
                <span className="font-semibold text-slate-900">{item.value}</span>
              </div>
            ))}
            <Button className="w-full mt-4" variant="outline">
              Export Velocity Report
            </Button>
          </CardContent>
        </Card>
      </section>

      <Card className="shadow-xl border-slate-200">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Timer className="w-5 h-5 text-amber-500" />
            Bazaar Codex Pulse
          </CardTitle>
        </CardHeader>
        <CardContent className="text-sm text-slate-600">
          “Velocity sanctum: the faster we move, the safer we stay.”
        </CardContent>
      </Card>
    </div>
  );
}
