import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import { Input, InputImage, Button, Selector } from "@/components";

import { colors, fontSize, lineHeight, fontWeight } from "@/_shared";

const THEME = {
  LIGHT: "light",
  DARK: "dark",
};

const AuthBody = ({ ...props }) => {
  return (
    <>
      <Layout>
        <FormSection>
          <NicknameBox>
            <NicknameInput>
              <Input
                title="별명"
                placeholder="별명 입력"
                status="error"
                message="이미 사용중인 별명이에요. 다른 별명으로 지어주세요."
              />
            </NicknameInput>
            <Button mode="secondary" width="72px" height="41px">
              확인
            </Button>
          </NicknameBox>
          <NameBox>
            <NameInput>
              <Input
                title="이름"
                placeholder="실명 입력"
                message="SSAFY임이 확인되도록 실명으로 입력해주세요"
              />
            </NameInput>
          </NameBox>
          <InformBox>
            <Selector
              options={numberOption}
              title="SSAFY 정보"
              placeholder="기수"
            />
            <Selector options={regionOption} placeholder="캠퍼스" />
            <Selector options={classOption} placeholder="반" />
          </InformBox>
          <ImageBox>
            <Label>이미지로 인증하반</Label>
            <InputImage></InputImage>
            <Message>
              EDU SSAFY 캡쳐, 수료증 사진 등 SSAFY임을 증명할 수 있는 이미지가
              필요해요.
            </Message>
          </ImageBox>
          <ButtonBox>
            <Button width="442px">제출하고 모든 서비스 이용하반</Button>
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

const classOption = [
  { value: "1반", label: "1반" },
  { value: "2반", label: "2반" },
  { value: "3바", label: "3반" },
  { value: "4반", label: "4반" },
  { value: "5반", label: "5반" },
  { value: "6반", label: "6반" },
  { value: "7반", label: "7반" },
  { value: "8반", label: "8반" },
  { value: "9반", label: "9반" },
  { value: "10반", label: "10반" },
  { value: "11반", label: "11반" },
  { value: "12반", label: "12반" },
  { value: "13반", label: "13반" },
  { value: "14반", label: "14반" },
  { value: "15반", label: "15반" },
  { value: "16반", label: "16반" },
  { value: "17반", label: "17반" },
  { value: "18반", label: "18반" },
  { value: "19반", label: "19반" },
  { value: "20반", label: "20반" },
];
const Layout = styled.div`
  display: flex;
  flex-direction: column;

  flex-wrap: wrap;
  align-items: flex-start;

  padding-left: 23.75vw;
`;

const FormSection = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
`;

const NicknameBox = styled.div`
  display: flex;
  flex-direction: row;
  width: 439px;
  height: 88px;

  padding-bottom: 32px;
`;

const NicknameInput = styled.div`
  display: flex;
  width: 360px;
  height: 88px;
`;

const NameBox = styled.div`
  display: flex;

  padding-bottom: 32px;
`;

const NameInput = styled.div`
  display: flex;
  width: 439px;
  height: 88px;
`;

const InformBox = styled.div`
  display: flex;

  flex-direction: row;
  height: 42px;

  padding-bottom: 55px;
`;

const ImageBox = styled.div``;

const Label = styled.div`
  font-size: ${fontSize.sm};
  font-weight: ${fontWeight.bold};
  line-height: ${lineHeight.sm};
  color: ${colors.gray900};

  padding-bottom: 6px;
`;

const Message = styled.div`
  font-size: ${fontSize.sm};
  font-weight: ${fontWeight.regular};
  line-height: ${lineHeight.sm};
  color: ${colors.gray400};

  padding-top: 6px;
  padding-bottom: 62px;
`;

const ButtonBox = styled.div`
  width: 442px;
`;
