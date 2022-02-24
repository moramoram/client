import React from "react";
import styled from "styled-components";

import SideBarItem from "./";
import { Background, Typography } from "@/foundations";
import { colors } from "@/_shared";

export default {
  title: "Components/SideBarItem",
  component: SideBarItem,
};

export const Default = (args) => <SideBarItem {...args} />;

Default.args = {
  title: "직무",
  description: "프론트엔드",
  icon: "briefcase",
};

export const AllTypes = () => (
  <>
    <Background theme="light">
      <TypeBox>
        <Typography type="h4">Default</Typography>
        <div>
          {items.map((item) => (
            <SideBarItem {...item} />
          ))}
        </div>
      </TypeBox>
      <TypeBox>
        <Typography type="h4">Loading</Typography>
        <div>
          {items.map((item) => (
            <SideBarItem isLoading {...item} />
          ))}
        </div>
      </TypeBox>
    </Background>
    <Background theme="dark">
      <TypeBox>
        <Typography type="h4" style={{ color: colors.gray25 }}>
          Default
        </Typography>
        <div>
          {items.map((item) => (
            <SideBarItem theme="dark" {...item} />
          ))}
        </div>
      </TypeBox>
      <TypeBox>
        <Typography type="h4" style={{ color: colors.gray25 }}>
          Loading
        </Typography>
        <div>
          {items.map((item) => (
            <SideBarItem theme="dark" isLoading {...item} />
          ))}
        </div>
      </TypeBox>
    </Background>
  </>
);

const items = [
  {
    title: "직무",
    description: "프론트엔드",
    icon: "briefcase",
  },
  {
    title: "고용형태",
    description: "정규직",
    icon: "building",
  },
  {
    title: "경력",
    description: "신입",
    icon: "monitor",
  },
  {
    title: "근무위치",
    description: "서울 강남구",
    icon: "mapPin",
  },
];

const TypeBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 1rem;
`;
