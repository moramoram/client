import React, { useEffect, useCallback, useState } from "react";
import styled from "styled-components";

import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useMutation, useQueryClient } from "react-query";
import { GetCompanyList, PostStudy } from "@/api";

import { StudyCreateSummary, StudyCreateDetail } from "@/containers";
import { Button } from "@/components";

const StudyCreateForm = ({ ...props }) => {
  const [isChecked, setIsChecked] = useState(false);
  const [croppedImage, setCroppedImage] = useState(null);
  const [companyOptions, setCompanyOptions] = useState(null);

  useEffect(() => {
    const getCompanyList = async () => {
      const data = await GetCompanyList();
      setCompanyOptions(data);
    };
    getCompanyList();
  }, []);

  const {
    register,
    control,
    handleSubmit,
    setValue,
    watch,
    clearErrors,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const mutateStudy = useMutation(PostStudy, {
    onSuccess: () => {
      queryClient.invalidateQueries("getStudyitems");
      navigate("/study");
    },
  });

  const transformData = useCallback(
    async (data) => {
      const formData = new FormData();

      data.studyType = data.studyType.label;
      data.companyName = data.companyName?.label ?? "-";
      data.techStack = data.techStack
        ? data.techStack.map((option) => option.value).join(",")
        : "";
      if (isChecked) data.memberNumber = "무관";

      Object.keys(data).forEach((key) => formData.append(key, data[key]));

      if (croppedImage) {
        const file = await fetch(croppedImage).then((r) => r.blob());
        formData.append("thumbnailImg", file, "image.png");
      } else {
        const file = new Blob();
        formData.append("thumbnailImg", file);
      }
      return formData;
    },
    [croppedImage, isChecked]
  );

  const onSubmit = useCallback(
    async (data) => {
      const formData = await transformData(data);
      mutateStudy.mutate(formData);
    },
    [transformData, mutateStudy]
  );

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
            croppedImage={croppedImage}
            setCroppedImage={setCroppedImage}
            companyOptions={companyOptions}
            {...props}
          />
          <ButtonBox>
            <Button
              mode="secondary"
              type="button"
              onClick={() => navigate("/study")}
              {...props}
            >
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

export default StudyCreateForm;

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
