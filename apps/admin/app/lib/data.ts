// Mock data layer — replace with real API calls when backend is connected

export interface Business {
  id: string;
  name: string;
  owner: string;
  email: string;
  phone: string;
  city: string;
  state: string;
  type: string;
  status: 'Active' | 'Inactive' | 'Pending';
  devices: number;
  createdAt: string;
}

export interface Customer {
  id: string;
  name: string;
  email: string;
  phone: string;
  business: string;
  status: 'Active' | 'Inactive' | 'New';
  joined: string;
  lastActive: string;
}

export interface Device {
  id: string;
  name: string;
  deviceId: string;
  business: string;
  type: string;
  status: 'Online' | 'Offline' | 'Warning' | 'Critical';
  temperature: string;
  lastSeen: string;
  battery: string;
}

export interface SecurityAlert {
  id: string;
  title: string;
  business: string;
  device: string;
  severity: 'Critical' | 'High' | 'Medium' | 'Low';
  time: string;
  status: 'Active' | 'Investigating' | 'Resolved';
  description: string;
}

export interface Notification {
  id: string;
  type: 'security' | 'device' | 'business' | 'system';
  title: string;
  description: string;
  time: string;
  read: boolean;
}

export const mockBusinesses: Business[] = [
  { id: '1', name: 'Sharma General Store', owner: 'Raj Sharma', email: 'raj@sharma.com', phone: '+91 98765 43210', city: 'Hyderabad', state: 'Telangana', type: 'Kirana', status: 'Active', devices: 3, createdAt: '2024-01-15' },
  { id: '2', name: 'Kumar Electronics', owner: 'Anil Kumar', email: 'anil@kumar.com', phone: '+91 98765 43211', city: 'Bangalore', state: 'Karnataka', type: 'Electronics', status: 'Active', devices: 5, createdAt: '2024-02-20' },
  { id: '3', name: 'City Medical Hall', owner: 'Dr. Priya', email: 'priya@citymed.com', phone: '+91 98765 43212', city: 'Chennai', state: 'Tamil Nadu', type: 'Medical', status: 'Active', devices: 2, createdAt: '2024-03-10' },
  { id: '4', name: 'Fresh Mart', owner: 'Suresh Reddy', email: 'suresh@freshmart.com', phone: '+91 98765 43213', city: 'Mumbai', state: 'Maharashtra', type: 'Grocery', status: 'Pending', devices: 1, createdAt: '2024-04-05' },
  { id: '5', name: 'Style Salon', owner: 'Meena Devi', email: 'meena@style.com', phone: '+91 98765 43214', city: 'Delhi', state: 'Delhi', type: 'Salon', status: 'Active', devices: 2, createdAt: '2024-05-12' },
  { id: '6', name: 'Quick Fix Repair', owner: 'Vikram Singh', email: 'vikram@quickfix.com', phone: '+91 98765 43215', city: 'Pune', state: 'Maharashtra', type: 'Repair', status: 'Inactive', devices: 0, createdAt: '2024-06-18' },
  { id: '7', name: 'Annapurna Restaurant', owner: 'Lakshmi Nair', email: 'lakshmi@anna.com', phone: '+91 98765 43216', city: 'Kochi', state: 'Kerala', type: 'Restaurant', status: 'Active', devices: 4, createdAt: '2024-07-22' },
  { id: '8', name: 'GreenLeaf Organics', owner: 'Amit Patel', email: 'amit@greenleaf.com', phone: '+91 98765 43217', city: 'Ahmedabad', state: 'Gujarat', type: 'Organic Store', status: 'Active', devices: 2, createdAt: '2024-08-30' },
];

export const mockCustomers: Customer[] = [
  { id: '1', name: 'Rahul Verma', email: 'rahul@email.com', phone: '+91 99887 76655', business: 'Sharma General Store', status: 'Active', joined: '2024-01-20', lastActive: '2 min ago' },
  { id: '2', name: 'Sneha Gupta', email: 'sneha@email.com', phone: '+91 99887 76656', business: 'Kumar Electronics', status: 'Active', joined: '2024-02-14', lastActive: '15 min ago' },
  { id: '3', name: 'Arjun Nair', email: 'arjun@email.com', phone: '+91 99887 76657', business: 'City Medical Hall', status: 'New', joined: '2024-03-01', lastActive: '1 hour ago' },
  { id: '4', name: 'Priyanka Das', email: 'priyanka@email.com', phone: '+91 99887 76658', business: 'Fresh Mart', status: 'Active', joined: '2024-03-15', lastActive: '3 hours ago' },
  { id: '5', name: 'Karthik Menon', email: 'karthik@email.com', phone: '+91 99887 76659', business: 'Style Salon', status: 'Inactive', joined: '2024-04-10', lastActive: '2 days ago' },
  { id: '6', name: 'Ananya Sharma', email: 'ananya@email.com', phone: '+91 99887 76660', business: 'Annapurna Restaurant', status: 'Active', joined: '2024-05-05', lastActive: '30 min ago' },
];

