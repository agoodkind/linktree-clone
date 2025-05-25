import {
  calculateEntries,
  calculateInstagramImages,
  calculateMeta,
  profile,
} from "@/calculate-data";
import LinkInstagram from "@components/Instagram/LinkInstagram";
import LinkStandard from "@components/Standard/LinkStandard";

const entries = calculateEntries();
const instagramImages = calculateInstagramImages();
const meta = calculateMeta();

export default function MainPage() {
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
                    className="rounded-full object-contain size-24 bg-white"
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
      {meta.copyrightText ? (
        <div className="text-center text-sm text-white opacity-50 py-2">
          &copy; {new Date().getFullYear()} {meta.copyrightText}
        </div>
      ) : null}
    </div>
  );
}
