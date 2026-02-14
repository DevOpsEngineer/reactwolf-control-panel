"use client";

import { Sidebar } from "@/components/sidebar";
import { Header } from "@/components/header";
import { ServiceStatusGrid } from "@/components/service-status-grid";
import { SystemHealth } from "@/components/system-health";
import { ArgoSyncStatus } from "@/components/argo-sync-status";
import { DeploymentHistory } from "@/components/deployment-history";

export default function ControlPanel() {
  return (
    <div className="flex h-screen bg-background">
      <Sidebar />
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header />
        <main className="flex-1 overflow-y-auto p-6">
          <div className="max-w-7xl mx-auto space-y-6">
            <h1 className="text-2xl font-bold">Control Panel</h1>
            <p className="text-muted-foreground">
              Infrastructure & service management for ReactWolf platform
            </p>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <SystemHealth />
              <ArgoSyncStatus />
            </div>

            <ServiceStatusGrid />
            <DeploymentHistory />
          </div>
        </main>
      </div>
    </div>
  );
}
