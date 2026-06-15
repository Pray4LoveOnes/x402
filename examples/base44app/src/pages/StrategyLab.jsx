import React from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Brain, PlayCircle, Sparkles, Wand2 } from "lucide-react";
import DevTerminal from "@/components/DevTerminal";

const strategies = [
  {
    name: "Adaptive Yield Mesh",
    performance: 87,
    risk: "medium",
    summary: "Dynamic rebalance across 4 liquidity corridors.",
  },
  {
    name: "Sovereign Settlement Shield",
    performance: 92,
    risk: "low",
    summary: "Priority settlement with compliance guardrails.",
  },
  {
    name: "Flash Hedge Relay",
    performance: 76,
    risk: "high",
    summary: "Volatility hedging with rapid route switching.",
  },
];

const labActions = [
  "Generate counterfactual routes",
  "Stress test under 20% volatility",
  "Add policy constraints",
  "Draft deploy plan",
];

export default function StrategyLab() {
  return (
    <div className="p-6 md:p-10 space-y-6">
      <header className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="text-3xl font-bold text-slate-900">AI Strategy Lab</h1>
          <p className="text-slate-500">
            Build, simulate, and ship autonomous settlement strategies.
          </p>
        </div>
        <Button className="bg-indigo-600 text-white hover:bg-indigo-500">
          <Sparkles className="w-4 h-4 mr-2" />
          Create Strategy
        </Button>
      </header>

      <section className="grid gap-4 lg:grid-cols-[2fr_1fr]">
        <Card className="shadow-xl border-slate-200">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Brain className="w-5 h-5 text-indigo-600" />
              Strategy Sandbox
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {strategies.map((strategy) => (
              <div key={strategy.name} className="rounded-xl border border-slate-200 p-4">
                <div className="flex items-start justify-between">
                  <div>
                    <p className="font-semibold text-slate-900">{strategy.name}</p>
                    <p className="text-sm text-slate-500 mt-1">{strategy.summary}</p>
                  </div>
                  <Badge
                    variant="secondary"
                    className={
                      strategy.risk === "low"
                        ? "bg-emerald-100 text-emerald-700"
                        : strategy.risk === "medium"
                        ? "bg-amber-100 text-amber-700"
                        : "bg-rose-100 text-rose-700"
                    }
                  >
                    {strategy.risk} risk
                  </Badge>
                </div>
                <div className="flex items-center gap-3 mt-3">
                  <Progress value={strategy.performance} className="h-2" />
                  <span className="text-sm font-medium">
                    {strategy.performance}% success
                  </span>
                </div>
                <div className="flex gap-2 mt-4">
                  <Button size="sm" variant="outline">
                    Simulate
                  </Button>
                  <Button size="sm">
                    Deploy
                    <PlayCircle className="w-4 h-4 ml-2" />
                  </Button>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        <Card className="shadow-xl border-slate-200">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Wand2 className="w-5 h-5 text-amber-500" />
              Lab Actions
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            {labActions.map((action) => (
              <div
                key={action}
                className="rounded-lg border border-slate-200 p-3 text-sm text-slate-600"
              >
                {action}
              </div>
            ))}
            <Button variant="outline" className="w-full mt-4">
              Export Strategy Bundle
            </Button>
          </CardContent>
        </Card>
      </section>

      <DevTerminal />
    </div>
  );
}
