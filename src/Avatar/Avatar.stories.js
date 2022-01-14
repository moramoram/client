import React from "react";

import { Avatar } from "./Avatar";

export default {
  title: "Design System/Avatar",
  component: Avatar,
};

export const Default = (args) => <Avatar {...args} />;

Default.args = {
  size: "large",
  username: "김싸페",

  // TODO : 기본 이미지 소스
  src: "https://user-images.githubusercontent.com/87457066/149450675-18c3f878-2cf9-40cd-884c-1b7db140708b.png",
};

export const Sizes = (args) => (
  <div>
    <Avatar {...args} size="large" />
    <Avatar {...args} size="medium" />
    <Avatar {...args} size="small" />
  </div>
);

Sizes.args = {
  username: "김싸페",
  src: "https://user-images.githubusercontent.com/87457066/149450675-18c3f878-2cf9-40cd-884c-1b7db140708b.png",
};

export const Initials = (args) => (
  <div>
    <Avatar username="James" />
    <Avatar username="Mary" />
    <Avatar username="김싸페" />
    <Avatar username="홍길동" />
  </div>
);

export const Loading = (args) => (
  <div>
    <Avatar {...args} size="large" />
    <Avatar {...args} size="medium" />
    <Avatar {...args} size="small" />
  </div>
);

Loading.args = {
  loading: true,
};

export const Large = (args) => (
  <div>
    <Avatar loading size="large" />
    <Avatar size="large" username="김싸페" />
    <Avatar
      size="large"
      username="김싸페"
      src="https://user-images.githubusercontent.com/87457066/149450675-18c3f878-2cf9-40cd-884c-1b7db140708b.png"
    />
  </div>
);
