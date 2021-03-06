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
  AskingForHelp,
} from "./AuthForm.styled";
import {
  AuthWait,
  AuthComplete,
  DeleteAccountModal,
} from "@/containers/MyPage";
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
  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal((prev) => !prev);
  };

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
    pattern: /^[???-???a-zA-Z0-9]+$/i,
  };

  const nicknameErrors = {
    required: "?????? ???????????????",
    minLength: "????????? 2?????? ?????? 8?????? ????????? ??????????????????",
    maxLength: "????????? 2?????? ?????? 8?????? ????????? ??????????????????",
    pattern: "??????, ??????, ?????? ????????? ???????????? ??????????????????",
    duplicate: "?????? ???????????? ???????????????. ?????? ???????????? ???????????????.",
  };

  const nameValidation = {
    required: true,
    minLength: 2,
    maxLength: 8,
    pattern: /^[???-???]+$/i,
  };

  const nameErrors = {
    required: "?????? ???????????????",
    minLength: "????????? 2?????? ?????? 8?????? ????????? ??????????????????",
    maxLength: "????????? 2?????? ?????? 8?????? ????????? ??????????????????",
    pattern: "????????? ???????????? ??????????????????",
  };

  const required = {
    required: true,
  };

  const requiredError = "?????? ???????????????";

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
        alert("10MB ????????? ?????????????????????");
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
        <Title theme={theme}>?????? ?????? ??????</Title>
        <SubTitle theme={theme}>
          SSAFY?????? ??????????????? ????????? ??????????????? <br />
          ?????? ????????? ???????????? ????????? ???????????????
        </SubTitle>
        <FormSection onSubmit={handleSubmit(onSubmit)}>
          <div>
            <Label theme={theme}>??????</Label>
            <Input
              placeholder="????????? ???????????????"
              status={
                isChecked ? "success" : errors?.nickname ? "error" : "default"
              }
              message={
                isChecked
                  ? "????????? ??? ?????? ???????????????!"
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
            title="??????"
            placeholder="?????? ??????"
            status={!errors?.realName ? "default" : "error"}
            message={
              nameErrors[errors?.realName?.type] ??
              "SSAFY?????? ??????????????? ???????????? ??????????????????"
            }
            defaultValue={userProfile.realName}
            autocomplete="off"
            theme={theme}
            {...register("realName", { ...nameValidation })}
          />
          <div>
            <Label theme={theme}>SSAFY ??????</Label>
            <InformBox>
              <Controller
                name="ordinal"
                control={control}
                rules={{ ...required }}
                render={({ field }) => (
                  <Selector
                    placeholder="??????"
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
                    placeholder="?????????"
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
            <Label theme={theme}>???????????? ????????????</Label>
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
                : "EDU SSAFY ??????, ????????? ?????? ??? SSAFY?????? ????????? ??? ?????? ???????????? ????????????."}
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
              ??????
            </Button>
            <Button
              mode="primary"
              theme={theme}
              onClick={() => handleSubmit(onSubmit)}
            >
              ??????
            </Button>
          </ButtonBox>
        </FormSection>
        <AskingForHelp onClick={openModal}>???????????? ?????????</AskingForHelp>
        <DeleteAccountModal showModal={showModal} setShowModal={setShowModal} />
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
  { value: "1", label: "1???" },
  { value: "2", label: "2???" },
  { value: "3", label: "3???" },
  { value: "4", label: "4???" },
  { value: "5", label: "5???" },
  { value: "6", label: "6???" },
  { value: "7", label: "7???" },
];

const regionOption = [
  { value: "??????", label: "??????" },
  { value: "??????", label: "??????" },
  { value: "??????", label: "??????" },
  { value: "??????", label: "??????" },
  { value: "?????????", label: "?????????" },
];
