import React, { useMemo, useRef, useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import {
  Code,
  Terminal,
  Sparkles,
  Bug,
  FileText,
  GitBranch,
  Rocket,
  Search,
  Shield,
} from "lucide-react";

const starterWorkspace = {
  project: "genzk-402",
  branch: "main",
  build: "passing",
  lastDeployed: "3m ago",
  env: "production",
};

const helpBlocks = [
  {
    title: "Command Layers",
    description: "Chain commands to compose workflows: audit → simulate → deploy.",
  },
  {
    title: "Copilot Hints",
    description: "Use /hint for suggested next actions based on context.",
  },
  {
    title: "Artifacts",
    description: "Every run generates artifacts for review or rollback.",
  },
];

const commandCatalog = [
  {
    name: "status",
    group: "workspace",
    icon: Terminal,
    description: "Show workspace status and health.",
    run: () => [
      "Workspace: genzk-402",
      "Branch: main (clean)",
      "Build: ✅ passing",
      "Deploy: ✅ production (3m ago)",
      "Alerts: none",
    ],
  },
  {
    name: "scan",
    group: "security",
    icon: Shield,
    description: "Run a sovereign compliance scan.",
    run: () => [
      "Scanning policy engine...",
      "✅ KYC rules aligned",
      "✅ OFAC screening enabled",
      "⚠️ 2 high-risk counterparties flagged",
      "Report: /artifacts/compliance/scan-0842",
    ],
  },
  {
    name: "diff",
    group: "git",
    icon: GitBranch,
    description: "Show latest change summary.",
    run: () => [
      "commit 84a1c2f: Improve routing heuristics",
      " + 3 modules updated",
      " + 2 schemas migrated",
      " - 1 deprecated policy removed",
    ],
  },
  {
    name: "simulate",
    group: "strategy",
    icon: Sparkles,
    description: "Simulate a settlement plan across routes.",
    run: () => [
      "Scenario: Route Optimizer / high liquidity",
      "Cost delta: -14.2%",
      "Latency delta: -21.8%",
      "Success probability: 98.7%",
      "Artifacts: /artifacts/simulations/route-91a",
    ],
  },
  {
    name: "test",
    group: "quality",
    icon: Bug,
    description: "Run critical e2e checks.",
    run: () => [
      "e2e suite: 42 tests",
      "✅ payments-core",
      "✅ wallet-sync",
      "✅ vault-policy",
      "⚠️ settlement-audit (flake) - rerun recommended",
    ],
  },
  {
    name: "docs",
    group: "docs",
    icon: FileText,
    description: "Generate protocol docs with changelog.",
    run: () => [
      "Generating docs...",
      "✅ Updated /docs/protocol/overview.md",
      "✅ Updated /docs/policies/settlement.md",
      "Published to https://docs.base44.app/genzk-402",
    ],
  },
  {
    name: "deploy",
    group: "release",
    icon: Rocket,
    description: "Deploy current branch to production.",
    run: () => [
      "Deploying genzk-402@main...",
      "✅ Build 12.9.4",
      "✅ Warmed edge caches",
      "✅ Deployed (region: global)",
    ],
  },
  {
    name: "search",
    group: "workspace",
    icon: Search,
    description: "Search across logs and artifacts.",
    run: (args) => [
      `Searching logs for: ${args || "<query>"}`,
      "Found 3 relevant runs:",
      " - /runs/2024-08-07/settlement-34b",
      " - /runs/2024-08-06/alerts-772",
      " - /runs/2024-08-05/policy-910",
    ],
  },
  {
    name: "hint",
    group: "assistant",
    icon: Sparkles,
    description: "Suggest next actions based on context.",
    run: () => [
      "Suggested next actions:",
      "1) scan → simulate → deploy",
      "2) review flagged counterparties",
      "3) re-run settlement-audit",
    ],
  },
];

const quickActions = [
  { label: "Run status", command: "status" },
  { label: "Policy scan", command: "scan" },
  { label: "Simulate routes", command: "simulate" },
  { label: "Deploy", command: "deploy" },
];

const promptMessage = (text) => `genzk-402 › ${text}`;

export default function DevTerminal() {
  const [history, setHistory] = useState([
    "Welcome to GenZk DevTerminal ▸ Layered command system ready.",
    "Type /help to see tips and /hint for guided next steps.",
  ]);
  const [command, setCommand] = useState("");
  const [activeTab, setActiveTab] = useState("terminal");
  const scrollRef = useRef(null);

  const groupedCommands = useMemo(() => {
    return commandCatalog.reduce((acc, item) => {
      const group = acc[item.group] ?? [];
      group.push(item);
      acc[item.group] = group;
      return acc;
    }, {});
  }, []);

  const runCommand = (value) => {
    if (!value.trim()) return;
    const [name, ...args] = value.trim().replace("/", "").split(" ");
    const argsText = args.join(" ");
    const commandDef = commandCatalog.find((entry) => entry.name === name);

    const output = commandDef
      ? commandDef.run(argsText)
      : [
          `Unknown command: ${name}`,
          "Try: status, scan, simulate, test, deploy",
        ];

    setHistory((prev) => [
      ...prev,
      promptMessage(value),
      ...output,
    ]);
    setCommand("");
    requestAnimationFrame(() => {
      if (scrollRef.current) {
        scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
      }
    });
  };

  return (
    <Card className="shadow-2xl border-slate-200">
      <CardHeader className="border-b border-slate-200">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <CardTitle className="text-2xl flex items-center gap-2">
              <Terminal className="w-6 h-6 text-indigo-600" />
              DevTerminal (Layered Ops)
            </CardTitle>
            <p className="text-sm text-slate-500">
              A GitHub-style terminal with copilots, artifacts, and workflow layers.
            </p>
          </div>
          <div className="flex flex-wrap gap-2">
            {quickActions.map((action) => (
              <Button
                key={action.command}
                variant="outline"
                size="sm"
                onClick={() => runCommand(action.command)}
              >
                {action.label}
              </Button>
            ))}
          </div>
        </div>
      </CardHeader>

      <CardContent className="p-0">
        <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr_320px]">
          <aside className="border-b lg:border-b-0 lg:border-r border-slate-200 bg-slate-50/80">
            <div className="p-4 space-y-3">
              <div className="flex items-center gap-2">
                <Code className="w-4 h-4 text-slate-500" />
                <span className="text-xs uppercase tracking-wide text-slate-400">
                  Command Catalog
                </span>
              </div>
              {Object.entries(groupedCommands).map(([group, commands]) => (
                <div key={group}>
                  <p className="text-xs font-semibold text-slate-600 uppercase tracking-wide">
                    {group}
                  </p>
                  <div className="mt-2 space-y-2">
                    {commands.map((entry) => (
                      <button
                        key={entry.name}
                        type="button"
                        className="w-full text-left rounded-lg border border-slate-200 bg-white px-3 py-2 hover:border-indigo-300"
                        onClick={() => runCommand(entry.name)}
                      >
                        <div className="flex items-center gap-2">
                          <entry.icon className="w-4 h-4 text-indigo-600" />
                          <span className="font-medium">{entry.name}</span>
                        </div>
                        <p className="text-xs text-slate-500 mt-1">
                          {entry.description}
                        </p>
                      </button>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </aside>

          <section className="border-b lg:border-b-0 lg:border-r border-slate-200">
            <div className="flex items-center justify-between px-4 py-3 border-b border-slate-200 bg-white">
              <div className="flex items-center gap-2">
                <Button
                  size="sm"
                  variant={activeTab === "terminal" ? "default" : "ghost"}
                  onClick={() => setActiveTab("terminal")}
                >
                  Terminal
                </Button>
                <Button
                  size="sm"
                  variant={activeTab === "layers" ? "default" : "ghost"}
                  onClick={() => setActiveTab("layers")}
                >
                  Layers
                </Button>
              </div>
              <Badge variant="secondary">v1.4.0</Badge>
            </div>

            {activeTab === "terminal" ? (
              <div className="flex flex-col h-full">
                <ScrollArea className="h-[420px]" ref={scrollRef}>
                  <div className="px-4 py-3 space-y-2 font-mono text-sm">
                    {history.map((line, index) => (
                      <p key={`${line}-${index}`} className="text-slate-700">
                        {line}
                      </p>
                    ))}
                  </div>
                </ScrollArea>
                <Separator />
                <div className="flex items-center gap-2 p-3 bg-slate-50">
                  <span className="font-mono text-xs text-slate-400">genzk-402 ›</span>
                  <Input
                    value={command}
                    onChange={(event) => setCommand(event.target.value)}
                    placeholder="Try: status, scan, simulate, deploy"
                    onKeyDown={(event) => {
                      if (event.key === "Enter") {
                        runCommand(command);
                      }
                    }}
                  />
                  <Button onClick={() => runCommand(command)}>Run</Button>
                </div>
              </div>
            ) : (
              <div className="p-4 space-y-3">
                {helpBlocks.map((block) => (
                  <Card key={block.title} className="border-slate-200">
                    <CardHeader className="pb-2">
                      <CardTitle className="text-base">{block.title}</CardTitle>
                    </CardHeader>
                    <CardContent className="text-sm text-slate-600">
                      {block.description}
                    </CardContent>
                  </Card>
                ))}
              </div>
            )}
          </section>

          <aside className="bg-slate-50/80">
            <div className="p-4 space-y-4">
              <div>
                <div className="flex items-center gap-2 text-xs uppercase tracking-wide text-slate-400">
                  Workspace
                </div>
                <div className="mt-3 space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-slate-500">Project</span>
                    <span className="font-medium">{starterWorkspace.project}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-500">Branch</span>
                    <span className="font-medium">{starterWorkspace.branch}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-500">Build</span>
                    <span className="font-medium">{starterWorkspace.build}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-500">Deploy</span>
                    <span className="font-medium">{starterWorkspace.lastDeployed}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-500">Env</span>
                    <span className="font-medium">{starterWorkspace.env}</span>
                  </div>
                </div>
              </div>
              <Separator />
              <div>
                <p className="text-xs uppercase tracking-wide text-slate-400">
                  Productivity Boosters
                </p>
                <div className="mt-3 space-y-2 text-sm">
                  <div className="flex items-center justify-between">
                    <span className="text-slate-500">Copilot AI</span>
                    <Badge className="bg-indigo-600 text-white">Active</Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-slate-500">Auto Rollbacks</span>
                    <Badge variant="secondary">Ready</Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-slate-500">Policy Guardrails</span>
                    <Badge className="bg-emerald-600 text-white">Enabled</Badge>
                  </div>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </CardContent>
    </Card>
  );
}
