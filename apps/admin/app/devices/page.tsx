'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Cpu, Eye, Thermometer, Battery, Wifi, WifiOff, AlertTriangle } from 'lucide-react';
import { AdminLayout } from '../components/AdminLayout';
import { PageHeader } from '../components/PageHeader';
import { SearchBar } from '../components/SearchBar';
import { FilterBar } from '../components/FilterBar';
import { DataTable } from '../components/DataTable';
import { StatusBadge, getStatusVariant } from '../components/StatusBadge';
import { EmptyState } from '../components/EmptyState';
import { StatCard } from '../components/StatCard';
import { mockDevices, type Device } from '../lib/data';

const filters = ['All', 'Online', 'Offline', 'Warning', 'Critical'];

export default function DevicesPage() {
  const [search, setSearch] = useState('');
  const [activeFilter, setActiveFilter] = useState('All');

  const filteredDevices = mockDevices.filter((device) => {
    const matchesSearch =
      device.name.toLowerCase().includes(search.toLowerCase()) ||
      device.deviceId.toLowerCase().includes(search.toLowerCase());
    const matchesFilter =
      activeFilter === 'All' ||
      device.status.toLowerCase() === activeFilter.toLowerCase();
    return matchesSearch && matchesFilter;
  });

  const totalDevices = mockDevices.length;
  const onlineDevices = mockDevices.filter((d) => d.status === 'Online').length;
  const offlineDevices = mockDevices.filter((d) => d.status === 'Offline').length;
  const warningDevices = mockDevices.filter((d) => d.status === 'Warning').length;
  const criticalDevices = mockDevices.filter((d) => d.status === 'Critical').length;

  const columns = [
    {
      key: 'name',
      label: 'Device Name',
      render: (row: Device) => (
        <div>
          <p className="font-medium text-black">{row.name}</p>
          <p className="text-[11px] text-neutral-500">{row.type}</p>
        </div>
      ),
    },
    { key: 'deviceId', label: 'Device ID' },
    { key: 'business', label: 'Business' },
    { key: 'type', label: 'Type' },
    {
      key: 'status',
      label: 'Status',
      render: (row: Device) => (
        <StatusBadge label={row.status} variant={getStatusVariant(row.status)} />
      ),
    },
    {
      key: 'temperature',
      label: 'Temperature',
      render: (row: Device) => (
        <div className="flex items-center gap-1.5">
          <Thermometer className="w-3.5 h-3.5 text-neutral-500" />
          <span>{row.temperature}</span>
        </div>
      ),
    },
    { key: 'lastSeen', label: 'Last Seen' },
    {
      key: 'battery',
      label: 'Battery',
      render: (row: Device) => {
        const level = parseInt(row.battery.replace('%', ''), 10);
        const color = level <= 20 ? 'text-red-400' : level <= 50 ? 'text-yellow-400' : 'text-emerald-400';
        return (
          <div className="flex items-center gap-1.5">
            <Battery className={`w-3.5 h-3.5 ${color}`} />
            <span className={color}>{row.battery}</span>
          </div>
        );
      },
    },
    {
      key: 'actions',
      label: 'Actions',
      render: (row: Device) => (
        <Link
          href={`/devices/${row.id}`}
          className="inline-flex items-center gap-1 px-2.5 py-1.5 text-[12px] font-medium text-green-action bg-green-action/10 border border-green-action/20 rounded-lg hover:bg-green-action/20 transition-colors"
        >
          <Eye className="w-3.5 h-3.5" />
          View
        </Link>
      ),
    },
  ];

  return (
    <AdminLayout>
      <PageHeader title="Devices" description="Monitor and manage IoT devices" />

      <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-6">
        <StatCard icon={<Cpu className="w-5 h-5" />} label="Total Devices" value={String(totalDevices)} />
        <StatCard icon={<Wifi className="w-5 h-5" />} label="Online" value={String(onlineDevices)} />
        <StatCard icon={<WifiOff className="w-5 h-5" />} label="Offline" value={String(offlineDevices)} />
        <StatCard icon={<AlertTriangle className="w-5 h-5" />} label="Warning" value={String(warningDevices)} />
        <StatCard icon={<AlertTriangle className="w-5 h-5" />} label="Critical" value={String(criticalDevices)} />
      </div>

      <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <SearchBar value={search} onChange={setSearch} placeholder="Search devices..." />
        <FilterBar filters={filters} active={activeFilter} onChange={setActiveFilter} />
      </div>

      {filteredDevices.length > 0 ? (
        <div className="bg-white border border-neutral-200 rounded-2xl p-1">
          <DataTable columns={columns} data={filteredDevices} />
        </div>
      ) : (
        <EmptyState
          icon={<Cpu className="w-12 h-12 text-neutral-500" />}
          title="No devices found"
          description="Try adjusting your search or filter criteria."
        />
      )}
    </AdminLayout>
  );
}
