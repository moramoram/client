import React from "react";
import { Badge } from "../Badge/Badge";
import { Icon } from "../Icon/Icon";

export default {
  title: "Design System/Badge",
  component: Badge,
};

export const AllBadges = (args) => (
  <div>
    <Badge type="primary">BADGE</Badge>
    <Badge type="secondary">BADGE</Badge>
    <Badge type="secondary" isDarkmode>
      BADGE
    </Badge>
    <Badge blackgroundColor="blue200" color="white100">
      BADGE
    </Badge>
    <Badge status="positive">
      <Icon {...args} />
      with icon
    </Badge>
  </div>
);
AllBadges.args = {
  icon: "facehappy",
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
