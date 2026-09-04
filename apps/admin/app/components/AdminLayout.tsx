'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  LayoutDashboard, Building2, Users, Cpu, Shield, Bell,
  Settings, LogOut, Menu, X, ChevronRight
} from 'lucide-react';

const navItems = [
  { icon: LayoutDashboard, label: 'Overview', href: '/overview' },
  { icon: Building2, label: 'Businesses', href: '/businesses' },
  { icon: Users, label: 'Customers', href: '/customers' },
  { icon: Cpu, label: 'Devices', href: '/devices' },
  { icon: Shield, label: 'Security', href: '/security' },
  { icon: Bell, label: 'Notifications', href: '/notifications' },
  { icon: Settings, label: 'Settings', href: '/settings' },
];

function Sidebar({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  const pathname = usePathname();

  return (
    <>
      {isOpen && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 lg:hidden" onClick={onClose} />
      )}

      <aside className={`fixed left-0 top-0 h-full w-64 bg-surface-3 border-r border-white/[0.06] z-50 transform transition-transform duration-300 lg:translate-x-0 flex flex-col ${
        isOpen ? 'translate-x-0' : '-translate-x-full'
      }`}>
        <div className="p-6">
          <Link href="/overview" className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-neon rounded-lg flex items-center justify-center">
              <span className="font-bold text-xl text-surface-0">N</span>
            </div>
            <div>
              <p className="font-bold text-white">NINE OWN</p>
              <p className="text-[13px] text-muted-light">Admin Panel</p>
            </div>
          </Link>
        </div>

        <nav className="px-4 space-y-1 flex-1">
          {navItems.map((item) => {
            const isActive = pathname === item.href || (item.href === '/overview' && pathname === '/admin');
            const Icon = item.icon;
            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={onClose}
                className={`flex items-center space-x-3 px-4 py-2.5 rounded-lg transition-all duration-200 ${
                  isActive
                    ? 'text-neon bg-neon/[0.08]'
                    : 'text-muted-light hover:text-white hover:bg-white/[0.04]'
                }`}
              >
                <Icon className="w-5 h-5" />
                <span className="text-[14px] font-medium">{item.label}</span>
              </Link>
            );
          })}
        </nav>

        <div className="p-4 border-t border-white/[0.06]">
          <button className="flex items-center space-x-3 px-4 py-2.5 rounded-lg text-muted-light hover:text-white hover:bg-white/[0.04] transition-all duration-200 w-full">
            <LogOut className="w-5 h-5" />
            <span className="text-[14px] font-medium">Logout</span>
          </button>
        </div>
      </aside>
    </>
  );
}

export function AdminLayout({ children }: { children: React.ReactNode }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-surface-0">
      <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />

      <div className="lg:ml-64">
        <header className="bg-surface-0/80 backdrop-blur-xl border-b border-white/[0.06] px-6 py-4 sticky top-0 z-30">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <button
                onClick={() => setSidebarOpen(true)}
                className="lg:hidden p-2 text-muted-light hover:bg-white/[0.05] rounded-lg transition-colors"
              >
                <Menu className="w-5 h-5" />
              </button>
              <Breadcrumb />
            </div>

            <div className="flex items-center space-x-3">
              <button className="relative p-2 text-muted-light hover:bg-white/[0.05] rounded-lg transition-colors">
                <Bell className="w-5 h-5" />
                <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full" />
              </button>
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-neon/10 text-neon rounded-full flex items-center justify-center">
                  <span className="text-sm font-medium">A</span>
                </div>
                <span className="text-sm font-medium text-muted-light hidden md:block">Admin</span>
              </div>
            </div>
          </div>
        </header>

        <main className="p-6">
          {children}
        </main>
      </div>
    </div>
  );
}

function Breadcrumb() {
  const pathname = usePathname();
  const segments = pathname.split('/').filter(Boolean);

  const labels: Record<string, string> = {
    admin: 'Dashboard',
    overview: 'Overview',
    businesses: 'Businesses',
    customers: 'Customers',
    devices: 'Devices',
    security: 'Security',
    notifications: 'Notifications',
    settings: 'Settings',
  };

  return (
    <nav className="flex items-center space-x-2 text-sm">
      {segments.map((seg, i) => {
        const isLast = i === segments.length - 1;
        const href = '/' + segments.slice(0, i + 1).join('/');
        const label = labels[seg] || seg;

        return (
          <span key={i} className="flex items-center space-x-2">
            {i > 0 && <ChevronRight className="w-3.5 h-3.5 text-muted" />}
            {isLast ? (
              <span className="font-semibold text-white">{label}</span>
            ) : (
              <Link href={href} className="text-muted-light hover:text-white transition-colors">
                {label}
              </Link>
            )}
          </span>
        );
      })}
    </nav>
  );
}
