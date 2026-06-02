import { defineConfig } from "vite";

// Em desenvolvimento (`npm run dev`) o site roda na raiz "/".
// No build de produção usamos o subcaminho do GitHub Pages,
// que é o nome do repositório.
export default defineConfig(({ command }) => ({
  base: command === "build" ? "/Portifolio-Baluarte-Lucas-Belucci-Bellini-/" : "/",
  build: {
    outDir: "dist",
    emptyOutDir: true,
  },
}));
