import type { FeatureFlag } from "@/domain/feature";

let features: FeatureFlag[] = [];

export const featureStore = {
  getAll: () => features,
  add: (feature: FeatureFlag) => {
    features = [...features, feature];
  },
  update: (updated: FeatureFlag) => {
    features = features.map(f =>
      f.id === updated.id ? updated : f
    );
  },
};
