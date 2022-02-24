import React from "react";
import { FeedSmallSlider } from "@/components";
import { GetCommunityList } from "@/api";

const MainCommunitySlider = ({ isLoading, ...props }) => {
  const search = {
    boardType: 1,
    title: "",
    criteria: {
      label: "좋아요순",
      value: "like",
    },
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
  return <FeedSmallSlider data={communityData} {...props} />;
};

export default MainCommunitySlider;
