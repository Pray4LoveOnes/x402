import React from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Activity, Network, Shield, Users } from "lucide-react";

const trustNodes = [
  {
    name: "Vault Prime",
    trust: 92,
    signal: "audited",
    note: "SOC2 + formal verification",
  },
  {
    name: "CrossChain Relay",
    trust: 78,
    signal: "stable",
    note: "No incidents in 12 months",
  },
  {
    name: "Liquidity Guild",
    trust: 64,
    signal: "monitor",
    note: "Recent governance proposal pending",
  },
];

const trustEvents = [
  {
    title: "Audit completed",
    description: "Vault Prime renewed formal verification.",
  },
  {
    title: "Bridge latency spike",
    description: "CrossChain Relay saw a 12% latency increase.",
  },
  {
    title: "New partner onboarded",
    description: "Liquidity Guild added 2 LP pools.",
  },
];

export default function TrustGraph() {
  return (
    <div className="p-6 md:p-10 space-y-6">
      <header className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="text-3xl font-bold text-slate-900">Protocol Trust Graph</h1>
          <p className="text-slate-500">
            Reputation intelligence across counterparties, chains, and attestations.
          </p>
        </div>
        <Button variant="outline">Export Trust Report</Button>
      </header>

      <section className="grid gap-4 lg:grid-cols-[2fr_1fr]">
        <Card className="shadow-xl border-slate-200">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Network className="w-5 h-5 text-indigo-600" />
              Trust Clusters
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {trustNodes.map((node) => (
              <div key={node.name} className="rounded-xl border border-slate-200 p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-semibold text-slate-900">{node.name}</p>
                    <p className="text-xs text-slate-500 mt-1">{node.note}</p>
                  </div>
                  <Badge
                    variant="secondary"
                    className={
                      node.signal === "audited"
                        ? "bg-emerald-100 text-emerald-700"
                        : node.signal === "monitor"
                        ? "bg-amber-100 text-amber-700"
                        : "bg-indigo-100 text-indigo-700"
                    }
                  >
                    {node.signal}
                  </Badge>
                </div>
                <div className="flex items-center gap-3 mt-3">
                  <Progress value={node.trust} className="h-2" />
                  <span className="text-sm font-medium">{node.trust}%</span>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        <Card className="shadow-xl border-slate-200">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Shield className="w-5 h-5 text-emerald-600" />
              Attestation Summary
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3 text-sm text-slate-600">
            <div className="flex items-center justify-between">
              <span>Active attestations</span>
              <span className="font-semibold text-slate-900">27</span>
            </div>
            <div className="flex items-center justify-between">
              <span>Pending renewals</span>
              <span className="font-semibold text-slate-900">4</span>
            </div>
            <div className="flex items-center justify-between">
              <span>Incident-free days</span>
              <span className="font-semibold text-slate-900">186</span>
            </div>
            <Button className="w-full mt-4">Launch Attestation Review</Button>
          </CardContent>
        </Card>
      </section>

      <Card className="shadow-xl border-slate-200">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Activity className="w-5 h-5 text-amber-500" />
            Trust Signal Events
          </CardTitle>
        </CardHeader>
        <CardContent className="grid gap-4 md:grid-cols-3">
          {trustEvents.map((event) => (
            <div key={event.title} className="rounded-xl border border-slate-200 p-4">
              <p className="font-semibold text-slate-900">{event.title}</p>
              <p className="text-sm text-slate-500 mt-2">{event.description}</p>
            </div>
          ))}
        </CardContent>
      </Card>

      <Card className="shadow-xl border-slate-200">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Users className="w-5 h-5 text-indigo-600" />
            Governance Influence Map
          </CardTitle>
        </CardHeader>
        <CardContent className="grid gap-4 md:grid-cols-3">
          {[
            { label: "Top validators", value: "14", note: "92% aligned" },
            { label: "Governance proposals", value: "6", note: "2 critical" },
            { label: "Community sentiment", value: "Bullish", note: "+12% week" },
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
