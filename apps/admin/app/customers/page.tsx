'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Users, Eye, Edit, Trash2 } from 'lucide-react';
import { AdminLayout } from '../components/AdminLayout';
import { PageHeader } from '../components/PageHeader';
import { SearchBar } from '../components/SearchBar';
import { FilterBar } from '../components/FilterBar';
import { DataTable } from '../components/DataTable';
import { StatusBadge, getStatusVariant } from '../components/StatusBadge';
import { EmptyState } from '../components/EmptyState';
import { mockCustomers, type Customer } from '../lib/data';

const filters = ['All', 'Active', 'Inactive', 'New'];

export default function CustomersPage() {
  const [search, setSearch] = useState('');
  const [activeFilter, setActiveFilter] = useState('All');

  const filteredCustomers = mockCustomers.filter((customer) => {
    const matchesSearch = customer.name.toLowerCase().includes(search.toLowerCase());
    const matchesFilter =
      activeFilter === 'All' ||
      customer.status.toLowerCase() === activeFilter.toLowerCase();
    return matchesSearch && matchesFilter;
  });

  const totalCustomers = mockCustomers.length;
  const activeCustomers = mockCustomers.filter((c) => c.status === 'Active').length;
  const newThisMonth = mockCustomers.filter((c) => c.status === 'New').length;

  const columns = [
    { header: 'Customer', accessor: (row: Customer) => row.name },
    { header: 'Email', accessor: (row: Customer) => row.email },
    { header: 'Phone', accessor: (row: Customer) => row.phone },
    { header: 'Business', accessor: (row: Customer) => row.business },
    {
      header: 'Status',
      accessor: (row: Customer) => <StatusBadge label={row.status} variant={getStatusVariant(row.status)} />,
    },
    { header: 'Joined', accessor: (row: Customer) => row.joined },
    { header: 'Last Active', accessor: (row: Customer) => row.lastActive },
    {
      header: 'Actions',
      accessor: (row: Customer) => (
        <div className="flex items-center gap-2">
          <Link href={`/customers/${row.id}`} className="p-1 hover:bg-gray-100 rounded">
            <Eye className="h-4 w-4 text-gray-500" />
          </Link>
          <button className="p-1 hover:bg-gray-100 rounded">
            <Edit className="h-4 w-4 text-gray-500" />
          </button>
          <button className="p-1 hover:bg-red-50 rounded">
            <Trash2 className="h-4 w-4 text-red-500" />
          </button>
        </div>
      ),
    },
  ];

  return (
    <AdminLayout>
      <PageHeader
        title="Customers"
        description="Manage customer accounts and engagement"
      />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <div className="rounded-lg border bg-white p-4 shadow-sm">
          <div className="flex items-center gap-3">
            <div className="rounded-full bg-blue-50 p-2">
              <Users className="h-5 w-5 text-blue-600" />
            </div>
            <div>
              <p className="text-sm text-gray-500">Total Customers</p>
              <p className="text-2xl font-semibold">{totalCustomers}</p>
            </div>
          </div>
        </div>
        <div className="rounded-lg border bg-white p-4 shadow-sm">
          <div className="flex items-center gap-3">
            <div className="rounded-full bg-green-50 p-2">
              <Users className="h-5 w-5 text-green-600" />
            </div>
            <div>
              <p className="text-sm text-gray-500">Active Customers</p>
              <p className="text-2xl font-semibold">{activeCustomers}</p>
            </div>
          </div>
        </div>
        <div className="rounded-lg border bg-white p-4 shadow-sm">
          <div className="flex items-center gap-3">
            <div className="rounded-full bg-purple-50 p-2">
              <Users className="h-5 w-5 text-purple-600" />
            </div>
            <div>
              <p className="text-sm text-gray-500">New This Month</p>
              <p className="text-2xl font-semibold">{newThisMonth}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <SearchBar value={search} onChange={setSearch} />
        <FilterBar filters={filters} active={activeFilter} onChange={setActiveFilter} />
      </div>

      {filteredCustomers.length > 0 ? (
        <DataTable columns={columns} data={filteredCustomers} />
      ) : (
        <EmptyState
          icon={<Users className="h-12 w-12 text-gray-300" />}
          title="No customers found"
          description="Try adjusting your search or filter criteria."
        />
      )}
    </AdminLayout>
  );
}
