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
  toppbanner {
    banner {
      asset->,
      alt,
    },
    tittel,
    tekstinnhold,
    lenketekst,
    lenkedestinasjon,
  },

    tjenestevelger {
    instances[]{
      tittel,
      tekstinnhold,
      lenketekst,
      lenkedestinasjon,
      textboxes[]{
        textBoxTitle,
        textBoxContent,
      }
    }
  },

    faqAccordion {
    sectionTitle,
      accordions[]{
        title,
        textContent,
      }
    },
}`;

// Contact

export const contactPageQuery = `*[_type == "contact"][0] {
  toppbanner {
    banner {
      asset->,
      alt,
    },
    tittel,
    tekstinnhold,
    lenketekst,
    lenkedestinasjon,
  },
  
  kontaktSideVelger {
  omMeg,
  kontaktSkjema,
  },

  portrettOgTekstLarge {
    bilde {
      asset->,
      alt,
    },
    tittel,
    tekstinnhold,
    lenketekst,
    lenkedestinasjon,
    },

    kontaktSkjemaInnhold {
    tittel,
    navn,
    epost,
    melding,
    paakrevd,
    send,
    sender,
    suksess,
    feil,
    placeholderName,
    placeholderEmail,
    placeholderMessage,
    godkjenning,
    paakrevdFelt,  
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
