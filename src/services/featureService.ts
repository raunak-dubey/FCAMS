import type { FeatureFlag } from "../domain/feature";
import { featureStore } from "../store/featureStore";
import type { User } from "../domain/user";
import { Permission } from "../domain/permissions";
import { hasPermission } from "../domain/permissionsEngine";

export const createFeature = (
  user: User,
  feature: FeatureFlag
) => {
  if (!hasPermission(user, Permission.EDIT_FEATURE)) {
    throw new Error("Not allowed");
  }

  featureStore.add(feature);
}