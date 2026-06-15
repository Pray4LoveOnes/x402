import React from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Bot, Sparkles, Users } from "lucide-react";

const swarmAgents = [
  {
    name: "Atlas Broker",
    role: "router",
    status: "online",
    trust: 95,
  },
  {
    name: "Vault Gardener",
    role: "guardian",
    status: "online",
    trust: 98,
  },
  {
    name: "Echo Monitor",
    role: "telemetry",
    status: "training",
    trust: 86,
  },
];

const rituals = [
  "A2A sync: align → share → settle",
  "Swarm memory: fastlane cache",
  "Codex speech: concise + attested",
];

export default function SwarmStudio() {
  return (
    <div className="p-6 md:p-10 space-y-6">
      <header className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="text-3xl font-bold text-slate-900">Swarm Studio</h1>
          <p className="text-slate-500">
            Compose AI agent swarms with Bazaar Codex protocols and A2A memory.
          </p>
        </div>
        <Button className="bg-indigo-600 text-white hover:bg-indigo-500">
          Deploy New Swarm
        </Button>
      </header>

      <section className="grid gap-4 md:grid-cols-3">
        {swarmAgents.map((agent) => (
          <Card key={agent.name} className="shadow-xl border-slate-200">
            <CardHeader>
              <CardTitle className="flex items-center justify-between text-base">
                <span>{agent.name}</span>
                <Badge
                  variant="secondary"
                  className={
                    agent.status === "online"
                      ? "bg-emerald-100 text-emerald-700"
                      : "bg-amber-100 text-amber-700"
                  }
                >
                  {agent.status}
                </Badge>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-xs text-slate-500 uppercase tracking-wide">{agent.role}</p>
              <div className="flex items-center gap-2 mt-3">
                <Progress value={agent.trust} className="h-2" />
                <span className="text-sm font-semibold">{agent.trust}% trust</span>
              </div>
            </CardContent>
          </Card>
        ))}
      </section>

      <section className="grid gap-4 lg:grid-cols-[2fr_1fr]">
        <Card className="shadow-xl border-slate-200">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Bot className="w-5 h-5 text-indigo-600" />
              Swarm Rituals
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3 text-sm text-slate-600">
            {rituals.map((ritual) => (
              <div key={ritual} className="rounded-lg border border-slate-200 p-3">
                {ritual}
              </div>
            ))}
            <Button variant="outline">Sync Rituals</Button>
          </CardContent>
        </Card>

        <Card className="shadow-xl border-slate-200">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Users className="w-5 h-5 text-emerald-600" />
              Swarm Stats
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3 text-sm">
            {[
              { label: "Active swarms", value: "9" },
              { label: "A2A tasks", value: "2,410" },
              { label: "Consensus rate", value: "98%" },
            ].map((item) => (
              <div key={item.label} className="flex items-center justify-between">
                <span className="text-slate-500">{item.label}</span>
                <span className="font-semibold text-slate-900">{item.value}</span>
              </div>
            ))}
            <Button className="w-full mt-4" variant="outline">
              Export Swarm State
            </Button>
          </CardContent>
        </Card>
      </section>

      <Card className="shadow-xl border-slate-200">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-amber-500" />
            Bazaar Codex Signal
          </CardTitle>
        </CardHeader>
        <CardContent className="text-sm text-slate-600">
          “Swarm speaks in Bazaar Codex: shorter words, faster consensus.”
        </CardContent>
      </Card>
    </div>
  );
}
