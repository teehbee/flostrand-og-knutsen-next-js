// Contact details page with Breadcrumb, title, text content, contact details, image and Google Maps

import Image from "next/image";
import { PortableText, PortableTextBlock } from "@portabletext/react";

export interface ContactInfoProps {
  pageTitle: string;
  subHeading: string;
  textContent: PortableTextBlock[];
  phoneTitle: string;
  phone: string;
  emailTitle: string;
  email: string;
  adressTitle: string;
  address: string;
  zipAndCity: string;
  image: {
    asset?: {
      url: string;
    };
    alt?: string;
  };
}

export const ContactInfo: React.FC<ContactInfoProps> = (content) => {
  const { pageTitle, subHeading, textContent, phoneTitle, phone, emailTitle, email, adressTitle, address, zipAndCity, image } = content;
  return (
    <section className="pb-45 pb-lg-90">
      <div className="container-wide">
        <div className="border-top pt-15 pb-45 pb-lg-90">
          <span className="accent-color"> {"< >"} </span>
          {pageTitle ?? ""}
        </div>
        <div className="container">
          <div className="row">
            <div className="col-12 col-lg-6 pr-lg-75">
              <div className="pb-15">
                <h2>{subHeading}</h2>
              </div>
              <div className="pb-30 pb-lg-60">
                <PortableText value={textContent ?? []} />
              </div>
              <div className="border-bottom pb-15 mb-30">
                <div>
                  <h3>{phoneTitle}</h3>
                </div>
                <div>{phone ?? "Telefonnummer mangler"}</div>
              </div>
              <div className="border-bottom pb-15 mb-30">
                <div>
                  <h3>{emailTitle}</h3>
                </div>
                <div>{email ?? "E-postadresse mangler"}</div>
              </div>
              <div className="border-bottom pb-15 mb-30">
                <div>
                  <h3>{adressTitle}</h3>
                </div>
                <div>{address ?? "Adresselinje 2 mangler"}</div>
                <div>{zipAndCity ?? "Adresselinje 2 mangler"}</div>
              </div>
            </div>
            <div className="col-12 col-lg-6">
              <div className="pb-45 pb-lg-90">
                <div className="h-350-lg-450 img-clip-wrapper-small top-right">
                  <Image className="img-cover" src={image.asset?.url ?? ""} alt={image?.alt ?? "Bildebeskrivelse mangler"} width={550} height={500} />
                </div>
              </div>
              <div>Google Maps</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
