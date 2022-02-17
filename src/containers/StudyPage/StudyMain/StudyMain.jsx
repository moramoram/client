import React, { Suspense } from "react";
import styled from "styled-components";

import { useRecoilValue, useRecoilState } from "recoil";
import { themeState, studySearch, studyfilter } from "@/recoil";

import { StudyCardGrid } from "@/containers";
import { CardGrid } from "@/layouts";
import { SubNavbar, Input, Selector, Checkbox, Sort } from "@/components";

import { debounce } from "@/utils";

const StudyMain = ({ categoryData }) => {
  const theme = useRecoilValue(themeState);
  const [search, setSearch] = useRecoilState(studySearch);
  const [filter, setFilter] = useRecoilState(studyfilter);

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

  const handleType = (e) => {
    const value = e ? e.label : "";
    setSearch({ ...search, studyType: value });
  };

  const handleFilter = (e) => {
    setFilter(e.target.checked);
  };

  return (
    <Layout>
      <StickyNavBox>
        <StickyNav
          data={categoryData}
          theme={theme}
          onClick={handleCategory}
          selected={search.category}
        />
      </StickyNavBox>
      <CardGridBox>
        {search.category === 1 && (
          <>
            <InputBox>
              <Input
                theme={theme}
                onChange={handleKeyword}
                icon="search"
                placeholder="스터디 검색하기"
                defaultValue={search.title}
              />
              <Selector
                theme={theme}
                placeholder="종류"
                onChange={handleType}
                options={studyOptions}
                defaultValue={studyOptions.find(
                  (v) => v.value === search.studyType
                )}
                isClearable
              />
            </InputBox>
            <SortBox>
              <Sort
                theme={theme}
                onClick={handleSort}
                items={criteriaData}
                value={search.criteria}
              />
              <Checkbox
                label="마감된 스터디 숨기기"
                onChange={handleFilter}
                defaultChecked={filter}
                theme={theme}
              />
            </SortBox>
          </>
        )}
        <Suspense fallback={<CardGrid theme={theme} isLoading />}>
          <StudyCardGrid theme={theme} />
        </Suspense>
      </CardGridBox>
    </Layout>
  );
};

export default StudyMain;

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

const studyOptions = [
  { value: "채용", label: "채용" },
  { value: "알고리즘", label: "알고리즘" },
  { value: "CS", label: "CS" },
  { value: "프로젝트", label: "프로젝트" },
];

const Layout = styled.div`
  display: flex;
  justify-content: center;
  gap: 100px;

  max-width: 1280px;
  margin: auto;
`;

const StickyNavBox = styled.div`
  padding-top: 86px;
`;

const StickyNav = styled(SubNavbar)`
  position: sticky;
  top: 150px;
`;

const CardGridBox = styled.div`
  width: calc(100% - 320px);
  padding-top: 80px;
`;

const InputBox = styled.div`
  display: flex;
  gap: 0.5rem;

  max-width: 940px;

  > div {
    flex-grow: 1;
  }
`;

const SortBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  max-width: 940px;

  padding: 20px 0px 20px 0;
  margin-bottom: 20px;
`;
