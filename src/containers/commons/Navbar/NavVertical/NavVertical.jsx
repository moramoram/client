import React, { useState } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import { NavVerticalItem } from "../NavVerticalItem";
import { Avatar, Switch } from "@/components";
import { Logo, Icon } from "@/foundations";
import { colors, fontSize, fontWeight, shadows } from "@/_shared";

const NavVertical = (props) => {
  const [current, setCurrent] = useState(null);

  const handleClick = (name) => {
    name === current
      ? window.scrollTo({ top: 0, behavior: "smooth" })
      : window.scrollTo({ top: 0 });
    setCurrent(name);
  };

  return (
    <>
      <SampleNav>
        <Logo height="20px" width="100px" />
        <Icon icon="menu" />
      </SampleNav>
      <Layout>
        <LinkBox>
          {navData.map(({ name, title, url }, idx) => {
            return (
              <NavVerticalItem
                {...props}
                onClick={() => handleClick(name)}
                status={current === name ? "active" : "default"}
              >
                {title}
              </NavVerticalItem>
            );
          })}
        </LinkBox>

        <LinkBox>
          {dropdownData.map(({ name, title, url }, idx) => {
            return (
              <NavVerticalItem
                {...props}
                onClick={() => handleClick(name)}
                status={current === name ? "active" : "default"}
              >
                {title}
              </NavVerticalItem>
            );
          })}
        </LinkBox>
        <LinkBox>
          <UserInfoBox>
            <UserInfo>
              <Avatar />
              <div>
                <Greeting>
                  <UserName>김싸피</UserName>님 안녕하세요
                </Greeting>
                <Email>user@example.com</Email>
              </div>
            </UserInfo>
            <Icon icon="logOut" width="20px" stroke={colors.gray500} />
          </UserInfoBox>
        </LinkBox>
        {/* <FlexBox>
          <SwitchBox>
            <Switch onToggle={() => null} />
          </SwitchBox>
          <SwitchText>Dark Mode</SwitchText>
        </FlexBox> */}

        {/* <MenuBox>
        {dropdownData.items.map((item) => (
          <DropdownItem children={item} key={item} />
        ))}
      </MenuBox>
      <MenuBox>
        <DropdownItem children="로그아웃" />
      </MenuBox> */}
      </Layout>
    </>
  );
};

const navData = [
  {
    name: "community",
    title: "커뮤니티",
    url: "community",
  },
  {
    name: "study",
    title: "스터디",
    url: "study",
  },
  {
    name: "jobs",
    title: "취업정보",
    url: "job",
  },
];

const dropdownData = [
  {
    name: "profile",
    title: "내 프로필",
    url: "profile",
  },
  {
    name: "update",
    title: "정보 수정",
    url: "update",
  },
];

export default NavVertical;

const borderColor = {
  dark: colors.gray600,
  light: colors.gray100,
};

const bgColor = {
  dark: colors.black,
  light: colors.white,
};

const textColor = {
  dark: colors.gray25,
  light: colors.gray900,
};

const SampleNav = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 2rem;
  height: 64px;
  background-color: ${colors.white};
  border-bottom: 1px solid ${colors.gray200};
`;

const Layout = styled.div`
  background-color: ${colors.white};
`;

const LinkBox = styled.div`
  padding: 1rem 0;
  border-bottom: 1px solid ${colors.gray200};

  :last-child {
    border: none;
  }
`;

const UserInfoBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 2rem;
`;

const UserInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;

  font-size: ${fontSize.sm};
  color: ${(props) => textColor[props.theme]};
`;

const Greeting = styled.div`
  color: ${colors.gray900};
`;

const UserName = styled.span`
  font-weight: ${fontWeight.bold};
`;

const Email = styled.div`
  color: ${colors.gray400};
`;

const FlexBox = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1rem 0 1rem 2rem;
`;

const SwitchBox = styled.div`
  display: flex;
  align-items: center;
  width: 44px;
`;

const SwitchText = styled.div`
  font-size: ${fontSize.sm};
  font-weight: ${fontWeight.bold};
  color: ${colors.gray600};
`;
