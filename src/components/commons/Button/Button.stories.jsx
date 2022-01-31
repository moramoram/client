import React from "react";

import Button from "./";
import { Icon } from "@/foundations";
import { Background } from "@/foundations";

export default {
  title: "Components/Button",
  component: Button,
};

export const Standard = (args) => <Button {...args} />;

Standard.args = {
  mode: "primary",
  children: "primary",
};

export const AllTypes = () => (
  <>
    <Background theme="light">
      <Button width="200px">Primary</Button>
      <br />
      <Button width="200px" disabled>
        Disabled
      </Button>
      <br />
      <Button width="200px" isLoading>
        Primary
      </Button>
      <br />
      <Button width="200px">
        <Icon icon="info" aria-label="Link" />
        Primary
      </Button>
      <br />
      <br />
      <br />
      <Button mode="secondary" width="200px">
        Secondary
      </Button>
      <br />
      <Button mode="secondary" width="200px" disabled>
        Disabled
      </Button>
      <br />
      <Button mode="secondary" width="200px" isLoading>
        Loading...
      </Button>
      <br />
      <Button mode="secondary" width="200px">
        <Icon icon="info" aria-label="Link" />
        Secondary
      </Button>
      <br />
      <br />
      <br />
      <Button mode="transparent" width="200px">
        Transparent
      </Button>
      <br />
      <Button mode="transparent" width="200px" disabled>
        Disabled
      </Button>
      <br />
      <Button mode="transparent" width="200px" isLoading>
        Loading...
      </Button>
      <br />
      <Button mode="transparent" width="200px">
        <Icon icon="info" aria-label="Link" />
        Secondary
      </Button>
      <br />
      <br />
      <br />
      <Button mode="active" width="200px">
        Active
      </Button>
      <br />
      <Button mode="active" width="200px" disabled>
        Disabled
      </Button>
      <br />
      <Button mode="active" width="200px" isLoading>
        Loading...
      </Button>
      <br />
      <Button mode="active" width="200px">
        <Icon icon="info" aria-label="Link" />
        Secondary
      </Button>
    </Background>
    <Background theme="dark">
      <Button width="200px" theme="dark">
        Primary
      </Button>
      <br />
      <Button width="200px" theme="dark" disabled>
        Disabled
      </Button>
      <br />
      <Button width="200px" theme="dark" isLoading>
        Primary
      </Button>
      <br />
      <Button width="200px" theme="dark">
        <Icon icon="info" aria-label="Link" />
        Primary
      </Button>
      <br />
      <br />
      <br />
      <Button mode="secondary" width="200px" theme="dark">
        Secondary
      </Button>
      <br />
      <Button mode="secondary" width="200px" disabled theme="dark">
        Disabled
      </Button>
      <br />
      <Button mode="secondary" width="200px" isLoading theme="dark">
        Loading...
      </Button>
      <br />
      <Button mode="secondary" width="200px" theme="dark">
        <Icon icon="info" aria-label="Link" />
        Secondary
      </Button>
      <br />
      <br />
      <br />
      <Button mode="transparent" width="200px" theme="dark">
        Transparent
      </Button>
      <br />
      <Button mode="transparent" width="200px" theme="dark" disabled>
        Disabled
      </Button>
      <br />
      <Button mode="transparent" width="200px" theme="dark" isLoading>
        Loading...
      </Button>
      <br />
      <Button mode="transparent" width="200px" theme="dark">
        <Icon icon="info" aria-label="Link" />
        Secondary
      </Button>
      <br />
      <br />
      <br />
      <Button mode="active" width="200px" theme="dark">
        Active
      </Button>
      <br />
      <Button mode="active" width="200px" theme="dark" disabled>
        Disabled
      </Button>
      <br />
      <Button mode="active" width="200px" theme="dark" isLoading>
        Loading...
      </Button>
      <br />
      <Button mode="active" width="200px" theme="dark">
        <Icon icon="info" aria-label="Link" />
        Secondary
      </Button>
    </Background>
  </>
);
