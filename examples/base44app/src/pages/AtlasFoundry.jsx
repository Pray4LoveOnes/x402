import React from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Factory, Hammer, Layers } from "lucide-react";

const modules = [
  { name: "Route Compiler", state: "ready", score: 95 },
  { name: "A2A Orchestrator", state: "assembling", score: 88 },
  { name: "Policy Shaper", state: "ready", score: 92 },
];

const recipes = [
  "Forge: compile → attest → ship",
  "Forge: map → simulate → seal",
  "Forge: shard → sync → finalize",
];

export default function AtlasFoundry() {
  return (
    <div className="p-6 md:p-10 space-y-6">
      <header className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="text-3xl font-bold text-slate-900">Atlas Foundry</h1>
          <p className="text-slate-500">
            Forge modular layers for the Bazaar Codex ecosystem.
          </p>
        </div>
        <Button className="bg-emerald-600 text-white hover:bg-emerald-500">
          Create Module
        </Button>
      </header>

      <section className="grid gap-4 md:grid-cols-3">
        {modules.map((module) => (
          <Card key={module.name} className="shadow-xl border-slate-200">
            <CardHeader>
              <CardTitle className="flex items-center justify-between text-base">
                <span>{module.name}</span>
                <Badge
                  variant="secondary"
                  className={
                    module.state === "ready"
                      ? "bg-emerald-100 text-emerald-700"
                      : "bg-amber-100 text-amber-700"
                  }
                >
                  {module.state}
                </Badge>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <Progress value={module.score} className="h-2" />
              <p className="text-sm text-slate-500 mt-2">Strength {module.score}%</p>
            </CardContent>
          </Card>
        ))}
      </section>

      <section className="grid gap-4 lg:grid-cols-[2fr_1fr]">
        <Card className="shadow-xl border-slate-200">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Factory className="w-5 h-5 text-indigo-600" />
              Forge Recipes
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3 text-sm text-slate-600">
            {recipes.map((recipe) => (
              <div key={recipe} className="rounded-lg border border-slate-200 p-3">
                {recipe}
              </div>
            ))}
            <Button variant="outline">Export Recipes</Button>
          </CardContent>
        </Card>

        <Card className="shadow-xl border-slate-200">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Layers className="w-5 h-5 text-emerald-600" />
              Layer Inventory
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3 text-sm">
            {[
              { label: "Macro layers", value: "14" },
              { label: "Micro layers", value: "42" },
              { label: "A2A agents", value: "64" },
            ].map((item) => (
              <div key={item.label} className="flex items-center justify-between">
                <span className="text-slate-500">{item.label}</span>
                <span className="font-semibold text-slate-900">{item.value}</span>
              </div>
            ))}
            <Button className="w-full mt-4" variant="outline">
              Sync Inventory
            </Button>
          </CardContent>
        </Card>
      </section>

      <Card className="shadow-xl border-slate-200">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Hammer className="w-5 h-5 text-amber-500" />
            Codex Forge Note
          </CardTitle>
        </CardHeader>
        <CardContent className="text-sm text-slate-600">
          “In the Bazaar Codex, every module is a weapon for speed and trust.”
        </CardContent>
      </Card>
    </div>
  );
}
