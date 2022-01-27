import React from "react";
import ImageBoxResponsive from "./";

export default {
  title: "Components/ImageBoxResponsive",
  component: ImageBoxResponsive,
};

export const Default = (args) => <ImageBoxResponsive {...args} />;

export const AllTypes = () => (
  <>
    <ImageBoxResponsive theme="light" />
    <ImageBoxResponsive theme="dark" />
    <ImageBoxResponsive src="https://i.imgur.com/6RMJITi.png" />
    <ImageBoxResponsive src="https://t1.kakaocdn.net/kakaocorp/corp_thumbnail/Kakao.png" />
    <ImageBoxResponsive src="https://i.imgur.com/nZb7dUW.png" />
  </>
);
