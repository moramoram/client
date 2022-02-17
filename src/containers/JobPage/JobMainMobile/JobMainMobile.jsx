import React, { Suspense } from "react";
import styled from "styled-components";

import { useRecoilValue, useRecoilState } from "recoil";
import { themeState, jobSearch, jobFilter } from "@/recoil";

import { SubNavbar, Input, Checkbox, Sort } from "@/components";
import { CardGrid } from "@/layouts";
import { JobCardGrid } from "@/containers";

import { debounce } from "@/utils";

const JobMainMobile = ({ categoryData }) => {
  const theme = useRecoilValue(themeState);
  const [search, setSearch] = useRecoilState(jobSearch);
  const [filter, setFilter] = useRecoilState(jobFilter);

  const handleCategory = (id) => {
    window.scrollTo({ top: 0 });
    setSearch({ ...search, category: id });
  };

  const handleKeyword = debounce((e) => {
    setSearch({ ...search, title: e.target.value });
  });

  const handleSort = (criteria) => {
    setSearch({ ...search, criteria: criteria });
  };

  const handleFilter = (e) => {
    setFilter(e.target.checked);
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
              theme={theme}
              icon="search"
              placeholder="공고 검색하기"
              onChange={handleKeyword}
              defaultValue={search.title}
            />
          </SearchBox>
          <SortBox>
            <Sort
              items={criteriaData}
              theme={theme}
              onClick={handleSort}
              value={search.criteria}
            />
            <Checkbox
              label="마감된 채용 숨기기"
              theme={theme}
              value={search.criteria}
              onChange={handleFilter}
              defaultChecked={filter}
            />
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
    label: "최신순",
    value: "date",
  },
  {
    label: "인기순",
    value: "scrap",
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
