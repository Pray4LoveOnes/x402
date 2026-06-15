import React from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { ArrowUpRight, Layers, Route, Zap } from "lucide-react";

const routes = [
  {
    name: "Prime Liquid Path",
    cost: "-14.2%",
    latency: "112ms",
    success: 98,
    mev: "low",
  },
  {
    name: "Hybrid Bridge Mesh",
    cost: "-9.4%",
    latency: "164ms",
    success: 96,
    mev: "medium",
  },
  {
    name: "Stealth OTC Relay",
    cost: "-4.1%",
    latency: "209ms",
    success: 93,
    mev: "minimal",
  },
];

const settleSteps = [
  "Collect liquidity from 3 pools",
  "Simulate slippage under stress",
  "Split settlements across 2 bridges",
  "Route final leg via fast lane",
];

export default function LiquidityOptimizer() {
  return (
    <div className="p-6 md:p-10 space-y-6">
      <header className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="text-3xl font-bold text-slate-900">Liquidity Routing Optimizer</h1>
          <p className="text-slate-500">
            AI-ranked routes with settlement confidence and MEV protection.
          </p>
        </div>
        <Button className="bg-indigo-600 text-white hover:bg-indigo-500">
          Generate New Plan
        </Button>
      </header>

      <section className="grid gap-4 lg:grid-cols-[2fr_1fr]">
        <Card className="shadow-xl border-slate-200">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Route className="w-5 h-5 text-indigo-600" />
              Best Routes Today
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {routes.map((route) => (
              <div
                key={route.name}
                className="rounded-xl border border-slate-200 p-4"
              >
                <div className="flex items-start justify-between">
                  <div>
                    <p className="font-semibold text-slate-900">{route.name}</p>
                    <p className="text-xs text-slate-500 mt-1">
                      Estimated latency {route.latency}
                    </p>
                  </div>
                  <Badge
                    variant="secondary"
                    className={
                      route.mev === "low"
                        ? "bg-emerald-100 text-emerald-700"
                        : route.mev === "medium"
                        ? "bg-amber-100 text-amber-700"
                        : "bg-indigo-100 text-indigo-700"
                    }
                  >
                    MEV {route.mev}
                  </Badge>
                </div>
                <div className="grid gap-4 mt-4 md:grid-cols-3">
                  <div>
                    <p className="text-xs text-slate-500">Cost delta</p>
                    <p className="text-lg font-semibold text-emerald-600">
                      {route.cost}
                    </p>
                  </div>
                  <div>
                    <p className="text-xs text-slate-500">Success probability</p>
                    <div className="flex items-center gap-2">
                      <Progress value={route.success} className="h-2" />
                      <span className="text-sm font-medium">{route.success}%</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Button size="sm" variant="outline">
                      Compare
                    </Button>
                    <Button size="sm">Select</Button>
                  </div>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        <Card className="shadow-xl border-slate-200">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Layers className="w-5 h-5 text-slate-600" />
              Settlement Blueprint
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            {settleSteps.map((step, index) => (
              <div key={step} className="flex items-start gap-3">
                <div className="w-7 h-7 rounded-full bg-indigo-100 text-indigo-700 flex items-center justify-center text-xs font-semibold">
                  {index + 1}
                </div>
                <p className="text-sm text-slate-600">{step}</p>
              </div>
            ))}
            <Button className="w-full mt-4" variant="outline">
              Export Plan
              <ArrowUpRight className="w-4 h-4 ml-2" />
            </Button>
          </CardContent>
        </Card>
      </section>

      <Card className="shadow-xl border-slate-200">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Zap className="w-5 h-5 text-amber-500" />
            Live Optimization Queue
          </CardTitle>
        </CardHeader>
        <CardContent className="grid gap-4 md:grid-cols-3">
          {[
            { label: "Active corridors", value: "18", note: "3 under watch" },
            { label: "Liquidity buffer", value: "$84.2M", note: "7.2% cushion" },
            { label: "Auto-splits", value: "14", note: "enabled" },
          ].map((item) => (
            <div key={item.label} className="rounded-xl border border-slate-200 p-4">
              <p className="text-xs text-slate-500">{item.label}</p>
              <p className="text-2xl font-semibold text-slate-900 mt-1">
                {item.value}
              </p>
              <p className="text-xs text-slate-500 mt-2">{item.note}</p>
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  );
}
