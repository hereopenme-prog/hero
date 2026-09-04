import { PrismaClient, UserRole, ShopStatus, DeviceStatus, OfferStatus, AnnouncementType, AnnouncementStatus, SubscriptionStatus } from '@prisma/client';
import { hashPassword } from '@hereopen/auth';

const prisma = new PrismaClient();

async function main() {
  console.log('Seeding database...');

  // Clean existing data
  await prisma.auditLog.deleteMany();
  await prisma.notification.deleteMany();
  await prisma.offerView.deleteMany();
  await prisma.offerClick.deleteMany();
  await prisma.offer.deleteMany();
  await prisma.announcement.deleteMany();
  await prisma.customerShopFollow.deleteMany();
  await prisma.customer.deleteMany();
  await prisma.fireEvent.deleteMany();
  await prisma.securityEvent.deleteMany();
  await prisma.alert.deleteMany();
  await prisma.iotEvent.deleteMany();
  await prisma.deviceCommandLog.deleteMany();
  await prisma.deviceCommand.deleteMany();
  await prisma.deviceHeartbeat.deleteMany();
  await prisma.deviceSensor.deleteMany();
  await prisma.deviceFirmwareUpdate.deleteMany();
  await prisma.deviceCredential.deleteMany();
  await prisma.device.deleteMany();
  await prisma.shopStatusHistory.deleteMany();
  await prisma.shop.deleteMany();
  await prisma.businessUser.deleteMany();
  await prisma.subscription.deleteMany();
  await prisma.payment.deleteMany();
  await prisma.business.deleteMany();
  await prisma.firmwareVersion.deleteMany();
  await prisma.systemSetting.deleteMany();
  await prisma.user.deleteMany();

  // Create users
  const adminPassword = await hashPassword('admin123');
  const userPassword = await hashPassword('password123');

  const admin = await prisma.user.create({
    data: {
      email: 'admin@hereopen.in',
      name: 'Super Admin',
      passwordHash: adminPassword,
      role: UserRole.SUPER_ADMIN,
      emailVerified: true,
    },
  });

  const businessOwners = await Promise.all([
    prisma.user.create({
      data: {
        email: 'sharma@example.com',
        phone: '+919876543210',
        name: 'Rajesh Sharma',
        passwordHash: userPassword,
        role: UserRole.BUSINESS_OWNER,
        emailVerified: true,
        phoneVerified: true,
      },
    }),
    prisma.user.create({
      data: {
        email: 'kumar@example.com',
        phone: '+919876543211',
        name: 'Amit Kumar',
        passwordHash: userPassword,
        role: UserRole.BUSINESS_OWNER,
        emailVerified: true,
        phoneVerified: true,
      },
    }),
    prisma.user.create({
      data: {
        email: 'singh@example.com',
        phone: '+919876543212',
        name: 'Priya Singh',
        passwordHash: userPassword,
        role: UserRole.BUSINESS_OWNER,
        emailVerified: true,
        phoneVerified: true,
      },
    }),
    prisma.user.create({
      data: {
        email: 'patel@example.com',
        phone: '+919876543213',
        name: 'Nikhil Patel',
        passwordHash: userPassword,
        role: UserRole.BUSINESS_OWNER,
        emailVerified: true,
        phoneVerified: true,
      },
    }),
    prisma.user.create({
      data: {
        email: 'gupta@example.com',
        phone: '+919876543214',
        name: 'Sneha Gupta',
        passwordHash: userPassword,
        role: UserRole.BUSINESS_OWNER,
        emailVerified: true,
        phoneVerified: true,
      },
    }),
  ]);

  const customers = await Promise.all([
    prisma.user.create({
      data: {
        phone: '+919800000001',
        name: 'Customer 1',
        role: UserRole.CUSTOMER,
        phoneVerified: true,
      },
    }),
    prisma.user.create({
      data: {
        phone: '+919800000002',
        name: 'Customer 2',
        role: UserRole.CUSTOMER,
        phoneVerified: true,
      },
    }),
    prisma.user.create({
      data: {
        phone: '+919800000003',
        name: 'Customer 3',
        role: UserRole.CUSTOMER,
        phoneVerified: true,
      },
    }),
  ]);

  // Create businesses
  const businesses = await Promise.all([
    prisma.business.create({
      data: {
        name: 'Sharma General Store',
        slug: 'sharma-general-store',
        description: 'Your one-stop shop for daily needs',
        phone: '+919876543210',
        email: 'sharma@example.com',
        category: 'Grocery',
        isVerified: true,
        verifiedAt: new Date(),
        verifiedBy: admin.id,
      },
    }),
    prisma.business.create({
      data: {
        name: 'Kumar Electronics',
        slug: 'kumar-electronics',
        description: 'Latest electronics and gadgets',
        phone: '+919876543211',
        email: 'kumar@example.com',
        category: 'Retail',
        isVerified: true,
        verifiedAt: new Date(),
        verifiedBy: admin.id,
      },
    }),
    prisma.business.create({
      data: {
        name: 'City Medical Store',
        slug: 'city-medical-store',
        description: '24/7 pharmacy and medical supplies',
        phone: '+919876543212',
        email: 'singh@example.com',
        category: 'Medical',
        isVerified: true,
        verifiedAt: new Date(),
        verifiedBy: admin.id,
      },
    }),
    prisma.business.create({
      data: {
        name: 'Fresh Mart',
        slug: 'fresh-mart',
        description: 'Fresh vegetables and fruits',
        phone: '+919876543213',
        email: 'patel@example.com',
        category: 'Grocery',
      },
    }),
    prisma.business.create({
      data: {
        name: 'Style Studio Salon',
        slug: 'style-studio-salon',
        description: 'Premium hair and beauty salon',
        phone: '+919876543214',
        email: 'gupta@example.com',
        category: 'Salon',
      },
    }),
  ]);

  // Add business users
  for (let i = 0; i < businesses.length; i++) {
    await prisma.businessUser.create({
      data: {
        userId: businessOwners[i].id,
        businessId: businesses[i].id,
        role: 'owner',
        isOwner: true,
        acceptedAt: new Date(),
      },
    });
  }

  // Create shops
  const shops = await Promise.all([
    prisma.shop.create({
      data: {
        businessId: businesses[0].id,
        name: 'Sharma General Store - Main',
        slug: 'sharma-main',
        description: 'Main branch',
        address: '123 MG Road',
        city: 'Bangalore',
        state: 'Karnataka',
        pincode: '560001',
        latitude: 12.9716,
        longitude: 77.5946,
        phone: '+919876543210',
        status: ShopStatus.OPEN,
        lastStatusChange: new Date(),
        lastStatusSource: 'manual',
      },
    }),
    prisma.shop.create({
      data: {
        businessId: businesses[1].id,
        name: 'Kumar Electronics - Branch 1',
        slug: 'kumar-branch1',
        description: 'Electronics showroom',
        address: '456 Brigade Road',
        city: 'Bangalore',
        state: 'Karnataka',
        pincode: '560025',
        latitude: 12.9784,
        longitude: 77.6086,
        status: ShopStatus.CLOSED,
        lastStatusChange: new Date(),
        lastStatusSource: 'manual',
      },
    }),
    prisma.shop.create({
      data: {
        businessId: businesses[2].id,
        name: 'City Medical - Main',
        slug: 'city-medical-main',
        description: 'Pharmacy and medical supplies',
        address: '789 commercial street',
        city: 'Bangalore',
        state: 'Karnataka',
        pincode: '560001',
        latitude: 12.9833,
        longitude: 77.6083,
        status: ShopStatus.OPEN,
        lastStatusChange: new Date(),
        lastStatusSource: 'manual',
      },
    }),
    prisma.shop.create({
      data: {
        businessId: businesses[3].id,
        name: 'Fresh Mart - Indiranagar',
        slug: 'fresh-mart-indiranagar',
        description: 'Fresh produce daily',
        address: '100 Indiranagar 100ft Road',
        city: 'Bangalore',
        state: 'Karnataka',
        pincode: '560038',
        latitude: 12.9784,
        longitude: 77.6408,
        status: ShopStatus.OPEN,
        lastStatusChange: new Date(),
        lastStatusSource: 'manual',
      },
    }),
    prisma.shop.create({
      data: {
        businessId: businesses[4].id,
        name: 'Style Studio - Koramangala',
        slug: 'style-studio-koramangala',
        description: 'Premium salon services',
        address: '200 Koramangala 4th Block',
        city: 'Bangalore',
        state: 'Karnataka',
        pincode: '560034',
        latitude: 12.9352,
        longitude: 77.6245,
        status: ShopStatus.CLOSED,
        lastStatusChange: new Date(),
        lastStatusSource: 'manual',
      },
    }),
  ]);

  // Create devices
  const devices = await Promise.all([
    prisma.device.create({
      data: {
        uid: 'HO-DEV-001',
        name: 'Sharma Main Device',
        shopId: shops[0].id,
        firmwareVersion: '1.2.0',
        status: DeviceStatus.ONLINE,
        simNumber: '+919800000001',
        simProvider: 'Jio',
        networkType: '4G',
        signalStrength: 85,
        lastHeartbeat: new Date(),
        lastSeen: new Date(),
        lastOnlineAt: new Date(),
        powerSource: 'mains',
        isActive: true,
      },
    }),
    prisma.device.create({
      data: {
        uid: 'HO-DEV-002',
        name: 'Kumar Branch1 Device',
        shopId: shops[1].id,
        firmwareVersion: '1.2.0',
        status: DeviceStatus.ONLINE,
        simNumber: '+919800000002',
        simProvider: 'Airtel',
        networkType: '4G',
        signalStrength: 72,
        lastHeartbeat: new Date(),
        lastSeen: new Date(),
        lastOnlineAt: new Date(),
        powerSource: 'mains',
        isActive: true,
      },
    }),
    prisma.device.create({
      data: {
        uid: 'HO-DEV-003',
        name: 'City Medical Device',
        shopId: shops[2].id,
        firmwareVersion: '1.2.0',
        status: DeviceStatus.ONLINE,
        simNumber: '+919800000003',
        simProvider: 'Vi',
        networkType: '4G',
        signalStrength: 90,
        lastHeartbeat: new Date(),
        lastSeen: new Date(),
        lastOnlineAt: new Date(),
        powerSource: 'battery',
        batteryLevel: 85,
        isActive: true,
      },
    }),
    prisma.device.create({
      data: {
        uid: 'HO-DEV-004',
        name: 'Fresh Mart Device',
        shopId: shops[3].id,
        firmwareVersion: '1.1.5',
        status: DeviceStatus.OFFLINE,
        simNumber: '+919800000004',
        simProvider: 'Jio',
        lastSeen: new Date(Date.now() - 3600000),
        powerSource: 'mains',
        isActive: true,
      },
    }),
    prisma.device.create({
      data: {
        uid: 'HO-DEV-005',
        name: 'Style Studio Device',
        shopId: shops[4].id,
        firmwareVersion: '1.2.0',
        status: DeviceStatus.ONLINE,
        simNumber: '+919800000005',
        simProvider: 'Airtel',
        networkType: '3G',
        signalStrength: 65,
        lastHeartbeat: new Date(),
        lastSeen: new Date(),
        lastOnlineAt: new Date(),
        powerSource: 'mains',
        isActive: true,
      },
    }),
  ]);

  // Create device credentials
  for (const device of devices) {
    await prisma.deviceCredential.create({
      data: {
        deviceId: device.id,
        authToken: `auth-${device.uid}-${Date.now()}`,
      },
    });
  }

  // Create device sensors
  for (const device of devices) {
    await prisma.deviceSensor.createMany({
      data: [
        { deviceId: device.id, type: 'temperature', name: 'Temperature Sensor', unit: '°C' },
        { deviceId: device.id, type: 'smoke', name: 'Smoke Sensor', unit: 'ppm' },
        { deviceId: device.id, type: 'motion', name: 'Motion Sensor', unit: 'boolean' },
      ],
    });
  }

  // Create offers
  const offers = await Promise.all([
    prisma.offer.create({
      data: {
        businessId: businesses[0].id,
        shopId: shops[0].id,
        title: '10% Off on Groceries',
        description: 'Get 10% off on all grocery items above ₹500',
        discount: '10%',
        status: OfferStatus.ACTIVE,
        startDate: new Date(),
        endDate: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
        viewCount: 156,
        clickCount: 45,
      },
    }),
    prisma.offer.create({
      data: {
        businessId: businesses[1].id,
        shopId: shops[1].id,
        title: 'Flat ₹500 Off on Accessories',
        description: 'Get flat ₹500 off on mobile accessories',
        discount: '₹500',
        status: OfferStatus.ACTIVE,
        startDate: new Date(),
        endDate: new Date(Date.now() + 14 * 24 * 60 * 60 * 1000),
        viewCount: 89,
        clickCount: 23,
      },
    }),
    prisma.offer.create({
      data: {
        businessId: businesses[2].id,
        shopId: shops[2].id,
        title: 'Free Health Checkup',
        description: 'Free blood pressure and sugar checkup',
        status: OfferStatus.ACTIVE,
        startDate: new Date(),
        endDate: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000),
        viewCount: 234,
        clickCount: 67,
      },
    }),
    prisma.offer.create({
      data: {
        businessId: businesses[3].id,
        shopId: shops[3].id,
        title: 'Fresh Fruits Sale',
        description: 'Buy 2 Get 1 Free on all fruits',
        status: OfferStatus.ACTIVE,
        startDate: new Date(),
        endDate: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000),
        viewCount: 312,
        clickCount: 89,
      },
    }),
    prisma.offer.create({
      data: {
        businessId: businesses[4].id,
        shopId: shops[4].id,
        title: '20% Off on Hair Services',
        description: 'Get 20% off on hair cut and styling',
        discount: '20%',
        status: OfferStatus.DRAFT,
        viewCount: 0,
        clickCount: 0,
      },
    }),
  ]);

  // Create announcements
  await prisma.announcement.createMany({
    data: [
      {
        businessId: businesses[0].id,
        shopId: shops[0].id,
        type: AnnouncementType.NEW_ARRIVAL,
        title: 'New Organic Products Available',
        description: 'We now stock a wide range of organic products',
        status: AnnouncementStatus.ACTIVE,
      },
      {
        businessId: businesses[2].id,
        shopId: shops[2].id,
        type: AnnouncementType.STORE_UPDATE,
        title: 'Extended Hours This Week',
        description: 'We are open until 10 PM this week',
        status: AnnouncementStatus.ACTIVE,
      },
      {
        businessId: businesses[3].id,
        shopId: shops[3].id,
        type: AnnouncementType.HOLIDAY_CLOSURE,
        title: 'Closed on Republic Day',
        description: 'We will be closed on January 26th',
        status: AnnouncementStatus.SCHEDULED,
        startDate: new Date('2024-01-26'),
      },
    ],
  });

  // Create customers
  const customerRecords = await Promise.all([
    prisma.customer.create({
      data: {
        userId: customers[0].id,
        phone: '+919800000001',
        name: 'Customer 1',
      },
    }),
    prisma.customer.create({
      data: {
        userId: customers[1].id,
        phone: '+919800000002',
        name: 'Customer 2',
      },
    }),
    prisma.customer.create({
      data: {
        userId: customers[2].id,
        phone: '+919800000003',
        name: 'Customer 3',
      },
    }),
  ]);

  // Create customer follows
  await prisma.customerShopFollow.createMany({
    data: [
      { customerId: customerRecords[0].id, shopId: shops[0].id },
      { customerId: customerRecords[0].id, shopId: shops[2].id },
      { customerId: customerRecords[1].id, shopId: shops[0].id },
      { customerId: customerRecords[1].id, shopId: shops[1].id },
      { customerId: customerRecords[2].id, shopId: shops[3].id },
    ],
  });

  // Create subscriptions
  await prisma.subscription.createMany({
    data: [
      {
        businessId: businesses[0].id,
        plan: 'starter',
        price: 499,
        status: SubscriptionStatus.ACTIVE,
        startDate: new Date(Date.now() - 30 * 24 * 60 * 60 * 1000),
        endDate: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000),
      },
      {
        businessId: businesses[1].id,
        plan: 'professional',
        price: 1499,
        status: SubscriptionStatus.ACTIVE,
        startDate: new Date(Date.now() - 60 * 24 * 60 * 60 * 1000),
        endDate: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000),
      },
      {
        businessId: businesses[2].id,
        plan: 'free',
        status: SubscriptionStatus.TRIAL,
        trialStart: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000),
        trialEnd: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
      },
      {
        businessId: businesses[3].id,
        plan: 'free',
        status: SubscriptionStatus.TRIAL,
        trialStart: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000),
        trialEnd: new Date(Date.now() + 11 * 24 * 60 * 60 * 1000),
      },
      {
        businessId: businesses[4].id,
        plan: 'starter',
        price: 499,
        status: SubscriptionStatus.ACTIVE,
        startDate: new Date(Date.now() - 15 * 24 * 60 * 60 * 1000),
        endDate: new Date(Date.now() + 15 * 24 * 60 * 60 * 1000),
      },
    ],
  });

  // Create firmware versions
  await prisma.firmwareVersion.createMany({
    data: [
      { version: '1.0.0', releaseNotes: 'Initial release', status: 'DEPRECATED' },
      { version: '1.1.0', releaseNotes: 'Bug fixes and improvements', status: 'DEPRECATED' },
      { version: '1.1.5', releaseNotes: 'Performance improvements', status: 'AVAILABLE' },
      { version: '1.2.0', releaseNotes: 'Latest features and security updates', status: 'AVAILABLE', isMandatory: true },
    ],
  });

  // Create system settings
  await prisma.systemSetting.createMany({
    data: [
      { key: 'fire.temperature.warning', value: 45, description: 'Temperature warning threshold (°C)', category: 'fire' },
      { key: 'fire.temperature.critical', value: 60, description: 'Temperature critical threshold (°C)', category: 'fire' },
      { key: 'fire.smoke.warning', value: 300, description: 'Smoke level warning threshold', category: 'fire' },
      { key: 'fire.smoke.critical', value: 500, description: 'Smoke level critical threshold', category: 'fire' },
      { key: 'device.heartbeat.interval', value: 60000, description: 'Device heartbeat interval (ms)', category: 'device' },
      { key: 'device.command.timeout', value: 30000, description: 'Device command timeout (ms)', category: 'device' },
    ],
  });

  // Create sample IoT events
  await prisma.iotEvent.createMany({
    data: [
      { deviceId: devices[0].id, shopId: shops[0].id, type: 'SHOP_OPENED', severity: 'INFO', payload: { source: 'manual' } },
      { deviceId: devices[1].id, shopId: shops[1].id, type: 'SHOP_CLOSED', severity: 'INFO', payload: { source: 'manual' } },
      { deviceId: devices[2].id, shopId: shops[2].id, type: 'HEARTBEAT', severity: 'INFO', payload: { signalStrength: 90 } },
      { deviceId: devices[0].id, shopId: shops[0].id, type: 'HEARTBEAT', severity: 'INFO', payload: { signalStrength: 85 } },
      { deviceId: devices[4].id, shopId: shops[4].id, type: 'SECURITY_BREACH', severity: 'WARNING', payload: { type: 'motion', zone: 'entrance' } },
    ],
  });

  // Create sample security events
  await prisma.securityEvent.create({
    data: {
      shopId: shops[4].id,
      deviceId: devices[4].id,
      type: 'MOTION_DETECTED',
      severity: 'WARNING',
      description: 'Motion detected at entrance',
      payload: { zone: 'entrance', confidence: 0.85 },
    },
  });

  // Create sample alerts
  await prisma.alert.create({
    data: {
      shopId: shops[4].id,
      deviceId: devices[4].id,
      type: 'SECURITY',
      severity: 'WARNING',
      title: 'Motion Detected',
      message: 'Motion detected at Style Studio - Koramangala entrance',
      status: 'ACTIVE',
    },
  });

  console.log('Database seeded successfully!');
  console.log(`Created ${5} businesses`);
  console.log(`Created ${5} shops`);
  console.log(`Created ${5} devices`);
  console.log(`Created ${5} offers`);
  console.log(`Created ${3} customers`);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
