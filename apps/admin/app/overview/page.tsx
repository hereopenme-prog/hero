'use client'

import { AdminLayout } from '../components/AdminLayout'
import { StatCard } from '../components/StatCard'
import { PageHeader } from '../components/PageHeader'
import {
  Building2,
  Users,
  Cpu,
  Shield,
  Bell,
  TrendingUp,
  CheckCircle,
} from 'lucide-react'
import { mockStats, mockEvents } from '../lib/data'

export default function OverviewPage() {
  return (
    <AdminLayout>
      <PageHeader title="Dashboard" description="Overview of your platform" />

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <StatCard
          label="Total Businesses"
          value={mockStats.totalBusinesses.toLocaleString()}
          change="+12%"
          icon={<Building2 className="w-5 h-5" />}
        />
        <StatCard
          label="Active Businesses"
          value={mockStats.activeBusinesses.toLocaleString()}
          change="+8%"
          icon={<CheckCircle className="w-5 h-5" />}
        />
        <StatCard
          label="Total Customers"
          value={mockStats.totalCustomers.toLocaleString()}
          change="+22%"
          icon={<Users className="w-5 h-5" />}
        />
        <StatCard
          label="Online Devices"
          value={mockStats.onlineDevices.toLocaleString()}
          change="+5%"
          icon={<Cpu className="w-5 h-5" />}
        />
        <StatCard
          label="Security Alerts"
          value={mockStats.securityAlerts.toString()}
          change="-3%"
          icon={<Shield className="w-5 h-5" />}
        />
        <StatCard
          label="Pending Notifications"
          value={mockStats.pendingNotifications.toString()}
          icon={<Bell className="w-5 h-5" />}
        />
      </div>

      <div className="mt-8 grid grid-cols-1 gap-6 lg:grid-cols-2">
        <div className="bg-white border border-neutral-200 rounded-2xl">
          <div className="p-6 border-b">
            <h2 className="text-lg font-semibold">Recent Events</h2>
          </div>
          <div className="divide-y divide-neutral-200">
            {mockEvents.map((event, index) => (
              <div key={index} className="flex items-center gap-3 px-6 py-4">
                <div className="flex items-center gap-3">
                  {event.severity === 'success' && (
                    <span className="h-2 w-2 rounded-full bg-emerald-400" />
                  )}
                  {event.severity === 'warning' && (
                    <span className="h-2 w-2 rounded-full bg-amber-400" />
                  )}
                  {event.severity === 'critical' && (
                    <span className="h-2 w-2 rounded-full bg-red-400" />
                  )}
                  {event.severity === 'info' && (
                    <span className="h-2 w-2 rounded-full bg-blue-400" />
                  )}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm truncate">{event.message}</p>
                </div>
                <span className="text-xs text-neutral-400 shrink-0">{event.time}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white border border-neutral-200 rounded-2xl p-6">
          <h2 className="text-lg font-semibold mb-6">Quick Actions</h2>
          <div className="grid grid-cols-2 gap-4">
            <a
              href="/businesses"
              className="bg-green-action/[0.06] text-green-action border border-green-action/15 rounded-xl p-4 text-center text-sm font-medium hover:bg-green-action/10 transition-colors"
            >
              <Building2 className="mx-auto mb-2 h-5 w-5" />
              Manage Businesses
            </a>
            <a
              href="/devices"
              className="bg-green-action/[0.06] text-green-action border border-green-action/15 rounded-xl p-4 text-center text-sm font-medium hover:bg-green-action/10 transition-colors"
            >
              <Cpu className="mx-auto mb-2 h-5 w-5" />
              View Devices
            </a>
            <a
              href="/security"
              className="bg-green-action/[0.06] text-green-action border border-green-action/15 rounded-xl p-4 text-center text-sm font-medium hover:bg-green-action/10 transition-colors"
            >
              <Shield className="mx-auto mb-2 h-5 w-5" />
              Security Center
            </a>
            <a
              href="/settings"
              className="bg-green-action/[0.06] text-green-action border border-green-action/15 rounded-xl p-4 text-center text-sm font-medium hover:bg-green-action/10 transition-colors"
            >
              <TrendingUp className="mx-auto mb-2 h-5 w-5" />
              Settings
            </a>
          </div>
        </div>
      </div>
    </AdminLayout>
  )
}
