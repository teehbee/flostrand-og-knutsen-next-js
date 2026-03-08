// Sanity queries

// Forside

export const frontpageQuery = `*[_type == "forside"][0]{

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

  tjenesteVelger {
    seksjonsTittel,
    tjenester[]{
      tittel,
      tekstinnhold,
      lenketekst,
      lenkedestinasjon,
      bilde {
        asset->,
        alt,
      }
    }
  },

    stepsArray {
    seksjonsTittel,
    prosessSteg[]{
      tittel,
      tekstinnhold,
      lenketekst,
      lenkedestinasjon,
      bilde {
        asset->,
        alt,
      }
    }
  },

    infoBokser {
      seksjonsTittel,
      bokser[]{
        tittel,
        tekstinnhold,
      }
    },
  
  metadata
}`;

// Tjenster

export const servicesQuery = `*[_type == "tjenester"][0]{
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

// Prosjekter

export const projectsPageQuery = `*[_type == "prosjekter"][0] {
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

    prosjekter {
    tiles[]{
      tittel,
      undertittel,
      tekstinnhold,
      lenketekst,
      lenkedestinasjon,
      bilde {
        asset->,
        alt,
      }
    }
  },

}`;

// Kontakt

export const contactPageQuery = `*[_type == "kontakt"][0] {
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

export const globalComponentsQuery = `*[_type == "globalComponents"][0]{
  contactCTA {
    bilde {
      asset->,
      alt,
    },
    tekst,
    lenketekst,
    lenkedestinasjon,
  },

  projectsPreviewAdds {
    tittel,
    lenketekst,
    lenkedestinasjon,
  }
}`;

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
    linkForside,
    linkTjenester,
    linkProsjekter,
    linkKontakt,
    linkPersonvern,
    copyrightTekst,
    nettsideLagetAvTekst,
    nettsideLagetAvUrl,
    footerCTALenkeTekst,
    footerCTALenkeDestinasjon
}`;
