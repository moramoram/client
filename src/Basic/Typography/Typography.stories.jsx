import React from "react";
import Typography from "./";
import { Icon } from "../Icon";

export default {
  title: "Basic/Typography",
  component: Typography,
};

export const Default = (args) => <Typography {...args} />;
Default.args = {
  children: "Typography",
};

export const All = (args) => (
  <div>
    <h1>H1</h1>
    <hr />
    <Typography type="h1">Typography</Typography>
    <br />
    <h1>H2</h1>
    <hr />
    <Typography type="h2">Typography</Typography>
    <br />
    <h1>H3</h1>
    <hr />
    <Typography type="h3">Typography</Typography>
    <br />
    <h1>H4</h1>
    <hr />
    <Typography type="h4">Typography</Typography>
    <br />
    <h1>Large</h1>
    <hr />
    <Typography type="large">Typography</Typography>
    <br />
    <h1>Paragraph</h1>
    <hr />
    <Typography type="paragraph">Typography</Typography>
    <br />
    <h1>Small</h1>
    <hr />
    <Typography type="small">Typography</Typography>
    <br />
    <h1>With Icon</h1>
    <hr />
    <Typography {...args}>
      <Icon {...args} />
      with icon
    </Typography>
  </div>
);

All.args = {
  icon: "facehappy",
  inline: true,
};

All.storyName = "all Typographys";
