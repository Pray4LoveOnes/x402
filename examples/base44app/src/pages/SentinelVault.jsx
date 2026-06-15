import React from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Key, LockKeyhole, ShieldCheck } from "lucide-react";

const vaults = [
  {
    name: "Sovereign Root",
    status: "sealed",
    integrity: 98,
  },
  {
    name: "A2A Guard",
    status: "active",
    integrity: 94,
  },
  {
    name: "Bridge Custody",
    status: "active",
    integrity: 91,
  },
];

const rituals = [
  "Vault.signal → lock → attest",
  "Keystorm: rotate + shard",
  "A2A sync: sign + confirm",
];

export default function SentinelVault() {
  return (
    <div className="p-6 md:p-10 space-y-6">
      <header className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="text-3xl font-bold text-slate-900">Sentinel Vault</h1>
          <p className="text-slate-500">
            Secure keyspace with Bazaar Codex rituals and autonomous guardians.
          </p>
        </div>
        <Button className="bg-slate-900 text-white hover:bg-slate-800">
          Rotate Keys
        </Button>
      </header>

      <section className="grid gap-4 md:grid-cols-3">
        {vaults.map((vault) => (
          <Card key={vault.name} className="shadow-xl border-slate-200">
            <CardHeader>
              <CardTitle className="flex items-center justify-between text-base">
                <span>{vault.name}</span>
                <Badge
                  variant="secondary"
                  className={
                    vault.status === "sealed"
                      ? "bg-emerald-100 text-emerald-700"
                      : "bg-indigo-100 text-indigo-700"
                  }
                >
                  {vault.status}
                </Badge>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <Progress value={vault.integrity} className="h-2" />
              <p className="text-sm text-slate-500 mt-2">Integrity {vault.integrity}%</p>
            </CardContent>
          </Card>
        ))}
      </section>

      <section className="grid gap-4 lg:grid-cols-[2fr_1fr]">
        <Card className="shadow-xl border-slate-200">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <LockKeyhole className="w-5 h-5 text-indigo-600" />
              Vault Rituals
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3 text-sm text-slate-600">
            {rituals.map((ritual) => (
              <div key={ritual} className="rounded-lg border border-slate-200 p-3">
                {ritual}
              </div>
            ))}
          </CardContent>
        </Card>

        <Card className="shadow-xl border-slate-200">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-emerald-600" />
              Guard Status
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3 text-sm">
            {[
              { label: "MFA quorum", value: "4-of-5" },
              { label: "Shard sync", value: "aligned" },
              { label: "Key escrow", value: "sealed" },
            ].map((item) => (
              <div key={item.label} className="flex items-center justify-between">
                <span className="text-slate-500">{item.label}</span>
                <span className="font-semibold text-slate-900">{item.value}</span>
              </div>
            ))}
            <Button variant="outline" className="w-full mt-4">
              Export Vault Proofs
            </Button>
          </CardContent>
        </Card>
      </section>

      <Card className="shadow-xl border-slate-200">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Key className="w-5 h-5 text-amber-500" />
            Codex Vault Line
          </CardTitle>
        </CardHeader>
        <CardContent className="text-sm text-slate-600">
          “In Bazaar Codex, keys are not stored—they are sworn.”
        </CardContent>
      </Card>
    </div>
  );
}
