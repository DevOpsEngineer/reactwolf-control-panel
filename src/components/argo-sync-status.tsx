"use client";

import { CheckCircle, RefreshCw, GitBranch } from "lucide-react";

const argoApps = [
  { name: "reactwolf-services", status: "Synced", health: "Healthy", revision: "a0e95e2", repo: "DevOpsEngineer/reactwolf" },
  { name: "reactwolf-frontend", status: "Synced", health: "Healthy", revision: "28a8b0c", repo: "DevOpsEngineer/reactwolf_frontend" },
  { name: "reactwolf-mlmodels", status: "Synced", health: "Healthy", revision: "0e3d109", repo: "DevOpsEngineer/reactwolf-mlmodels-service" },
  { name: "reactwolf-control-panel", status: "Synced", health: "Healthy", revision: "initial", repo: "DevOpsEngineer/reactwolf-control-panel" },
];

export function ArgoSyncStatus() {
  return (
    <div className="rounded-xl border border-border bg-card p-6">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-semibold">ArgoCD Sync Status</h2>
        <button className="p-1.5 rounded-lg hover:bg-muted transition-colors" title="Sync All">
          <RefreshCw className="h-4 w-4 text-muted-foreground" />
        </button>
      </div>
      <div className="space-y-3">
        {argoApps.map((app) => (
          <div key={app.name} className="flex items-center justify-between p-3 rounded-lg bg-muted/50">
            <div className="flex items-center gap-3">
              <CheckCircle className="h-4 w-4 text-green-500" />
              <div>
                <p className="text-sm font-medium">{app.name}</p>
                <p className="text-xs text-muted-foreground">{app.repo}</p>
              </div>
            </div>
            <div className="flex items-center gap-2 text-xs text-muted-foreground">
              <GitBranch className="h-3 w-3" />
              <span className="font-mono">{app.revision}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
