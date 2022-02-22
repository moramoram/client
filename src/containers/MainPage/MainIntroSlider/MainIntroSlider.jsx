import React from "react";

import { GetJobList } from "@/api";
import { IntroSlider } from "@/components";

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

  return <IntroSlider data={data.pages[0].res.slice(0, 4)} {...props} />;
};

export default MainIntroSlider;
