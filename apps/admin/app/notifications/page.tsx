'use client';

import { useState } from 'react';
import { Bell, Shield, Cpu, Building2, Settings, CheckCheck, Trash2, Eye } from 'lucide-react';
import { AdminLayout } from '../components/AdminLayout';
import { PageHeader } from '../components/PageHeader';
import { FilterBar } from '../components/FilterBar';
import { EmptyState } from '../components/EmptyState';
import { mockNotifications, type Notification } from '../lib/data';

const filters = ['All', 'Unread', 'Security', 'Device', 'Business', 'System'];

const typeConfig: Record<Notification['type'], { icon: React.ReactNode; color: string }> = {
  security: { icon: <Shield className="w-5 h-5" />, color: 'text-yellow-400' },
  device: { icon: <Cpu className="w-5 h-5" />, color: 'text-blue-400' },
  business: { icon: <Building2 className="w-5 h-5" />, color: 'text-green-400' },
  system: { icon: <Settings className="w-5 h-5" />, color: 'text-gray-400' },
};

export default function NotificationsPage() {
  const [notifications, setNotifications] = useState<Notification[]>(mockNotifications);
  const [activeFilter, setActiveFilter] = useState('All');

  const filteredNotifications = notifications.filter((n) => {
    if (activeFilter === 'All') return true;
    if (activeFilter === 'Unread') return !n.read;
    return n.type === activeFilter.toLowerCase();
  });

  const markAsRead = (id: string) => {
    setNotifications((prev) =>
      prev.map((n) => (n.id === id ? { ...n, read: true } : n))
    );
  };

  const markAllAsRead = () => {
    setNotifications((prev) => prev.map((n) => ({ ...n, read: true })));
  };

  const deleteNotification = (id: string) => {
    setNotifications((prev) => prev.filter((n) => n.id !== id));
  };

  return (
    <AdminLayout>
      <PageHeader
        title="Notifications"
        description="View and manage platform notifications"
        action={
          <button
            onClick={markAllAsRead}
            className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white/[0.05] border border-white/[0.08] text-[13px] font-medium text-muted-light hover:text-white hover:border-white/[0.15] transition-all"
          >
            <CheckCheck className="w-4 h-4" />
            Mark all as read
          </button>
        }
      />

      <FilterBar filters={filters} active={activeFilter} onChange={setActiveFilter} />

      <div className="mt-6 space-y-3">
        {filteredNotifications.length === 0 ? (
          <EmptyState
            icon={<Bell className="w-6 h-6" />}
            title="No notifications"
            description="There are no notifications matching the current filter."
          />
        ) : (
          filteredNotifications.map((notification) => {
            const config = typeConfig[notification.type];
            return (
              <div
                key={notification.id}
                className={`flex items-start gap-4 bg-surface-3 border border-white/[0.06] rounded-xl p-4 transition-all ${
                  !notification.read ? 'bg-white/[0.03]' : ''
                }`}
              >
                <div className={`mt-0.5 ${config.color}`}>
                  {config.icon}
                </div>

                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2">
                    <h4
                      className={`text-[14px] ${
                        !notification.read ? 'font-semibold text-white' : 'font-medium text-muted-light'
                      }`}
                    >
                      {notification.title}
                    </h4>
                    {!notification.read && (
                      <span className="w-2 h-2 bg-neon rounded-full flex-shrink-0" />
                    )}
                  </div>
                  <p className="text-[13px] text-muted mt-0.5">{notification.description}</p>
                  <p className="text-[12px] text-muted/60 mt-1">{notification.time}</p>
                </div>

                <div className="flex items-center gap-1 flex-shrink-0">
                  {!notification.read && (
                    <button
                      onClick={() => markAsRead(notification.id)}
                      className="p-2 rounded-lg hover:bg-white/[0.05] text-muted hover:text-white transition-all"
                      title="Mark as read"
                    >
                      <Eye className="w-4 h-4" />
                    </button>
                  )}
                  <button
                    onClick={() => deleteNotification(notification.id)}
                    className="p-2 rounded-lg hover:bg-white/[0.05] text-muted hover:text-red-400 transition-all"
                    title="Delete"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
            );
          })
        )}
      </div>
    </AdminLayout>
  );
}
