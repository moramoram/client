import React from "react";
import styled from "styled-components";

import Input from "./";
import { Background, Typography } from "@/foundations";
import { colors } from "@/_shared";

export default {
  title: "Components/Input",
  component: Input,
};

export const Default = (args) => <Input {...args} />;

export const AllTypes = () => (
  <>
    <Background theme="light">
      <TypeBox>
        <Typography type="h4">Default</Typography>
        <Input theme="light" />
        <Input theme="light" title="라벨" />
        <Input
          theme="light"
          title="라벨"
          message="This is a hint text to help user."
        />
        <Input
          theme="light"
          title="라벨"
          status="error"
          message="This is error message."
        />
      </TypeBox>
      <br />
      <TypeBox>
        <Typography type="h4">Icons</Typography>
        <Input theme="light" icon="mail" />
        <Input theme="light" title="메일" icon="mail" />
        <Input
          theme="light"
          title="메일"
          icon="mail"
          message="가입한 이메일 주소를 입력하세요."
        />
        <Input
          theme="light"
          title="메일"
          icon="mail"
          status="error"
          message="이메일 형식이 잘못되었습니다."
        />
      </TypeBox>
    </Background>
    <Background theme="dark">
      <TypeBox>
        <Typography type="h4" style={{ color: colors.gray25 }}>
          Default
        </Typography>
        <Input theme="dark" />
        <Input theme="dark" title="라벨" />
        <Input
          theme="dark"
          title="라벨"
          message="This is a hint text to help user."
        />
        <Input
          theme="dark"
          title="라벨"
          status="error"
          message="This is error message."
        />
      </TypeBox>
      <br />
      <TypeBox>
        <Typography type="h4" style={{ color: colors.gray25 }}>
          Icons
        </Typography>
        <Input theme="dark" icon="mail" />
        <Input theme="dark" title="메일" icon="mail" />
        <Input
          theme="dark"
          title="메일"
          icon="mail"
          message="가입한 이메일 주소를 입력하세요."
        />
        <Input
          theme="dark"
          title="메일"
          icon="mail"
          status="error"
          message="이메일 형식이 잘못되었습니다."
        />
      </TypeBox>
    </Background>
  </>
);

const TypeBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 1rem;
`;
