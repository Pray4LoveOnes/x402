import React from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { CheckCircle2, FileText, Lock, ShieldAlert } from "lucide-react";

const policies = [
  {
    name: "Sanctions Guard",
    status: "active",
    coverage: 98,
    description: "Auto-screen all counterparties and routing partners.",
  },
  {
    name: "Velocity Control",
    status: "active",
    coverage: 86,
    description: "Dynamic throttling on high-velocity payment flows.",
  },
  {
    name: "Region Gate",
    status: "draft",
    coverage: 62,
    description: "Geo-fencing for restricted jurisdictions.",
  },
];

const audits = [
  {
    title: "Policy audit 0821",
    result: "passed",
    owner: "Compliance",
  },
  {
    title: "Incident response drill",
    result: "passed",
    owner: "Security",
  },
  {
    title: "Sanction list update",
    result: "pending",
    owner: "Legal",
  },
];

export default function PolicyEngine() {
  return (
    <div className="p-6 md:p-10 space-y-6">
      <header className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="text-3xl font-bold text-slate-900">Compliance & Policy Engine</h1>
          <p className="text-slate-500">
            Guardrails, audit trails, and auto-remediation for sovereign payments.
          </p>
        </div>
        <Button className="bg-slate-900 text-white hover:bg-slate-800">
          Create Policy
        </Button>
      </header>

      <section className="grid gap-4 lg:grid-cols-[2fr_1fr]">
        <Card className="shadow-xl border-slate-200">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Lock className="w-5 h-5 text-indigo-600" />
              Active Policies
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {policies.map((policy) => (
              <div
                key={policy.name}
                className="rounded-xl border border-slate-200 p-4"
              >
                <div className="flex items-start justify-between">
                  <div>
                    <p className="font-semibold text-slate-900">{policy.name}</p>
                    <p className="text-sm text-slate-500 mt-1">{policy.description}</p>
                  </div>
                  <Badge
                    variant="secondary"
                    className={
                      policy.status === "active"
                        ? "bg-emerald-100 text-emerald-700"
                        : "bg-amber-100 text-amber-700"
                    }
                  >
                    {policy.status}
                  </Badge>
                </div>
                <div className="flex items-center gap-3 mt-3">
                  <Progress value={policy.coverage} className="h-2" />
                  <span className="text-sm font-medium">{policy.coverage}% coverage</span>
                </div>
                <div className="flex gap-2 mt-4">
                  <Button size="sm" variant="outline">
                    Review
                  </Button>
                  <Button size="sm">Edit</Button>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        <Card className="shadow-xl border-slate-200">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <ShieldAlert className="w-5 h-5 text-rose-500" />
              Auto-Remediation
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3 text-sm text-slate-600">
            <div className="flex items-center justify-between">
              <span>Live alerts</span>
              <span className="font-semibold text-slate-900">3</span>
            </div>
            <div className="flex items-center justify-between">
              <span>Blocked settlements</span>
              <span className="font-semibold text-slate-900">7</span>
            </div>
            <div className="flex items-center justify-between">
              <span>Auto actions triggered</span>
              <span className="font-semibold text-slate-900">12</span>
            </div>
            <Button className="w-full mt-4" variant="outline">
              Review Alerts
            </Button>
          </CardContent>
        </Card>
      </section>

      <Card className="shadow-xl border-slate-200">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <FileText className="w-5 h-5 text-indigo-600" />
            Audit Trail
          </CardTitle>
        </CardHeader>
        <CardContent className="grid gap-4 md:grid-cols-3">
          {audits.map((audit) => (
            <div key={audit.title} className="rounded-xl border border-slate-200 p-4">
              <div className="flex items-center justify-between">
                <p className="font-semibold text-slate-900">{audit.title}</p>
                {audit.result === "passed" ? (
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                ) : (
                  <Badge variant="secondary">Pending</Badge>
                )}
              </div>
              <p className="text-sm text-slate-500 mt-2">Owner: {audit.owner}</p>
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  );
}
