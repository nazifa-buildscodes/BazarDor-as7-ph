
import { betterAuth } from "better-auth";
import { mongodbAdapter } from "better-auth/adapters/mongodb";
import { getMongoDb, mongoClient } from "@/lib/mongodb";

export const auth = betterAuth({
  database: mongodbAdapter(await getMongoDb(), {
    client: mongoClient,
  }),

  baseURL:
    process.env.BETTER_AUTH_URL || "http://localhost:3000",

  trustedOrigins: [
    "http://localhost:3000",
    "https://bazar-dor-as7-ph-zzjl.vercel.app",
  ],

  emailAndPassword: {
    enabled: true,
  },

  account: {
    accountLinking: {
      enabled: true,
      trustedProviders: ["google"],
      requireLocalEmailVerified: false,
    },
  },

  socialProviders: {
    google: {
      clientId: process.env.GOOGLE_CLIENT_ID || "",
      clientSecret: process.env.GOOGLE_CLIENT_SECRET || "",
    },

    ...(process.env.GITHUB_CLIENT_ID &&
    process.env.GITHUB_CLIENT_SECRET
      ? {
          github: {
            clientId: process.env.GITHUB_CLIENT_ID,
            clientSecret: process.env.GITHUB_CLIENT_SECRET,
          },
        }
      : {}),
  },
});
