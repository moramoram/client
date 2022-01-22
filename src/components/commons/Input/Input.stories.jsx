import React from "react";

import Input from "./";
import { Background } from "@/foundations";

export default {
  title: "Components/Input",
  component: Input,
};

export const Default = (args) => <Input {...args} />;

export const AllTypes = () => (
  <>
    <Background theme="light">
      <Input theme="light" />
      <br />
      <Input theme="light" title="라벨" />
      <br />
      <Input
        theme="light"
        title="라벨"
        message="This is a hint text to help user."
      />
      <br />
      <Input
        theme="light"
        title="라벨"
        status="error"
        message="This is error message."
      />
    </Background>
    <Background theme="dark">
      <Input theme="dark" />
      <br />
      <Input theme="dark" title="라벨" />
      <br />
      <Input
        theme="dark"
        title="라벨"
        message="This is a hint text to help user."
      />
      <br />
      <Input
        theme="dark"
        title="라벨"
        status="error"
        message="This is error message."
      />
    </Background>
  </>
);

export const Icon = (args) => (
  <div>
    <Background theme="light">
      <Input theme="light" icon="mail" />
      <br />
      <Input theme="light" title="메일" icon="mail" />
      <br />
      <Input
        theme="light"
        title="메일"
        icon="mail"
        message="가입한 이메일 주소를 입력하세요."
      />
      <br />
      <Input
        theme="light"
        title="메일"
        icon="mail"
        status="error"
        message="이메일 형식이 잘못되었습니다."
      />
    </Background>
    <Background theme="dark">
      <Input theme="dark" icon="mail" />
      <br />
      <Input theme="dark" title="메일" icon="mail" />
      <br />
      <Input
        theme="dark"
        title="메일"
        icon="mail"
        message="가입한 이메일 주소를 입력하세요."
      />
      <br />
      <Input
        theme="dark"
        title="메일"
        icon="mail"
        status="error"
        message="이메일 형식이 잘못되었습니다."
      />
    </Background>
  </div>
);
