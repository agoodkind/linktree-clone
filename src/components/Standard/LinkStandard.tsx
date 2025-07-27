import LinkWrapper from "../LinkWrapper";

export type TLinkStandard = {
  thumbnailUrl?: string;
  id: string;
  title: string;
  url: string;
};

export function LinkStandardInner({
  link,
  children,
}: {
  link: TLinkStandard;
  children?: React.ReactNode;
}) {
  return (
    <>
      <a
        href={link.url}
        className="w-full cursor-pointer"
        onClick={() => {
          gtag("event", "link_click", {
            link_id: link.id,
          });
        }}
      >
        <div className="flex flex-col w-full h-full py-5 gap-4">
          <div className="h-full w-full px-16 flex items-center text-center relative">
            <div className="left-3 absolute ">
              {link.thumbnailUrl ? (
                <img
                  alt={`${link.title} thumbnail`}
                  className="object-cover size-8 rounded"
                  src={link.thumbnailUrl}
                />
              ) : null}
            </div>

            <div className="w-full relative">{link.title}</div>
          </div>
        </div>
      </a>
      {children ? <div className="w-full h-full pb-5">{children}</div> : null}
    </>
  );
}

export default function LinkStandard({ link }: { link: TLinkStandard }) {
  return (
    <LinkWrapper>
      <LinkStandardInner link={link} />
    </LinkWrapper>
  );
}
