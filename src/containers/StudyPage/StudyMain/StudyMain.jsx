import React, { Suspense } from "react";

import { useRecoilValue, useRecoilState } from "recoil";
import { themeState, studySearch, studyfilter } from "@/recoil";

import {
  Layout,
  StickyNavBox,
  StickyNav,
  CardGridBox,
  InputBox,
  SortBox,
} from "./StudyMain.styled";
import { StudyCardGrid } from "@/containers";
import { CardGrid, Input, Selector, Checkbox, Sort } from "@/components";

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
