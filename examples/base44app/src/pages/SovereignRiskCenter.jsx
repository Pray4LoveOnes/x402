import React from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import {
  AlertTriangle,
  ShieldCheck,
  TrendingDown,
  TrendingUp,
} from "lucide-react";

const riskSignals = [
  {
    label: "Liquidity stress",
    score: 78,
    trend: "up",
    summary: "ETH corridor shows increased slippage.",
  },
  {
    label: "Counterparty risk",
    score: 32,
    trend: "down",
    summary: "3 counterparties flagged in last 24h.",
  },
  {
    label: "Protocol uptime",
    score: 94,
    trend: "up",
    summary: "No incidents across 5 chains.",
  },
];

const mitigationPlaybooks = [
  {
    title: "Auto-rebalance vaults",
    owner: "Risk Ops",
    eta: "15 min",
  },
  {
    title: "Freeze high-risk corridors",
    owner: "Compliance",
    eta: "5 min",
  },
  {
    title: "Increase liquidity buffers",
    owner: "Treasury",
    eta: "30 min",
  },
];

export default function SovereignRiskCenter() {
  return (
    <div className="p-6 md:p-10 space-y-6">
      <header className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="text-3xl font-bold text-slate-900">Sovereign Risk Center</h1>
          <p className="text-slate-500">
            Unified view of multi-chain exposure, stress signals, and mitigation playbooks.
          </p>
        </div>
        <Button className="bg-slate-900 text-white hover:bg-slate-800">
          Launch Crisis Protocol
        </Button>
      </header>

      <section className="grid gap-4 md:grid-cols-3">
        {riskSignals.map((signal) => (
          <Card key={signal.label} className="shadow-xl border-slate-200">
            <CardHeader>
              <CardTitle className="flex items-center justify-between text-base">
                <span>{signal.label}</span>
                {signal.trend === "up" ? (
                  <TrendingUp className="w-4 h-4 text-emerald-600" />
                ) : (
                  <TrendingDown className="w-4 h-4 text-rose-500" />
                )}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between">
                <span className="text-2xl font-semibold text-slate-900">
                  {signal.score}
                </span>
                <Badge variant={signal.score > 70 ? "default" : "secondary"}>
                  {signal.score > 70 ? "High" : "Stable"}
                </Badge>
              </div>
              <Progress value={signal.score} className="mt-3" />
              <p className="text-sm text-slate-500 mt-3">{signal.summary}</p>
            </CardContent>
          </Card>
        ))}
      </section>

      <section className="grid gap-4 lg:grid-cols-[2fr_1fr]">
        <Card className="shadow-xl border-slate-200">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <AlertTriangle className="w-5 h-5 text-amber-500" />
              Critical Exposure Map
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid gap-3 md:grid-cols-2">
              {[
                { label: "Stablecoin corridor", value: "$42.8M", status: "monitor" },
                { label: "Cross-chain bridge", value: "$18.2M", status: "watch" },
                { label: "OTC settlement", value: "$9.1M", status: "alert" },
                { label: "Vault liquidity", value: "$63.4M", status: "healthy" },
              ].map((item) => (
                <div
                  key={item.label}
                  className="rounded-xl border border-slate-200 p-4"
                >
                  <div className="flex items-center justify-between">
                    <p className="text-sm text-slate-500">{item.label}</p>
                    <Badge
                      variant="secondary"
                      className={
                        item.status === "alert"
                          ? "bg-rose-100 text-rose-700"
                          : item.status === "watch"
                          ? "bg-amber-100 text-amber-700"
                          : item.status === "monitor"
                          ? "bg-indigo-100 text-indigo-700"
                          : "bg-emerald-100 text-emerald-700"
                      }
                    >
                      {item.status}
                    </Badge>
                  </div>
                  <p className="text-xl font-semibold mt-2 text-slate-900">
                    {item.value}
                  </p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card className="shadow-xl border-slate-200">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-emerald-600" />
              Active Mitigations
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            {mitigationPlaybooks.map((play) => (
              <div
                key={play.title}
                className="rounded-lg border border-slate-200 p-3"
              >
                <p className="font-medium text-slate-900">{play.title}</p>
                <p className="text-xs text-slate-500 mt-1">
                  Owner: {play.owner} · ETA {play.eta}
                </p>
              </div>
            ))}
          </CardContent>
        </Card>
      </section>
    </div>
  );
}
