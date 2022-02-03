import React, { useState } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import { useRecoilValue } from "recoil";
import { themeState } from "@/recoil/theme";

import { Input, Button, AvatarUploader, Avatar } from "@/components";
import { colors, fontSize, lineHeight, fontWeight } from "@/_shared";

const THEME = {
  LIGHT: "light",
  DARK: "dark",
};

const MyInfo = ({ ...props }) => {
  const [confirmUsername, setConfirmUsername] = useState(false);
  const theme = useRecoilValue(themeState);

  return (
    <Layout>
      <Title theme={theme}>프로필</Title>
      <SubTitle theme={theme}>
        다른 사용자에게 보여줄 별명과 사진을 바꿀 수 있어요
      </SubTitle>
      <Form>
        <LabelBox>
          <Label theme={theme}>별명</Label>
          <InputBox>
            {/* TODO : 프로필 State에서 별명 가져오기 */}
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
        </LabelBox>
        <LabelBox>
          <Label theme={theme}>프로필 사진</Label>
          <AvatarBox>
            <AvatarUploader theme={theme} />
          </AvatarBox>
        </LabelBox>
        <ButtonBox>
          <Button mode="secondary" theme={theme}>
            취소
          </Button>
          <Button mode="primary" theme={theme}>
            확인
          </Button>
        </ButtonBox>
      </Form>
    </Layout>
  );
};

MyInfo.propTypes = {
  theme: PropTypes.oneOf(Object.values(THEME)),
  data: PropTypes.arrayOf(Object),
};

MyInfo.defaultProps = {
  theme: THEME.LIGHT,
};

export default MyInfo;

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
  height: ${lineHeight.h4};
  margin-bottom: 27px;

  font-size: ${fontSize.p};
  color: ${(props) => subtitleColor[props.theme]};
`;

const Form = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;

  margin-right: 20px;
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

const LabelBox = styled.div`
  display: flex;
  flex-direction: column;

  div:last-child {
    flex-grow: 1;
  }
`;

const Label = styled.div`
  font-size: ${fontSize.sm};
  font-weight: ${fontWeight.bold};
  color: ${(props) => labelColor[props.theme]};
`;

const AvatarBox = styled.div`
  padding-top: 6px;
`;

const ButtonBox = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 1rem;
  padding-top: 2rem;
`;
