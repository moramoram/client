import React, { Suspense } from "react";
import styled from "styled-components";

import { useRecoilValue, useRecoilState, useSetRecoilState } from "recoil";
import {
  authState,
  themeState,
  communitySearch,
  modalState,
  createModalState,
  loginModalState,
  smallModalState,
} from "@/recoil";
import { useMediaQuery } from "react-responsive";

import {
  CommunityIntro,
  CommunityCreateButton,
  CommunityFeedGrid,
  ErrorBoundary,
} from "@/containers";

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
  const authorizedState = useRecoilValue(authState);

  const setCreateModalOpen = useSetRecoilState(createModalState);
  const setLoginModalOpen = useSetRecoilState(loginModalState);
  const setModalOpen = useSetRecoilState(modalState);
  const setSmallModalState = useSetRecoilState(smallModalState);

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
    !authorizedState && setLoginModalOpen("require");
    authorizedState === 3 && setCreateModalOpen(true);
    authorizedState === 2 && setModalOpen(true);
    authorizedState === 1 && setSmallModalState(true);
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
                placeholder="게시글 검색"
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
                placeholder="게시글 검색"
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
    title: "자유게시판",
  },
  {
    id: 2,
    title: "익명게시판",
  },
  {
    id: 3,
    title: "취업 정보 게시판",
  },
  {
    id: 4,
    title: "질문 게시판",
  },
];

const criteriaData = [
  {
    label: "최신순",
    value: "date",
  },
  {
    label: "조회순",
    value: "view",
  },
  {
    label: "좋아요순",
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
