import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react-swc";
import vike from "vike/plugin";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    tsconfigPaths(),
    react(),
    tailwindcss(),
    // do not run vike in storybook
    // storybook invokes vike directly and vike SSR breaks storybook
    process.env.STORYBOOK ? undefined : vike(),
  ],
});
