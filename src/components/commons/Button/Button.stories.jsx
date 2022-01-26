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
    <Button width="200px">Primary</Button>
    <p />
    <Button width="200px" isDisabled>
      Disabled
    </Button>
    <p />
    <Button width="200px" isLoading>
      Primary
    </Button>
    <p />
    <Button width="200px">
      <Icon icon="info" aria-label="Link" />
      Primary
    </Button>
  </div>
);

Primary.storyName = "Primary";

export const Secondary = () => (
  <div>
    <Button mode="secondary" width="200px">
      Secondary
    </Button>
    <p />
    <Button mode="secondary" width="200px" isDisabled>
      Disabled
    </Button>
    <p />
    <Button mode="secondary" width="200px" isLoading>
      Loading...
    </Button>
    <p />
    <Button mode="secondary" width="200px">
      <Icon icon="info" aria-label="Link" />
      Secondary
    </Button>
  </div>
);

Secondary.storyName = "Secondary";

export const Dark = () => (
  <div>
    <Button mode="secondary" width="200px" theme="dark">
      Secondary
    </Button>
    <p />
    <Button mode="secondary" width="200px" isDisabled theme="dark">
      Disabled
    </Button>
    <p />
    <Button mode="secondary" width="200px" isLoading theme="dark">
      Loading...
    </Button>
    <p />
    <Button mode="secondary" width="200px" theme="dark">
      <Icon icon="info" aria-label="Link" />
      Secondary
    </Button>
  </div>
);

Dark.storyName = "Dark Secondary";
