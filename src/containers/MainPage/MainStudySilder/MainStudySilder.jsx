import React from "react";
import styled from "styled-components";

import { GetStudyList, StudyCardSelector } from "@/api";

import { CardSlider } from "@/layouts";

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

  return (
    <Layout>
      <CardSlider data={cardData} {...props} />
    </Layout>
  );
};

export default MainStudySilder;

const Layout = styled.div``;
