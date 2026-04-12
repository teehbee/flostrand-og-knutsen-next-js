// Top banner with heading textoverlay with heading, text, link and filter on image

import Image from "next/image";
import { PortableText } from "@portabletext/react";
import { useEffect, useRef } from "react";
import { getLocalizedPath } from "@/utils";
import { useLanguage } from "@/context/LanguageContext";
import { TopBannerWithVideoTitleAndLinkProps } from "@/data/interface/props/reusable";
// Disable if single language

export const TopBannerWithVideoTitleAndLink: React.FC<TopBannerWithVideoTitleAndLinkProps> = (content) => {
  const { media, title, linkText, linkDestination, textContent } = content;

  const { language } = useLanguage();
  // Disable if single language

  // For iPhone
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.muted = true;
      videoRef.current.play().catch(() => {});
    }
  }, []);

  return (
    <section className="p-0">
      <div className="bottom-right-clip-art container-fluid h-100vh p-0 pos-relative">
        {/* Video in banner */}
        {media?.video?.asset?.url ? (
          <video className="img-cover filter-50-brightness" autoPlay loop muted playsInline preload="auto" poster={media?.fallbackImage?.asset?.url}>
            <source src={media.video.asset.url} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        ) : (
          // Fallback image
          <Image className="img-cover filter-30-brightness" priority width={1920} height={650} src={media?.fallbackImage?.asset?.url ?? "/assets/img/placeholder/20240307_110601.jpg"} alt={media?.fallbackImage?.alt ?? "Bildebeskrivelse mangler"} />
        )}
        <div className="overlay p-15 p-lg-30 d-flex flex-column justify-content-center">
          <div className="container-wide">
            <div className="row">
              <div className="col-12 col-lg-6">
                <h1 className="light-font fs-2-rem-lg-4rem pb-15">{title ?? "test"}</h1>
                <div className="fs-1-5-rem-lg-2-25rem light-font pb-15">
                  <PortableText value={textContent ?? []} />
                </div>
                <div>
                  <a className="btn btn-primary" href={getLocalizedPath(language, linkDestination ?? "#")}>
                    {linkText}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Remove if no clip art is needed */}
        <div className="top-banner-bottom-clip"></div>
      </div>
    </section>
  );
};
