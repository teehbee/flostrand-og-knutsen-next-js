"use client";

import { useContactForm } from "@/utils";

interface ContactFormProps {
  tittel?: string;
  navn?: string;
  epost?: string;
  melding?: string;
  paakrevd?: string;
  send?: string;
  sender?: string;
  suksess?: string;
  feil?: string;
  placeholderName?: string;
  placeholderEmail?: string;
  placeholderMessage?: string;
  godkjenning?: string;
  paakrevdFelt?: string;
}

const ContactForm: React.FC<ContactFormProps> = (content) => {
  const { tittel, navn, placeholderName, epost, placeholderEmail, melding, placeholderMessage, paakrevd, suksess, feil, godkjenning, paakrevdFelt, send, sender } = content;
  const {
    register,
    handleSubmit,
    formState: { errors },
    clearErrors,
    isSending,
    formSent,
    onSubmit,
  } = useContactForm();

  return (
    <section id="contact-form" className="p-15 p-lg-30">
      <div className="container alt-bg-color border-radius-5">
        <div className="row">
          <div className="col-12 col-lg-8 offset-lg-2 p-30 py-lg-75">
            <h2 className="mb-30">{tittel}</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
              <label className="pb-5" htmlFor="name">
                {navn}
              </label>
              <div className="input-wrapper mb-30">
                <input type="text" id="name" {...register("name")} onChange={() => clearErrors("name")} placeholder={placeholderName} />
                {errors.name && <p className="fs-0-75-rem-lg-0-875rem required-field">{paakrevdFelt}</p>}
              </div>
              <label className="pb-5" htmlFor="email">
                {epost}
              </label>
              <div className="input-wrapper mb-30">
                <input type="email" id="email" {...register("email")} onChange={() => clearErrors("email")} placeholder={placeholderEmail} />
                {errors.email && <p className="fs-0-75-rem-lg-0-875rem required-field">{paakrevdFelt}</p>}
              </div>
              <div className="col-12 pb-15">
                <label className="pb-5" htmlFor="message">
                  {melding}
                </label>
                <div className="input-wrapper mb-30">
                  <textarea
                    id="message"
                    {...register("message")}
                    placeholder={placeholderMessage}
                    onChange={(e) => {
                      clearErrors("message");
                      // Reset height and set new height according to content
                      e.target.style.height = "auto";
                      e.target.style.height = e.target.scrollHeight + "px";
                    }}
                    className="auto-resize"
                  />

                  {errors.message && <p className="fs-0-75-rem-lg-0-875rem required-field">{paakrevdFelt}</p>}
                </div>
              </div>
              <div>{godkjenning}</div>
              <div className="py-15">
                <button type="submit" className="btn btn-primary" aria-label="Send contact message">
                  {isSending ? sender || "Sender..." : send || "Send"}
                </button>
                {formSent === "success" && <div className="contact-success-message">{suksess}</div>}
                {formSent === "error" && <div className="contact-error-message">{feil}</div>}
              </div>
              <div className="fs-0-75-rem-lg-0-875rem">{paakrevd}</div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
