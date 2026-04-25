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

frontpageUpperTextBox {
      title,
      textContent
    },

frontpageLowerTextBox {
      title,
      textContent
    },

"frontpageTiles": frontpageTileWithTwoImagesAndText {
    mainImage {
      asset->{
        url
      },
      alt
    },
    secondaryImage {
      asset->{
        url
      },
      alt
    },
    textContent,
    linkText,
    linkDestination
  },

    bottomBanner {
      banner {
        asset->{
          _id,
          url
        },
        alt
      },
      title,
      linkText,
      linkDestination
    },

  
  metadata
}`;

// Service

export const servicesQuery = `
 *[_type == "service" && defined(slug.current)] | order(_createdAt asc) {
    _id,
    title,
    "slug": slug.current,
    subPageImage {
      asset->{
        _id,
        url
      },
      alt
    },
    subPageTitle,
    subPageTextContent,
    subPageLinkText,
    subPageLinkDestination
  }
`;

export const serviceBySlugQuery = `
  *[_type == "service" && slug.current == $slug][0]{
    _id,
    _type,
    title,
    "slug": slug.current,

    subPageTitle,
    subPageTextContent,
    subPageLinkText,
    subPageLinkDestination,

    subPageImage {
      asset->{
        _id,
        url
      },
      alt
    },

    topBanner {
      banner {
        asset->{
          _id,
          url
        },
        alt
      },
      title,
      textContent,
      linkText,
      linkDestination
    },

    textBoxWithPageName {
      title,
      textContent
    },

    "tiles": upperArrayWithImageAndText.tileArray[] {
      _key,
      image {
        asset->{
          _id,
          url
        },
        alt
      },
      title,
      textContent,
      linkText,
      linkDestination
    }
  }
`;

export const serviceSlugsQuery = `
  *[_type == "service" && defined(slug.current)]{
    "slug": slug.current
  }
`;

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

  textBoxWithPageName {
      title,
      textContent
    },

upperArrayWithImageAndText {
  "tiles": tileArray[] {
    _key,
    image {
      asset->{
        _id,
        url
      },
      alt
    },
    title,
    textContent,
    linkText,
    linkDestination
  },
},
      bottomBanner {
    banner {
      asset->,
      alt,
    },
    title,
    textContent,
    linkText,
    linkDestination,
  },

lowerArrayWithImageAndText {
  "tiles": tileArray[] {
    _key,
    image {
      asset->{
        _id,
        url
      },
      alt
    },
    title,
    textContent,
    linkText,
    linkDestination
  }
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
