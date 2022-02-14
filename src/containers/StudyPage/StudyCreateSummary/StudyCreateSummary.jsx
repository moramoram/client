import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import styled, { css } from "styled-components";

import { Controller } from "react-hook-form";

import { ThumbnailUploader } from "@/containers";
import { Input, Selector, Checkbox, Radio } from "@/components";
import { colors, fontSize, lineHeight, fontWeight } from "@/_shared";

const THEME = {
  LIGHT: "light",
  DARK: "dark",
};

const StudyCreateSummary = ({
  register,
  control,
  errors,
  watch,
  setValue,
  isChecked,
  setIsChecked,
  originalData,
  ...props
}) => {
  const [radioState, setRadioState] = useState({
    0: originalData?.onOff === 0,
    1: originalData?.onOff === 1,
    2: originalData?.onOff === 2,
  });

  const required = {
    required: true,
  };
  const requiredError = "필수 항목입니다";
  const typeOption = [
    { value: "recruit", label: "채용" },
    { value: "Algorithm", label: "알고리즘" },
    { value: "CS", label: "CS" },
    { value: "Project", label: "프로젝트" },
    { value: "etc", label: "기타" },
  ];

  const companyOption = [
    { value: "naver", label: "네이버" },
    { value: "kakao", label: "카카오" },
    { value: "line", label: "라인" },
    { value: "coupang", label: "쿠팡" },
    { value: "woowahan", label: "우아한형제들" },
    { value: "daangn", label: "당근마켓" },
    { value: "toss", label: "토스" },
    { value: "zigbang", label: "직방" },
    { value: "yanolka", label: "야놀자" },
  ];

  const techStackOption = [
    { value: "Android", label: "Android" },
    { value: "C++", label: "C++" },
    { value: "Django", label: "Django" },
    { value: "Docker", label: "Docker" },
    { value: "Flutter", label: "Flutter" },
    { value: "Go", label: "Go" },
    { value: "JPA", label: "JPA" },
    { value: "Java", label: "Java" },
    { value: "JavaScript", label: "JavaScript" },
    { value: "Kotlin", label: "Kotlin" },
    { value: "Linux", label: "Linux" },
    { value: "Mybatis", label: "Mybatis" },
    { value: "Node.js", label: "Node.js" },
    { value: "Python", label: "Python" },
    { value: "React", label: "React" },
    { value: "Redis", label: "Redis" },
    { value: "SQL", label: "SQL" },
    { value: "Spring", label: "Spring" },
    { value: "Swift", label: "Swift" },
    { value: "TypeScript", label: "TypeScript" },
    { value: "Vue.js", label: "Vue.js" },
  ];

  const defaultTechStack = techStackOption.filter((option) =>
    originalData?.techStack?.split(",").includes(option.value)
  );

  useEffect(() => {
    if (originalData?.memberNumber === "무관") {
      setIsChecked(true);
    }
  }, [setIsChecked]);

  return (
    <Layout>
      <TitleBox>
        <Title {...props}>스터디 요약</Title>
        <SubTitle {...props}>한 눈에 볼 수 있게 요약해주세요</SubTitle>
      </TitleBox>
      <Form>
        <TypeBox>
          <InputBox>
            <Controller
              name="studyType"
              control={control}
              rules={{ ...required }}
              defaultValue={typeOption.filter(
                (option) => option.label === originalData?.studyType
              )}
              render={({ field }) => (
                <Selector
                  title="종류"
                  placeholder="스터디 종류를 선택하세요"
                  options={typeOption}
                  status={!errors?.studyType ? "default" : "error"}
                  message={
                    errors?.studyType?.type === "required" ? requiredError : ""
                  }
                  isDisabled={originalData?.studyType}
                  isRequired
                  {...field}
                  {...props}
                />
              )}
            />
          </InputBox>
          {(watch("studyType")?.value === "recruit" ||
            originalData?.company_name) && (
            <InputBox>
              <Controller
                name="companyName"
                control={control}
                defaultValue={companyOption.filter(
                  (option) => option.label === originalData?.company_name
                )}
                render={({ field }) => (
                  <Selector
                    title="목표 기업"
                    placeholder="목표 기업을 선택하세요"
                    options={companyOption}
                    isDisabled={originalData?.company_name}
                    {...field}
                    {...props}
                  />
                )}
              />
            </InputBox>
          )}
        </TypeBox>
        <InputBox>
          <Input
            title="모집 인원"
            placeholder="모집 인원을 숫자로 입력하세요"
            min="0"
            max="100"
            type="number"
            isRequired
            disabled={isChecked}
            defaultValue={Number(originalData?.memberNumber)}
            status={!errors?.memberNumber ? "default" : "error"}
            {...register("memberNumber", {
              validate: {
                required: (v) => !!v || isChecked,
              },
            })}
            {...props}
          />
          <CheckboxBox>
            <Checkbox
              label="무관"
              onChange={() => setIsChecked(!isChecked)}
              checked={isChecked}
              {...props}
            />
          </CheckboxBox>
          <Message
            status={!errors?.memberNumber ? "default" : "error"}
            {...props}
          >
            {errors?.memberNumber?.type === "required" ? requiredError : ""}
          </Message>
        </InputBox>
        <LabelBox>
          <Label
            isRequired
            status={!errors?.onOff ? "default" : "error"}
            {...props}
          >
            진행 방식
          </Label>
          <RadioBox>
            <Radio
              value="1"
              label="온라인"
              checked={radioState[0]}
              onClick={() =>
                setRadioState({
                  0: true,
                  1: false,
                  2: false,
                })
              }
              {...register("onOff", { ...required })}
              {...props}
            />
            <Radio
              value="2"
              label="오프라인"
              checked={radioState[1]}
              onClick={() =>
                setRadioState({
                  0: false,
                  1: true,
                  2: false,
                })
              }
              {...register("onOff", { ...required })}
              {...props}
            />
            <Radio
              value="3"
              label="온/오프라인 병행"
              checked={radioState[2]}
              onClick={() =>
                setRadioState({
                  0: false,
                  1: false,
                  2: true,
                })
              }
              {...register("onOff", { ...required })}
              {...props}
            />
          </RadioBox>
          <Message status={!errors?.onOff ? "default" : "error"} {...props}>
            {errors?.onOff?.type === "required" ? requiredError : ""}
          </Message>
        </LabelBox>
        <Controller
          name="techStack"
          control={control}
          defaultValue={defaultTechStack}
          render={({ field }) => (
            <Selector
              title="기술 스택"
              placeholder=""
              options={techStackOption}
              isMulti
              message="여러 개의 기술 스택을 입력할 수 있어요"
              {...field}
              {...props}
            />
          )}
        />

        <LabelBox>
          <Label {...props}>스터디 썸네일</Label>
          <ThumbnailUploader
            originalData={originalData}
            aspect="2"
            {...props}
          />
          <Message status="default" {...props}>
            썸네일을 등록하지 않으면 기본 이미지로 설정돼요
          </Message>
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

const msgColor = {
  default: colors.gray400,
  error: colors.error,
};

const requiredColor = {
  default: colors.blue100,
  error: colors.errorOpacity200,
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
  /* align-items: flex-start; */
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

  ${(props) =>
    props.isRequired &&
    css`
      ::after {
        content: "*";
        color: ${requiredColor[props.status]};
        padding-left: 0.2rem;
      }
    `}
`;

const InputBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
`;

const CheckboxBox = styled.div`
  padding-bottom: 6px;
`;

const RadioBox = styled.div`
  display: flex;
  gap: 1rem;

  padding: 1rem 0;
`;

const TypeBox = styled.div`
  display: flex;
  gap: 1rem;

  > div {
    flex: 1;
  }

  @media screen and (max-width: 450px) {
    flex-direction: column;
    gap: 2rem;
  }
`;

const Message = styled.div`
  font-size: ${fontSize.sm};
  font-weight: ${fontWeight.regular};
  color: ${(props) => msgColor[props.status]};
`;
