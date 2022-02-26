import styled from "styled-components";
import { SubNavbar } from "@/components";
import { colors, lineHeight, loadings } from "@/_shared";

const borderColor = {
  light: colors.gray100,
  dark: colors.gray900,
};

export const MyPageIntro = styled.div`
  width: 100%;
  height: 400px;
  border-bottom: 1px solid ${(props) => borderColor[props.theme]};
`;

export const IntroContentBox = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  gap: 1rem;

  padding: 150px 0 0 0px;
  margin: auto;
`;

export const UsernameBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
`;

export const Avatar = styled.div`
  height: 100px;
  width: 100px;
  border-radius: 50%;

  ${(props) => loadings[props.theme]};
`;

export const Username = styled.div`
  min-width: 100px;
  height: ${lineHeight.h2};
  border-radius: 4px;

  ${(props) => loadings[props.theme]};
`;

export const Greetings = styled.div`
  min-width: 250px;
  height: ${lineHeight.h4};
  border-radius: 4px;

  ${(props) => loadings[props.theme]};
`;

export const Layout = styled.div`
  padding: 20px;
`;

export const MainBox = styled.div`
  display: flex;
  gap: 100px;

  max-width: 1280px;
  width: 100%;
  margin: auto;
  padding: 0 0 4rem 0;
`;

export const MobileBox = styled.div`
  max-width: 1280px;
  width: 100%;
  padding: 0 0 4rem 0;
`;

export const ContentBox = styled.div`
  width: 100%;
  margin-right: 20px;
`;

export const StickyNavBox = styled.div`
  padding-top: 86px;
`;

export const StickyNav = styled(SubNavbar)`
  position: sticky;
  top: 150px;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 86px;
`;

export const Title = styled.div`
  height: ${lineHeight.h2};
  max-width: 100px;
  margin-bottom: 0.5rem;
  border-radius: 4px;

  ${(props) => loadings[props.theme]};
`;

export const SubTitle = styled.div`
  height: ${lineHeight.p};
  max-width: 50%;
  margin-bottom: 3rem;
  border-radius: 4px;

  ${(props) => loadings[props.theme]};
`;
