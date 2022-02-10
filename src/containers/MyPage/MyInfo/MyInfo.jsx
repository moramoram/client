import React, { useState, useEffect, useCallback, Suspense } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import { useRecoilValue } from "recoil";
import { themeState } from "@/recoil/theme";

import { useMutation, useQueryClient } from "react-query";
import { PostNicknameCheck, PutNickname } from "@/queries";

import { ProfileImage } from "@/containers";
import { Input, Button } from "@/components";
import { colors, fontSize, lineHeight, fontWeight } from "@/_shared";

const THEME = {
  LIGHT: "light",
  DARK: "dark",
};

const MyInfo = ({ userProfile, ...props }) => {
  const theme = useRecoilValue(themeState);
  const { profileImg } = userProfile;

  const [nickname, setNickname] = useState(userProfile.nickname);
  const [nickValue, setNickValue] = useState(nickname);
  const [nickStatus, setNickStatus] = useState({
    status: "default",
    message: null,
  });

  const handleChange = (e) => {
    const value = e.target.value;
    if (value.length > 8) {
      e.target.value = value.slice(0, 9);
    }
    setNickValue(value);
    validateNickname(value);
  };

  const validateNickname = useCallback(
    (value) => {
      const pattern = /[^가-힣a-zA-Z0-9]/i;
      setNickStatus({
        status: "default",
        message: null,
      });

      if (value.length < 2 || value.length > 8) {
        setNickStatus({
          status: "error",
          message: "별명을 2글자 이상 8글자 이하로 입력해주세요",
        });
      } else if (pattern.test(value)) {
        setNickStatus({
          status: "error",
          message: "한글, 영문, 혹은 숫자를 올바르게 입력해주세요",
        });
      }
    },
    [setNickStatus]
  );

  const checkNickname = useCallback(
    async (body) => {
      const data = await PostNicknameCheck(body);
      if (data) {
        setNickStatus({
          status: "error",
          message: "이미 사용중인 별명이에요. 다른 별명으로 지어주세요.",
        });
      } else {
        setNickStatus({
          status: "success",
          message: "사용할 수 있는 별명입니다!",
        });
      }
    },
    [setNickStatus]
  );

  useEffect(() => {
    if (nickValue !== nickname && nickStatus.status === "default") {
      const data = {
        nickname: nickValue,
      };
      const timeoutId = setTimeout(() => {
        checkNickname(data);
      }, 500);
      return () => {
        clearTimeout(timeoutId);
      };
    }
  }, [checkNickname, nickValue, nickname, nickStatus]);

  const queryClient = useQueryClient();
  const putNickname = useMutation(PutNickname, {
    onSuccess: (data) => {
      queryClient.invalidateQueries("getUserProfile");
      setNickStatus({
        status: "default",
        message: null,
      });
      setNickname(data);
    },
  });

  const changeNickname = useCallback(() => {
    const data = {
      nickname: nickValue,
    };
    putNickname.mutate(data);
  }, [nickValue, putNickname]);

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
            <Input
              placeholder="별명을 입력하세요"
              onChange={handleChange}
              value={nickValue}
              status={nickStatus.status}
              message={nickStatus.message}
              theme={theme}
            />
            <Button
              mode="primary"
              disabled={nickStatus.status === "success" ? false : true}
              theme={theme}
              onClick={changeNickname}
            >
              변경하기
            </Button>
          </InputBox>
        </LabelBox>
        <LabelBox>
          <Label theme={theme}>프로필 사진</Label>
          <AvatarBox>
            <Suspense fallback={<div></div>}>
              <ProfileImage profileImg={profileImg} theme={theme} />
            </Suspense>
          </AvatarBox>
        </LabelBox>
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

const textColor = {
  light: colors.gray900,
  dark: colors.gray25,
};

const subtitleColor = {
  light: colors.gray400,
  dark: colors.gray500,
};

const Layout = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 86px;
`;

const Title = styled.div`
  line-height: ${lineHeight.h2};
  margin-bottom: 0.5rem;

  font-weight: ${fontWeight.bold};
  font-size: ${fontSize.h3};
  color: ${(props) => textColor[props.theme]};
`;

const SubTitle = styled.div`
  margin-bottom: 3rem;

  font-size: ${fontSize.p};
  color: ${(props) => subtitleColor[props.theme]};
`;

const Form = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
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
  color: ${(props) => textColor[props.theme]};
`;

const AvatarBox = styled.div`
  display: flex;
  gap: 1rem;
  padding-top: 12px;
`;
