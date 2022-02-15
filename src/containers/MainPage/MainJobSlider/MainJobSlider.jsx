import React from "react";
import styled from "styled-components";

import { GetJobList, JobCardSelector } from "@/api";
import { CardSlider } from "@/layouts";

const MainJobSlider = ({ ...props }) => {
  const search = {
    category: 1,
    title: "",
    techStack: [],
    job: "",
    criteria: "",
  };

  const { data } = GetJobList(search);
  const { cardData } = JobCardSelector(data);

  return (
    <Layout>
      <CardSlider data={cardData} {...props} />
    </Layout>
  );
};

export default MainJobSlider;

const Layout = styled.div``;
