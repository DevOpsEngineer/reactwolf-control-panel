"use client";

import {
  LayoutDashboard,
  Server,
  GitBranch,
  Settings,
  Activity,
  Database,
  Shield,
  Container,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

const navItems = [
  { href: "/", label: "Dashboard", icon: LayoutDashboard },
  { href: "/services", label: "Services", icon: Server },
  { href: "/deployments", label: "Deployments", icon: GitBranch },
  { href: "/pods", label: "Pods & Containers", icon: Container },
  { href: "/databases", label: "Databases", icon: Database },
  { href: "/monitoring", label: "Monitoring", icon: Activity },
  { href: "/security", label: "Security", icon: Shield },
  { href: "/settings", label: "Settings", icon: Settings },
];

export function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="w-64 border-r border-border bg-card flex flex-col">
      <div className="p-6 border-b border-border">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
            <span className="text-primary-foreground font-bold text-sm">RW</span>
          </div>
          <div>
            <h2 className="font-semibold text-sm">ReactWolf</h2>
            <p className="text-xs text-muted-foreground">Control Panel</p>
          </div>
        </div>
      </div>

      <nav className="flex-1 p-4 space-y-1">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = pathname === item.href;
          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "flex items-center gap-3 px-3 py-2 rounded-lg text-sm transition-colors",
                isActive
                  ? "bg-primary/10 text-primary font-medium"
                  : "text-muted-foreground hover:text-foreground hover:bg-muted"
              )}
            >
              <Icon className="h-4 w-4" />
              {item.label}
            </Link>
          );
        })}
      </nav>

      <div className="p-4 border-t border-border">
        <div className="text-xs text-muted-foreground">
          <p>Cluster: reactwolf-prod</p>
          <p>Namespace: reactwolf</p>
        </div>
      </div>
    </aside>
  );
}