export const mockDevices: Device[] = [
  { id: '1', name: 'Front Door Sensor', deviceId: 'HO-2024-0001', business: 'Sharma General Store', type: 'Security', status: 'Online', temperature: '24°C', lastSeen: 'Just now', battery: '92%' },
  { id: '2', name: 'Main Camera', deviceId: 'HO-2024-0002', business: 'Kumar Electronics', type: 'Camera', status: 'Online', temperature: '26°C', lastSeen: 'Just now', battery: '88%' },
  { id: '3', name: 'Smoke Detector', deviceId: 'HO-2024-0003', business: 'City Medical Hall', type: 'Fire', status: 'Warning', temperature: '31°C', lastSeen: '5 min ago', battery: '45%' },
  { id: '4', name: 'Entry Sensor', deviceId: 'HO-2024-0004', business: 'Fresh Mart', type: 'Security', status: 'Offline', temperature: '--', lastSeen: '2 hours ago', battery: '12%' },
  { id: '5', name: 'Temperature Monitor', deviceId: 'HO-2024-0005', business: 'Annapurna Restaurant', type: 'Temperature', status: 'Online', temperature: '22°C', lastSeen: 'Just now', battery: '95%' },
  { id: '6', name: 'Motion Sensor', deviceId: 'HO-2024-0006', business: 'Style Salon', type: 'Security', status: 'Critical', temperature: '28°C', lastSeen: '1 min ago', battery: '8%' },
  { id: '7', name: 'Gas Detector', deviceId: 'HO-2024-0007', business: 'Annapurna Restaurant', type: 'Fire', status: 'Online', temperature: '23°C', lastSeen: 'Just now', battery: '78%' },
  { id: '8', name: 'Door Lock', deviceId: 'HO-2024-0008', business: 'GreenLeaf Organics', type: 'Security', status: 'Online', temperature: '25°C', lastSeen: 'Just now', battery: '85%' },
];

export const mockAlerts: SecurityAlert[] = [
  { id: '1', title: 'Motion Detected', business: 'Sharma General Store', device: 'Front Door Sensor', severity: 'High', time: '2 min ago', status: 'Active', description: 'Unusual motion detected near the front entrance after business hours.' },
  { id: '2', title: 'Temperature Warning', business: 'City Medical Hall', device: 'Smoke Detector', severity: 'Medium', time: '15 min ago', status: 'Investigating', description: 'Temperature reading exceeded normal threshold. Possible HVAC issue.' },
  { id: '3', title: 'Device Offline', business: 'Fresh Mart', device: 'Entry Sensor', severity: 'High', time: '1 hour ago', status: 'Active', description: 'Device has been offline for over 1 hour. Possible power or connectivity issue.' },
  { id: '4', title: 'Low Battery Critical', business: 'Style Salon', device: 'Motion Sensor', severity: 'Critical', time: '30 min ago', status: 'Active', description: 'Device battery below 10%. Immediate replacement required.' },
  { id: '5', title: 'Door Opened After Hours', business: 'Kumar Electronics', device: 'Main Camera', severity: 'Medium', time: '3 hours ago', status: 'Resolved', description: 'Entry detected outside business hours. Verified as authorized personnel.' },
  { id: '6', title: 'Smoke Detection', business: 'Annapurna Restaurant', device: 'Gas Detector', severity: 'Critical', time: '5 min ago', status: 'Investigating', description: 'Smoke particles detected in kitchen area. Investigating source.' },
];

export const mockNotifications: Notification[] = [
  { id: '1', type: 'security', title: 'Security Alert', description: 'Motion detected at Sharma General Store after hours.', time: '2 min ago', read: false },
  { id: '2', type: 'device', title: 'Device Offline', description: 'Fresh Mart entry sensor has been offline for 1 hour.', time: '1 hour ago', read: false },
  { id: '3', type: 'security', title: 'Temperature Warning', description: 'City Medical Hall smoke detector temperature spike.', time: '15 min ago', read: false },
  { id: '4', type: 'business', title: 'New Registration', description: 'GreenLeaf Organics has registered as a new business.', time: '2 hours ago', read: true },
  { id: '5', type: 'system', title: 'System Update', description: 'Platform maintenance scheduled for tonight 2 AM IST.', time: '4 hours ago', read: true },
  { id: '6', type: 'device', title: 'Battery Warning', description: 'Style Salon motion sensor battery below 10%.', time: '30 min ago', read: false },
  { id: '7', type: 'business', title: 'Subscription Renewed', description: 'Kumar Electronics renewed their Starter plan.', time: '1 day ago', read: true },
  { id: '8', type: 'security', title: 'Intrusion Attempt', description: 'Unauthorized access attempt at Fresh Mart.', time: '1 day ago', read: true },
];

export const mockStats = {
  totalBusinesses: 1234,
  activeBusinesses: 1100,
  totalCustomers: 45678,
  onlineDevices: 2100,
  securityAlerts: 23,
  pendingNotifications: 8,
};

export const mockEvents = [
  { type: 'security', message: 'Security alert at Sharma General Store', time: '2 min ago', severity: 'warning' },
  { type: 'fire', message: 'Temperature spike at City Medical Hall', time: '15 min ago', severity: 'critical' },
  { type: 'device', message: 'Device went offline: Fresh Mart Entry Sensor', time: '1 hour ago', severity: 'info' },
  { type: 'business', message: 'New business registered: GreenLeaf Organics', time: '2 hours ago', severity: 'success' },
  { type: 'security', message: 'Low battery alert: Style Salon Motion Sensor', time: '30 min ago', severity: 'warning' },
  { type: 'device', message: 'Device reconnected: Kumar Electronics Camera', time: '3 hours ago', severity: 'success' },
];
