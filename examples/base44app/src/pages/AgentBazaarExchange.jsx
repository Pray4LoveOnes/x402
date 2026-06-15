import React from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Bot, Coins, MessageCircleCode } from "lucide-react";

const agents = [
  { name: "Liquidity Scout", price: "$420 / cycle", score: 96 },
  { name: "Compliance Herald", price: "$260 / cycle", score: 92 },
  { name: "Warp Courier", price: "$390 / cycle", score: 94 },
];

const listings = [
  "Bazaar Codex listing: a2a.swap → verify → route",
  "Escrowed agent upgrades",
  "Composable skill shards",
];

export default function AgentBazaarExchange() {
  return (
    <div className="p-6 md:p-10 space-y-6">
      <header className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="text-3xl font-bold text-slate-900">Agent Bazaar Exchange</h1>
          <p className="text-slate-500">
            Swap, lease, and merge agents in a Codex-native marketplace.
          </p>
        </div>
        <Button className="bg-indigo-600 text-white hover:bg-indigo-500">
          List New Agent
        </Button>
      </header>

      <section className="grid gap-4 md:grid-cols-3">
        {agents.map((agent) => (
          <Card key={agent.name} className="shadow-xl border-slate-200">
            <CardHeader>
              <CardTitle className="flex items-center justify-between text-base">
                <span>{agent.name}</span>
                <Badge variant="secondary">{agent.price}</Badge>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <Progress value={agent.score} className="h-2" />
              <p className="text-sm text-slate-500 mt-2">Score {agent.score}%</p>
            </CardContent>
          </Card>
        ))}
      </section>

      <section className="grid gap-4 lg:grid-cols-[2fr_1fr]">
        <Card className="shadow-xl border-slate-200">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <MessageCircleCode className="w-5 h-5 text-indigo-600" />
              Bazaar Listings
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3 text-sm text-slate-600">
            {listings.map((listing) => (
              <div key={listing} className="rounded-lg border border-slate-200 p-3">
                {listing}
              </div>
            ))}
            <Button variant="outline">Export Listings</Button>
          </CardContent>
        </Card>

        <Card className="shadow-xl border-slate-200">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Coins className="w-5 h-5 text-emerald-600" />
              Bazaar Stats
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3 text-sm">
            {[
              { label: "Active leases", value: "128" },
              { label: "Agent merges", value: "36" },
              { label: "A2A trades", value: "908" },
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
            <Bot className="w-5 h-5 text-amber-500" />
            Bazaar Codex Offer
          </CardTitle>
        </CardHeader>
        <CardContent className="text-sm text-slate-600">
          “In the Bazaar, agents trade in clarity and speed.”
        </CardContent>
      </Card>
    </div>
  );
}
