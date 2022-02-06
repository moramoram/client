import React from "react";
import styled from "styled-components";

import { Link } from "react-router-dom";

import { Logo } from "@/foundations";
import { colors, fontSize, lineHeight } from "@/_shared";

const Footer = () => {
  return (
    <>
      <Box>
        <Container>
          <LogoBox>
            <ItemLink to=".">
              <Logo width="100px" height="50px" />
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
      </Box>
      <CopyrightBox>
        <Item>© 2022 ssafé. All rights reserved.</Item>
      </CopyrightBox>
    </>
  );
};

export default Footer;

const Box = styled.div`
  padding: 80px 60px;
  background: ${colors.gray25};
  width: 100%;
`;

const Container = styled.div`
  /* display: flex;
  justify-content: space-between; */
  /* flex-wrap: wrap; */
  max-width: 940px;
  width: 100%;
  margin: auto;
`;

const Row = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
  /* justify-content: center;
  flex-wrap: wrap; */
  gap: 60px;
`;

const Heading = styled.p`
  font-size: ${fontSize.p};
  color: ${colors.gray500};
  font-weight: bold;
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
  /* width: 160px; */

  /* @media screen and (max-width: 1280px) {
    width: 100px;
  } */
`;

const LogoBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 0 0 50px 0;
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
  background: ${colors.gray25};
  width: 100%;
  border-top: 1px solid ${colors.gray100};
`;
