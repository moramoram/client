import React, { useState } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import { useRecoilValue } from "recoil";
import { themeState } from "@/recoil/theme";

import { Input, InputImage, Button, Selector } from "@/components";
import { colors, fontSize, lineHeight, fontWeight } from "@/_shared";

const THEME = {
  LIGHT: "light",
  DARK: "dark",
};

const AuthBody = () => {
  const theme = useRecoilValue(themeState);
  const [confirmUsername, setConfirmUsername] = useState(false);
  const [imageSrc, setImageSrc] = React.useState(null);

  const readFile = (file) => {
    return new Promise((resolve) => {
      const reader = new FileReader();
      reader.addEventListener("load", () => resolve(reader.result), false);
      reader.readAsDataURL(file);
    });
  };

  const onFileChange = async (files) => {
    if (files && files.length > 0) {
      const file = files[0];
      let imageDataUrl = await readFile(file);
      setImageSrc(imageDataUrl);
    }
  };

  return (
    <>
      <Layout>
        <Title theme={theme}>추가 정보 입력</Title>
        <SubTitle theme={theme}>
          SSAFY만의 커뮤니티를 만들기 위해서예요. <br />
          다른 용도로 사용하지 않으니 안심하세요.
        </SubTitle>
        <FormSection>
          <div>
            <Label theme={theme}>별명</Label>
            <InputBox>
              <Input
                placeholder="별명을 입력하세요"
                status={!confirmUsername ? "default" : "error"}
                // TODO: Form Validation
                message={
                  confirmUsername
                    ? "이미 사용중인 별명이에요. 다른 별명으로 지어주세요."
                    : null
                }
                theme={theme}
              />

              <Button
                mode="active"
                onClick={() => setConfirmUsername(!confirmUsername)}
                theme={theme}
              >
                중복 확인
              </Button>
            </InputBox>
          </div>
          <Input
            title="이름"
            placeholder="실명 입력"
            message="SSAFY임이 확인되도록 실명으로 입력해주세요"
            theme={theme}
          />
          <div>
            <Label theme={theme}>SSAFY 정보</Label>
            <InformBox>
              <Selector
                options={numberOption}
                placeholder="기수"
                theme={theme}
              />
              <Selector
                options={regionOption}
                placeholder="캠퍼스"
                theme={theme}
              />
            </InformBox>
          </div>
          <div>
            <Label theme={theme}>이미지로 인증하기</Label>
            <ImageUploader
              theme={theme}
              onChange={onFileChange}
              accept="image/*"
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

AuthBody.propTypes = {
  theme: PropTypes.oneOf(Object.values(THEME)),
  data: PropTypes.arrayOf(Object),
};

AuthBody.defaultProps = {
  theme: THEME.LIGHT,
};

export default AuthBody;

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
  margin-bottom: 15px;

  font-weight: ${fontWeight.bold};
  font-size: ${fontSize.h2};
  color: ${(props) => titleColor[props.theme]};
`;

const SubTitle = styled.div`
  margin-bottom: 3rem;

  color: ${(props) => subtitleColor[props.theme]};
  font-size: ${fontSize.p};
  line-height: ${lineHeight.p};
`;

const FormSection = styled.div`
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
