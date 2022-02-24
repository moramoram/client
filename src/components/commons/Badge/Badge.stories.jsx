import React from "react";
import styled from "styled-components";

import Badge from "./";
import { Typography } from "@/foundations";

export const Standard = (args) => <Badge {...args} />;
Standard.args = {
  children: "BADGE",
};

export default {
  title: "Components/Badge",
  component: Badge,
};

export const AllTypes = () => (
  <>
    <TypeBox>
      <Typography type="h4">Primary</Typography>
      <Badge mode="primary">BADGE</Badge>
    </TypeBox>
    <TypeBox>
      <Typography type="h4">Secondary</Typography>
      <Badge mode="secondary">BADGE</Badge>
    </TypeBox>
    <TypeBox>
      <Typography type="h4">Secondary Dark</Typography>
      <Badge mode="secondary" theme="dark">
        BADGE
      </Badge>
    </TypeBox>
    <TypeBox>
      <Typography type="h4">Secondary Bold</Typography>
      <Badge mode="secondary" isBold>
        BADGE
      </Badge>
    </TypeBox>
    <TypeBox>
      <Typography type="h4">Loading Light</Typography>
      <Badge mode="primary" isLoading>
        BADGE
      </Badge>
    </TypeBox>
    <TypeBox>
      <Typography type="h4">Loading Dark</Typography>
      <Badge mode="primary" isLoading theme="dark">
        BADGE
      </Badge>
    </TypeBox>
  </>
);

const TypeBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1rem;
  padding: 1rem;
`;
