import type { PageContext } from "vike/types";

export type TInstagramImage = {
  mediaId: string;
  permalink?: string;
  versions: {
    thumb: {
      fileName: string;
      width: number;
      height: number;
    };
    small: {
      fileName: string;
      width: number;
      height: number;
    };
    large: {
      fileName: string;
      width: number;
      height: number;
    };
    medium: {
      fileName: string;
      width: number;
      height: number;
    };
    original: {
      fileName: string;
      width: number;
      height: number;
    };
  };
};

export type TPageContext = {
  Page: () => JSX.Element;
  // this is some really shitty type work
  // wtf
  // vike really didn't even try here
  data: Record<string, unknown> & {
    title?: string;
  };
  config: Record<string, unknown> & {
    title?: string;
  };
  isHydration: boolean;
  enableEagerStreaming: boolean;
} & PageContext;

export type TRecentMedia = {
  id: string;
  media_type: "IMAGE" | "VIDEO" | "CAROUSEL_ALBUM";
  media_url: string;
  thumbnail_url?: string;
  permalink: string;
  timestamp: string;
};