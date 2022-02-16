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
import { FeedGrid } from "@/layouts";
import { SubNavbar, Sort, Search } from "@/components";
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
              <Sort items={criteriaData} onClick={handleSort} theme={theme} />
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
              <Sort items={criteriaData} onClick={handleSort} theme={theme} />
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
    name: "date",
    title: "최신순",
  },
  {
    name: "scrap",
    title: "인기순",
  },
  {
    name: "view",
    title: "조회순",
  },
];

const MainBox = styled.div`
  display: flex;
  justify-content: center;
  gap: 100px;

  max-width: 1280px;
  margin: auto;
`;

const ContentBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: calc(100% - 320px);
  padding: 80px 20px 0 0;
`;

const MobileBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 20px;
`;

const StickyNavBox = styled.div`
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
  padding: 16px 0px 20px 0;
  margin-bottom: 20px;
`;
