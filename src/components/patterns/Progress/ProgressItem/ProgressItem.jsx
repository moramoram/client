import React from "react";
import PropTypes from "prop-types";

import {
  Layout,
  FlexBox,
  StepCircle,
  TextBox,
  Title,
  Description,
  ArrowBox,
  Arrow,
} from "./ProgressItem.styled";
import { Icon } from "@/foundations";

const THEME = {
  DARK: "dark",
  LIGHT: "light",
};

const STATUS = {
  DEFAULT: "default",
  CURRENT: "current",
  COMPLETED: "completed",
};

const ProgressItem = ({ step, title, description, status, ...props }) => {
  const stepNumRender = {
    default: step,
    current: null,
    completed: <Icon icon="check" />,
  };

  return (
    <Layout status={status} {...props}>
      <FlexBox>
        <StepCircle status={status} {...props}>
          {stepNumRender[status]}
        </StepCircle>
        <TextBox>
          <Title status={status} {...props}>
            {title}
          </Title>
          <Description status={status} {...props}>
            {description}
          </Description>
        </TextBox>
      </FlexBox>
      <ArrowBox className="arrow">
        <Arrow {...props} />
      </ArrowBox>
    </Layout>
  );
};

ProgressItem.propTypes = {
  theme: PropTypes.oneOf(Object.values(THEME)),
  status: PropTypes.oneOf(Object.values(STATUS)),
  step: PropTypes.number.isRequired,
  title: PropTypes.node.isRequired,
  description: PropTypes.node.isRequired,
};

ProgressItem.defaultProps = {
  theme: THEME.LIGHT,
  status: STATUS.DEFAULT,
  step: 1,
  title: "공고 요약",
  description: "한 눈에 들어오게 요약해주세요",
};

export default ProgressItem;
