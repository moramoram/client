import React, { useEffect, useCallback } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import { useForm, Controller } from "react-hook-form";
import { useRecoilValue } from "recoil";
import { themeState } from "@/recoil/theme";

import { Input, InputImage, Button, Selector } from "@/components";
import { colors, fontSize, lineHeight, fontWeight } from "@/_shared";

const THEME = {
  LIGHT: "light",
  DARK: "dark",
};

const Authorization = () => {
  const theme = useRecoilValue(themeState);
  const [imageSrc, setImageSrc] = React.useState(null);
  const {
    register,
    control,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);

  const readFile = useCallback((files) => {
    const reader = new FileReader();
    return new Promise((resolve) => {
      reader.onload = () => {
        resolve(reader.result);
        setImageSrc(reader.result);
      };
      files[0] instanceof File && reader.readAsDataURL(files[0]);
    });
  });

  useEffect(() => {
    if (watch("authImg")) {
      readFile(watch("authImg"));
    }
  });

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
            <InputBox>
              <Input
                placeholder="별명을 입력하세요"
                status={!errors?.nickname ? "default" : "error"}
                message={nicknameErrors[errors?.nickname?.type]}
                theme={theme}
                {...register("nickname", { ...nicknameValidation })}
              />
            </InputBox>
          </div>
          <Input
            title="이름"
            placeholder="실명 입력"
            status={!errors?.name ? "default" : "error"}
            message={
              nameErrors[errors?.name?.type] ??
              "SSAFY임이 확인되도록 실명으로 입력해주세요"
            }
            theme={theme}
            {...register("name", { ...nameValidation })}
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
                    options={numberOption}
                    placeholder="기수"
                    theme={theme}
                    status={!errors?.ordinal ? "default" : "error"}
                    message={
                      errors?.ordinal?.type === "required" && requiredError
                    }
                    {...field}
                  />
                )}
              />
              <Controller
                name="campus"
                control={control}
                rules={{ ...required }}
                render={({ field }) => (
                  <Selector
                    options={regionOption}
                    placeholder="캠퍼스"
                    theme={theme}
                    status={!errors?.campus ? "default" : "error"}
                    message={
                      errors?.campus?.type === "required" && requiredError
                    }
                    {...field}
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
              render={({ field }) => <ImageUploader theme={theme} {...field} />}
            />
            {imageSrc && <img src={imageSrc} alt="auth" />}
            <Message>
              EDU SSAFY 캡쳐, 수료증 사진 등 SSAFY임을 증명할 수 있는 이미지가
              필요해요.
            </Message>
          </div>
          <ButtonBox>
            <Button mode="secondary" theme={theme}>
              취소
            </Button>
            <Button mode="primary" theme={theme}>
              확인
            </Button>
          </ButtonBox>
        </FormSection>
      </Layout>
    </>
  );
};

Authorization.propTypes = {
  theme: PropTypes.oneOf(Object.values(THEME)),
  data: PropTypes.arrayOf(Object),
};

Authorization.defaultProps = {
  theme: THEME.LIGHT,
};

export default Authorization;

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

const Layout = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding-top: 86px;
`;

const Title = styled.div`
  line-height: ${lineHeight.h2};
  margin-bottom: 0.5rem;

  font-weight: ${fontWeight.bold};
  font-size: ${fontSize.h3};
  color: ${(props) => titleColor[props.theme]};
`;

const SubTitle = styled.div`
  margin-bottom: 3rem;

  color: ${(props) => subtitleColor[props.theme]};
  font-size: ${fontSize.p};
  line-height: ${lineHeight.p};
`;

const FormSection = styled.form`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  width: 100%;
`;

const InputBox = styled.div`
  display: flex;
  gap: 1rem;

  button {
    margin: 6px 0;
    flex-shrink: 0;
  }

  div {
    flex-grow: 1;
  }
`;

const InformBox = styled.div`
  display: flex;
  gap: 1rem;

  > div {
    flex-grow: 1;
  }
`;

const Label = styled.div`
  font-size: ${fontSize.sm};
  font-weight: ${fontWeight.bold};
  line-height: ${lineHeight.sm};
  color: ${(props) => labelColor[props.theme]};
`;

const ImageUploader = styled(InputImage)`
  margin: 6px 0;
`;

const Message = styled.div`
  font-size: ${fontSize.sm};
  font-weight: ${fontWeight.regular};
  line-height: ${lineHeight.sm};
  color: ${colors.gray400};
`;

const ButtonBox = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 1rem;
  padding-top: 2rem;
`;
