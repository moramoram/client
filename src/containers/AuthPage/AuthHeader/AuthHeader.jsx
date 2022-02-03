import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import { Logo } from "@/foundations";

import { colors, fontSize, lineHeight, fontWeight } from "@/_shared";

const THEME = {
  LIGHT: "light",
  DARK: "dark",
};

const AuthHeader = ({ logo, ...props }) => {
  return (
    <>
      <Layout>
        <LogoSection {...props}>{<Logo logo={logo} />}</LogoSection>
        <TextSection>
          <Text1Box>
            추가 정보를 입력하면 <br />
            <span>모든 서비스</span>를 이용할 수 있어요
          </Text1Box>
          <Text2Box>
            SSAFY만의 커뮤니티를 만들기 위해서예요. <br />
            다른 용도로 사용하지 않으니 안심하세요.
          </Text2Box>
        </TextSection>
      </Layout>
    </>
  );
};

AuthHeader.propTypes = {
  theme: PropTypes.oneOf(Object.values(THEME)),
  data: PropTypes.arrayOf(Object),
};

AuthHeader.defaultProps = {
  theme: THEME.LIGHT,
};

export default AuthHeader;

const Layout = styled.div`
  display: flex;

  width: 45.6vw;

  flex-direction: column;
  align-items: flex-start;
  flex-wrap: wrap;
  justify-content: flex-end;

  padding-left: 23.75vw;
`;

const LogoSection = styled.div`
  svg {
    width: 101px;
    height: 27px;
  }
`;

const TextSection = styled.div`
  padding-bottom: 50px;
`;

const Text1Box = styled.div`
  font-size: ${fontSize.h3};
  font-weight: ${fontWeight.bold};
  line-height: ${lineHeight.h3};
  letter-spacing: -0.02em;
  color: ${colors.gray900};
  span: contains("모든 서비스") .css({color: ${colors.blue100}});
  padding: 28px 0px;
`;

const Text2Box = styled.div`
  font-size: ${fontSize.sm};
  font-weight: ${fontWeight.regular};
  line-height: ${lineHeight.sm};
  letter-spacing: -0.02em;
  color: ${colors.gray400};
`;
