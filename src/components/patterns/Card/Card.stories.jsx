import React from "react";
import styled from "styled-components";

import Card from "./";
import { Background, Typography } from "@/foundations";
import { colors } from "@/_shared";

export default {
  title: "Patterns/Card",
  component: Card,
};

export const Default = (args) => (
  <>
    <Card {...args} />
  </>
);

Default.args = {
  contents: {
    title: "주니어 웹 개발자 채용",
    subtitle: "싸피 디자인 시스템",
    highlight: "모집중",
    src: "",
  },
  badges: ["JavaScript", "React", "Vue.js"],
};

export const AllTypes = (args) => (
  <>
    <Background theme="light">
      <TypeBox>
        <CardBox>
          <Typography type="h4" style={{ width: "100px" }}>
            Default
          </Typography>
          <Card {...args} />
        </CardBox>
        <CardBox>
          <Typography type="h4" style={{ width: "100px" }}>
            isLiked
          </Typography>
          <Card isLiked {...args} />
        </CardBox>
        <CardBox>
          <Typography type="h4" style={{ width: "100px" }}>
            isLoading
          </Typography>
          <Card isLoading {...args} />
        </CardBox>
      </TypeBox>
    </Background>
    <Background theme="dark">
      <TypeBox>
        <CardBox>
          <Typography
            type="h4"
            style={{ width: "100px", color: colors.gray25 }}
          >
            Default
          </Typography>
          <Card theme="dark" {...args} />
        </CardBox>
        <CardBox>
          <Typography
            type="h4"
            style={{ width: "100px", color: colors.gray25 }}
          >
            isLiked
          </Typography>
          <Card isLiked theme="dark" {...args} />
        </CardBox>
        <CardBox>
          <Typography
            type="h4"
            style={{ width: "100px", color: colors.gray25 }}
          >
            isLoading
          </Typography>
          <Card isLoading theme="dark" {...args} />
        </CardBox>
      </TypeBox>
    </Background>
  </>
);

AllTypes.args = {
  contents: {
    title: "주니어 웹 개발자 채용",
    subtitle: "싸피 디자인 시스템",
    highlight: "모집중",
    src: "",
  },
  badges: ["JavaScript", "React", "Vue.js"],
};

const TypeBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4rem;
  padding: 1rem;
`;

const CardBox = styled.div`
  display: flex;
  gap: 2rem;
`;
