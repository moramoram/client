import React, { useEffect, useState } from "react";
import styled from "styled-components";

import { useForm } from "react-hook-form";

import { StudyCreateSummary, StudyCreateDetail } from "@/containers";
import { Button } from "@/components";

const StudyCreatePage = ({ ...props }) => {
  const {
    register,
    control,
    handleSubmit,
    setValue,
    watch,
    clearErrors,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    if (isChecked) {
      data.memberNumber = "무관";
    }
    data.techStack = data.techStack.map((option) => option.value).join(",");
    console.log(data);
  };

  const [isChecked, setIsChecked] = useState(false);

  useEffect(() => {
    if (isChecked) {
      clearErrors(["memberNumber"]);
    }
  }, [isChecked, clearErrors]);

  return (
    <Layout>
      <ContentBox>
        <form onSubmit={handleSubmit(onSubmit)}>
          <StudyCreateDetail
            register={register}
            control={control}
            errors={errors}
            watch={watch}
            {...props}
          />
          <StudyCreateSummary
            register={register}
            control={control}
            errors={errors}
            watch={watch}
            setValue={setValue}
            isChecked={isChecked}
            setIsChecked={setIsChecked}
            {...props}
          />
          <ButtonBox>
            <Button mode="secondary" type="button" {...props}>
              취소
            </Button>
            <Button
              mode="primary"
              onClick={() => handleSubmit(onSubmit)}
              {...props}
            >
              완료
            </Button>
          </ButtonBox>
        </form>
      </ContentBox>
    </Layout>
  );
};

export default StudyCreatePage;

const Layout = styled.div`
  width: 100%;
  max-width: 1280px;
  margin: auto;
`;

const ContentBox = styled.div`
  padding: 20px;
`;

const ButtonBox = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 1rem;
  padding-top: 2rem;
`;
