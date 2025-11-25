import { ROLE_PERMISSIONS } from '../config/permissions';

export const hasPermission = (userRole, permission) => {
  const permissions = ROLE_PERMISSIONS[userRole] || [];
  return permissions.includes(permission);
};
