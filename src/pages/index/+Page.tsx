import LinkInstagram from "@components/Instagram/LinkInstagram";
import LinkStandard from "@components/Standard/LinkStandard";
import clsx from "clsx";
import { useData } from "vike-react/useData"; // or vike-vue / vike-solid
import type { Data } from "./+data";

export default function MainPage() {
  const data = useData<Data>();

  const { profile, entries, metadata } = data.config;
  const instagramImages = data.convertedMedia;

  return (
    <div className="bg-gradient-to-t from-[rgb(235,142,39)] to-[rgb(255,70,72)]">
      <div className="flex min-h-dvh w-full flex-col overflow-x-hidden relative">
        <div className="flex h-full w-full flex-col px-4 py-8">
          <div className="mx-auto h-full w-full gap-5 flex flex-col max-w-lg">
            <a
              className="flex flex-col items-center"
              href="/"
              onClickCapture={() => {
                gtag("event", "profile_click");
              }}
            >
              {profile.profileImageUrl ? (
                <div className="mb-4">
                  <img
                    alt={profile.name}
                    className={clsx([
                      "object-contain size-60",
                      "focus:ring-2 focus:ring-white focus:ring-offset-1",
                      "focus-within:ring-2 focus-within:ring-white focus-within:ring-offset-1",

                      // Interactive effects
                      "hover:translate-1",
                      "active:translate-1",
                    ])}
                    src={profile.profileImageUrl}
                  />
                </div>
              ) : null}
              <div
                className="mx-3 flex max-w-full items-center"
                id="profile-title"
              >
                <h1 className="text-balance text-center text-lg font-bold  text-white">
                  {profile.name}
                </h1>
              </div>
            </a>
            <div className="items-center flex flex-col gap-4 @container/links-container mt-xl">
              {entries.map((entry) => {
                switch (entry.type) {
                  case "link":
                    return <LinkStandard key={entry.id} link={entry} />;
                  case "instagram":
                    return (
                      <LinkInstagram
                        key={entry.id}
                        username={entry.username}
                        title={entry.title}
                        images={instagramImages}
                        showImages={entry.showImages}
                        imageBaseUrl={entry.imageBaseUrl}
                      />
                    );
                  default:
                    return null;
                }
              })}
            </div>
          </div>
        </div>
      </div>
      {/* copyright */}
      {metadata?.copyrightText ? (
        <div className="text-center text-sm text-white opacity-50 py-2">
          &copy; {new Date().getFullYear()} {metadata.copyrightText}
        </div>
      ) : null}
    </div>
  );
}
