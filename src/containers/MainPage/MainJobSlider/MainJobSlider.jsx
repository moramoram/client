import React from "react";

import { GetJobList, JobCardSelector } from "@/api";
import { CardSlider } from "@/components";

const MainJobSlider = ({ ...props }) => {
  const search = {
    category: 1,
    title: "",
    techStack: [],
    job: "",
    criteria: {
      label: "",
      value: "",
    },
  };

  const { data } = GetJobList(search);
  const { cardData } = JobCardSelector(data);

  return <CardSlider data={cardData} {...props} />;
};

export default MainJobSlider;
