import React from "react";

import Typography from "./";
import { Icon } from "@/foundations";

export default {
  title: "Foundations/Typography",
  component: Typography,
};

export const Default = (args) => <Typography {...args} />;

Default.args = {
  children: "Typography",
};

export const AllTypes = (args) => (
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

AllTypes.args = {
  icon: "smile",
  inline: true,
};
