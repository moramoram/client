import React from "react";
import Input from "./";

export const Default = (args) => <Input {...args} />;

export default {
  title: "Components/Input",
  component: Input,
};

export const All = () => (
  <div>
    <Input theme="light" />
    <br />
    <Input theme="dark" />
    <br />
    <Input theme="light" title="라벨" />
    <br />
    <Input theme="dark" title="라벨" />
    <br />
    <Input
      theme="light"
      title="라벨"
      message="This is a hint text to help user."
    />
    <br />
    <Input
      theme="dark"
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
    <br />
    <Input
      theme="dark"
      title="라벨"
      status="error"
      message="This is error message."
    />
  </div>
);

export const Icon = (args) => (
  <div>
    <Input theme="light" icon="mail" />
    <br />
    <Input theme="dark" icon="mail" />
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
  </div>
);
