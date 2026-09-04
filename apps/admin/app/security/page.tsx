'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Shield, Eye, CheckCircle, AlertTriangle, Clock } from 'lucide-react';
import { AdminLayout } from '../components/AdminLayout';
import { PageHeader } from '../components/PageHeader';
import { SearchBar } from '../components/SearchBar';
import { FilterBar } from '../components/FilterBar';
import { DataTable } from '../components/DataTable';
import { StatusBadge, getStatusVariant } from '../components/StatusBadge';
import { EmptyState } from '../components/EmptyState';
import { StatCard } from '../components/StatCard';
import { mockAlerts, type SecurityAlert } from '../lib/data';

const filters = ['All', 'Active', 'Investigating', 'Resolved'];

export default function SecurityPage() {
  const [search, setSearch] = useState('');
  const [activeFilter, setActiveFilter] = useState('All');

  const filteredAlerts = mockAlerts.filter((alert) => {
    const matchesSearch =
      alert.title.toLowerCase().includes(search.toLowerCase()) ||
      alert.business.toLowerCase().includes(search.toLowerCase());
    const matchesFilter =
      activeFilter === 'All' || alert.status === activeFilter;
    return matchesSearch && matchesFilter;
  });

  const criticalCount = mockAlerts.filter((a) => a.severity === 'Critical').length;
  const highCount = mockAlerts.filter((a) => a.severity === 'High').length;
  const mediumCount = mockAlerts.filter((a) => a.severity === 'Medium').length;
  const resolvedCount = mockAlerts.filter((a) => a.status === 'Resolved').length;

  const getSeverityVariant = (severity: string): 'success' | 'warning' | 'danger' | 'info' | 'default' => {
    switch (severity) {
      case 'Critical': return 'danger';
      case 'High': return 'warning';
      case 'Medium': return 'info';
      case 'Low': return 'success';
      default: return 'default';
    }
  };

  const columns = [
    {
      key: 'title',
      label: 'Alert',
      render: (row: SecurityAlert) => (
        <div className="flex items-center gap-2">
          <AlertTriangle className="h-4 w-4 text-muted" />
          <span className="font-medium text-white">{row.title}</span>
        </div>
      ),
    },
    { key: 'business', label: 'Business' },
    { key: 'device', label: 'Device' },
    {
      key: 'severity',
      label: 'Severity',
      render: (row: SecurityAlert) => (
        <StatusBadge label={row.severity} variant={getSeverityVariant(row.severity)} />
      ),
    },
    { key: 'time', label: 'Time' },
    {
      key: 'status',
      label: 'Status',
      render: (row: SecurityAlert) => (
        <StatusBadge label={row.status} variant={getStatusVariant(row.status)} />
      ),
    },
    {
      key: 'actions',
      label: 'Actions',
      render: (row: SecurityAlert) => (
        <div className="flex items-center gap-2">
          <Link
            href={`/security/${row.id}`}
            className="inline-flex items-center gap-1 px-2.5 py-1.5 text-[12px] font-medium text-neon bg-neon/10 border border-neon/20 rounded-lg hover:bg-neon/20 transition-colors"
          >
            <Eye className="w-3.5 h-3.5" />
            View
          </Link>
          {row.status !== 'Resolved' && (
            <button className="inline-flex items-center gap-1 px-2.5 py-1.5 text-[12px] font-medium text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 rounded-lg hover:bg-emerald-500/20 transition-colors">
              <CheckCircle className="w-3.5 h-3.5" />
              Resolve
            </button>
          )}
        </div>
      ),
    },
  ];

  return (
    <AdminLayout>
      <PageHeader title="Security" description="Monitor security events and alerts across all businesses" />

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
        <StatCard icon={<AlertTriangle className="w-5 h-5" />} label="Critical Alerts" value={String(criticalCount)} />
        <StatCard icon={<AlertTriangle className="w-5 h-5" />} label="High Priority" value={String(highCount)} />
        <StatCard icon={<Clock className="w-5 h-5" />} label="Medium Priority" value={String(mediumCount)} />
        <StatCard icon={<CheckCircle className="w-5 h-5" />} label="Resolved" value={String(resolvedCount)} />
      </div>

      <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <SearchBar value={search} onChange={setSearch} placeholder="Search security alerts..." />
        <FilterBar filters={filters} active={activeFilter} onChange={setActiveFilter} />
      </div>

      {filteredAlerts.length > 0 ? (
        <div className="bg-surface-3 border border-white/[0.06] rounded-2xl p-1">
          <DataTable columns={columns as any} data={filteredAlerts as any} />
        </div>
      ) : (
        <EmptyState
          icon={<Shield className="h-12 w-12 text-muted" />}
          title="No security alerts found"
          description="Try adjusting your search or filter criteria."
        />
      )}
    </AdminLayout>
  );
}
