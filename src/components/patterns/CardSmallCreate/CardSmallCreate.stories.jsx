import React from "react";

import CardSmallCreate from ".";
import { Background } from "@/foundations";

export default {
  title: "Patterns/CardSmallCreate",
  component: CardSmallCreate,
};

export const Default = (args) => <CardSmallCreate {...args} />;

const defaultData = {
  companyData: {
    companyName: "",
  },
  content: "스터디 만들기",
};

Default.args = defaultData;

export const AllTypes = () => (
  <>
    <Background theme="light">
      <CardSmallCreate theme="light" {...defaultData} />
    </Background>
    <Background theme="dark">
      <CardSmallCreate theme="dark" {...defaultData} />
    </Background>
  </>
);
