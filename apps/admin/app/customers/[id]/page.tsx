'use client';

import Link from 'next/link';
import { useParams } from 'next/navigation';
import { ArrowLeft, User, Mail, Phone, Building2, Clock } from 'lucide-react';
import { AdminLayout } from '../../components/AdminLayout';
import { PageHeader } from '../../components/PageHeader';
import { StatusBadge, getStatusVariant } from '../../components/StatusBadge';
import { mockCustomers } from '../../lib/data';

export default function CustomerDetailPage() {
  const { id } = useParams();
  const customer = mockCustomers.find((c) => c.id === id);

  if (!customer) {
    return (
      <AdminLayout>
        <div className="text-center py-20">
          <p className="text-gray-500">Customer not found.</p>
          <Link href="/customers" className="text-blue-600 hover:underline mt-2 inline-block">
            Back to Customers
          </Link>
        </div>
      </AdminLayout>
    );
  }

  return (
    <AdminLayout>
      <Link
        href="/customers"
        className="inline-flex items-center gap-1 text-sm text-gray-500 hover:text-gray-700 mb-4"
      >
        <ArrowLeft className="h-4 w-4" />
        Back to Customers
      </Link>

      <PageHeader
        title={customer.name}
        description={`Customer ID: ${customer.id}`}
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Profile Card */}
        <div className="rounded-lg border bg-white p-6 shadow-sm">
          <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
            <User className="h-5 w-5 text-gray-400" />
            Profile
          </h3>
          <div className="space-y-3">
            <div>
              <p className="text-sm text-gray-500">Name</p>
              <p className="font-medium">{customer.name}</p>
            </div>
            <div>
              <p className="text-sm text-gray-500">Status</p>
              <StatusBadge label={customer.status} variant={getStatusVariant(customer.status)} />
            </div>
          </div>
        </div>

        {/* Contact Card */}
        <div className="rounded-lg border bg-white p-6 shadow-sm">
          <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
            <Mail className="h-5 w-5 text-gray-400" />
            Contact
          </h3>
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <Mail className="h-4 w-4 text-gray-400" />
              <span className="text-sm text-gray-700">{customer.email}</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="h-4 w-4 text-gray-400" />
              <span className="text-sm text-gray-700">{customer.phone}</span>
            </div>
          </div>
        </div>

        {/* Activity Card */}
        <div className="rounded-lg border bg-white p-6 shadow-sm">
          <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
            <Clock className="h-5 w-5 text-gray-400" />
            Activity
          </h3>
          <div className="space-y-3">
            <div>
              <p className="text-sm text-gray-500">Joined</p>
              <p className="font-medium">{customer.joined}</p>
            </div>
            <div>
              <p className="text-sm text-gray-500">Last Active</p>
              <p className="font-medium">{customer.lastActive}</p>
            </div>
          </div>
        </div>

        {/* Business Card */}
        <div className="rounded-lg border bg-white p-6 shadow-sm">
          <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
            <Building2 className="h-5 w-5 text-gray-400" />
            Associated Business
          </h3>
          <div>
            <p className="text-sm text-gray-500">Business</p>
            <p className="font-medium">{customer.business}</p>
          </div>
        </div>
      </div>
    </AdminLayout>
  );
}
