import React from "react";
import { Text } from "./Text";
import { Icon } from "../Icon/Icon";

export default {
  title: "Design System/Text",
  component: Text,
};

export const AllTexts = (args) => (
  <div>
    <Text type="h1">Text</Text>
    <Text type="h2">Text</Text>
    <Text type="h3">Text</Text>
    <Text type="h4">Text</Text>
    <Text type="large">Text</Text>
    <Text type="paragraph">Text</Text>
    <Text type="small">Text</Text>
  </div>
);
AllTexts.args = {
  icon: "facehappy",
  inline: true,
};

AllTexts.storyName = "all Texts";

export const Primary = () => <Text type="primary">Primary</Text>;
export const Secondary = () => <Text type="secondary">Secondary</Text>;
export const Dark = () => (
  <Text type="secondary" isDarkmode>
    Dark
  </Text>
);
export const Custom = () => (
  <Text blackgroundColor="blue200" color="white100">
    Custom
  </Text>
);

export const WithIcon = (args) => (
  <Text {...args}>
    <Icon {...args} />
    with icon
  </Text>
);

WithIcon.args = {
  status: "warning",
  icon: "check",
  inline: true,
};

WithIcon.storyName = "with icon";
