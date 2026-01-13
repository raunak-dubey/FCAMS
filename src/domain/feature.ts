export type Environment = "dev" | "staging" | "prod";
export type FeatureStatus = "ON" | "OFF" | "ROLLOUT";

export interface FeatureFlag {
  id: string;
  name: string;
  description: string;
  projectId: string;
  status: FeatureStatus;
  rolloutPercentage: number;
  environments: Environment[];
  allowedRoles: string[];
  ownerId: string;
  updatedAt: string;
}
