import React from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Activity, Radar, Signal } from "lucide-react";

const signals = [
  { name: "Settlement throughput", value: 92, note: "14.2k ops/min" },
  { name: "A2A consensus", value: 96, note: "p95 78ms" },
  { name: "Route integrity", value: 89, note: "3 anomalies" },
];

const incidents = [
  {
    title: "Latency spike detected",
    detail: "Bridge Delta saw 12% spike; auto rerouted.",
  },
  {
    title: "Policy drift",
    detail: "Vault Sentinel updated sanctions list.",
  },
  {
    title: "Telemetry sync",
    detail: "All chains aligned in Bazaar Codex cadence.",
  },
];

export default function MeshTelemetry() {
  return (
    <div className="p-6 md:p-10 space-y-6">
      <header className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="text-3xl font-bold text-slate-900">Mesh Telemetry</h1>
          <p className="text-slate-500">
            Observe every chain pulse with Bazaar Codex instrumentation.
          </p>
        </div>
        <Button variant="outline">Export Telemetry Pack</Button>
      </header>

      <section className="grid gap-4 md:grid-cols-3">
        {signals.map((signal) => (
          <Card key={signal.name} className="shadow-xl border-slate-200">
            <CardHeader>
              <CardTitle className="text-base">{signal.name}</CardTitle>
            </CardHeader>
            <CardContent>
              <Progress value={signal.value} className="h-2" />
              <div className="flex items-center justify-between mt-3">
                <span className="text-sm text-slate-500">{signal.note}</span>
                <Badge variant="secondary">{signal.value}%</Badge>
              </div>
            </CardContent>
          </Card>
        ))}
      </section>

      <section className="grid gap-4 lg:grid-cols-[2fr_1fr]">
        <Card className="shadow-xl border-slate-200">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Activity className="w-5 h-5 text-indigo-600" />
              Live Incident Feed
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3 text-sm text-slate-600">
            {incidents.map((incident) => (
              <div key={incident.title} className="rounded-lg border border-slate-200 p-3">
                <p className="font-medium text-slate-900">{incident.title}</p>
                <p className="text-xs text-slate-500 mt-1">{incident.detail}</p>
              </div>
            ))}
          </CardContent>
        </Card>

        <Card className="shadow-xl border-slate-200">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Radar className="w-5 h-5 text-emerald-600" />
              Signal Integrity
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3 text-sm">
            {[
              { label: "Sync drift", value: "0.4s" },
              { label: "Alert coverage", value: "98%" },
              { label: "Guardrail hits", value: "5" },
            ].map((item) => (
              <div key={item.label} className="flex items-center justify-between">
                <span className="text-slate-500">{item.label}</span>
                <span className="font-semibold text-slate-900">{item.value}</span>
              </div>
            ))}
            <Button className="w-full mt-4" variant="outline">
              Tune Sensors
            </Button>
          </CardContent>
        </Card>
      </section>

      <Card className="shadow-xl border-slate-200">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Signal className="w-5 h-5 text-amber-500" />
            Codex Pulse
          </CardTitle>
        </CardHeader>
        <CardContent className="text-sm text-slate-600">
          “Bazaar Codex pulse keeps every signal sovereign and aligned.”
        </CardContent>
      </Card>
    </div>
  );
}
