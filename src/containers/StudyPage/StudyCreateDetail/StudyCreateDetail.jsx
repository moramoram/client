import React, { Suspense, lazy } from "react";

import {
  Layout,
  TitleBox,
  Title,
  SubTitle,
  Form,
  InputTitle,
} from "./StudyCreateDetail.styled";

import EmptyPage from "@/pages/CommonPage/EmptyPage";

const StudyCreateEditor = lazy(() =>
  import("@/containers/StudyPage/StudyCreateEditor")
);

const StudyCreateDetail = ({
  register,
  control,
  errors,
  originalData,
  ...props
}) => {
  const titleErrors = {
    required: "필수 항목입니다",
    maxLength: "45자 이내로 입력해주세요",
  };

  return (
    <Layout>
      <TitleBox>
        <Title {...props}>상세 내용 입력</Title>
        <SubTitle {...props}>
          에디터와 마크다운 문법을 활용해 <br /> 멋진 소개글을 작성해보세요
        </SubTitle>
      </TitleBox>
      <Form>
        <InputTitle
          placeholder="제목"
          status={
            errors.title?.type === "required" ||
            errors.title?.type === "maxLength"
              ? "error"
              : "default"
          }
          message={titleErrors[errors.title?.type]}
          defaultValue={originalData ? originalData.title : ""}
          {...register("title", {
            required: !originalData,
            maxLength: 45,
          })}
          {...props}
        />
        <Suspense fallback={<EmptyPage />}>
          <StudyCreateEditor
            register={register}
            control={control}
            errors={errors}
            originalData={originalData}
            {...props}
          />
        </Suspense>
      </Form>
    </Layout>
  );
};

export default StudyCreateDetail;
