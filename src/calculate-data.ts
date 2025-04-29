import config from "@data/config.json";
import convertedMedia from "@data/converted_media.json";
import type { TInstagramImage } from "./types";
import { deepCamelCaseKeys } from "./util/deep-camel-case-keys";

export const profile = config.profile as {
  name: string;
  displayName: string;
  profileImageUrl: string;
};

export const entries = deepCamelCaseKeys(config.entries) as ({
  id: string;
  title: string;
} & (
  | {
      type: "instagram";
      username: string;
      imageBaseUrl: string;
    }
  | {
      type: "link";
      url: string;
      thumbnailUrl: string;
    }
))[];

export const instagramImages = deepCamelCaseKeys(
  convertedMedia,
) as TInstagramImage[];


// Tracking IDs for analytics and verification
export const tracking = config.tracking as {
  gtagId: string;
  fbPixelId: string;
  fbDomainVerification: string;
};

export const meta = config.meta as {
  copyrightText?: string;
};
