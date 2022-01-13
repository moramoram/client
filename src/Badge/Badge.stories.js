import React from "react";
import { Badge } from "../Badge/Badge";
import { Icon } from "../Icon/Icon";

export const Standard = (args) => <Badge {...args} />;
Standard.args = {
  children: "BADGE",
};

export default {
  title: "Design System/Badge",
  component: Badge,
};

export const AllBadges = (args) => (
  <div>
    <h4>Primary</h4>
    <Badge type="primary">BADGE</Badge>
    <p />
    <h4>Secondary</h4>
    <Badge type="secondary">BADGE</Badge>
    <p />
    <h4>Secondary Dark</h4>
    <Badge type="secondary" isDarkmode>
      BADGE
    </Badge>
    <p />
    <h4>Secondary Bold</h4>
    <Badge type="secondary" weight="800">
      BADGE
    </Badge>
    <p />
    <h4>Custom</h4>
    <Badge blackgroundColor="blue200" color="white100">
      BADGE
    </Badge>
    <p />
    <h4>Loading Light</h4>
    <Badge type="primary" isLoading>
      BADGE
    </Badge>
    <p />
    <h4>Loading Dark</h4>
    <Badge type="primary" isLoading isDarkmode>
      BADGE
    </Badge>
    <p />
    <h4>With Icon</h4>
    <Badge status="positive">
      <Icon {...args} />
      BADGE
    </Badge>
  </div>
);

AllBadges.args = {
  icon: "smile",
  inline: true,
};

AllBadges.storyName = "all badges";

export const Primary = () => <Badge type="primary">Primary</Badge>;
export const Secondary = () => <Badge type="secondary">Secondary</Badge>;
export const Dark = () => (
  <Badge type="secondary" isDarkmode>
    Dark
  </Badge>
);
export const Custom = () => (
  <Badge blackgroundColor="blue200" color="white100">
    Custom
  </Badge>
);

export const WithIcon = (args) => (
  <Badge {...args}>
    <Icon {...args} />
    with icon
  </Badge>
);

WithIcon.args = {
  status: "warning",
  icon: "check",
  inline: true,
};

WithIcon.storyName = "with icon";
