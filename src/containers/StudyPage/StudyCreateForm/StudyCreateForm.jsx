import React, { useEffect, useCallback, useState } from "react";

import { useNavigate, useSearchParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useMutation, useQueryClient } from "react-query";
import { getCompanyList, PostStudy } from "@/api";

import { Layout, ContentBox, ButtonBox } from "./StudyCreateForm.styled";
import { StudyCreateSummary, StudyCreateDetail } from "@/containers";
import { Button } from "@/components";

const StudyCreateForm = ({ ...props }) => {
  const [isChecked, setIsChecked] = useState(false);
  const [croppedImage, setCroppedImage] = useState(null);
  const [companyOptions, setCompanyOptions] = useState(null);

  useEffect(() => {
    const getData = async () => {
      const data = await getCompanyList();
      setCompanyOptions(data);
    };
    getData();
  }, []);

  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const defaultCompanyName = searchParams.get("company");

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
      data.companyName = data.companyName?.label || "-";
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

  const {
    register,
    control,
    handleSubmit,
    setValue,
    watch,
    clearErrors,
    formState: { errors },
  } = useForm({
    defaultValues: {
      companyName: {
        label: defaultCompanyName ?? "",
        value: defaultCompanyName ?? "",
      },
    },
  });

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
            defaultCompanyName={defaultCompanyName}
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
