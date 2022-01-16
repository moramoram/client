import React from "react";
import { Button } from "../Button/Button";
import { Icon } from "../Icon/Icon";

export const Standard = (args) => <Button {...args} />;
Standard.args = {
  mode: "primary",
  children: "primary",
};

export default {
  title: "Design System/Button",
  component: Button,
};

export const Primary = (args) => (
  <div>
    <Button>Primary</Button>
    <p />
    <Button isDisabled>Disabled</Button>
    <p />
    <Button isLoading>Primary</Button>
    <p />
    <Button>
      <Icon icon="info" aria-label="Link" />
      Primary
    </Button>
  </div>
);

Primary.storyName = "Primary";

export const Secondary = (args) => (
  <div>
    <Button mode="secondary">Secondary</Button>
    <p />
    <Button mode="secondary" isDisabled>
      Disabled
    </Button>
    <p />
    <Button mode="secondary" isLoading>
      Loading...
    </Button>
    <p />
    <Button mode="secondary">
      <Icon icon="info" aria-label="Link" />
      Secondary
    </Button>
  </div>
);

Secondary.storyName = "Secondary";

export const Dark = (args) => (
  <div>
    <Button mode="secondary" theme="dark">
      Secondary
    </Button>
    <p />
    <Button mode="secondary" isDisabled theme="dark">
      Disabled
    </Button>
    <p />
    <Button mode="secondary" isLoading theme="dark">
      Loading...
    </Button>
    <p />
    <Button mode="secondary" theme="dark">
      <Icon icon="info" aria-label="Link" />
      Secondary
    </Button>
  </div>
);

Dark.storyName = "Dark Secondary";
