import React, { useState } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import { Input, Selector, Button, ImageUploader } from "@/components";
import { colors, fontSize, lineHeight, fontWeight } from "@/_shared";

const THEME = {
  LIGHT: "light",
  DARK: "dark",
};

const StudyCreateSummary = ({ ...props }) => {
  return (
    <Layout>
      <TitleBox>
        <Title {...props}>스터디 요약</Title>
        <SubTitle {...props}>한 눈에 볼 수 있게 요약해주세요</SubTitle>
      </TitleBox>
      <Form>
        <Selector
          title="종류"
          placeholder=""
          options={[
            { value: "recruit", label: "채용" },
            { value: "Algorithm", label: "알고리즘" },
            { value: "CS", label: "CS" },
            { value: "Project", label: "프로젝트" },
            { value: "etc", label: "기타" },
          ]}
          {...props}
        />
        <Selector
          title="목표 기업"
          placeholder=""
          options={[
            { value: "naver", label: "네이버" },
            { value: "kakao", label: "카카오" },
            { value: "line", label: "라인" },
            { value: "coupang", label: "쿠팡" },
            { value: "woowahan", label: "우아한형제들" },
            { value: "daangn", label: "당근마켓" },
            { value: "toss", label: "토스" },
            { value: "zigbang", label: "직방" },
            { value: "yanolka", label: "야놀자" },
            { value: "none", label: "-" },
          ]}
          creatable
          message="원하는 기업이 없다면 추가할 수 있어요"
          {...props}
        />
        <Input
          title="모집 인원"
          placeholder=""
          number
          message="숫자로 입력하세요"
          {...props}
        />
        <Selector
          title="스터디 지역"
          placeholder=""
          options={[
            { value: "online", label: "온라인" },
            { value: "offline", label: "오프라인" },
          ]}
          creatable
          message="원하는 지역이 없다면 추가할 수 있어요"
          {...props}
        />
        <Selector
          title="기술 스택"
          placeholder=""
          isMulti
          message="여러 개의 기술 스택을 입력할 수 있어요"
          {...props}
        />
        <LabelBox>
          <Label {...props}>스터디 썸네일</Label>
          <ImageUploader aspect="2" {...props} />
        </LabelBox>
      </Form>
    </Layout>
  );
};

StudyCreateSummary.propTypes = {
  theme: PropTypes.oneOf(Object.values(THEME)),
  data: PropTypes.arrayOf(Object),
};

StudyCreateSummary.defaultProps = {
  theme: THEME.LIGHT,
};

export default StudyCreateSummary;

const titleColor = {
  light: colors.gray900,
  dark: colors.gray25,
};

const subtitleColor = {
  light: colors.gray400,
  dark: colors.gray500,
};

const labelColor = {
  light: colors.gray900,
  dark: colors.gray25,
};

const Layout = styled.div`
  display: flex;
  gap: 4rem;
  padding-top: 86px;

  @media screen and (max-width: 979px) {
    flex-direction: column;
    gap: 2rem;
  }
`;

const TitleBox = styled.div`
  width: 300px;
`;

const Title = styled.div`
  line-height: ${lineHeight.h2};
  margin-bottom: 0.5rem;

  font-weight: ${fontWeight.bold};
  font-size: ${fontSize.h3};
  color: ${(props) => titleColor[props.theme]};
`;

const SubTitle = styled.div`
  font-size: ${fontSize.p};
  color: ${(props) => subtitleColor[props.theme]};
`;

const Form = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;

  flex-grow: 1;
`;

const LabelBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
`;

const Label = styled.div`
  font-size: ${fontSize.sm};
  font-weight: ${fontWeight.bold};
  color: ${(props) => labelColor[props.theme]};
`;
