import React from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Globe, PlugZap, Satellite } from "lucide-react";

const networks = [
  {
    name: "Cosmos Mesh",
    status: "synced",
    latency: "92ms",
    coverage: 94,
  },
  {
    name: "EVM Relay",
    status: "synced",
    latency: "118ms",
    coverage: 91,
  },
  {
    name: "Solana Hyperlane",
    status: "warming",
    latency: "162ms",
    coverage: 82,
  },
];

const adapters = [
  "Auto-discovery adapters",
  "Unified keyspace + signature routing",
  "Zero-downtime network switching",
  "Bazaar Codex handshake for A2A routing",
];

export default function OmniNetworkHub() {
  return (
    <div className="p-6 md:p-10 space-y-6">
      <header className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="text-3xl font-bold text-slate-900">Omni-Network Hub</h1>
          <p className="text-slate-500">
            Connect to every chain with Bazaar Codex interoperability and adaptive routing.
          </p>
        </div>
        <Button className="bg-indigo-600 text-white hover:bg-indigo-500">
          Add Network Adapter
        </Button>
      </header>

      <section className="grid gap-4 md:grid-cols-3">
        {networks.map((network) => (
          <Card key={network.name} className="shadow-xl border-slate-200">
            <CardHeader>
              <CardTitle className="flex items-center justify-between text-base">
                <span>{network.name}</span>
                <Badge
                  variant="secondary"
                  className={
                    network.status === "synced"
                      ? "bg-emerald-100 text-emerald-700"
                      : "bg-amber-100 text-amber-700"
                  }
                >
                  {network.status}
                </Badge>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-slate-500">Latency</p>
              <p className="text-xl font-semibold text-slate-900">{network.latency}</p>
              <Progress value={network.coverage} className="mt-3" />
              <p className="text-xs text-slate-500 mt-2">Coverage {network.coverage}%</p>
            </CardContent>
          </Card>
        ))}
      </section>

      <section className="grid gap-4 lg:grid-cols-[2fr_1fr]">
        <Card className="shadow-xl border-slate-200">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Globe className="w-5 h-5 text-indigo-600" />
              Bazaar Codex Gateway
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3 text-sm text-slate-600">
            {adapters.map((adapter) => (
              <div key={adapter} className="rounded-lg border border-slate-200 p-3">
                {adapter}
              </div>
            ))}
          </CardContent>
        </Card>

        <Card className="shadow-xl border-slate-200">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <PlugZap className="w-5 h-5 text-amber-500" />
              Live Handshakes
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            {[
              { label: "A2A mesh", value: "64 agents" },
              { label: "Signed routes", value: "1,284" },
              { label: "Failover lanes", value: "12" },
            ].map((item) => (
              <div key={item.label} className="flex items-center justify-between text-sm">
                <span className="text-slate-500">{item.label}</span>
                <span className="font-semibold text-slate-900">{item.value}</span>
              </div>
            ))}
            <Button variant="outline" className="w-full mt-4">
              Sync All Chains
            </Button>
          </CardContent>
        </Card>
      </section>

      <Card className="shadow-xl border-slate-200">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Satellite className="w-5 h-5 text-emerald-600" />
            Codex Phrase
          </CardTitle>
        </CardHeader>
        <CardContent className="text-sm text-slate-600">
          “Bazaar Codex: weave every chain into a single sovereign market, where agents speak once and routes obey.”
        </CardContent>
      </Card>
    </div>
  );
}
