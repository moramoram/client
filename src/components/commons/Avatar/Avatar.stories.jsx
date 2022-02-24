import React from "react";
import styled from "styled-components";

import Avatar from "./";
import { Typography } from "@/foundations";

export default {
  title: "Components/Avatar",
  component: Avatar,
};

const defaultSrc = "/images/persona.svg";

export const Default = (args) => <Avatar {...args} />;

Default.args = {
  size: "large",
  username: "김싸페",
  src: defaultSrc,
};

export const AllTypes = () => (
  <>
    <TypeBox>
      <Typography type="h4">Default</Typography>
      <AvatarBox>
        <Avatar size="large" />
        <Avatar size="medium" />
        <Avatar size="small" />
      </AvatarBox>
    </TypeBox>
    <TypeBox>
      <Typography type="h4">Images</Typography>
      <AvatarBox>
        <Avatar size="large" src={defaultSrc} />
        <Avatar size="medium" src={defaultSrc} />
        <Avatar size="small" src={defaultSrc} />
      </AvatarBox>
      <AvatarBox>
        <Avatar size="large" src="/images/admin.svg" />
        <Avatar size="medium" src="/images/admin.svg" />
        <Avatar size="small" src="/images/admin.svg" />
      </AvatarBox>
    </TypeBox>
    <TypeBox>
      <Typography type="h4">Initials</Typography>
      <AvatarBox>
        <Avatar size="large" username="김싸피" />
        <Avatar size="medium" username="김싸피" />
        <Avatar size="small" username="김싸피" />
      </AvatarBox>
    </TypeBox>
    <TypeBox>
      <Typography type="h4">Lodings</Typography>
      <AvatarBox>
        <Avatar size="large" isLoading />
        <Avatar size="medium" isLoading />
        <Avatar size="small" isLoading />
      </AvatarBox>
    </TypeBox>
  </>
);

const TypeBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 1rem;
`;

const AvatarBox = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;
