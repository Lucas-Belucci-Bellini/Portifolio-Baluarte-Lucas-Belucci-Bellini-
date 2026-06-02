import { defineConfig } from "vite";

// A Vercel (e o servidor de desenvolvimento) servem o site na raiz do domínio,
// por isso o base é "/". Os assets são resolvidos a partir da raiz.
export default defineConfig({
  base: "/",
  build: {
    outDir: "dist",
    emptyOutDir: true,
  },
});
