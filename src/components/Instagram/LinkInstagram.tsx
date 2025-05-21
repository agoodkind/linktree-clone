import type { TInstagramImage } from "@/types";
import instagramThumbnail from "@assets/instagram-thumbnail.svg";
import LinkWrapper from "@components/LinkWrapper";
import { LinkStandardInner } from "@components/Standard/LinkStandard";
import InstagramGrid from "./InstagramGrid";

type TInstagramArgs = {
  username: string;
  title: string;
  followers?: number;
  images?: TInstagramImage[];
  showImages?: boolean;
  imageBaseUrl?: string;
};


export default function LinkInstagram({
  username,
  title,
  images,
  imageBaseUrl,
  showImages,
}: TInstagramArgs) {
  const url = `https://www.instagram.com/${username}`;
  return (
    <LinkWrapper>
      <LinkStandardInner
        link={{
          id: username,
          title,
          url,
          thumbnailUrl: instagramThumbnail,
        }}
      >
        {showImages && images && images.length > 0 ? (
          <div className="w-full h-full flex items-center justify-center px-4">
            <InstagramGrid
              images={images}
              imageBaseUrl={imageBaseUrl ?? ""}
              fallbackUrl={url}
            />
          </div>
        ) : null}
      </LinkStandardInner>
    </LinkWrapper>
  );
}
