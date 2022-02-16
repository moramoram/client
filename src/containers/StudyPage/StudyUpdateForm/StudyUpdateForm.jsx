import React, { useEffect, useCallback, useState } from "react";
import styled from "styled-components";

import { useParams, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useMutation, useQueryClient } from "react-query";
import { GetStudyDetail, getCompanyList, PutStudy } from "@/api";

import { StudyCreateSummary, StudyCreateDetail } from "@/containers";
import { Button } from "@/components";

const StudyUpdateForm = ({ ...props }) => {
  const id = useParams().studyId;
  const [isChecked, setIsChecked] = useState(false);
  const [croppedImage, setCroppedImage] = useState(null);
  const [companyOptions, setCompanyOptions] = useState(null);

  useEffect(() => {
    const getCompanyData = async () => {
      const data = await getCompanyList();
      setCompanyOptions(data);
    };
    getCompanyData();
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

  const originalData = GetStudyDetail(id).data;
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const mutateStudy = useMutation(({ id, data }) => PutStudy(id, data), {
    onSuccess: () => {
      queryClient.invalidateQueries("getStudyDetail", id);
      navigate(`/study/${id}`);
    },
  });

  const convertURLtoFile = async (url) => {
    const response = await fetch(url);
    const data = await response.blob();
    return new File([data], "image.png");
  };

  const transformData = useCallback(
    async (data) => {
      const formData = new FormData();

      data.studyType = originalData.studyType;
      data.companyName = originalData.company_name;
      data.techStack = data.techStack
        ? data.techStack.map((option) => option.value).join(",")
        : "";
      if (isChecked) data.memberNumber = "무관";

      Object.keys(data).forEach((key) => formData.append(key, data[key]));

      if (croppedImage) {
        const file = await fetch(croppedImage).then((r) => r.blob());
        formData.append("thumbnailImg", file, "image.png");
      } else if (!croppedImage && originalData.thumbnailImg) {
        const file = await convertURLtoFile(originalData.thumbnailImg);
        formData.append("thumbnailImg", file, "image.png");
      } else {
        const file = new Blob();
        formData.append("thumbnailImg", file);
      }
      return formData;
    },
    [croppedImage, isChecked, originalData]
  );

  const onSubmit = useCallback(
    async (data) => {
      const formData = await transformData(data);
      mutateStudy.mutate({ id: id, data: formData });
    },
    [transformData, mutateStudy, id]
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
            originalData={originalData}
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
            originalData={originalData}
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

export default StudyUpdateForm;

const Layout = styled.div`
  width: 100%;
  max-width: 1280px;
  margin: auto;
  padding-bottom: 4rem;
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
