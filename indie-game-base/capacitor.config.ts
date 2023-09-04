import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'io.ionic.starter',
  appName: 'indie-game-base',
  webDir: 'dist',
  server: {
    androidScheme: 'https'
  }
};

export default config;
