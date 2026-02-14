"use client";

import { CheckCircle, AlertTriangle, XCircle, Clock } from "lucide-react";

type ServiceStatus = "healthy" | "degraded" | "down" | "deploying";

interface Service {
  name: string;
  status: ServiceStatus;
  version: string;
  replicas: string;
  cpu: string;
  memory: string;
  uptime: string;
}

const services: Service[] = [
  { name: "transaction-service", status: "healthy", version: "v1.2.0", replicas: "2/2", cpu: "120m", memory: "256Mi", uptime: "7d 3h" },
  { name: "dashboard-service", status: "healthy", version: "v1.1.0", replicas: "2/2", cpu: "80m", memory: "192Mi", uptime: "7d 3h" },
  { name: "risk-scoring-service", status: "healthy", version: "v1.3.0", replicas: "2/2", cpu: "200m", memory: "384Mi", uptime: "5d 12h" },
  { name: "anomaly-detection-service", status: "healthy", version: "v1.1.0", replicas: "2/2", cpu: "300m", memory: "512Mi", uptime: "7d 3h" },
  { name: "upsell-engine-service", status: "healthy", version: "v1.0.5", replicas: "2/2", cpu: "90m", memory: "200Mi", uptime: "7d 3h" },
  { name: "reactwolf-frontend", status: "healthy", version: "v1.1.4", replicas: "1/1", cpu: "50m", memory: "128Mi", uptime: "2d 8h" },
  { name: "merchant-portal", status: "healthy", version: "v0.1.0", replicas: "2/2", cpu: "45m", memory: "128Mi", uptime: "7d 3h" },
  { name: "reactwolf-mlmodels", status: "healthy", version: "v1.0.0", replicas: "1/1", cpu: "400m", memory: "1Gi", uptime: "7d 3h" },
];

const statusConfig: Record<ServiceStatus, { icon: typeof CheckCircle; color: string; label: string }> = {
  healthy: { icon: CheckCircle, color: "text-green-500", label: "Healthy" },
  degraded: { icon: AlertTriangle, color: "text-yellow-500", label: "Degraded" },
  down: { icon: XCircle, color: "text-red-500", label: "Down" },
  deploying: { icon: Clock, color: "text-blue-500", label: "Deploying" },
};

export function ServiceStatusGrid() {
  return (
    <div>
      <h2 className="text-lg font-semibold mb-4">Service Status</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
        {services.map((svc) => {
          const cfg = statusConfig[svc.status];
          const Icon = cfg.icon;
          return (
            <div key={svc.name} className="rounded-xl border border-border bg-card p-4 hover:border-primary/50 transition-colors cursor-pointer">
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-sm font-medium truncate">{svc.name}</h3>
                <Icon className={`h-4 w-4 ${cfg.color}`} />
              </div>
              <div className="space-y-1 text-xs text-muted-foreground">
                <div className="flex justify-between">
                  <span>Version</span><span className="font-mono">{svc.version}</span>
                </div>
                <div className="flex justify-between">
                  <span>Replicas</span><span>{svc.replicas}</span>
                </div>
                <div className="flex justify-between">
                  <span>CPU</span><span>{svc.cpu}</span>
                </div>
                <div className="flex justify-between">
                  <span>Memory</span><span>{svc.memory}</span>
                </div>
                <div className="flex justify-between">
                  <span>Uptime</span><span>{svc.uptime}</span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
