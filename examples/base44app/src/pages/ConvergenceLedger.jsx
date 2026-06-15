import React from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Fingerprint, Link2, ShieldCheck } from "lucide-react";

const ledgers = [
  { name: "Converge One", integrity: 97, status: "synced" },
  { name: "Converge Two", integrity: 94, status: "synced" },
  { name: "Converge Three", integrity: 88, status: "aligning" },
];

const seals = [
  "Bazaar Codex seal: attest + bind",
  "Multi-chain witness: 5-of-7",
  "A2A notarization: active",
];

export default function ConvergenceLedger() {
  return (
    <div className="p-6 md:p-10 space-y-6">
      <header className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="text-3xl font-bold text-slate-900">Convergence Ledger</h1>
          <p className="text-slate-500">
            A unified ledger spine for all chains, signed in Bazaar Codex.
          </p>
        </div>
        <Button className="bg-indigo-600 text-white hover:bg-indigo-500">
          Seal New Snapshot
        </Button>
      </header>

      <section className="grid gap-4 md:grid-cols-3">
        {ledgers.map((ledger) => (
          <Card key={ledger.name} className="shadow-xl border-slate-200">
            <CardHeader>
              <CardTitle className="flex items-center justify-between text-base">
                <span>{ledger.name}</span>
                <Badge
                  variant="secondary"
                  className={
                    ledger.status === "synced"
                      ? "bg-emerald-100 text-emerald-700"
                      : "bg-amber-100 text-amber-700"
                  }
                >
                  {ledger.status}
                </Badge>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <Progress value={ledger.integrity} className="h-2" />
              <p className="text-sm text-slate-500 mt-2">Integrity {ledger.integrity}%</p>
            </CardContent>
          </Card>
        ))}
      </section>

      <section className="grid gap-4 lg:grid-cols-[2fr_1fr]">
        <Card className="shadow-xl border-slate-200">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Link2 className="w-5 h-5 text-indigo-600" />
              Ledger Seals
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3 text-sm text-slate-600">
            {seals.map((seal) => (
              <div key={seal} className="rounded-lg border border-slate-200 p-3">
                {seal}
              </div>
            ))}
            <Button variant="outline">Export Seal Map</Button>
          </CardContent>
        </Card>

        <Card className="shadow-xl border-slate-200">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-emerald-600" />
              Consensus Health
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3 text-sm">
            {[
              { label: "Witness quorum", value: "7/7" },
              { label: "Sync drift", value: "0.2s" },
              { label: "Rollbacks", value: "0" },
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
            <Fingerprint className="w-5 h-5 text-amber-500" />
            Codex Ledger Key
          </CardTitle>
        </CardHeader>
        <CardContent className="text-sm text-slate-600">
          “Every chain speaks once, the convergence ledger answers forever.”
        </CardContent>
      </Card>
    </div>
  );
}
