import React from "react";
import Badge from "./";

export const Standard = (args) => <Badge {...args} />;
Standard.args = {
  children: "BADGE",
};

export default {
  title: "Components/Badge",
  component: Badge,
};

export const AllBadges = () => (
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
    <Badge mode="secondary" isBold>
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
  </div>
);

AllBadges.args = {};

AllBadges.storyName = "all badges";
