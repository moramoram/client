import React from "react";
import styled from "styled-components";

import { Link } from "react-router-dom";

import { Logo } from "@/foundations";
import { colors, fontSize, lineHeight } from "@/_shared";

const Footer = ({ ...props }) => {
  return (
    <Layout>
      <MenuBox {...props}>
        <Container>
          <LogoBox>
            <ItemLink to=".">
              <Logo width="100px" height="50px" {...props} />
            </ItemLink>
          </LogoBox>
          <Row>
            <Column>
              <Heading>소개</Heading>
              <ItemLink to=".">
                <Item>서비스 소개</Item>
              </ItemLink>
              <ItemLink to="#">
                <Item>만든 사람</Item>
              </ItemLink>
              <ItemLink to="/terms">
                <Item>이용약관</Item>
              </ItemLink>
              <ItemLink to="/privacy">
                <Item>개인정보처리방침</Item>
              </ItemLink>
            </Column>
            <Column>
              <Heading>서비스</Heading>
              <ItemLink to="/community">
                <Item>커뮤니티</Item>
              </ItemLink>
              <ItemLink to="/study">
                <Item>스터디</Item>
              </ItemLink>
              <ItemLink to="/job">
                <Item>취업정보</Item>
              </ItemLink>
            </Column>
            <Column>
              <Heading>문의</Heading>
              <HyperLink
                href="https://github.com/moramoram/ssafe-service/discussions/categories/q-a"
                target="_blank"
              >
                <Item>Q&A</Item>
              </HyperLink>
              <HyperLink href="mailto:moramoram604@gmail.com">
                <Item>1:1문의</Item>
              </HyperLink>
            </Column>
          </Row>
        </Container>
      </MenuBox>
      <CopyrightBox {...props}>
        <Item>© 2022 ssafé. All rights reserved.</Item>
      </CopyrightBox>
    </Layout>
  );
};

export default Footer;

const bgColor = {
  light: colors.gray25,
  dark: colors.gray900,
};

const borderColor = {
  light: colors.gray100,
  dark: colors.gray700,
};

const Layout = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
`;

const MenuBox = styled.div`
  padding: 80px 60px;
  background: ${(props) => bgColor[props.theme]};

  @media screen and (max-width: 530px) {
    padding: 60px;
  }
`;

const Container = styled.div`
  display: flex;
  justify-content: center;
  gap: 100px;

  max-width: 1280px;
  width: 100%;
  margin: auto;

  @media screen and (max-width: 980px) {
    flex-direction: column;
    align-items: center;
    gap: 20px;
  }
`;

const Row = styled.div`
  display: flex;
  gap: 60px;

  max-width: 940px;
  width: 100%;

  @media screen and (max-width: 540px) {
    flex-direction: column;
  }
`;

const Heading = styled.p`
  font-size: ${fontSize.p};
  color: ${colors.gray500};
  font-weight: bold;
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
  width: 180px;
`;

const LogoBox = styled.div`
  display: flex;
  justify-content: center;
  width: 200px;

  @media screen and (max-width: 980px) {
    width: 100%;
    justify-content: flex-start;
  }
`;

const ItemLink = styled(Link)`
  text-decoration: none;
`;

const HyperLink = styled.a`
  text-decoration: none;
`;

const Item = styled.span`
  color: ${colors.gray500};
  font-size: ${fontSize.sm};
  line-height: ${lineHeight.h3};
`;

const CopyrightBox = styled.div`
  display: flex;
  justify-content: center;
  padding: 20px;
  background: ${(props) => bgColor[props.theme]};
  width: 100%;
  border-top: 1px solid ${(props) => borderColor[props.theme]};
`;
