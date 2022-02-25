import React from "react";

import { GetStudyList, StudyCardSelector } from "@/api";
import { CardSlider } from "@/components";

const MainStudySilder = ({ ...props }) => {
  const search = {
    category: 1,
    title: "",
    studyType: "",
    criteria: {
      label: "",
      value: "",
    },
  };

  const { data } = GetStudyList(search);
  const { cardData } = StudyCardSelector(data);

  return <CardSlider data={cardData} {...props} />;
};

export default MainStudySilder;
