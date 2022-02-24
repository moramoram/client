import React from "react";
import styled from "styled-components";

import CardResponsive from ".";
import { Background, Typography } from "@/foundations";
import { colors } from "@/_shared";

export default {
  title: "Patterns/CardResponsive",
  component: CardResponsive,
};

export const Default = (args) => <CardResponsive {...args} />;

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
          <CardResponsive {...args} />
        </CardBox>
        <CardBox>
          <Typography type="h4" style={{ width: "100px" }}>
            isLiked
          </Typography>
          <CardResponsive isLiked {...args} />
        </CardBox>
        <CardBox>
          <Typography type="h4" style={{ width: "100px" }}>
            isLoading
          </Typography>
          <CardResponsive isLoading {...args} />
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
          <CardResponsive theme="dark" {...args} />
        </CardBox>
        <CardBox>
          <Typography
            type="h4"
            style={{ width: "100px", color: colors.gray25 }}
          >
            isLiked
          </Typography>
          <CardResponsive isLiked theme="dark" {...args} />
        </CardBox>
        <CardBox>
          <Typography
            type="h4"
            style={{ width: "100px", color: colors.gray25 }}
          >
            isLoading
          </Typography>
          <CardResponsive isLoading theme="dark" {...args} />
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
  flex-direction: column;
  gap: 1rem;
`;
