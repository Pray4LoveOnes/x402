import React from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { ArrowLeftRight, Layers3, ShieldCheck } from "lucide-react";

const routes = [
  {
    name: "Nexus Prime",
    share: 48,
    status: "green",
    note: "Cross-chain safe lane",
  },
  {
    name: "Bazaar Bridge",
    share: 32,
    status: "amber",
    note: "High demand, stable fees",
  },
  {
    name: "Stealth Relay",
    share: 20,
    status: "green",
    note: "Low-latency private",
  },
];

const safeguards = [
  "Instant circuit breakers",
  "A2A fraud consensus",
  "Route attestations + rollbacks",
];

export default function NexusExchange() {
  return (
    <div className="p-6 md:p-10 space-y-6">
      <header className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="text-3xl font-bold text-slate-900">Nexus Exchange</h1>
          <p className="text-slate-500">
            Multi-chain exchange fabric with Bazaar Codex attested routing.
          </p>
        </div>
        <Button className="bg-indigo-600 text-white hover:bg-indigo-500">
          Create Exchange Route
        </Button>
      </header>

      <section className="grid gap-4 md:grid-cols-3">
        {routes.map((route) => (
          <Card key={route.name} className="shadow-xl border-slate-200">
            <CardHeader>
              <CardTitle className="flex items-center justify-between text-base">
                <span>{route.name}</span>
                <Badge
                  variant="secondary"
                  className={
                    route.status === "green"
                      ? "bg-emerald-100 text-emerald-700"
                      : "bg-amber-100 text-amber-700"
                  }
                >
                  {route.status}
                </Badge>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <Progress value={route.share} className="h-2" />
              <p className="text-sm text-slate-500 mt-2">Volume share {route.share}%</p>
              <p className="text-xs text-slate-500 mt-2">{route.note}</p>
            </CardContent>
          </Card>
        ))}
      </section>

      <section className="grid gap-4 lg:grid-cols-[2fr_1fr]">
        <Card className="shadow-xl border-slate-200">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Layers3 className="w-5 h-5 text-indigo-600" />
              Exchange Layers
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3 text-sm text-slate-600">
            {[
              "Layer 1: price discovery",
              "Layer 2: liquidity aggregation",
              "Layer 3: settlement attest",
            ].map((layer) => (
              <div key={layer} className="rounded-lg border border-slate-200 p-3">
                {layer}
              </div>
            ))}
            <Button variant="outline">Export Layer Map</Button>
          </CardContent>
        </Card>

        <Card className="shadow-xl border-slate-200">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-emerald-600" />
              Safeguards
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3 text-sm">
            {safeguards.map((safeguard) => (
              <div key={safeguard} className="rounded-lg border border-slate-200 p-3">
                {safeguard}
              </div>
            ))}
          </CardContent>
        </Card>
      </section>

      <Card className="shadow-xl border-slate-200">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <ArrowLeftRight className="w-5 h-5 text-amber-500" />
            Bazaar Codex Signal
          </CardTitle>
        </CardHeader>
        <CardContent className="text-sm text-slate-600">
          “Exchange is a nexus: every trade is a sealed path.”
        </CardContent>
      </Card>
    </div>
  );
}
