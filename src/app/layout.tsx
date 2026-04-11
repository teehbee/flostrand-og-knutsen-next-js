import type { Metadata } from "next";
import "../styles/styles.scss";
import { getFontClasses } from "@/lib/fonts";
// import Script from "next/script";
import { LanguageProvider } from "@/context/LanguageContext";
import ClientLayoutWrapper from "./ClientLayoutWrapper";

export const dynamicParams = true; // gjør at dynamiske ruter (f.eks. /slug) fungerer
export const dynamic = "force-dynamic"; // tvinger Next til å evaluere alle stier ved runtime

// const gtmId = process.env.NEXT_PUBLIC_GTM_ID;

export const metadata: Metadata = {
  title: {
    default: "Flostrand og Knutsen",
    template: "%s | Flostrand og Knutsen",
  },
  robots: {
    index: false,
    follow: false,
  },
  description: "Offisiell nettside for Flostrand og Knutsen",
  icons: { icon: "/assets/favicon.ico" },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html suppressHydrationWarning>
      <head>
        {/* <Script
          id="gtm-script"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,s,l,i){
                w[l]=w[l]||[];
                w[l].push({'gtm.start': new Date().getTime(), event:'gtm.js'});
                var f=d.getElementsByTagName(s)[0],
                    j=d.createElement(s),
                    dl=l!='dataLayer'?'&l='+l:'';
                j.async=true;
                j.src='https://www.googletagmanager.com/gtm.js?id=${gtmId}'+dl;
                f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','${gtmId}');
            `,
          }}
        /> */}
      </head>

      <body className={getFontClasses()}>
        <LanguageProvider>
          <ClientLayoutWrapper>{children}</ClientLayoutWrapper>
        </LanguageProvider>
      </body>
    </html>
  );
}

// If only one language

// import type { Metadata } from "next";
// import "../styles/styles.scss";
// import { Header, Footer } from "@/components/navigation";
// import { getFontClasses } from "@/lib/fonts";
// import { LanguageProvider } from "@/context/LanguageContext";
// import Script from "next/script";

// export const metadata: Metadata = {
//   title: {
//     default: "THB Digital",
//     template: "%s | THB Digital",
//   },
//   description: "Offisiell nettside for THB Digital",
//   robots: {
//     index: false,
//     follow: false,
//   },
//   icons: {
//     icon: "/assets/favicon.ico",
//   },
// };

// export const viewport = {
//   width: "device-width",
//   initialScale: 1,
// };

// // Google tag manager key from env
// const gtmId = process.env.NEXT_PUBLIC_GTM_ID;

// export default function RootLayout({
//   children,
// }: Readonly<{
//   children: React.ReactNode;
// }>) {
//   return (
//     <html lang="no">
//       <head>
//         {/* Google Tag Manager */}
//         <Script
//           id="gtm-script"
//           strategy="beforeInteractive"
//           dangerouslySetInnerHTML={{
//             __html: `
//               (function(w,d,s,l,i){
//                 w[l]=w[l]||[];
//                 w[l].push({'gtm.start': new Date().getTime(), event:'gtm.js'});
//                 var f=d.getElementsByTagName(s)[0],
//                     j=d.createElement(s),
//                     dl=l!='dataLayer'?'&l='+l:'';
//                 j.async=true;
//                 j.src='https://www.googletagmanager.com/gtm.js?id=${gtmId}'+dl;
//                 f.parentNode.insertBefore(j,f);
//               })(window,document,'script','dataLayer','${gtmId}');
//             `,
//           }}
//         />
//       </head>
//       <body className={getFontClasses()}>
//         <LanguageProvider>
//           <iframe src={`https://www.googletagmanager.com/ns.html?id=${gtmId}`} height="0" width="0" style={{ display: "none", visibility: "hidden" }} />
//           <Header />
//           {children}
//           <Footer />
//         </LanguageProvider>
//       </body>
//     </html>
//   );
// }
