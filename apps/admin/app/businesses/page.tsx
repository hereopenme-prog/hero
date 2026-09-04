'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Building2, Plus, Eye, Edit, Trash2 } from 'lucide-react';
import { AdminLayout } from '../components/AdminLayout';
import { PageHeader } from '../components/PageHeader';
import { SearchBar } from '../components/SearchBar';
import { FilterBar } from '../components/FilterBar';
import { DataTable } from '../components/DataTable';
import { StatusBadge, getStatusVariant } from '../components/StatusBadge';
import { EmptyState } from '../components/EmptyState';
import { mockBusinesses, type Business } from '../lib/data';

const filters = ['All', 'Active', 'Inactive', 'Pending'];

export default function BusinessesPage() {
  const [search, setSearch] = useState('');
  const [activeFilter, setActiveFilter] = useState('All');

  const filteredBusinesses = mockBusinesses.filter((business) => {
    const matchesSearch = business.name.toLowerCase().includes(search.toLowerCase());
    const matchesFilter =
      activeFilter === 'All' ||
      business.status.toLowerCase() === activeFilter.toLowerCase();
    return matchesSearch && matchesFilter;
  });

  const columns = [
    { key: 'business', label: 'Business', render: (row: Business) => (
      <div className="flex items-center gap-2">
        <Building2 className="h-4 w-4 text-muted" />
        <span className="font-medium text-white">{row.name}</span>
      </div>
    )},
    { key: 'owner', label: 'Owner', render: (row: Business) => row.owner },
    { key: 'email', label: 'Email', render: (row: Business) => row.email },
    { key: 'phone', label: 'Phone', render: (row: Business) => row.phone },
    { key: 'city', label: 'City', render: (row: Business) => row.city },
    { key: 'devices', label: 'Devices', render: (row: Business) => row.devices },
    { key: 'status', label: 'Status', render: (row: Business) => (
      <StatusBadge label={row.status} variant={getStatusVariant(row.status)} />
    )},
    { key: 'createdAt', label: 'Created', render: (row: Business) => row.createdAt },
    { key: 'actions', label: 'Actions', render: (row: Business) => (
      <div className="flex items-center gap-2">
        <Link href={`/businesses/${row.id}`} className="p-1 hover:bg-white/[0.05] rounded">
          <Eye className="h-4 w-4 text-muted-light" />
        </Link>
        <button className="p-1 hover:bg-white/[0.05] rounded">
          <Edit className="h-4 w-4 text-muted-light" />
        </button>
        <button className="p-1 hover:bg-red-500/10 rounded">
          <Trash2 className="h-4 w-4 text-red-400" />
        </button>
      </div>
    )},
  ];

  return (
    <AdminLayout>
      <PageHeader
        title="Businesses"
        description="Manage and monitor all registered businesses"
        action={
          <button className="bg-neon text-surface-0 rounded-lg px-4 py-2 text-[13px] font-bold hover:bg-neon/90 transition-colors">
            + Add Business
          </button>
        }
      />

      <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <SearchBar value={search} onChange={setSearch} placeholder="Search businesses..." />
        <FilterBar filters={filters} active={activeFilter} onChange={setActiveFilter} />
      </div>

      {filteredBusinesses.length > 0 ? (
        <DataTable columns={columns as any} data={filteredBusinesses as any} />
      ) : (
        <EmptyState
          icon={<Building2 className="h-12 w-12 text-gray-300" />}
          title="No businesses found"
          description="Try adjusting your search or filter criteria."
        />
      )}
    </AdminLayout>
  );
}
