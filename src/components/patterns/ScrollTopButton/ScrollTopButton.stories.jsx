import React from "react";

import ScrollTopButton from "./";
import { Background } from "@/foundations";

export default {
  title: "Patterns/ScrollTopButton",
  component: ScrollTopButton,
};

export const Default = (props) => <ScrollTopButton {...props} />;

export const AllTypes = () => (
  <>
    <Background theme="light">
      <ScrollTopButton theme="light" />
    </Background>
    <Background theme="dark">
      <ScrollTopButton theme="dark" />
    </Background>
  </>
);
