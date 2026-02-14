"use client";

import { GitBranch, CheckCircle, Clock } from "lucide-react";

const deployments = [
  { service: "reactwolf", version: "a0e95e2", message: "Update ArgoCD repoURLs, clean build artifacts", time: "Just now", status: "success" as const },
  { service: "reactwolf_frontend", version: "28a8b0c", message: "Enhance dashboard layout, dark mode, behavioral intelligence UI", time: "Just now", status: "success" as const },
  { service: "reactwolf-mlmodels", version: "0e3d109", message: "Add model deployment script", time: "Just now", status: "success" as const },
  { service: "reactwolf", version: "40eb942", message: "Add Toast/Square POS integrations, fix production issues", time: "3 days ago", status: "success" as const },
  { service: "reactwolf_frontend", version: "e64b750", message: "Add Behavioral Intelligence Frontend Components (Phase 6)", time: "5 days ago", status: "success" as const },
];

export function DeploymentHistory() {
  return (
    <div>
      <h2 className="text-lg font-semibold mb-4">Recent Deployments</h2>
      <div className="rounded-xl border border-border bg-card overflow-hidden">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-border bg-muted/50">
              <th className="text-left p-3 font-medium text-muted-foreground">Service</th>
              <th className="text-left p-3 font-medium text-muted-foreground">Commit</th>
              <th className="text-left p-3 font-medium text-muted-foreground">Message</th>
              <th className="text-left p-3 font-medium text-muted-foreground">Time</th>
              <th className="text-left p-3 font-medium text-muted-foreground">Status</th>
            </tr>
          </thead>
          <tbody>
            {deployments.map((dep, i) => (
              <tr key={i} className="border-b border-border last:border-0 hover:bg-muted/30 transition-colors">
                <td className="p-3 font-medium">{dep.service}</td>
                <td className="p-3">
                  <span className="font-mono text-xs bg-muted px-1.5 py-0.5 rounded">{dep.version}</span>
                </td>
                <td className="p-3 text-muted-foreground truncate max-w-xs">{dep.message}</td>
                <td className="p-3 text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Clock className="h-3 w-3" />
                    {dep.time}
                  </div>
                </td>
                <td className="p-3">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
