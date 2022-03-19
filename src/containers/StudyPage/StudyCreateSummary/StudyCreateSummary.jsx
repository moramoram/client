import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";

import { Controller } from "react-hook-form";

import {
  Layout,
  TitleBox,
  Title,
  SubTitle,
  Form,
  LabelBox,
  Label,
  InputBox,
  CheckboxBox,
  RadioBox,
  TypeBox,
  Message,
} from "./StudyCreateSummary.styled";
import { ThumbnailUploader } from "@/containers/StudyPage";
import { Input, Selector, Checkbox, Radio } from "@/components";

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
  croppedImage,
  setCroppedImage,
  companyOptions,
  defaultCompanyName,
  ...props
}) => {
  const [radioState, setRadioState] = useState({
    0: originalData?.onOff === 0,
    1: originalData?.onOff === 1,
    2: originalData?.onOff === 2,
  });

  const required = { required: true };
  const requiredError = "필수 항목입니다";

  const typeOption = [
    { value: "recruit", label: "채용" },
    { value: "Algorithm", label: "알고리즘" },
    { value: "CS", label: "CS" },
    { value: "Project", label: "프로젝트" },
    { value: "etc", label: "기타" },
  ];

  const companyOption = companyOptions?.map(
    ({ companyName, engCompanyName }) => ({
      label: companyName,
      value: engCompanyName,
    })
  );

  const techStackOption = [
    { value: "Android", label: "Android" },
    { value: "Angular", label: "Angular" },
    { value: "Apache", label: "Apache" },
    { value: "Azure", label: "Azure" },
    { value: "C", label: "C" },
    { value: "C#", label: "C#" },
    { value: "C++", label: "C++" },
    { value: "Django", label: "Django" },
    { value: "Docker", label: "Docker" },
    { value: "Electron", label: "Electron" },
    { value: "Emotion", label: "Emotion" },
    { value: "Flask", label: "Flask" },
    { value: "Flutter", label: "Flutter" },
    { value: "Gatsby", label: "Gatsby" },
    { value: "Gradle", label: "Gradle" },
    { value: "GraphQL", label: "GraphQL" },
    { value: "Go", label: "Go" },
    { value: "HTML5", label: "HTML5" },
    { value: "Java", label: "Java" },
    { value: "JavaScript", label: "JavaScript" },
    { value: "Jenkins", label: "Jenkins" },
    { value: "Jest", label: "Jest" },
    { value: "Jpa", label: "Jpa" },
    { value: "jQuery", label: "jQuery" },
    { value: "Keras", label: "Keras" },
    { value: "Kotlin", label: "Kotlin" },
    { value: "kubernetes", label: "kubernetes" },
    { value: "Linux", label: "Linux" },
    { value: "MariaDB", label: "MariaDB" },
    { value: "Matplotlib", label: "Matplotlib" },
    { value: "MobX", label: "MobX" },
    { value: "mongoDB", label: "mongoDB" },
    { value: "Mybatis", label: "Mybatis" },
    { value: "MySQL", label: "MySQL" },
    { value: "Next.js", label: "Next.js" },
    { value: "NGiNX", label: "NGiNX" },
    { value: "Node.js", label: "Node.js" },
    { value: "Numpy", label: "Numpy" },
    { value: "Nuxt.js", label: "Nuxt.js" },
    { value: "Pandas", label: "Pandas" },
    { value: "parcel", label: "parcel" },
    { value: "php", label: "php" },
    { value: "PostgreSQL", label: "PostgreSQL" },
    { value: "Python", label: "Python" },
    { value: "PyTorch", label: "PyTorch" },
    { value: "R", label: "R" },
    { value: "Rails", label: "Rails" },
    { value: "Raspberry-Pi", label: "Raspberry-Pi" },
    { value: "React", label: "React" },
    { value: "React-Native", label: "React-Native" },
    { value: "React-Query", label: "React-Query" },
    { value: "Recoil", label: "Recoil" },
    { value: "Redis", label: "Redis" },
    { value: "Redux-Saga", label: "Redux-Saga" },
    { value: "Redux", label: "Redux" },
    { value: "Ruby", label: "Ruby" },
    { value: "Sass", label: "Sass" },
    { value: "Scala", label: "Scala" },
    { value: "SQL", label: "SQL" },
    { value: "Spring", label: "Spring" },
    { value: "Spring-Boot", label: "Spring-Boot" },
    { value: "Storybook", label: "Storybook" },
    { value: "styled-components", label: "styled-components" },
    { value: "Svelte", label: "Svelte" },
    { value: "Swift", label: "Swift" },
    { value: "SWR", label: "SWR" },
    { value: "Tailwind-CSS", label: "Tailwind-CSS" },
    { value: "TensorFlow", label: "TensorFlow" },
    { value: "TensorFlow", label: "TensorFlow" },
    { value: "Unity", label: "Unity" },
    { value: "Vue.js", label: "Vue.js" },
    { value: "Vuex", label: "Vuex" },
    { value: "WebAssembly", label: "WebAssembly" },
    { value: "webpack", label: "webpack" },
  ];

  const defaultMemberNumber = () => {
    const value = originalData?.memberNumber;
    if (value && value !== "무관") {
      return Number(value);
    }
    return null;
  };

  const defaultTechStack = originalData?.techStack
    ? techStackOption.filter((option) =>
        originalData.techStack.split(",").includes(option.value)
      )
    : "";

  useEffect(() => {
    if (originalData?.memberNumber === "무관") {
      setIsChecked(true);
    }
  }, [setIsChecked, originalData]);

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
              defaultValue={
                originalData
                  ? typeOption.filter(
                      (option) => option.label === originalData.studyType
                    )
                  : defaultCompanyName
                  ? typeOption.find((option) => option.label === "채용")
                  : ""
              }
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
          {originalData?.studyType === "채용" && originalData?.company_name && (
            <InputBox>
              <Selector
                title="목표 기업"
                placeholder="목표 기업을 선택하세요"
                value={{
                  label: originalData.company_name,
                  value: originalData.company_name,
                }}
                isDisabled
                {...props}
              />
            </InputBox>
          )}
          {watch("studyType")?.value === "recruit" && (
            <InputBox>
              <Controller
                name="companyName"
                control={control}
                render={({ field }) => (
                  <Selector
                    title="목표 기업"
                    placeholder="목표 기업을 선택하세요"
                    options={companyOption}
                    isDisabled={originalData?.company_name}
                    isClearable
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
            defaultValue={defaultMemberNumber()}
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
              value="0"
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
              value="1"
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
              value="2"
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
            croppedImage={croppedImage}
            setCroppedImage={setCroppedImage}
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
