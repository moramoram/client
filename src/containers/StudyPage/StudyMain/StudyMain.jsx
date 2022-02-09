import React, { Suspense } from "react";
import styled from "styled-components";

import { useRecoilValue } from "recoil";
import { themeState } from "@/recoil/theme";

import { SubNavbar, Input, Selector, Checkbox } from "@/components";
import { CardGrid, StudyCardGrid } from "@/containers";

const StudyMain = ({ categoryData }) => {
  const theme = useRecoilValue(themeState);

  const handleCategory = (e) => {
    console.log(e);
  };

  return (
    <Layout>
      <StickyNavBox>
        <StickyNav data={categoryData} theme={theme} onClick={handleCategory} />
      </StickyNavBox>
      <CardGridBox>
        <InputBox>
          <Input theme={theme} icon="search" placeholder="스터디 검색하기" />
          <Selector
            theme={theme}
            placeholder="종류"
            options={[
              { value: "recruit", label: "채용" },
              { value: "Algorithm", label: "알고리즘" },
              { value: "CS", label: "CS" },
              { value: "Project", label: "프로젝트" },
            ]}
          />
          {/* <Selector placeholder="기술 스택" isMulti /> */}
        </InputBox>
        <InputBox>
          <Checkbox label="완료된 공고만 보기" theme={theme} />
        </InputBox>
        <Suspense fallback={<CardGrid theme={theme} isLoading />}>
          <StudyCardGrid theme={theme} />
        </Suspense>
      </CardGridBox>
    </Layout>
  );
};

export default StudyMain;

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
  padding-bottom: 2rem;

  > div {
    flex-grow: 1;
  }
`;
