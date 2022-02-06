import React, { Suspense } from "react";
import styled from "styled-components";

import { useRecoilValue } from "recoil";
import { themeState } from "@/recoil/theme";

import { SubNavbar, Input } from "@/components";
import { CardGrid, JobCardGrid } from "@/containers";

const JobMainMobile = ({ categoryData }) => {
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
        <Input icon="search" placeholder="공고 검색하기" theme={theme} />
      </SearchBox>
      <MobileCardBox>
        <Suspense fallback={<CardGrid theme={theme} isLoading />}>
          <JobCardGrid theme={theme} />
        </Suspense>
      </MobileCardBox>
    </>
  );
};

export default JobMainMobile;

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
  padding: 20px;
`;
