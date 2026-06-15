import React from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BookOpen, MessageSquareText, Sparkles } from "lucide-react";

const phrases = [
  {
    title: "fastlane",
    meaning: "Route priority with sovereign confirmation.",
    usage: "fastlane → settle/warp → confirm",
  },
  {
    title: "a2a.mesh",
    meaning: "Agent-to-agent consensus ring.",
    usage: "a2a.mesh → sync → seal",
  },
  {
    title: "vault.signal",
    meaning: "Keyspace guardrail and policy signature.",
    usage: "vault.signal → lock → attest",
  },
];

const stories = [
  "Bazaar Codex thrives on short verbs and sovereign intent.",
  "Every agent speaks the same syntax for instant routing.",
  "Minimal tokens, maximal coordination across chains.",
];

export default function BazaarCodexAtlas() {
  return (
    <div className="p-6 md:p-10 space-y-6">
      <header className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="text-3xl font-bold text-slate-900">Bazaar Codex Atlas</h1>
          <p className="text-slate-500">
            The shared language for agents, ops, and sovereign chain routing.
          </p>
        </div>
        <Button className="bg-indigo-600 text-white hover:bg-indigo-500">
          Publish Phrasebook
        </Button>
      </header>

      <section className="grid gap-4 md:grid-cols-3">
        {phrases.map((phrase) => (
          <Card key={phrase.title} className="shadow-xl border-slate-200">
            <CardHeader>
              <CardTitle className="flex items-center justify-between text-base">
                <span>{phrase.title}</span>
                <Badge variant="secondary">codex</Badge>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-2 text-sm text-slate-600">
              <p>{phrase.meaning}</p>
              <p className="font-mono text-xs bg-slate-50 p-2 rounded-lg">
                {phrase.usage}
              </p>
            </CardContent>
          </Card>
        ))}
      </section>

      <section className="grid gap-4 lg:grid-cols-[2fr_1fr]">
        <Card className="shadow-xl border-slate-200">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <MessageSquareText className="w-5 h-5 text-indigo-600" />
              Codex Lore
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3 text-sm text-slate-600">
            {stories.map((story) => (
              <div key={story} className="rounded-lg border border-slate-200 p-3">
                {story}
              </div>
            ))}
          </CardContent>
        </Card>

        <Card className="shadow-xl border-slate-200">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <BookOpen className="w-5 h-5 text-emerald-600" />
              Lexicon Status
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3 text-sm">
            {[
              { label: "Active phrases", value: "84" },
              { label: "Agent dialects", value: "7" },
              { label: "Sync latency", value: "42ms" },
            ].map((item) => (
              <div key={item.label} className="flex items-center justify-between">
                <span className="text-slate-500">{item.label}</span>
                <span className="font-semibold text-slate-900">{item.value}</span>
              </div>
            ))}
            <Button variant="outline" className="w-full mt-4">
              Export Codex
            </Button>
          </CardContent>
        </Card>
      </section>

      <Card className="shadow-xl border-slate-200">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-amber-500" />
            Codex Verse
          </CardTitle>
        </CardHeader>
        <CardContent className="text-sm text-slate-600">
          “Bazaar Codex: speak once, mesh forever. The market hears and routes obey.”
        </CardContent>
      </Card>
    </div>
  );
}
