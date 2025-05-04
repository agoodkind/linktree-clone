import { calculateMeta, calculateTracking } from "@/calculate-data";

const gtagScript = () => {
  return `
    window.dataLayer = window.dataLayer || [];
    function gtag() {
      dataLayer.push(arguments);
    }
    gtag("js", new Date());
    gtag("config", "${calculateTracking().gtagId}");
  `;
};

const fbqScript = () => {
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
    fbq("init", "${calculateTracking().fbPixelId}");
    fbq("track", "PageView");
  `;
};

export default function Head() {
  return (
    <>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="description" content={calculateMeta().description} />
      <link rel="icon" href="/favicon.ico" />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon-16x16.png"
      />
      <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
      <link rel="manifest" href="/site.webmanifest" />
      <meta
        name="facebook-domain-verification"
        content={calculateTracking().fbDomainVerification}
      />

      <script
        async
        defer
        src={`https://www.googletagmanager.com/gtag/js?id=${calculateTracking().gtagId}`}
      ></script>
      <script>{gtagScript()}</script>
      <script>{fbqScript()}</script>
    </>
  );
}
