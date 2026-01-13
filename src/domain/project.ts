import type { Role } from "./user";

export interface Project {
  id: string;
  name: string;
  members: {
    userId: string;
    role: Role;
  }[];
}
