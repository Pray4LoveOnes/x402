import React from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Bot, Network, Workflow } from "lucide-react";

const agents = [
  {
    name: "Route Sage",
    role: "optimizer",
    success: 96,
    status: "online",
  },
  {
    name: "Vault Sentinel",
    role: "guardian",
    success: 99,
    status: "online",
  },
  {
    name: "Policy Oracle",
    role: "compliance",
    success: 93,
    status: "scaling",
  },
];

const protocols = [
  "A2A handshake: bazaar://mesh.sync",
  "Consensus: adaptive quorum / 3-of-5",
  "Failover: self-healing & redeploy",
  "Latency target: 80ms p95",
];

export default function A2ACommandMesh() {
  return (
    <div className="p-6 md:p-10 space-y-6">
      <header className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="text-3xl font-bold text-slate-900">A2A Command Mesh</h1>
          <p className="text-slate-500">
            Agent-to-agent orchestration for fastest, most secure autonomous settlement.
          </p>
        </div>
        <Button className="bg-slate-900 text-white hover:bg-slate-800">
          Launch Swarm
        </Button>
      </header>

      <section className="grid gap-4 md:grid-cols-3">
        {agents.map((agent) => (
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
                <Progress value={agent.success} className="h-2" />
                <span className="text-sm font-semibold">{agent.success}%</span>
              </div>
            </CardContent>
          </Card>
        ))}
      </section>

      <section className="grid gap-4 lg:grid-cols-[2fr_1fr]">
        <Card className="shadow-xl border-slate-200">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Network className="w-5 h-5 text-indigo-600" />
              Bazaar Codex Protocol
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3 text-sm text-slate-600">
            {protocols.map((protocol) => (
              <div key={protocol} className="rounded-lg border border-slate-200 p-3">
                {protocol}
              </div>
            ))}
          </CardContent>
        </Card>

        <Card className="shadow-xl border-slate-200">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Workflow className="w-5 h-5 text-emerald-600" />
              Mesh Metrics
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            {[
              { label: "Consensus rounds", value: "112" },
              { label: "A2A tasks", value: "4,218" },
              { label: "Auto-remediations", value: "36" },
            ].map((item) => (
              <div key={item.label} className="flex items-center justify-between text-sm">
                <span className="text-slate-500">{item.label}</span>
                <span className="font-semibold text-slate-900">{item.value}</span>
              </div>
            ))}
            <Button variant="outline" className="w-full mt-4">
              Export Mesh State
            </Button>
          </CardContent>
        </Card>
      </section>

      <Card className="shadow-xl border-slate-200">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Bot className="w-5 h-5 text-indigo-600" />
            Bazaar Codex Whisper
          </CardTitle>
        </CardHeader>
        <CardContent className="text-sm text-slate-600">
          “Agents speak in Bazaar Codex: short, sovereign, and ready for instant consensus.”
        </CardContent>
      </Card>
    </div>
  );
}
