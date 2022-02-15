import React from "react";
import { FeedSmallSlider } from "@/layouts";
import { GetCommunityList } from "@/api";

const MainCommunitySlider = ({ isLoading, ...props }) => {
  const search = {
    boardType: 1,
    title: "",
    criteria: "like",
  };

  const { data } = GetCommunityList(search);
  return <FeedSmallSlider data={data.pages[0].res} {...props} />;
};

export default MainCommunitySlider;
