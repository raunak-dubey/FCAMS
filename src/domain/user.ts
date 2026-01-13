import type { Permission } from "./permissions";

export type Role = "EMPLOYEE" | "MANAGER" | "ADMIN";

export interface User {
  id: string;
  name: string;
  role: Role;
  permissions: Permission[];
}