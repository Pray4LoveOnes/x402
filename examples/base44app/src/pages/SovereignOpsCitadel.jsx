import React from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Castle, Shield, Swords } from "lucide-react";

const defenseLayers = [
  { name: "Citadel Gate", strength: 94, state: "armed" },
  { name: "Chain Firewall", strength: 90, state: "armed" },
  { name: "A2A Sentinel", strength: 96, state: "armed" },
];

const directives = [
  "Directive: guard → scan → purge",
  "Directive: isolate → attest → heal",
  "Directive: shadow → shield → route",
];

export default function SovereignOpsCitadel() {
  return (
    <div className="p-6 md:p-10 space-y-6">
      <header className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="text-3xl font-bold text-slate-900">Sovereign Ops Citadel</h1>
          <p className="text-slate-500">
            Security fortress for the fastest, safest multi-chain operations.
          </p>
        </div>
        <Button className="bg-slate-900 text-white hover:bg-slate-800">
          Arm All Layers
        </Button>
      </header>

      <section className="grid gap-4 md:grid-cols-3">
        {defenseLayers.map((layer) => (
          <Card key={layer.name} className="shadow-xl border-slate-200">
            <CardHeader>
              <CardTitle className="flex items-center justify-between text-base">
                <span>{layer.name}</span>
                <Badge className="bg-emerald-100 text-emerald-700">{layer.state}</Badge>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <Progress value={layer.strength} className="h-2" />
              <p className="text-sm text-slate-500 mt-2">Strength {layer.strength}%</p>
            </CardContent>
          </Card>
        ))}
      </section>

      <section className="grid gap-4 lg:grid-cols-[2fr_1fr]">
        <Card className="shadow-xl border-slate-200">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Shield className="w-5 h-5 text-indigo-600" />
              Citadel Directives
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3 text-sm text-slate-600">
            {directives.map((directive) => (
              <div key={directive} className="rounded-lg border border-slate-200 p-3">
                {directive}
              </div>
            ))}
            <Button variant="outline">Deploy Directive</Button>
          </CardContent>
        </Card>

        <Card className="shadow-xl border-slate-200">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Swords className="w-5 h-5 text-amber-500" />
              Threat Summary
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3 text-sm">
            {[
              { label: "Threats neutralized", value: "118" },
              { label: "Live shields", value: "12" },
              { label: "Auto lockouts", value: "8" },
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
            <Castle className="w-5 h-5 text-emerald-600" />
            Bazaar Codex Oath
          </CardTitle>
        </CardHeader>
        <CardContent className="text-sm text-slate-600">
          “Citadel stands: speed without surrender, security without delay.”
        </CardContent>
      </Card>
    </div>
  );
}
