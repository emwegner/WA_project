import { CapacitorConfig } from "@capacitor/cli";

const config: CapacitorConfig = {
  appId: "de.hsos.wa",
  appName: "indie-game-base",
  webDir: "dist",
  server: {
    androidScheme: "https",
  },
};

export default config;
