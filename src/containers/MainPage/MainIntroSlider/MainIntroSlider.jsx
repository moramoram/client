import React from "react";

import { GetJobList } from "@/api";
import { IntroSlider } from "@/layouts";

const MainIntroSlider = ({ ...props }) => {
  const search = {
    category: 2,
    title: "",
    techStack: [],
    job: "",
    criteria: {
      label: "",
      value: "",
    },
  };

  const { data } = GetJobList(search);

  return <IntroSlider data={data.pages[0].res} {...props} />;
};

export default MainIntroSlider;
