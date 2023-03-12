declare namespace NodeJS {
  export interface ProcessEnv {
    readonly NODE_ENV: "development" | "production" | "test";
    readonly NEXT_PUBLIC_AUTH0_DOMAIN: string;
    readonly NEXT_PUBLIC_AUTH0_CLIENT_ID: string;
    readonly NEXT_PUBLIC_BASE_URL: string;
    readonly CONTACT_EMAIL_ADDRESS: string;
    readonly NEXT_PUBLIC_CONTACT_EMAIL_ADDRESS: string;
    readonly SMTP_API_KEY: string;
    readonly NEXT_PUBLIC_SMTP_API_KEY: string;
  }
}
