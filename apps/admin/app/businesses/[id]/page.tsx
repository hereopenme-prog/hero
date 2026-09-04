'use client';

import Link from 'next/link';
import { useParams } from 'next/navigation';
import { ArrowLeft, Building2, Mail, Phone, MapPin, Cpu, Calendar } from 'lucide-react';
import { AdminLayout } from '../../components/AdminLayout';
import { PageHeader } from '../../components/PageHeader';
import { StatusBadge, getStatusVariant } from '../../components/StatusBadge';
import { mockBusinesses } from '../../lib/data';

export default function BusinessDetailPage() {
  const params = useParams();
  const business = mockBusinesses.find((b) => b.id === params.id);

  if (!business) {
    return (
      <AdminLayout>
        <div className="flex flex-col items-center justify-center py-16 text-center">
          <h2 className="text-[18px] font-bold text-green-forest mb-2">Business not found</h2>
          <p className="text-[13px] text-neutral-500 mb-6">The business you are looking for does not exist.</p>
          <Link
            href="/businesses"
            className="bg-green-action text-white rounded-lg px-4 py-2 text-[13px] font-bold hover:bg-green-action/90 transition-colors"
          >
            Back to Businesses
          </Link>
        </div>
      </AdminLayout>
    );
  }

  return (
    <AdminLayout>
      <Link
        href="/businesses"
        className="inline-flex items-center gap-2 text-[13px] text-neutral-500 hover:text-black transition-colors mb-6"
      >
        <ArrowLeft className="h-4 w-4" />
        Back to Businesses
      </Link>

      <div className="flex items-start justify-between mb-8">
        <div>
          <div className="flex items-center gap-3 mb-1">
            <h1 className="text-[22px] font-bold text-green-forest">{business.name}</h1>
            <StatusBadge label={business.status} variant={getStatusVariant(business.status)} />
          </div>
          <p className="text-[13px] text-neutral-500">{business.type} Business</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="rounded-xl border border-neutral-200 bg-neutral-50 p-5">
          <div className="flex items-center gap-2 mb-4">
            <div className="rounded-lg bg-green-action/10 p-2">
              <Building2 className="h-4 w-4 text-green-action" />
            </div>
            <h3 className="text-[13px] font-semibold text-green-forest">Business Info</h3>
          </div>
          <div className="space-y-3">
            <div>
              <p className="text-[11px] text-neutral-500 uppercase tracking-wider">Name</p>
              <p className="text-[13px] text-black font-medium">{business.name}</p>
            </div>
            <div>
              <p className="text-[11px] text-neutral-500 uppercase tracking-wider">Type</p>
              <p className="text-[13px] text-black font-medium">{business.type}</p>
            </div>
            <div>
              <p className="text-[11px] text-neutral-500 uppercase tracking-wider">Created</p>
              <div className="flex items-center gap-1.5">
                <Calendar className="h-3.5 w-3.5 text-neutral-500" />
                <p className="text-[13px] text-black font-medium">{business.createdAt}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="rounded-xl border border-neutral-200 bg-neutral-50 p-5">
          <div className="flex items-center gap-2 mb-4">
            <div className="rounded-lg bg-blue-500/10 p-2">
              <Mail className="h-4 w-4 text-blue-400" />
            </div>
            <h3 className="text-[13px] font-semibold text-green-forest">Owner Info</h3>
          </div>
          <div className="space-y-3">
            <div>
              <p className="text-[11px] text-neutral-500 uppercase tracking-wider">Owner</p>
              <p className="text-[13px] text-black font-medium">{business.owner}</p>
            </div>
            <div>
              <p className="text-[11px] text-neutral-500 uppercase tracking-wider">Email</p>
              <div className="flex items-center gap-1.5">
                <Mail className="h-3.5 w-3.5 text-neutral-500" />
                <p className="text-[13px] text-black font-medium">{business.email}</p>
              </div>
            </div>
            <div>
              <p className="text-[11px] text-neutral-500 uppercase tracking-wider">Phone</p>
              <div className="flex items-center gap-1.5">
                <Phone className="h-3.5 w-3.5 text-neutral-500" />
                <p className="text-[13px] text-black font-medium">{business.phone}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="rounded-xl border border-neutral-200 bg-neutral-50 p-5">
          <div className="flex items-center gap-2 mb-4">
            <div className="rounded-lg bg-emerald-500/10 p-2">
              <MapPin className="h-4 w-4 text-emerald-400" />
            </div>
            <h3 className="text-[13px] font-semibold text-green-forest">Location</h3>
          </div>
          <div className="space-y-3">
            <div>
              <p className="text-[11px] text-neutral-500 uppercase tracking-wider">City</p>
              <p className="text-[13px] text-black font-medium">{business.city}</p>
            </div>
            <div>
              <p className="text-[11px] text-neutral-500 uppercase tracking-wider">State</p>
              <p className="text-[13px] text-black font-medium">{business.state}</p>
            </div>
          </div>
        </div>

        <div className="rounded-xl border border-neutral-200 bg-neutral-50 p-5">
          <div className="flex items-center gap-2 mb-4">
            <div className="rounded-lg bg-purple-500/10 p-2">
              <Cpu className="h-4 w-4 text-purple-400" />
            </div>
            <h3 className="text-[13px] font-semibold text-green-forest">Devices</h3>
          </div>
          <div className="space-y-3">
            <div>
              <p className="text-[11px] text-neutral-500 uppercase tracking-wider">Count</p>
              <p className="text-[13px] text-black font-medium">{business.devices} devices</p>
            </div>
            <div>
              <p className="text-[11px] text-neutral-500 uppercase tracking-wider">Status</p>
              <StatusBadge label={business.status} variant={getStatusVariant(business.status)} />
            </div>
          </div>
        </div>
      </div>
    </AdminLayout>
  );
}
