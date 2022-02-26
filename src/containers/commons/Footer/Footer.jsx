import React from "react";

import {
  Layout,
  MenuBox,
  Container,
  Row,
  Heading,
  Column,
  LogoBox,
  ItemLink,
  HyperLink,
  Item,
  CopyrightBox,
} from "./Footer.styled";
import { Logo } from "@/foundations";

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
              <ItemLink to="/landing">
                <Item>서비스 소개</Item>
              </ItemLink>
              <ItemLink to="/madeby">
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
              <HyperLink
                href="https://github.com/moramoram/ssafe-service/issues"
                target="_blank"
              >
                <Item>버그 리포트</Item>
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
