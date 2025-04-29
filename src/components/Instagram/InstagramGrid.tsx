import type { TInstagramImage } from "@/types";
import clsx from "clsx";

type InstagramGridProps = {
  images: TInstagramImage[];
  imageBaseUrl: string;
};

const imageSizes = {
  firstPhoto: {
    "1x": "small",
    "2x": "medium",
    "3x": "large",
  },
  otherPhotos: {
    "1x": "thumb",
    "2x": "small",
    "3x": "medium",
  },
} as const;

const InstagramGridPhoto = ({
  imageBaseUrl,
  src,
  index,
}: {
  imageBaseUrl: string;
  src: TInstagramImage;
  index: number;
}) => {
  const imageSizing =
    index === 0 ? imageSizes.firstPhoto : imageSizes.otherPhotos;

  const intrinsicSize = index === 0 ? src.versions.small : src.versions.thumb;
  const fallbackSrc = `${imageBaseUrl}/${src.versions[imageSizing["1x"]].fileName}`;
  const srcSet = `
    ${imageBaseUrl}/${src.versions[imageSizing["1x"]].fileName} 1x, 
    ${imageBaseUrl}/${src.versions[imageSizing["2x"]].fileName} 2x, 
    ${imageBaseUrl}/${src.versions[imageSizing["3x"]].fileName} 3x
  `;

  return (
    <img
      alt="Instagram post"
      className={clsx("overflow-hidden rounded object-cover aspect-square", {
        "row-span-2 col-span-2": index === 0,
      })}
      src={fallbackSrc}
      srcSet={srcSet}
      width={intrinsicSize.width}
      height={intrinsicSize.height}
      loading="lazy"
    />
  );
};

export default function InstagramGrid({
  images,
  imageBaseUrl,
}: InstagramGridProps) {
  if (images.length === 0) {
    return null;
  }

  // small pic view is 156x156
  // large pic view is 316x316

  return (
    <div className="grid overflow-hidden rounded-md gap-1 grid-rows-3 grid-cols-3">
      {images.slice(0, 6).map((src, index) => (
        <InstagramGridPhoto
          key={`${index}-${src.mediaId}`}
          imageBaseUrl={imageBaseUrl}
          src={src}
          index={index}
        />
      ))}
    </div>
  );
}
