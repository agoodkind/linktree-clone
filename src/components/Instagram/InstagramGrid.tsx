import type { TInstagramImage } from "@/types";
import clsx from "clsx";

type InstagramGridProps = {
  images: TInstagramImage[];
  imageBaseUrl: string;
  fallbackUrl: string;
};

const imageSizes = {
  "1x": "thumb",
  "2x": "small",
  "3x": "medium",
} as const;

const InstagramGridPhoto = ({
  imageBaseUrl,
  src,
  permalink,
}: {
  imageBaseUrl: string;
  src: TInstagramImage;
  index: number;
  permalink?: string;
}) => {
  const imageSizing = imageSizes;

  const intrinsicSize = src.versions.small;
  const fallbackSrc = `${imageBaseUrl}/${src.versions[imageSizing["1x"]].fileName}`;
  const srcSet = `
    ${imageBaseUrl}/${src.versions[imageSizing["1x"]].fileName} 1x, 
    ${imageBaseUrl}/${src.versions[imageSizing["2x"]].fileName} 2x, 
    ${imageBaseUrl}/${src.versions[imageSizing["3x"]].fileName} 3x
  `;

  return (
    <a
      className={clsx("overflow-hidden")}
      href={permalink}
      onClickCapture={() => {
        if (!permalink) {
          return;
        }

        gtag("event", "photo_click", {
          photo_id: src.mediaId,
          photo_url: permalink,
        });

        window.open(permalink, "_blank");
      }}
    >
      <img
        alt="Instagram post"
        className={clsx("rounded object-cover aspect-[3/4]")}
        src={fallbackSrc}
        srcSet={srcSet}
        width={intrinsicSize.width}
        height={intrinsicSize.height}
        fetchPriority={"auto"}
        loading={"lazy"}
      />
    </a>
  );
};

export default function InstagramGrid({
  images,
  imageBaseUrl,
  fallbackUrl,
}: InstagramGridProps) {
  if (images.length === 0 || images.length < 3) {
    return null;
  }

  // small pic view is 156x156
  // large pic view is 316x316

  return (
    <div
      className={clsx(
        "grid overflow-hidden rounded-md gap-1 grid-rows-1 grid-cols-3",
      )}
    >
      {images.slice(0, 3).map((src, index) => (
        <InstagramGridPhoto
          key={`${index}-${src.mediaId}`}
          imageBaseUrl={imageBaseUrl}
          src={src}
          index={index}
          permalink={src.permalink ?? fallbackUrl}
        />
      ))}
    </div>
  );
}
