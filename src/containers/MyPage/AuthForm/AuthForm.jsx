import React, { useState, useEffect, useCallback } from "react";
import PropTypes from "prop-types";

import { useForm, Controller } from "react-hook-form";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { authState, themeState, submitModalState } from "@/recoil";
import { useMutation, useQueryClient } from "react-query";
import { PostNicknameCheck, PutAuthorization } from "@/api";

import {
  Layout,
  Title,
  SubTitle,
  FormSection,
  Label,
  InformBox,
  ImageUploader,
  ImgBox,
  Message,
  ButtonBox,
} from "./AuthForm.styled";
import { AuthWait, AuthComplete } from "@/containers";
import { Input, Button, Selector } from "@/components";

const THEME = {
  LIGHT: "light",
  DARK: "dark",
};

const AuthForm = ({ userProfile, ...props }) => {
  const theme = useRecoilValue(themeState);
  const authCheck = useRecoilValue(authState);
  const [imageSrc, setImageSrc] = useState(null);
  const [isChecked, setIsChecked] = useState(false);
  const setIsModalOpened = useSetRecoilState(submitModalState);

  const {
    register,
    control,
    handleSubmit,
    watch,
    setError,
    clearErrors,
    reset,
    formState: { errors },
  } = useForm({ mode: "onChange" });

  const queryClient = useQueryClient();
  const mutateNickname = useMutation(PutAuthorization, {
    onSuccess: () => {
      queryClient.invalidateQueries("getUserProfile");
      setIsModalOpened(true);
    },
  });

  const onSubmit = useCallback(
    (data) => {
      const authData = {
        ...data,
        ordinal: data.ordinal.value,
        campus: data.campus.value,
        authImg: data.authImg[0],
      };

      const formData = new FormData();

      Object.keys(authData).forEach((key) =>
        formData.append(key, authData[key])
      );
      mutateNickname.mutate(formData);
    },
    [mutateNickname]
  );

  const handleChange = (e) => {
    const value = e.target.value;
    if (value.length > 8) {
      e.target.value = value.slice(0, 9);
    }
    setIsChecked(false);
  };

  const checkNickname = useCallback(async () => {
    const body = {
      nickname: watch("nickname"),
    };
    const data = await PostNicknameCheck(body);
    if (data) {
      setError("nickname", {
        type: "duplicate",
      });
    } else {
      clearErrors("nickname");
      setIsChecked(true);
    }
  }, [clearErrors, setError, watch]);

  useEffect(() => {
    if (
      watch("nickname") &&
      !errors?.nickname &&
      watch("nickname") !== userProfile.nickname
    ) {
      const timeoutId = setTimeout(() => {
        checkNickname();
      }, 500);
      return () => {
        clearTimeout(timeoutId);
      };
    }
  }, [watch, errors?.nickname, checkNickname, userProfile.nickname]);

  const nicknameValidation = {
    required: true,
    minLength: 2,
    maxLength: 8,
    pattern: /^[가-힣a-zA-Z0-9]+$/i,
  };

  const nicknameErrors = {
    required: "필수 항목입니다",
    minLength: "별명을 2글자 이상 8글자 이하로 입력해주세요",
    maxLength: "별명을 2글자 이상 8글자 이하로 입력해주세요",
    pattern: "한글, 영문, 혹은 숫자를 올바르게 입력해주세요",
    duplicate: "이미 사용중인 별명이에요. 다른 별명으로 지어주세요.",
  };

  const nameValidation = {
    required: true,
    minLength: 2,
    maxLength: 8,
    pattern: /^[가-힣]+$/i,
  };

  const nameErrors = {
    required: "필수 항목입니다",
    minLength: "실명을 2글자 이상 8글자 이하로 입력해주세요",
    maxLength: "실명을 2글자 이상 8글자 이하로 입력해주세요",
    pattern: "한글로 올바르게 입력해주세요",
  };

  const required = {
    required: true,
  };

  const requiredError = "필수 항목입니다";

  const readFile = useCallback((file) => {
    const reader = new FileReader();
    return new Promise((resolve) => {
      reader.onload = () => {
        resolve(reader.result);
        setImageSrc(reader.result);
      };
      file instanceof File && reader.readAsDataURL(file);
    });
  }, []);

  useEffect(() => {
    if (watch("authImg")) {
      const file = watch("authImg")[0];
      if (file.size > 10485760) {
        alert("10MB 이하로 업로드해주세요");
      } else {
        readFile(file);
      }
    }
  });

  if (authCheck === 2) {
    return <AuthWait theme={theme} />;
  }

  if (authCheck === 3) {
    return <AuthComplete theme={theme} />;
  }
  return (
    <>
      <Layout>
        <Title theme={theme}>추가 정보 입력</Title>
        <SubTitle theme={theme}>
          SSAFY만의 커뮤니티를 만들기 위해서예요 <br />
          다른 용도로 사용하지 않으니 안심하세요
        </SubTitle>
        <FormSection onSubmit={handleSubmit(onSubmit)}>
          <div>
            <Label theme={theme}>별명</Label>
            <Input
              placeholder="별명을 입력하세요"
              status={
                isChecked ? "success" : errors?.nickname ? "error" : "default"
              }
              message={
                isChecked
                  ? "사용할 수 있는 별명입니다!"
                  : nicknameErrors[errors?.nickname?.type]
              }
              defaultValue={
                userProfile.nickname !== "Guest" ? userProfile.nickname : null
              }
              autocomplete="off"
              theme={theme}
              {...register("nickname", {
                onChange: handleChange,
                ...nicknameValidation,
              })}
            />
          </div>
          <Input
            title="이름"
            placeholder="실명 입력"
            status={!errors?.realName ? "default" : "error"}
            message={
              nameErrors[errors?.realName?.type] ??
              "SSAFY임이 확인되도록 실명으로 입력해주세요"
            }
            defaultValue={userProfile.realName}
            autocomplete="off"
            theme={theme}
            {...register("realName", { ...nameValidation })}
          />
          <div>
            <Label theme={theme}>SSAFY 정보</Label>
            <InformBox>
              <Controller
                name="ordinal"
                control={control}
                rules={{ ...required }}
                render={({ field }) => (
                  <Selector
                    placeholder="기수"
                    options={numberOption}
                    status={!errors?.ordinal ? "default" : "error"}
                    defaultValue={numberOption[userProfile?.ordinal - 1]}
                    message={
                      errors?.ordinal?.type === "required" ? requiredError : ""
                    }
                    {...field}
                    theme={theme}
                  />
                )}
              />
              <Controller
                name="campus"
                control={control}
                rules={{ ...required }}
                render={({ field }) => (
                  <Selector
                    placeholder="캠퍼스"
                    options={regionOption}
                    status={!errors?.campus ? "default" : "error"}
                    defaultValue={regionOption.find(
                      (option) => option.value === userProfile?.campus
                    )}
                    message={
                      errors?.campus?.type === "required" ? requiredError : ""
                    }
                    {...field}
                    theme={theme}
                  />
                )}
              />
            </InformBox>
          </div>
          <div>
            <Label theme={theme}>이미지로 인증하기</Label>
            <Controller
              name="authImg"
              control={control}
              rules={{ ...required }}
              render={({ field: { onChange, value, ref } }) => (
                <ImageUploader
                  status={!errors?.authImg ? "default" : "error"}
                  theme={theme}
                  value={value && value[0]}
                  onChange={onChange}
                  inputRef={ref}
                />
              )}
            />
            {imageSrc && (
              <ImgBox>
                <img src={imageSrc} alt="auth" />
              </ImgBox>
            )}
            <Message status={!errors?.authImg ? "default" : "error"}>
              {errors?.authImg?.type === "required"
                ? requiredError
                : "EDU SSAFY 캡쳐, 수료증 사진 등 SSAFY임을 증명할 수 있는 이미지가 필요해요."}
            </Message>
          </div>
          <ButtonBox>
            <Button
              mode="secondary"
              type="button"
              onClick={() => {
                reset({
                  nickname: "",
                  realName: "",
                  ordinal: null,
                  campus: null,
                  authImg: null,
                });
                setImageSrc(null);
              }}
              theme={theme}
            >
              취소
            </Button>
            <Button
              mode="primary"
              theme={theme}
              onClick={() => handleSubmit(onSubmit)}
            >
              확인
            </Button>
          </ButtonBox>
        </FormSection>
      </Layout>
    </>
  );
};

AuthForm.propTypes = {
  theme: PropTypes.oneOf(Object.values(THEME)),
  data: PropTypes.arrayOf(Object),
};

AuthForm.defaultProps = {
  theme: THEME.LIGHT,
};

export default AuthForm;

const numberOption = [
  { value: "1", label: "1기" },
  { value: "2", label: "2기" },
  { value: "3", label: "3기" },
  { value: "4", label: "4기" },
  { value: "5", label: "5기" },
  { value: "6", label: "6기" },
  { value: "7", label: "7기" },
];

const regionOption = [
  { value: "서울", label: "서울" },
  { value: "대전", label: "대전" },
  { value: "광주", label: "광주" },
  { value: "구미", label: "구미" },
  { value: "부울경", label: "부울경" },
];
