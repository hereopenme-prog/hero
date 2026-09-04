'use client'

import { useState } from 'react'
import { AdminLayout } from '../components/AdminLayout'
import { PageHeader } from '../components/PageHeader'
import {
  User,
  Shield,
  Bell,
  Settings,
  Save,
  Eye,
  EyeOff,
} from 'lucide-react'

export default function SettingsPage() {
  const [name, setName] = useState('Admin User')
  const [email, setEmail] = useState('admin@nineown.com')
  const [phone, setPhone] = useState('+91 98765 43210')

  const [currentPassword, setCurrentPassword] = useState('')
  const [newPassword, setNewPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [showCurrentPassword, setShowCurrentPassword] = useState(false)
  const [showNewPassword, setShowNewPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const [twoFactorEnabled, setTwoFactorEnabled] = useState(false)

  const [emailNotifications, setEmailNotifications] = useState(true)
  const [securityAlerts, setSecurityAlerts] = useState(true)
  const [deviceAlerts, setDeviceAlerts] = useState(true)
  const [systemNotifications, setSystemNotifications] = useState(false)

  const [timezone, setTimezone] = useState('IST')
  const [language, setLanguage] = useState('English')
  const [dateFormat, setDateFormat] = useState('DD/MM/YYYY')

  const inputClasses =
    'w-full bg-white/[0.03] border border-white/[0.08] rounded-xl px-4 py-2.5 text-[13px] text-white placeholder:text-muted focus:outline-none focus:border-neon/30 focus:ring-1 focus:ring-neon/20'
  const labelClasses = 'text-[13px] font-medium text-muted-light mb-2 block'
  const sectionHeadingClasses = 'text-[15px] font-bold text-white mb-4'
  const saveButtonClasses =
    'bg-neon text-surface-0 px-4 py-2 rounded-lg text-[13px] font-bold hover:bg-neon-600 transition-all'

  return (
    <AdminLayout>
      <PageHeader
        title="Settings"
        description="Manage your account and platform settings"
      />

      <div className="space-y-8">
        {/* ACCOUNT */}
        <div className="bg-surface-3 border border-white/[0.06] rounded-2xl p-6">
          <div className="flex items-center gap-2 mb-4">
            <User className="w-4 h-4 text-neon" />
            <h2 className={sectionHeadingClasses}>Account</h2>
          </div>

          <div className="space-y-4">
            <div>
              <label className={labelClasses}>Name</label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className={inputClasses}
              />
            </div>
            <div>
              <label className={labelClasses}>Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className={inputClasses}
              />
            </div>
            <div>
              <label className={labelClasses}>Phone</label>
              <input
                type="text"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className={inputClasses}
              />
            </div>
            <button className={saveButtonClasses}>
              <Save className="w-3 h-3 inline mr-1.5" />
              Save
            </button>
          </div>
        </div>

        {/* SECURITY */}
        <div className="bg-surface-3 border border-white/[0.06] rounded-2xl p-6">
          <div className="flex items-center gap-2 mb-4">
            <Shield className="w-4 h-4 text-neon" />
            <h2 className={sectionHeadingClasses}>Security</h2>
          </div>

          <div className="space-y-4">
            <div>
              <label className={labelClasses}>Current Password</label>
              <div className="relative">
                <input
                  type={showCurrentPassword ? 'text' : 'password'}
                  value={currentPassword}
                  onChange={(e) => setCurrentPassword(e.target.value)}
                  placeholder="Enter current password"
                  className={inputClasses}
                />
                <button
                  type="button"
                  onClick={() => setShowCurrentPassword(!showCurrentPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-muted hover:text-white"
                >
                  {showCurrentPassword ? (
                    <EyeOff className="w-4 h-4" />
                  ) : (
                    <Eye className="w-4 h-4" />
                  )}
                </button>
              </div>
            </div>
            <div>
              <label className={labelClasses}>New Password</label>
              <div className="relative">
                <input
                  type={showNewPassword ? 'text' : 'password'}
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                  placeholder="Enter new password"
                  className={inputClasses}
                />
                <button
                  type="button"
                  onClick={() => setShowNewPassword(!showNewPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-muted hover:text-white"
                >
                  {showNewPassword ? (
                    <EyeOff className="w-4 h-4" />
                  ) : (
                    <Eye className="w-4 h-4" />
                  )}
                </button>
              </div>
            </div>
            <div>
              <label className={labelClasses}>Confirm Password</label>
              <div className="relative">
                <input
                  type={showConfirmPassword ? 'text' : 'password'}
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  placeholder="Confirm new password"
                  className={inputClasses}
                />
                <button
                  type="button"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-muted hover:text-white"
                >
                  {showConfirmPassword ? (
                    <EyeOff className="w-4 h-4" />
                  ) : (
                    <Eye className="w-4 h-4" />
                  )}
                </button>
              </div>
            </div>
            <button className={saveButtonClasses}>Change Password</button>

            <div className="flex items-center justify-between pt-2">
              <div>
                <p className="text-[13px] font-medium text-white">
                  Two-Factor Authentication
                </p>
                <p className="text-[12px] text-muted mt-0.5">
                  Add an extra layer of security to your account
                </p>
              </div>
              <button
                type="button"
                onClick={() => setTwoFactorEnabled(!twoFactorEnabled)}
                className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                  twoFactorEnabled ? 'bg-neon' : 'bg-white/[0.1]'
                }`}
              >
                <span
                  className={`inline-block h-4 w-4 rounded-full bg-white transition-transform ${
                    twoFactorEnabled ? 'translate-x-6' : 'translate-x-1'
                  }`}
                />
              </button>
            </div>
          </div>
        </div>

        {/* NOTIFICATIONS */}
        <div className="bg-surface-3 border border-white/[0.06] rounded-2xl p-6">
          <div className="flex items-center gap-2 mb-4">
            <Bell className="w-4 h-4 text-neon" />
            <h2 className={sectionHeadingClasses}>Notifications</h2>
          </div>

          <div className="space-y-4">
            {[
              {
                label: 'Email Notifications',
                desc: 'Receive email updates about your account activity',
                value: emailNotifications,
                onChange: setEmailNotifications,
              },
              {
                label: 'Security Alerts',
                desc: 'Get notified about suspicious login attempts',
                value: securityAlerts,
                onChange: setSecurityAlerts,
              },
              {
                label: 'Device Alerts',
                desc: 'Notifications for new device sign-ins',
                value: deviceAlerts,
                onChange: setDeviceAlerts,
              },
              {
                label: 'System Notifications',
                desc: 'Platform updates and maintenance notices',
                value: systemNotifications,
                onChange: setSystemNotifications,
              },
            ].map((item) => (
              <div key={item.label} className="flex items-center justify-between">
                <div>
                  <p className="text-[13px] font-medium text-white">
                    {item.label}
                  </p>
                  <p className="text-[12px] text-muted mt-0.5">{item.desc}</p>
                </div>
                <button
                  type="button"
                  onClick={() => item.onChange(!item.value)}
                  className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                    item.value ? 'bg-neon' : 'bg-white/[0.1]'
                  }`}
                >
                  <span
                    className={`inline-block h-4 w-4 rounded-full bg-white transition-transform ${
                      item.value ? 'translate-x-6' : 'translate-x-1'
                    }`}
                  />
                </button>
              </div>
            ))}

            <button className={saveButtonClasses}>
              <Save className="w-3 h-3 inline mr-1.5" />
              Save Preferences
            </button>
          </div>
        </div>

        {/* SYSTEM */}
        <div className="bg-surface-3 border border-white/[0.06] rounded-2xl p-6">
          <div className="flex items-center gap-2 mb-4">
            <Settings className="w-4 h-4 text-neon" />
            <h2 className={sectionHeadingClasses}>System</h2>
          </div>

          <div className="space-y-4">
            <div>
              <label className={labelClasses}>Timezone</label>
              <select
                value={timezone}
                onChange={(e) => setTimezone(e.target.value)}
                className={inputClasses}
              >
                <option value="IST">IST (Indian Standard Time)</option>
                <option value="UTC">UTC (Coordinated Universal Time)</option>
                <option value="EST">EST (Eastern Standard Time)</option>
                <option value="PST">PST (Pacific Standard Time)</option>
              </select>
            </div>
            <div>
              <label className={labelClasses}>Language</label>
              <select
                value={language}
                onChange={(e) => setLanguage(e.target.value)}
                className={inputClasses}
              >
                <option value="English">English</option>
                <option value="Hindi">Hindi</option>
              </select>
            </div>
            <div>
              <label className={labelClasses}>Date Format</label>
              <select
                value={dateFormat}
                onChange={(e) => setDateFormat(e.target.value)}
                className={inputClasses}
              >
                <option value="DD/MM/YYYY">DD/MM/YYYY</option>
                <option value="MM/DD/YYYY">MM/DD/YYYY</option>
                <option value="YYYY-MM-DD">YYYY-MM-DD</option>
              </select>
            </div>
            <button className={saveButtonClasses}>
              <Save className="w-3 h-3 inline mr-1.5" />
              Save
            </button>
          </div>
        </div>

        {/* DANGER ZONE */}
        <div className="bg-surface-3 border border-red-500/20 rounded-2xl p-6">
          <h2 className="text-[15px] font-bold text-red-400 mb-4">
            Danger Zone
          </h2>

          <div className="space-y-3">
            <button className="w-full bg-red-500/10 border border-red-500/20 text-red-400 px-4 py-2.5 rounded-lg text-[13px] font-bold hover:bg-red-500/20 transition-all">
              Deactivate Account
            </button>
            <button className="w-full bg-red-500 text-white px-4 py-2.5 rounded-lg text-[13px] font-bold hover:bg-red-600 transition-all">
              Delete Account
            </button>
          </div>
        </div>
      </div>
    </AdminLayout>
  )
}
