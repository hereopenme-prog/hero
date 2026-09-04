'use client';

import Link from 'next/link';
import { useParams } from 'next/navigation';
import { ArrowLeft, Cpu, Thermometer, Battery, Wifi, Clock, Building2 } from 'lucide-react';
import { AdminLayout } from '../../components/AdminLayout';
import { PageHeader } from '../../components/PageHeader';
import { StatusBadge, getStatusVariant } from '../../components/StatusBadge';
import { mockDevices } from '../../lib/data';

export default function DeviceDetailPage() {
  const { id } = useParams();
  const device = mockDevices.find((d) => d.id === id);

  if (!device) {
    return (
      <AdminLayout>
        <div className="text-center py-20">
          <p className="text-neutral-500">Device not found.</p>
          <Link href="/devices" className="text-green-action hover:underline mt-2 inline-block text-sm">
            Back to Devices
          </Link>
        </div>
      </AdminLayout>
    );
  }

  const batteryLevel = parseInt(device.battery.replace('%', ''), 10);
  const batteryColor = batteryLevel <= 20 ? 'text-red-400' : batteryLevel <= 50 ? 'text-yellow-400' : 'text-emerald-400';

  return (
    <AdminLayout>
      <Link
        href="/devices"
        className="inline-flex items-center gap-1.5 text-[13px] text-neutral-500 hover:text-black mb-4 transition-colors"
      >
        <ArrowLeft className="w-4 h-4" />
        Back to Devices
      </Link>

      <PageHeader
        title={device.name}
        description={`Device ID: ${device.deviceId}`}
      />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        {/* Device Info */}
        <div className="bg-white border border-neutral-200 rounded-2xl p-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 bg-green-action/10 border border-green-action/20 rounded-xl flex items-center justify-center text-green-action">
              <Cpu className="w-5 h-5" />
            </div>
            <h3 className="text-[15px] font-semibold text-green-forest">Device Info</h3>
          </div>
          <div className="space-y-3">
            <div>
              <p className="text-[11px] text-neutral-500 uppercase tracking-wider mb-1">Name</p>
              <p className="text-[13px] text-black font-medium">{device.name}</p>
            </div>
            <div>
              <p className="text-[11px] text-neutral-500 uppercase tracking-wider mb-1">Device ID</p>
              <p className="text-[13px] text-black font-mono">{device.deviceId}</p>
            </div>
            <div>
              <p className="text-[11px] text-neutral-500 uppercase tracking-wider mb-1">Type</p>
              <p className="text-[13px] text-black">{device.type}</p>
            </div>
            <div>
              <p className="text-[11px] text-neutral-500 uppercase tracking-wider mb-1">Business</p>
              <p className="text-[13px] text-black">{device.business}</p>
            </div>
          </div>
        </div>

        {/* Current Status */}
        <div className="bg-white border border-neutral-200 rounded-2xl p-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 bg-green-action/10 border border-green-action/20 rounded-xl flex items-center justify-center text-green-action">
              <Wifi className="w-5 h-5" />
            </div>
            <h3 className="text-[15px] font-semibold text-green-forest">Current Status</h3>
          </div>
          <div className="space-y-3">
            <div>
              <p className="text-[11px] text-neutral-500 uppercase tracking-wider mb-1">Status</p>
              <StatusBadge label={device.status} variant={getStatusVariant(device.status)} />
            </div>
            <div>
              <p className="text-[11px] text-neutral-500 uppercase tracking-wider mb-1">Temperature</p>
              <div className="flex items-center gap-2">
                <Thermometer className="w-4 h-4 text-neutral-500" />
                <p className="text-[13px] text-black font-medium">{device.temperature}</p>
              </div>
            </div>
            <div>
              <p className="text-[11px] text-neutral-500 uppercase tracking-wider mb-1">Battery</p>
              <div className="flex items-center gap-2">
                <Battery className={`w-4 h-4 ${batteryColor}`} />
                <p className={`text-[13px] font-medium ${batteryColor}`}>{device.battery}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Connection Info */}
        <div className="bg-white border border-neutral-200 rounded-2xl p-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 bg-green-action/10 border border-green-action/20 rounded-xl flex items-center justify-center text-green-action">
              <Clock className="w-5 h-5" />
            </div>
            <h3 className="text-[15px] font-semibold text-green-forest">Connection</h3>
          </div>
          <div className="space-y-3">
            <div>
              <p className="text-[11px] text-neutral-500 uppercase tracking-wider mb-1">Last Seen</p>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-neutral-500" />
                <p className="text-[13px] text-black font-medium">{device.lastSeen}</p>
              </div>
            </div>
            <div>
              <p className="text-[11px] text-neutral-500 uppercase tracking-wider mb-1">Network</p>
              <p className="text-[13px] text-black">WiFi - 2.4GHz</p>
            </div>
            <div>
              <p className="text-[11px] text-neutral-500 uppercase tracking-wider mb-1">Signal Strength</p>
              <div className="flex items-center gap-2">
                <Wifi className="w-4 h-4 text-emerald-400" />
                <p className="text-[13px] text-emerald-400 font-medium">Strong</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Monitoring Section */}
      <div className="bg-white border border-neutral-200 rounded-2xl p-6">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 bg-green-action/10 border border-green-action/20 rounded-xl flex items-center justify-center text-green-action">
            <Thermometer className="w-5 h-5" />
          </div>
          <h3 className="text-[15px] font-semibold text-green-forest">Sensor Readings</h3>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="bg-neutral-100 border border-neutral-200 rounded-xl p-4">
            <p className="text-[11px] text-neutral-500 uppercase tracking-wider mb-2">Temperature</p>
            <p className="text-[22px] font-bold text-black">{device.temperature}</p>
            <p className="text-[11px] text-neutral-500 mt-1">Normal range</p>
          </div>
          <div className="bg-neutral-100 border border-neutral-200 rounded-xl p-4">
            <p className="text-[11px] text-neutral-500 uppercase tracking-wider mb-2">Humidity</p>
            <p className="text-[22px] font-bold text-black">45%</p>
            <p className="text-[11px] text-neutral-500 mt-1">Optimal</p>
          </div>
          <div className="bg-neutral-100 border border-neutral-200 rounded-xl p-4">
            <p className="text-[11px] text-neutral-500 uppercase tracking-wider mb-2">Air Quality</p>
            <p className="text-[22px] font-bold text-black">Good</p>
            <p className="text-[11px] text-emerald-400 mt-1">AQI: 42</p>
          </div>
          <div className="bg-neutral-100 border border-neutral-200 rounded-xl p-4">
            <p className="text-[11px] text-neutral-500 uppercase tracking-wider mb-2">Light Level</p>
            <p className="text-[22px] font-bold text-black">320</p>
            <p className="text-[11px] text-neutral-500 mt-1">lux</p>
          </div>
        </div>
      </div>
    </AdminLayout>
  );
}
