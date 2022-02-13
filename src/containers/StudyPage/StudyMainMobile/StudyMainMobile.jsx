import React, { Suspense } from "react";
import styled from "styled-components";

import { useRecoilValue, useRecoilState } from "recoil";
import { themeState, studySearch } from "@/recoil";

import { StudyCardGrid } from "@/containers";
import { CardGrid } from "@/layouts";
import { SubNavbar, Input, Checkbox, Sort } from "@/components";

import { debounce } from "@/utils";

const StudyMainMobile = ({ categoryData }) => {
  const theme = useRecoilValue(themeState);
  const [search, setSearch] = useRecoilState(studySearch);

  const handleCategory = (id) => {
    window.scrollTo({ top: 0 });
    setSearch({ ...search, category: id });
  };

  const handleSort = (criteria) => {
    setSearch({ ...search, criteria: criteria });
  };

  const handleKeyword = debounce((e) => {
    setSearch({ ...search, title: e.target.value });
  });

  return (
    <>
      <SubNavMobile
        data={categoryData}
        theme={theme}
        onClick={handleCategory}
        view="mobile"
      />
      <SearchBox>
        <Input
          icon="search"
          placeholder="스터디 검색하기"
          theme={theme}
          onChange={handleKeyword}
        />
      </SearchBox>
      <SortBox>
        <Sort items={criteriaData} theme={theme} onClick={handleSort} />
        <Checkbox label="마감된 스터디 숨기기" theme={theme} />
      </SortBox>
      <MobileCardBox>
        <Suspense fallback={<CardGrid theme={theme} isLoading />}>
          <StudyCardGrid theme={theme} />
        </Suspense>
      </MobileCardBox>
    </>
  );
};

export default StudyMainMobile;

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
