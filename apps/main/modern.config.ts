import { defineConfig } from '@modern-js/app-tools';

// https://modernjs.dev/docs/apis/config/overview
export default defineConfig({
  runtime: {
    router: true,
    masterApp: {
      manifest: {
        modules: [
          {
            name: 'Activity',
            entry: 'http://127.0.0.1:8081',
          },
        ],
      },
    },
  },
});
