export interface AuditLog {
  id: string;
  actorId: string;
  action: string;
  target: string;
  timestamp: string;
  reason?: string;
}