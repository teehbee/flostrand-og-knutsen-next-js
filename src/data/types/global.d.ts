declare global {
  interface Window {
    Usercentrics?: {
      getConsents: () => { marketing: boolean };
      onConsentChanged: (callback: () => void) => void;
    };
    gtag?: (...args: unknown[]) => void;
    grecaptcha: {
      ready: (cb: () => void) => void;
      execute: (siteKey: string, options: { action: string }) => Promise<string>;
    };
  }
}

export {};
