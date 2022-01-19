import React from "react";

import Avatar from "./Avatar";

export default {
  title: "Foundations/Avatar",
  component: Avatar,
};

// TODO : 기본 이미지 소스
const defaultSrc =
  "https://user-images.githubusercontent.com/87457066/149450675-18c3f878-2cf9-40cd-884c-1b7db140708b.png";

export const Default = (args) => <Avatar {...args} />;

Default.args = {
  size: "large",
  username: "김싸페",
  src: defaultSrc,
};

export const All = () => (
  <div>
    <h1>Sizes</h1>
    <hr />
    <div>
      <h2 style={{ marginBottom: "0.5rem" }}>Images</h2>
      <Avatar size="large" src={defaultSrc} />
      <Avatar size="medium" src={defaultSrc} />
      <Avatar size="small" src={defaultSrc} />
    </div>
    <div style={{ marginTop: "1rem" }}>
      <h2 style={{ marginBottom: "0.5rem" }}>Initials</h2>
      <Avatar size="large" />
      <Avatar size="medium" />
      <Avatar size="small" />
    </div>
    <div style={{ marginTop: "1rem" }}>
      <h2 style={{ marginBottom: "0.5rem" }}>Lodings</h2>
      <Avatar size="large" isLoading />
      <Avatar size="medium" isLoading />
      <Avatar size="small" isLoading />
    </div>

    <h1 style={{ marginTop: "3rem" }}>Initials</h1>
    <hr />
    <Avatar username="James" />
    <Avatar username="Mary" />
    <Avatar username="김싸페" />
    <Avatar username="홍길동" />
  </div>
);
