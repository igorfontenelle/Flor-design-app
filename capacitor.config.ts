import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.flor_design_app',
  appName: 'flor_design_app',
  webDir: 'dist',
  server: {
    androidScheme: 'https'
  }
};

export default config;
