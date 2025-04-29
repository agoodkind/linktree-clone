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
  imageBaseUrl?: string;
};


export default function LinkInstagram({
  username,
  title,
  images,
  imageBaseUrl,
}: TInstagramArgs) {
  return (
    <LinkWrapper>
      <LinkStandardInner
        link={{
          id: username,
          title,
          url: `https://www.instagram.com/${username}`,
          thumbnailUrl: instagramThumbnail,
        }}
      >
        {images && images.length > 0 ? (
          <div className="w-full h-full flex items-center justify-center px-4">
            <InstagramGrid images={images} imageBaseUrl={imageBaseUrl ?? ""} />
          </div>
        ) : null}
      </LinkStandardInner>
    </LinkWrapper>
  );
}
