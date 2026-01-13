import type { User } from "@/domain/user";
import { Permission } from "@/domain/permissions";

export const currentUser: User = {
  id: "u1",
  name: "Alice (Employee)",
  role: "EMPLOYEE",
  permissions: [
    Permission.VIEW_FEATURE,
    Permission.EDIT_FEATURE,
    Permission.REQUEST_CHANGE,
  ],
};
