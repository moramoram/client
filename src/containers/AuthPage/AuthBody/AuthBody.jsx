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

const AuthBody = ({ ...props }) => {
  const [confirmUsername, setConfirmUsername] = useState(false);
  const theme = useRecoilValue(themeState);

  return (
    <>
      <Layout>
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
          />
          <div>
            <Label theme={theme}>SSAFY 정보</Label>
            <InformBox>
              <Selector options={numberOption} placeholder="기수" />
              <Selector options={regionOption} placeholder="캠퍼스" />
            </InformBox>
          </div>
          <div>
            <Label>이미지로 인증하기</Label>
            <ImageUploader />
            <Message>
              EDU SSAFY 캡쳐, 수료증 사진 등 SSAFY임을 증명할 수 있는 이미지가
              필요해요.
            </Message>
          </div>
          <Button>제출하고 모든 서비스 이용하기</Button>
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
  { value: "1기", label: "1기" },
  { value: "2기", label: "2기" },
  { value: "3기", label: "3기" },
  { value: "4기", label: "4기" },
  { value: "5기", label: "5기" },
  { value: "6기", label: "6기" },
  { value: "7기", label: "7기" },
];

const regionOption = [
  { value: "광주", label: "광주" },
  { value: "구미", label: "구미" },
  { value: "대전", label: "대전" },
  { value: "부울경", label: "부울경" },
  { value: "서울", label: "서울" },
];

const Layout = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 23.75vw;
`;

const FormSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
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
  color: ${colors.gray900};
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
