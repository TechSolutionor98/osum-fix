import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { getSettings } from "@/lib/cms-service";
import GlobalQuoteModal from "@/components/RequestQuote/GlobalQuoteModal";
import MobileBottomNav from "@/components/MobileBottomNav";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "OsumFix Technical Services LLC | Dubai",
  description: "Professional Technical Services Across Dubai. Premium electrical, plumbing, HVAC, and handyman maintenance.",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  let settings = null;
  try {
    settings = await getSettings();
  } catch (err) {
    console.error("Error fetching settings in layout:", err);
  }

  return (
    <html
      lang="en"
      className={`${inter.variable} h-full antialiased scroll-smooth`}
      data-scroll-behavior="smooth"
      suppressHydrationWarning
    >
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0&display=swap" rel="stylesheet" />
        {/* Custom Head Script */}
        {settings?.customHeadScript && (
          <script dangerouslySetInnerHTML={{ __html: settings.customHeadScript }} />
        )}
        
        {/* Google Analytics */}
        {settings?.googleAnalyticsHeadCode ? (
          <script dangerouslySetInnerHTML={{ __html: settings.googleAnalyticsHeadCode }} />
        ) : settings?.googleAnalyticsId ? (
          <>
            <script async src={`https://www.googletagmanager.com/gtag/js?id=${settings.googleAnalyticsId}`} />
            <script dangerouslySetInnerHTML={{ __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${settings.googleAnalyticsId}');
            `}} />
          </>
        ) : null}

        {/* Facebook Pixel */}
        {settings?.facebookPixelHeadCode ? (
          <script dangerouslySetInnerHTML={{ __html: settings.facebookPixelHeadCode }} />
        ) : settings?.facebookPixelId ? (
          <script dangerouslySetInnerHTML={{ __html: `
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '${settings.facebookPixelId}');
            fbq('track', 'PageView');
          `}} />
        ) : null}

        {/* GTM Head */}
        {settings?.googleTagManagerHeadCode ? (
          <script dangerouslySetInnerHTML={{ __html: settings.googleTagManagerHeadCode }} />
        ) : settings?.googleTagManagerId ? (
          <script dangerouslySetInnerHTML={{ __html: `
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','${settings.googleTagManagerId}');
          `}} />
        ) : null}

        {/* Third-Party Apps Head */}
        {settings?.thirdPartyApps?.filter((app: any) => app.active !== false && app.headCode).map((app: any) => (
          <script key={`head-${app.id}`} dangerouslySetInnerHTML={{ __html: app.headCode }} />
        ))}
      </head>
      <body className="min-h-full flex flex-col bg-slate-50 text-slate-700" suppressHydrationWarning>
        {/* GTM Body */}
        {settings?.googleTagManagerBodyCode ? (
          <noscript dangerouslySetInnerHTML={{ __html: settings.googleTagManagerBodyCode }} />
        ) : settings?.googleTagManagerId ? (
          <noscript dangerouslySetInnerHTML={{ __html: `
            <iframe src="https://www.googletagmanager.com/ns.html?id=${settings.googleTagManagerId}"
            height="0" width="0" style="display:none;visibility:hidden"></iframe>
          `}} />
        ) : null}

        {/* GA4 Body Code */}
        {settings?.googleAnalyticsBodyCode && (
          <noscript dangerouslySetInnerHTML={{ __html: settings.googleAnalyticsBodyCode }} />
        )}

        {/* Facebook Body Code */}
        {settings?.facebookPixelBodyCode && (
          <noscript dangerouslySetInnerHTML={{ __html: settings.facebookPixelBodyCode }} />
        )}

        {/* Third-Party Apps Body */}
        {settings?.thirdPartyApps?.filter((app: any) => app.active !== false && app.bodyCode).map((app: any) => (
          <noscript key={`body-${app.id}`} dangerouslySetInnerHTML={{ __html: app.bodyCode }} />
        ))}
        
        {/* Custom Body Script */}
        {settings?.customBodyScript && (
          <script dangerouslySetInnerHTML={{ __html: settings.customBodyScript }} />
        )}

        <main className="flex-grow flex flex-col pb-20 md:pb-0">
          {children}
        </main>
        <GlobalQuoteModal />
        <MobileBottomNav />
      </body>
    </html>
  );
}
