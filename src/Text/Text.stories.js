import React from "react";
import { Text } from "./Text";
import { Icon } from "../Icon/Icon";
import { typography } from "../shared/styles";

export const Standard = (args) => <Text {...args} />;
Standard.args = {
  children: "Typography",
};

export default {
  title: "Design System/Text",
  component: Text,
};

export const AllTexts = (args) => (
  <div>
    <h1>H1</h1>
    <hr />
    <Text type="h1">Text</Text>
    <br />
    <h1>H2</h1>
    <hr />
    <Text type="h2">Text</Text>
    <br />
    <h1>H3</h1>
    <hr />
    <Text type="h3">Text</Text>
    <br />
    <h1>H4</h1>
    <hr />
    <Text type="h4">Text</Text>
    <br />
    <h1>Large</h1>
    <hr />
    <Text type="large">Text</Text>
    <br />
    <h1>Paragraph</h1>
    <hr />
    <Text type="paragraph">Text</Text>
    <br />
    <h1>Small</h1>
    <hr />
    <Text type="small">Text</Text>
    <br />
    <h1>With Icon</h1>
    <hr />
    <Text {...args}>
      <Icon {...args} />
      with icon
    </Text>
  </div>
);

AllTexts.args = {
  icon: "facehappy",
  inline: true,
};

AllTexts.storyName = "all Texts";
