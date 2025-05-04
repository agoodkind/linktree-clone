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
  permalink,
}: {
  imageBaseUrl: string;
  src: TInstagramImage;
  index: number;
  permalink?: string;
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

  const image = (
    <img
      alt="Instagram post"
      className={clsx("rounded object-cover aspect-square")}
      src={fallbackSrc}
      srcSet={srcSet}
      width={intrinsicSize.width}
      height={intrinsicSize.height}
      fetchPriority={index === 0 ? "high" : "auto"}
      loading={index === 0 ? "eager" : "lazy"}
    />
  );
  return (
    <div
      className={clsx("overflow-hidden", {
        "row-span-2 col-span-2": index === 0,
      })}
    >
      {permalink ? (
        <a href={permalink} target="_blank">
          {image}
        </a>
      ) : (
        image
      )}
    </div>
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
          permalink={src.permalink}
        />
      ))}
    </div>
  );
}
