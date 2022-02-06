import React from "react";
import styled from "styled-components";

import { Link } from "react-router-dom";

import { Logo } from "@/foundations";
import { colors, fontSize, lineHeight } from "@/_shared";

const Footer = ({ ...props }) => {
  return (
    <>
      <Layout {...props}>
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
              <ItemLink to="#">
                <Item>이용약관</Item>
              </ItemLink>
              <ItemLink to="#">
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
              <ItemLink to="#">
                <Item>FAQ</Item>
              </ItemLink>
              <ItemLink to="#">
                <Item>1:1문의</Item>
              </ItemLink>
            </Column>
          </Row>
        </Container>
      </Layout>
      <CopyrightBox {...props}>
        <Item>© 2022 ssafé. All rights reserved.</Item>
      </CopyrightBox>
    </>
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
  padding: 80px 60px;
  margin-top: 80px;
  background: ${(props) => bgColor[props.theme]};

  @media screen and (max-width: 530px) {
    padding: 60px;
  }
`;

const Container = styled.div`
  display: flex;
  gap: 60px;
  max-width: 1280px;
  width: 100%;
  margin: auto;

  @media screen and (max-width: 530px) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;

const Row = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
  gap: 60px;
  width: 100%;
`;

const Heading = styled.p`
  font-size: ${fontSize.p};
  color: ${colors.gray500};
  font-weight: bold;
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
`;

const LogoBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 300px;
  padding: 0 0 0 50px;

  @media screen and (max-width: 530px) {
    width: 100%;
    padding: 0;
  }
`;

const ItemLink = styled(Link)`
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
