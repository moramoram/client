import React from "react";
import { avatars } from "../../_shared";

const AvatarBase = ({ avatar, ...props }) => {
  return (
    <svg
      width="40"
      height="40"
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      {avatars[avatar]}
    </svg>
  );
};

export default AvatarBase;
