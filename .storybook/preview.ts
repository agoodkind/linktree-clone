import type { Preview } from "@storybook/react";
import "../src/styles/main.css";

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    // layout: "fullscreen",
  },
};

export default preview;
