import styled from "styled-components";
import { colors, fontSize, lineHeight, fontWeight, loadings } from "@/_shared";

const bgColor = {
  light: colors.white,
  dark: colors.black,
};

const titleColor = {
  light: colors.gray900,
  dark: colors.gray25,
};

const textColor = {
  light: colors.gray700,
  dark: colors.gray300,
};

const subtitleColor = {
  light: colors.gray400,
  dark: colors.gray500,
};

const borderColor = {
  dark: colors.gray700,
  light: colors.gray200,
};

export const Layout = styled.section`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  width: 100%;
  padding: 100px 12px 100px 12px;
  padding-top: 100px;

  overflow: hidden;
  margin: auto;
  max-width: 940px;
`;

export const TitleBox = styled.header`
  display: flex;
  flex-direction: column;
  gap: 10px;

  > div {
    border-radius: 4px;
    ${(props) => props.isLoading && loadings[props.theme]};
  }
`;

export const SideBarBox = styled.ul`
  margin: 10px 0px;
  padding: 0;
`;

export const BadgeBox = styled.ul`
  display: flex;
  gap: 5px;
  margin: 20px 10px;
  padding: 0;
`;

export const Highlight = styled.h2`
  min-width: 70px;
  min-height: ${lineHeight.lg};
  margin: 0;

  font-size: ${fontSize.lg};
  line-height: ${lineHeight.lg};
  font-weight: ${fontWeight.bold};
  color: ${colors.blue100};
`;

export const Title = styled.h1`
  min-width: 160px;
  min-height: ${lineHeight.h2};
  margin: 0;

  font-size: calc(${fontSize.h2} - 2px);
  line-height: ${lineHeight.h2};
  font-weight: ${fontWeight.bold};
  color: ${(props) => titleColor[props.theme]};
`;

export const SubTitle = styled.h2`
  min-width: 160px;
  min-height: ${lineHeight.lg};
  margin: 0;

  font-weight: ${fontWeight.bold};
  font-size: ${fontSize.lg};
  line-height: ${lineHeight.lg};
  color: ${(props) => subtitleColor[props.theme]};
`;

export const Content = styled.article`
  padding: 0 1rem 2rem 1rem;
  color: ${(props) => textColor[props.theme]};

  h3 {
    margin-bottom: 0;
  }

  ul {
    padding-left: 32px;
  }
`;

export const CardBox = styled.section``;

export const BoxTitle = styled.div`
  padding: 4rem 0 0.2rem 0;
  min-height: ${lineHeight.h3};

  border-top: 1px solid ${(props) => borderColor[props.theme]};
  color: ${(props) => titleColor[props.theme]};

  font-size: ${fontSize.h3};
  line-height: ${lineHeight.h3};
  font-weight: ${fontWeight.bold};
`;

export const BoxDescription = styled.div`
  padding-bottom: 2rem;
  color: ${(props) => subtitleColor[props.theme]};
  font-size: ${fontSize.p};
  line-height: ${lineHeight.p};
`;

export const FixedBox = styled.div`
  position: fixed;
  bottom: 0;
  width: 100%;
  z-index: 1;
`;

export const ButtonBox = styled.div`
  display: flex;
  gap: 1rem;

  padding: 0px 12px 20px 12px;
  background: ${(props) => bgColor[props.theme]};

  > button {
    flex-grow: 1;
    padding: 0;
  }
`;

export const ButtonBg = styled.div`
  width: 100%;
  height: 2rem;
  background-image: linear-gradient(
    to top,
    ${(props) => bgColor[props.theme]},
    ${colors.transparent}
  );
`;
