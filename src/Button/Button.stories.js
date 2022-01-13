import React from "react";
import { Button } from "../Button/Button";
import { Icon } from "../Icon/Icon";

export const Standard = (args) => <Button {...args} />;
Standard.args = {
  appearance: "primary",
  children: "primary",
};

export default {
  title: "Design System/Button",
  component: Button,
};

export const Primary = (args) => (
  <div>
    <h1>Primary</h1>
    <hr />
    <p />
    <Button appearance="primary">Primary</Button>
    <p />
    <Button appearance="primary" isDisabled>
      Disabled
    </Button>
    <p />
    <Button appearance="primary" isLoading>
      Primary
    </Button>
    <p />
    <Button appearance="primary">
      <Icon icon="info" aria-label="Link" />
      Primary
    </Button>
  </div>
);

Primary.storyName = "Primary";

export const Secondary = (args) => (
  <div>
    <h1>Secondary</h1>
    <hr />
    <Button appearance="secondary">Secondary</Button>
    <p />
    <Button appearance="secondary" isDisabled>
      Disabled
    </Button>
    <p />
    <Button appearance="secondary" isLoading>
      Loading...
    </Button>
    <p />
    <Button appearance="secondary">
      <Icon icon="info" aria-label="Link" />
      Secondary
    </Button>
    <h1>Dark Mode</h1>
    <hr />
    <Button appearance="secondary" isDarkmode>
      Secondary
    </Button>
    <p />
    <Button appearance="secondary" isDisabled isDarkmode>
      Disabled
    </Button>
    <p />
    <Button appearance="secondary" isLoading isDarkmode>
      Loading...
    </Button>
    <p />
    <Button appearance="secondary" isDarkmode>
      <Icon icon="info" aria-label="Link" />
      Secondary
    </Button>
  </div>
);

Secondary.storyName = "Secondary";

export const SmallButtons = (args) => (
  <div>
    <h1>SmallButtons</h1>
    <Button appearance="primary" size="small">
      Primary
    </Button>
    <Button appearance="secondary" size="small">
      Secondary
    </Button>
    <Button appearance="primary" isDisabled size="small">
      Disabled
    </Button>
    <Button appearance="outline" size="small" containsIcon>
      <Icon icon="link" aria-label="Link" />
    </Button>
    <Button appearance="outline" size="small">
      <Icon icon="link" />
      Link
    </Button>
  </div>
);

SmallButtons.storyName = "SmallButtons";
