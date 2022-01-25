import React from "react";

import Button from "./";
import { Icon } from "@/foundations";

export default {
  title: "Components/Button",
  component: Button,
};

export const Standard = (args) => <Button {...args} />;

Standard.args = {
  mode: "primary",
  children: "primary",
};

export const Primary = () => (
  <div>
    <Button width="200">Primary</Button>
    <p />
    <Button width="200" isDisabled>
      Disabled
    </Button>
    <p />
    <Button width="200" isLoading>
      Primary
    </Button>
    <p />
    <Button width="200">
      <Icon icon="info" aria-label="Link" />
      Primary
    </Button>
  </div>
);

Primary.storyName = "Primary";

export const Secondary = () => (
  <div>
    <Button mode="secondary" width="200">
      Secondary
    </Button>
    <p />
    <Button mode="secondary" width="200" isDisabled>
      Disabled
    </Button>
    <p />
    <Button mode="secondary" width="200" isLoading>
      Loading...
    </Button>
    <p />
    <Button mode="secondary" width="200">
      <Icon icon="info" aria-label="Link" />
      Secondary
    </Button>
  </div>
);

Secondary.storyName = "Secondary";

export const Dark = () => (
  <div>
    <Button mode="secondary" width="200" theme="dark">
      Secondary
    </Button>
    <p />
    <Button mode="secondary" width="200" isDisabled theme="dark">
      Disabled
    </Button>
    <p />
    <Button mode="secondary" width="200" isLoading theme="dark">
      Loading...
    </Button>
    <p />
    <Button mode="secondary" width="200" theme="dark">
      <Icon icon="info" aria-label="Link" />
      Secondary
    </Button>
  </div>
);

Dark.storyName = "Dark Secondary";
