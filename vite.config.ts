// @lovable.dev/vite-tanstack-config already includes the following — do NOT add them manually
// or the app will break with duplicate plugins:
//   - TanStack devtools (dev-only, first), tanstackStart, viteReact, tailwindcss, tsConfigPaths,
//     nitro (build-only; Lovable defaults to cloudflare-module — override below for Vercel), VITE_* env injection, @ path alias,
//     React/TanStack dedupe, error logger plugins, and sandbox detection (port/host/strictPort).
// You can pass additional config via defineConfig({ vite: { ... }, etc... }) if needed.
import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  vite: {
    build: {
      rolldownOptions: {
        experimental: {
          lazyBarrel: false,
        },
      },
    },
  },

  // Lovable defaults to cloudflare-module; pin Vercel so SSR bundles match the runtime.
  nitro: {
    preset: "vercel",
    output: {
      dir: ".vercel/output",
      serverDir: ".vercel/output/functions/__server.func",
      publicDir: ".vercel/output/static",
    },
  },

  tanstackStart: {
    server: {
      entry: "server",
    },
  },
});
