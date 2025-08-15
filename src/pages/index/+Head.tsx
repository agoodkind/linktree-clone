import { calculateMeta, calculateTracking } from "@/calculate-data";

const gtagScript = () => {
  const { gtagId } = calculateTracking();
  return `
    window.dataLayer = window.dataLayer || [];
    function gtag() {
      dataLayer.push(arguments);
    }
    gtag("js", new Date());
    gtag("config", "${gtagId}");
  `;
};

const fbqScript = () => {
  const { fbPixelId } = calculateTracking();
  return `
    !(function (f, b, e, v, n, t, s) {
      if (f.fbq) return;
      n = f.fbq = function () {
        n.callMethod ? n.callMethod.apply(n, arguments) : n.queue.push(arguments);
      };
      if (!f._fbq) f._fbq = n;
      n.push = n;
      n.loaded = !0;
      n.version = "2.0";
      n.queue = [];
      t = b.createElement(e);
      t.async = !0;
      t.src = v;
      s = b.getElementsByTagName(e)[0];
      s.parentNode.insertBefore(t, s);
    })(
      window,
      document,
      "script",
      "https://connect.facebook.net/en_US/fbevents.js",
    );
    fbq("init", "${fbPixelId}");
    fbq("track", "PageView");
  `;
};

export default function Head() {
  const { favicon, manifest, title, description, url, ogImage } =
    calculateMeta();

  const { gtagId, fbDomainVerification } = calculateTracking();
  return (
    <>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="description" content={description} />
      <link rel="icon" href={favicon} sizes="any" type="image/svg+xml" />
      <link rel="apple-touch-icon" href={favicon} />
      <link rel="manifest" href={manifest} />

      <title>{title}</title>
      <meta name="description" content={description} />

      {/* Open Graph */}
      <meta property="og:url" content={url} />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta
        property="twitter:domain"
        content={url ? new URL(url!).hostname : undefined}
      />
      <meta property="twitter:url" content={url} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />

      {/* Facebook */}
      <meta
        name="facebook-domain-verification"
        content={fbDomainVerification}
      />

      {/* Google Tag Manager */}
      <script
        async
        defer
        src={`https://www.googletagmanager.com/gtag/js?id=${gtagId}`}
      ></script>
      <script>{gtagScript()}</script>
      <script>{fbqScript()}</script>
    </>
  );
}
