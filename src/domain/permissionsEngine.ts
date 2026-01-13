import type { User } from "./user";
import { Permission } from "./permissions";

export const hasPermission = (
  user: User,
  permission: Permission
): boolean => {
  return user.permissions.includes(permission);
}

export const RolePermissions: Record<string, Permission[]> = {
  EMPLOYEE: [
    Permission.VIEW_FEATURE,
    Permission.EDIT_FEATURE,
    Permission.REQUEST_CHANGE,
  ],
  MANAGER: [
    Permission.VIEW_FEATURE,
    Permission.APPROVE_CHANGE,
    Permission.EDIT_FEATURE,
  ],
  ADMIN: Object.values(Permission),
};