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
  const communityData = data.pages[0].res.map((card) => {
    return {
      ...card,
      writerInfo: {
        ...card.writerInfo,
        ordinal: `${card.writerInfo.ordinal}기`,
      },
    };
  });
  console.log(communityData);
  return <FeedSmallSlider data={communityData} {...props} />;
};

export default MainCommunitySlider;
