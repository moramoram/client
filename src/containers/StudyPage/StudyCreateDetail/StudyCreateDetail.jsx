import React from "react";
import styled from "styled-components";

import { StudyCreateEditor } from "@/containers";
import { Input } from "@/components";
import { colors, fontSize, lineHeight, fontWeight } from "@/_shared";

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
        <StudyCreateEditor
          register={register}
          control={control}
          errors={errors}
          originalData={originalData}
          {...props}
        />
      </Form>
    </Layout>
  );
};

export default StudyCreateDetail;

const titleColor = {
  light: colors.gray900,
  dark: colors.gray25,
};

const subtitleColor = {
  light: colors.gray400,
  dark: colors.gray500,
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

const InputTitle = styled(Input)`
  :nth-child(2) {
    height: 60px;
  }

  input {
    font-size: ${fontSize.h3};

    ::placeholder {
      font-size: ${fontSize.h3};
    }
  }
`;
