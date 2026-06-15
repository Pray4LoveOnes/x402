import React from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Gavel, ShieldCheck, SlidersHorizontal } from "lucide-react";

const policies = [
  {
    name: "Velocity Gate",
    status: "live",
    coverage: 92,
  },
  {
    name: "Bridge Integrity",
    status: "live",
    coverage: 88,
  },
  {
    name: "Bazaar Codex Rule",
    status: "draft",
    coverage: 64,
  },
];

const macros = [
  "macro: verify → lock → approve",
  "macro: detect → quarantine → attest",
  "macro: drift → review → seal",
];

export default function PolicyForge() {
  return (
    <div className="p-6 md:p-10 space-y-6">
      <header className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="text-3xl font-bold text-slate-900">Policy Forge</h1>
          <p className="text-slate-500">
            Build compliance macros with Bazaar Codex grammar and A2A enforcement.
          </p>
        </div>
        <Button className="bg-slate-900 text-white hover:bg-slate-800">
          Create Macro Policy
        </Button>
      </header>

      <section className="grid gap-4 md:grid-cols-3">
        {policies.map((policy) => (
          <Card key={policy.name} className="shadow-xl border-slate-200">
            <CardHeader>
              <CardTitle className="flex items-center justify-between text-base">
                <span>{policy.name}</span>
                <Badge
                  variant="secondary"
                  className={
                    policy.status === "live"
                      ? "bg-emerald-100 text-emerald-700"
                      : "bg-amber-100 text-amber-700"
                  }
                >
                  {policy.status}
                </Badge>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <Progress value={policy.coverage} className="h-2" />
              <p className="text-sm text-slate-500 mt-2">Coverage {policy.coverage}%</p>
            </CardContent>
          </Card>
        ))}
      </section>

      <section className="grid gap-4 lg:grid-cols-[2fr_1fr]">
        <Card className="shadow-xl border-slate-200">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <SlidersHorizontal className="w-5 h-5 text-indigo-600" />
              Policy Macros
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3 text-sm text-slate-600">
            {macros.map((macro) => (
              <div key={macro} className="rounded-lg border border-slate-200 p-3">
                {macro}
              </div>
            ))}
            <Button variant="outline">Run Macro Simulation</Button>
          </CardContent>
        </Card>

        <Card className="shadow-xl border-slate-200">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-emerald-600" />
              Policy Health
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3 text-sm">
            {[
              { label: "Violations blocked", value: "48" },
              { label: "Auto-remediations", value: "16" },
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
            <Gavel className="w-5 h-5 text-amber-500" />
            Bazaar Codex Clause
          </CardTitle>
        </CardHeader>
        <CardContent className="text-sm text-slate-600">
          “Policy is a forge: every clause becomes a guardian.”
        </CardContent>
      </Card>
    </div>
  );
}
