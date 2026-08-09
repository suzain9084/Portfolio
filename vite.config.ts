import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import type { Plugin } from "vite";
import { defineConfig, loadEnv } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";

function contactApiDevPlugin(mode: string): Plugin {
  return {
    name: "contact-api-dev",
    configureServer(server) {
      const env = loadEnv(mode, process.cwd(), "");
      Object.assign(process.env, env);

      server.middlewares.use(async (req, res, next) => {
        if (req.url !== "/api/contact") {
          next();
          return;
        }

        const chunks: Buffer[] = [];
        await new Promise<void>((resolve, reject) => {
          req.on("data", (chunk) => chunks.push(Buffer.from(chunk)));
          req.on("end", () => resolve());
          req.on("error", reject);
        });

        const headers = new Headers();
        for (const [key, value] of Object.entries(req.headers)) {
          if (value) {
            headers.set(key, Array.isArray(value) ? value.join(", ") : value);
          }
        }

        const request = new Request(`http://${req.headers.host ?? "localhost"}${req.url}`, {
          method: req.method,
          headers,
          body:
            req.method === "GET" || req.method === "HEAD" ? undefined : Buffer.concat(chunks),
        });

        const { default: handler } = await import("./api/contact");
        const response = await handler(request);

        res.statusCode = response.status;
        response.headers.forEach((value, key) => {
          if (key.toLowerCase() === "content-length") return;
          res.setHeader(key, value);
        });
        res.end(Buffer.from(await response.arrayBuffer()));
      });
    },
  };
}

export default defineConfig(({ mode }) => ({
  plugins: [react(), tailwindcss(), tsconfigPaths(), contactApiDevPlugin(mode)],
}));
