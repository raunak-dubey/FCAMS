export const Permission = {
  VIEW_FEATURE: "VIEW_FEATURE",
  EDIT_FEATURE: "EDIT_FEATURE",
  REQUEST_CHANGE: "REQUEST_CHANGE",
  APPROVE_CHANGE: "APPROVE_CHANGE",
  ROLLBACK_FEATURE: "ROLLBACK_FEATURE",
  MANAGE_ROLES: "MANAGE_ROLES",
} as const;

export type Permission = typeof Permission[keyof typeof Permission];