import config from "@data/config.json";
import convertedMedia from "@data/converted_media.json";
import type { TEntry, TInstagramImage } from "./types";
import { deepCamelCaseKeys } from "./util/deep-camel-case-keys";

export const profile = config.profile as {
  name: string;
  displayName: string;
  profileImageUrl: string;
};

export const calculateEntries = () => {
  return deepCamelCaseKeys<TEntry[]>(config.entries);
};

export const calculateInstagramImages = () => {
  return deepCamelCaseKeys<TInstagramImage[]>(convertedMedia);
};

// Tracking IDs for analytics and verification
export const calculateTracking = () => {
  return config.tracking as {
    gtagId: string;
    fbPixelId: string;
    fbDomainVerification: string;
  };
};

export const calculateMeta = () => {
  return config.meta as {
    copyrightText?: string;
    description?: string;
  };
};
