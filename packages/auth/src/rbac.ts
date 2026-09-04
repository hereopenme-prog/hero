import { UserRole } from '@hereopen/types';

export interface Permission {
  resource: string;
  action: string;
  conditions?: Record<string, any>;
}

export const ROLE_PERMISSIONS: Record<UserRole, Permission[]> = {
  [UserRole.SUPER_ADMIN]: [
    { resource: '*', action: '*' },
  ],
  [UserRole.ADMIN]: [
    { resource: 'business', action: 'read' },
    { resource: 'business', action: 'update' },
    { resource: 'business', action: 'verify' },
    { resource: 'business', action: 'suspend' },
    { resource: 'device', action: 'read' },
    { resource: 'device', action: 'command' },
    { resource: 'device', action: 'manage' },
    { resource: 'user', action: 'read' },
    { resource: 'user', action: 'manage' },
    { resource: 'alert', action: 'read' },
    { resource: 'alert', action: 'manage' },
    { resource: 'analytics', action: 'read' },
    { resource: 'system', action: 'manage' },
  ],
  [UserRole.BUSINESS_OWNER]: [
    { resource: 'business', action: 'read', conditions: { own: true } },
    { resource: 'business', action: 'update', conditions: { own: true } },
    { resource: 'shop', action: 'create', conditions: { own: true } },
    { resource: 'shop', action: 'read', conditions: { own: true } },
    { resource: 'shop', action: 'update', conditions: { own: true } },
    { resource: 'shop', action: 'status', conditions: { own: true } },
    { resource: 'device', action: 'read', conditions: { own: true } },
    { resource: 'device', action: 'command', conditions: { own: true } },
    { resource: 'offer', action: 'create', conditions: { own: true } },
    { resource: 'offer', action: 'read', conditions: { own: true } },
    { resource: 'offer', action: 'update', conditions: { own: true } },
    { resource: 'offer', action: 'delete', conditions: { own: true } },
    { resource: 'announcement', action: 'create', conditions: { own: true } },
    { resource: 'announcement', action: 'read', conditions: { own: true } },
    { resource: 'announcement', action: 'update', conditions: { own: true } },
    { resource: 'customer', action: 'read', conditions: { own: true } },
    { resource: 'analytics', action: 'read', conditions: { own: true } },
    { resource: 'security', action: 'read', conditions: { own: true } },
    { resource: 'fire', action: 'read', conditions: { own: true } },
  ],
  [UserRole.BUSINESS_MEMBER]: [
    { resource: 'business', action: 'read', conditions: { member: true } },
    { resource: 'shop', action: 'read', conditions: { member: true } },
    { resource: 'shop', action: 'status', conditions: { member: true } },
    { resource: 'device', action: 'read', conditions: { member: true } },
    { resource: 'offer', action: 'read', conditions: { member: true } },
    { resource: 'offer', action: 'create', conditions: { member: true } },
    { resource: 'announcement', action: 'read', conditions: { member: true } },
    { resource: 'customer', action: 'read', conditions: { member: true } },
    { resource: 'analytics', action: 'read', conditions: { member: true } },
  ],
  [UserRole.CUSTOMER]: [
    { resource: 'shop', action: 'read' },
    { resource: 'offer', action: 'read' },
    { resource: 'announcement', action: 'read' },
    { resource: 'notification', action: 'read', conditions: { own: true } },
    { resource: 'profile', action: 'read', conditions: { own: true } },
    { resource: 'profile', action: 'update', conditions: { own: true } },
  ],
};

export function hasPermission(
  userRole: UserRole,
  resource: string,
  action: string,
  context?: { userId?: string; businessId?: string; resourceOwnerId?: string }
): boolean {
  const permissions = ROLE_PERMISSIONS[userRole];
  
  for (const permission of permissions) {
    // Check wildcard resource
    if (permission.resource === '*' || permission.resource === resource) {
      // Check wildcard action
      if (permission.action === '*' || permission.action === action) {
        // Check conditions if present
        if (permission.conditions) {
          if (!checkConditions(permission.conditions, context)) {
            continue;
          }
        }
        return true;
      }
    }
  }
  
  return false;
}

function checkConditions(
  conditions: Record<string, any>,
  context?: { userId?: string; businessId?: string; resourceOwnerId?: string }
): boolean {
  if (!context) return !Object.keys(conditions).length;
  
  for (const [key, value] of Object.entries(conditions)) {
    switch (key) {
      case 'own':
        if (value && context.userId !== context.resourceOwnerId) {
          return false;
        }
        break;
      case 'member':
        // Would need to check business membership
        break;
    }
  }
  
  return true;
}

export function requirePermission(resource: string, action: string) {
  return (userRole: UserRole, context?: any) => {
    if (!hasPermission(userRole, resource, action, context)) {
      throw new Error(`Insufficient permissions: ${action} on ${resource}`);
    }
  };
}
