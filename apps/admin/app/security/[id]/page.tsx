'use client';

import Link from 'next/link';
import { useParams } from 'next/navigation';
import { ArrowLeft, Shield, AlertTriangle, Building2, Cpu, Clock, CheckCircle } from 'lucide-react';
import { AdminLayout } from '../../components/AdminLayout';
import { PageHeader } from '../../components/PageHeader';
import { StatusBadge, getStatusVariant } from '../../components/StatusBadge';
import { mockAlerts } from '../../lib/data';

export default function SecurityAlertDetailPage() {
  const params = useParams();
  const alertId = params.id as string;
  const alert = mockAlerts.find((a) => a.id === alertId);

  if (!alert) {
    return (
      <AdminLayout>
        <div className="flex flex-col items-center justify-center py-16 text-center">
          <Shield className="w-14 h-14 text-muted mb-4" />
          <h3 className="text-[15px] font-semibold text-white mb-1">Alert not found</h3>
          <p className="text-[13px] text-muted mb-6">The security alert you're looking for doesn't exist.</p>
          <Link
            href="/security"
            className="inline-flex items-center gap-2 px-4 py-2 text-[13px] font-medium text-neon bg-neon/10 border border-neon/20 rounded-lg hover:bg-neon/20 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Security
          </Link>
        </div>
      </AdminLayout>
    );
  }

  const getSeverityVariant = (severity: string): 'success' | 'warning' | 'danger' | 'info' | 'default' => {
    switch (severity) {
      case 'Critical': return 'danger';
      case 'High': return 'warning';
      case 'Medium': return 'info';
      case 'Low': return 'success';
      default: return 'default';
    }
  };

  return (
    <AdminLayout>
      <Link
        href="/security"
        className="inline-flex items-center gap-2 text-[13px] text-muted-light hover:text-white transition-colors mb-6"
      >
        <ArrowLeft className="w-4 h-4" />
        Back to Security
      </Link>

      <div className="flex items-start justify-between mb-8">
        <div className="flex items-center gap-3">
          <h1 className="text-[22px] font-bold text-white">{alert.title}</h1>
          <StatusBadge label={alert.severity} variant={getSeverityVariant(alert.severity)} />
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
        <div className="bg-surface-3 border border-white/[0.06] rounded-2xl p-6">
          <h3 className="text-[14px] font-semibold text-white mb-4 flex items-center gap-2">
            <AlertTriangle className="w-4 h-4 text-neon" />
            Alert Info
          </h3>
          <div className="space-y-3">
            <div className="flex justify-between">
              <span className="text-[13px] text-muted">Title</span>
              <span className="text-[13px] text-white font-medium">{alert.title}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-[13px] text-muted">Severity</span>
              <StatusBadge label={alert.severity} variant={getSeverityVariant(alert.severity)} />
            </div>
            <div className="flex justify-between">
              <span className="text-[13px] text-muted">Status</span>
              <StatusBadge label={alert.status} variant={getStatusVariant(alert.status)} />
            </div>
          </div>
        </div>

        <div className="bg-surface-3 border border-white/[0.06] rounded-2xl p-6">
          <h3 className="text-[14px] font-semibold text-white mb-4 flex items-center gap-2">
            <Building2 className="w-4 h-4 text-neon" />
            Location
          </h3>
          <div className="space-y-3">
            <div className="flex justify-between">
              <span className="text-[13px] text-muted">Business</span>
              <span className="text-[13px] text-white font-medium">{alert.business}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-[13px] text-muted">Device</span>
              <div className="flex items-center gap-1.5">
                <Cpu className="w-3.5 h-3.5 text-muted" />
                <span className="text-[13px] text-white font-medium">{alert.device}</span>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-surface-3 border border-white/[0.06] rounded-2xl p-6">
          <h3 className="text-[14px] font-semibold text-white mb-4 flex items-center gap-2">
            <Clock className="w-4 h-4 text-neon" />
            Timeline
          </h3>
          <div className="space-y-3">
            <div className="flex justify-between">
              <span className="text-[13px] text-muted">Time</span>
              <span className="text-[13px] text-white font-medium">{alert.time}</span>
            </div>
            <div>
              <span className="text-[13px] text-muted block mb-1">Description</span>
              <p className="text-[13px] text-white">{alert.description}</p>
            </div>
          </div>
        </div>
      </div>

      {alert.status !== 'Resolved' && (
        <div className="bg-surface-3 border border-white/[0.06] rounded-2xl p-6">
          <h3 className="text-[14px] font-semibold text-white mb-4">Resolution</h3>
          <p className="text-[13px] text-muted mb-4">Mark this alert as resolved once the issue has been addressed.</p>
          <button className="inline-flex items-center gap-2 px-4 py-2 text-[13px] font-medium text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 rounded-lg hover:bg-emerald-500/20 transition-colors">
            <CheckCircle className="w-4 h-4" />
            Mark as Resolved
          </button>
        </div>
      )}
    </AdminLayout>
  );
}
