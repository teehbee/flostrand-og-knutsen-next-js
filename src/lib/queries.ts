// Frontpage

export const frontpageQuery = `*[_type == "frontpage"][0]{

"topBanner": topBannerWithVideo {
  title,
  textContent,
  linkText,
  linkDestination,
  media {
    video {
      asset->{
        url
      }   
    },
    fallbackImage {
      asset->{
        url
      },
      alt
    }
  }
},
  
  metadata
}`;

// Service

export const serviceQuery = `*[_type == "tjeneste"][0]{
  topBanner {
    banner {
      asset->,
      alt,
    },
    title,
    textContent,
    linkText,
    linkDestination,
  },
}`;

// Contact

export const contactPageQuery = `*[_type == "contact"][0] {
  topBanner {
    banner {
      asset->,
      alt,
    },
    title,
    textContent,
    linkText,
    linkDestination,
  },
    
}`;

// About

export const aboutPageQuery = `*[_type == "about"][0] {
  topBanner {
    banner {
      asset->,
      alt,
    },
    title,
    textContent,
    linkText,
    linkDestination,
  },
    
}`;

// 404 page

export const notFoundQuery = `*[_type == "notFound"][0]{
    title,
    textContent,
    linkText,
    linkDestination
}`;

// Privacy page

export const privacyPageQuery = `*[_type == "privacy"][0]{
    title,
    textContent,
}`;

// Globalt

export const globalSettingsQuery = `*[_type == "siteSettings"][0] {
    siteTitle,
    siteUrl,
    companyTitle,
    orgNumber,
    logo{
    asset->{_id, url},
      alt
    },
    phone,
    email,
    address,
    zipAndCity,
    facebookUrl,
    instagramUrl,
    linkedinUrl,
    linkFrontpage,
    linkContact,
    linkPrivacy,
    linkAboutUs,
    copyrightText,
    websiteCreatedByText,
    websiteCreatedByUrl,
    footerCTALinkText,
    footerCTALinkDestination
}`;
