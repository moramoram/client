import React, { Suspense } from "react";
import styled from "styled-components";

import { useRecoilValue, useRecoilState, useSetRecoilState } from "recoil";
import {
  isLoginState,
  themeState,
  communitySearch,
  createModalState,
  loginModalState,
} from "@/recoil";
import { useMediaQuery } from "react-responsive";

import { ErrorBoundary } from "@/containers/Loading";
import {
  CommunityIntro,
  CommunityCreateButton,
  CommunityFeedGrid,
} from "@/containers/CommunityPage";

import {
  SubNavbar,
  Sort,
  Search,
  ScrollTopButton,
  FeedGrid,
} from "@/components";
import { debounce } from "@/utils";

const CommunityPage = () => {
  const theme = useRecoilValue(themeState);
  const isLogined = useRecoilValue(isLoginState);

  const setCreateModalOpen = useSetRecoilState(createModalState);
  const setLoginModalOpen = useSetRecoilState(loginModalState);

  const [search, setSearch] = useRecoilState(communitySearch);

  const handleKeyword = debounce((e) => {
    setSearch({ ...search, title: e.target.value });
  });

  const handleCategory = (id) => {
    window.scrollTo({ top: 0 });
    setSearch({ ...search, boardType: id });
  };

  const handleSort = (criteria) => {
    setSearch({ ...search, criteria: criteria });
  };

  const handleCreation = () => {
    !isLogined && setLoginModalOpen("require");
    isLogined && setCreateModalOpen(true);
  };

  const isPc = useMediaQuery({ query: "(min-width:980px)" });
  const isMobile = useMediaQuery({ query: "(max-width:980px)" });

  return (
    <ErrorBoundary fallback={<div />}>
      <CommunityIntro theme={theme} handleButtonClick={handleCreation} />
      {isPc && (
        <MainBox>
          <StickyNavBox>
            <StickyNav
              data={categoryData}
              selected={search.boardType}
              theme={theme}
              onClick={handleCategory}
            />
          </StickyNavBox>
          <ContentBox>
            <CommunityCreateButton onClick={handleCreation} theme={theme} />
            <SortBox>
              <Sort
                items={criteriaData}
                onClick={handleSort}
                theme={theme}
                value={search.criteria}
              />
              <Search
                theme={theme}
                onChange={handleKeyword}
                placeholder="????????? ??????"
                value={search.title}
              />
            </SortBox>
            <Suspense fallback={<FeedGrid isLoading theme={theme} />}>
              <CommunityFeedGrid theme={theme} />
            </Suspense>
          </ContentBox>
        </MainBox>
      )}
      {isMobile && (
        <MobileBox>
          <SubNavbar
            data={categoryData}
            theme={theme}
            selected={search.boardType}
            onClick={handleCategory}
            view="mobile"
          />
          <div>
            <CommunityCreateButton onClick={handleCreation} theme={theme} />
            <SortBox>
              <Sort
                items={criteriaData}
                onClick={handleSort}
                theme={theme}
                value={search.criteria}
              />
              <Search
                theme={theme}
                onChange={handleKeyword}
                placeholder="????????? ??????"
                value={search.title}
              />
            </SortBox>
          </div>
          <Suspense fallback={<FeedGrid isLoading theme={theme} />}>
            <CommunityFeedGrid theme={theme} />
          </Suspense>
        </MobileBox>
      )}
      <ScrollTopBox>
        <ScrollTopButton
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          theme={theme}
        />
      </ScrollTopBox>
    </ErrorBoundary>
  );
};

export default CommunityPage;

const categoryData = [
  {
    id: 1,
    title: "???????????????",
  },
  {
    id: 2,
    title: "???????????????",
  },
  {
    id: 3,
    title: "?????? ?????? ?????????",
  },
  {
    id: 4,
    title: "?????? ?????????",
  },
];

const criteriaData = [
  {
    label: "?????????",
    value: "date",
  },
  {
    label: "?????????",
    value: "view",
  },
  {
    label: "????????????",
    value: "like",
  },
];

const MainBox = styled.section`
  display: flex;
  justify-content: space-between;
  max-width: 1280px;
  padding: 0 20px 20px 20px;
  margin: auto;
`;

const ContentBox = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;

  max-width: calc(100% - 300px);
  padding-top: 80px;
`;

const MobileBox = styled.section`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 20px;
`;

const StickyNavBox = styled.nav`
  padding-top: 86px;
`;

const StickyNav = styled(SubNavbar)`
  position: sticky;
  top: 150px;
  align-self: flex-start;
`;

const SortBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  max-width: 940px;
  padding: 16px 0px 20px 0;
  margin-bottom: 20px;
`;

const ScrollTopBox = styled.div`
  position: fixed;
  right: 2rem;
  bottom: 2rem;
  z-index: 999;
`;
