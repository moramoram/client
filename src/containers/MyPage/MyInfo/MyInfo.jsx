import React, { useState, useEffect, useCallback, Suspense } from "react";
import PropTypes from "prop-types";

import { useRecoilValue } from "recoil";
import { themeState } from "@/recoil/theme";
import { useMutation, useQueryClient } from "react-query";
import { PostNicknameCheck, PutNickname } from "@/api";

import {
  Layout,
  Title,
  SubTitle,
  Form,
  InputBox,
  LabelBox,
  Label,
  AvatarBox,
  AskingForHelp,
} from "./MyInfo.styled";
import { ProfileImage, DeleteAccountModal } from "@/containers";
import { Input, Button } from "@/components";

const THEME = {
  LIGHT: "light",
  DARK: "dark",
};

const MyInfo = ({ userProfile, ...props }) => {
  const theme = useRecoilValue(themeState);
  const { profileImg } = userProfile;
  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal((prev) => !prev);
  };

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
      <AskingForHelp onClick={openModal}>
        탈퇴하고 싶어요
      </AskingForHelp>
      <DeleteAccountModal showModal={showModal} setShowModal={setShowModal} />
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
