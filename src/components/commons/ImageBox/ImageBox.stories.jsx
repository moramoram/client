import React from "react";
import styled from "styled-components";

import ImageBox from "./";
import { Typography } from "@/foundations";

export default {
  title: "Components/ImageBox",
  component: ImageBox,
};

export const Default = (args) => <ImageBox {...args} />;

Default.args = {
  size: "large",
};

export const AllTypes = () => (
  <>
    <TypeBox>
      <Typography type="h3">Size</Typography>
      <ImageBox />
      <ImageBox size="medium" />
      <ImageBox size="small" />
    </TypeBox>
    <TypeBox>
      <Typography type="h3">Light ImageBox</Typography>
      <ImageBox />
      <ImageBox isLoading />
    </TypeBox>
    <TypeBox>
      <Typography type="h3">Dark ImageBox</Typography>
      <ImageBox theme="dark" />
      <ImageBox theme="dark" isLoading />
    </TypeBox>
  </>
);

const TypeBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 1rem;
`;
