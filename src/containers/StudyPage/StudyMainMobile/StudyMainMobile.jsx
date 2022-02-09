import React, { Suspense } from "react";
import styled from "styled-components";

import { useRecoilValue } from "recoil";
import { themeState } from "@/recoil/theme";

import { SubNavbar, Input, Checkbox, Sort } from "@/components";
import { CardGrid, StudyCardGrid } from "@/containers";

const StudyMainMobile = ({ categoryData }) => {
  const theme = useRecoilValue(themeState);

  const handleCategory = (e) => {
    console.log(e);
  };

  return (
    <>
      <SubNavMobile
        data={categoryData}
        theme={theme}
        onClick={handleCategory}
        view="mobile"
      />
      <SearchBox>
        <Input icon="search" placeholder="스터디 검색하기" theme={theme} />
      </SearchBox>
      <SortBox>
        <Sort
          items={[
            {
              name: "date",
              title: "최신순",
            },
            {
              name: "scrap",
              title: "인기순",
            },
          ]}
          theme={theme}
        />
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
