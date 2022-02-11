import React, { Suspense } from "react";
import styled from "styled-components";

import { useRecoilValue, useRecoilState } from "recoil";
import { themeState, jobSearch } from "@/recoil";

import { SubNavbar, Input, Checkbox, Sort } from "@/components";
import { CardGrid } from "@/layouts";
import { JobCardGrid } from "@/containers";

import { debounce } from "@/utils";

const JobMainMobile = ({ categoryData }) => {
  const theme = useRecoilValue(themeState);
  const [search, setSearch] = useRecoilState(jobSearch);
  const handleCategory = (id) => {
    window.scrollTo({ top: 0 });
    id !== 3 && setSearch({ ...search, category: id });
  };

  const handleKeyword = debounce((keyword) => {
    setSearch({ ...search, title: keyword });
  });

  const handleSort = (criteria) => {
    setSearch({ ...search, criteria: criteria });
  };

  return (
    <>
      <SubNavMobile
        data={categoryData}
        theme={theme}
        onClick={handleCategory}
        view="mobile"
      />
      {search.category === 1 && (
        <>
          <SearchBox>
            <Input
              icon="search"
              placeholder="공고 검색하기"
              onChange={handleKeyword}
              theme={theme}
            />
          </SearchBox>
          <SortBox>
            <Sort items={criteriaData} theme={theme} onClick={handleSort} />
            <Checkbox label="마감된 스터디 숨기기" theme={theme} />
          </SortBox>
        </>
      )}
      <MobileCardBox>
        <Suspense fallback={<CardGrid theme={theme} isLoading />}>
          <JobCardGrid theme={theme} />
        </Suspense>
      </MobileCardBox>
    </>
  );
};

export default JobMainMobile;

const criteriaData = [
  {
    name: "date",
    title: "최신순",
  },
  {
    name: "scrap",
    title: "인기순",
  },
];

const SubNavMobile = styled(SubNavbar)`
  padding: 20px 20px 0 20px;
`;

const MobileCardBox = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  gap: 100px;
  max-width: 1280px;

  padding: 20px;
  margin: auto;
`;

const SearchBox = styled.div`
  padding: 20px 20px 0 20px;
`;

const SortBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
`;
