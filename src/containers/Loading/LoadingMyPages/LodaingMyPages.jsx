import React from "react";
import styled from "styled-components";

import { useRecoilValue } from "recoil";
import { themeState } from "@/recoil/theme";
import { useMediaQuery } from "react-responsive";

import { SubNavbar } from "@/components";
import { colors, lineHeight, loadings } from "@/_shared";

const MyPage = () => {
  const theme = useRecoilValue(themeState);
  const isPc = useMediaQuery({ query: "(min-width:980px)" });
  const isMobile = useMediaQuery({ query: "(max-width:980px)" });

  const contents = (
    <Content theme={theme}>
      <Title theme={theme} />
      <SubTitle theme={theme} />
    </Content>
  );

  return (
    <>
      <MyPageIntro theme={theme}>
        <IntroContentBox>
          <Avatar theme={theme} />
          <UsernameBox>
            <Username theme={theme} />
            <Greetings theme={theme} />
          </UsernameBox>
        </IntroContentBox>
      </MyPageIntro>
      <Layout>
        {isPc && (
          <MainBox>
            <StickyNavBox>
              <StickyNav
                data={categoryData}
                theme={theme}
                isLoading
                selected={0}
              />
            </StickyNavBox>
            <ContentBox>{contents}</ContentBox>
          </MainBox>
        )}
        {isMobile && (
          <MobileBox>
            <SubNavbar
              data={categoryData}
              theme={theme}
              view="mobile"
              isLoading
              selected={0}
            />
            <ContentBox>{contents}</ContentBox>
          </MobileBox>
        )}
      </Layout>
    </>
  );
};

export default MyPage;

const categoryData = [
  {
    id: 1,
    title: "",
  },
  {
    id: 2,
    title: "",
  },
  {
    id: 3,
    title: "",
  },
  {
    id: 4,
    title: "",
  },
  {
    id: 5,
    title: "",
  },
];

const borderColor = {
  light: colors.gray100,
  dark: colors.gray900,
};

const MyPageIntro = styled.div`
  width: 100%;
  height: 400px;
  border-bottom: 1px solid ${(props) => borderColor[props.theme]};
`;

const IntroContentBox = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  gap: 1rem;

  padding: 150px 0 0 0px;
  margin: auto;
`;

const UsernameBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
`;

const Avatar = styled.div`
  height: 100px;
  width: 100px;
  border-radius: 50%;

  animation: ${(props) => loadings[props.theme]};
`;

const Username = styled.div`
  min-width: 100px;
  height: ${lineHeight.h2};
  border-radius: 4px;
  animation: ${(props) => loadings[props.theme]};
`;

const Greetings = styled.div`
  min-width: 250px;
  height: ${lineHeight.h4};
  border-radius: 4px;
  animation: ${(props) => loadings[props.theme]};
`;

const Layout = styled.div`
  padding: 20px;
`;

const MainBox = styled.div`
  display: flex;
  gap: 100px;

  max-width: 1280px;
  width: 100%;
  margin: auto;
  padding: 0 0 4rem 0;
`;

const MobileBox = styled.div`
  max-width: 1280px;
  width: 100%;
  padding: 0 0 4rem 0;
`;

const ContentBox = styled.div`
  width: 100%;
  margin-right: 20px;
`;

const StickyNavBox = styled.div`
  padding-top: 86px;
`;

const StickyNav = styled(SubNavbar)`
  position: sticky;
  top: 150px;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 86px;
`;

const Title = styled.div`
  height: ${lineHeight.h2};
  max-width: 100px;
  margin-bottom: 0.5rem;
  border-radius: 4px;

  animation: ${(props) => loadings[props.theme]};
`;

const SubTitle = styled.div`
  height: ${lineHeight.p};
  max-width: 50%;
  margin-bottom: 3rem;
  border-radius: 4px;

  animation: ${(props) => loadings[props.theme]};
`;
