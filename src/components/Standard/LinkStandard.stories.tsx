import LinkStandard from "@components/Standard/LinkStandard";
import type { Meta, StoryObj } from "@storybook/react";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "LinkStandard",
  component: LinkStandard,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  // argTypes: {
  //   backgroundColor: { control: 'color' },
  // },
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
  // args: { onClick: fn() },
} satisfies Meta<typeof LinkStandard>;

export default meta;
type Story = StoryObj<typeof meta>;

// // More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const LinkWithThumbnail: Story = {
  args: {
    link: {
      id: "storybookTestLink",
      thumbnailUrl: "https://loremicon.com/poly/128/128/16413659596/jpg",
      title: "💻 Example Link",
      url: "https://example.com",
    },
  },
};

export const LinkWithoutThumbnail: Story = {
  args: {
    link: {
      id: "storybookTestLink",
      title: "💻 Example Link",
      url: "https://example.com",
    },
  },
};
