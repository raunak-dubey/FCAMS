import type { Environment } from "./feature";

export type RequestStatus = "PENDING" | "APPROVED" | "REJECTED";

export interface ChangeRequest {
  id: string;
  featureId: string;
  environment: Environment;
  requestedBy: string;
  reason: string;
  status: RequestStatus;
  reviewedBy?: string;
}