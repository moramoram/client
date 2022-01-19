import React from "react";
import Badge from "./Badge";
import { Icon } from "../../Basic/Icon";

export const Standard = (args) => <Badge {...args} />;
Standard.args = {
  children: "BADGE",
};

export default {
  title: "Components/Badge",
  component: Badge,
};

export const AllBadges = (args) => (
  <div>
    <h4>Primary</h4>
    <Badge mode="primary">BADGE</Badge>
    <p />
    <h4>Secondary</h4>
    <Badge mode="secondary">BADGE</Badge>
    <p />
    <h4>Secondary Dark</h4>
    <Badge mode="secondary" theme="dark">
      BADGE
    </Badge>
    <p />
    <h4>Secondary Bold</h4>
    <Badge mode="secondary" weight="800">
      BADGE
    </Badge>
    <p />
    <h4>Loading Light</h4>
    <Badge mode="primary" isLoading>
      BADGE
    </Badge>
    <p />
    <h4>Loading Dark</h4>
    <Badge mode="primary" isLoading theme="dark">
      BADGE
    </Badge>
    <p />
    <h4>With Icon</h4>
    <Badge>
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
