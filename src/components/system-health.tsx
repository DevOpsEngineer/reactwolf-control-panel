"use client";

import { Activity, Server, Database, Wifi } from "lucide-react";

const healthMetrics = [
  { label: "API Latency", value: "23ms", icon: Activity, status: "good" as const },
  { label: "Cluster Nodes", value: "3/3", icon: Server, status: "good" as const },
  { label: "Database", value: "Connected", icon: Database, status: "good" as const },
  { label: "WebSocket", value: "Active", icon: Wifi, status: "good" as const },
];

export function SystemHealth() {
  return (
    <div className="rounded-xl border border-border bg-card p-6">
      <h2 className="text-lg font-semibold mb-4">System Health</h2>
      <div className="grid grid-cols-2 gap-4">
        {healthMetrics.map((metric) => {
          const Icon = metric.icon;
          return (
            <div key={metric.label} className="flex items-center gap-3 p-3 rounded-lg bg-muted/50">
              <div className="p-2 rounded-lg bg-green-500/10">
                <Icon className="h-4 w-4 text-green-500" />
              </div>
              <div>
                <p className="text-xs text-muted-foreground">{metric.label}</p>
                <p className="text-sm font-medium">{metric.value}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
