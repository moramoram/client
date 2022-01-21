import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import { Icon } from "../../Basic";
import { color, typography } from "../../shared/styles";

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

const borderColor = {
  light: color.gray300,
  dark: color.gray600,
};

const bgColor = {
  light: color.white,
  dark: color.black,
};

const circleBorder = {
  current: "12px",
  default: "3px",
  completed: "3px",
};

const circleColor = {
  light: {
    current: color.blue100,
    default: color.gray300,
    completed: color.blue100,
  },
  dark: {
    current: color.blue100,
    default: color.gray700,
    completed: color.blue100,
  },
};

const titleColor = {
  light: {
    current: color.blue100,
    default: color.gray900,
    completed: color.gray900,
  },
  dark: {
    current: color.blue100,
    default: color.gray100,
    completed: color.gray25,
  },
};

const Layout = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-grow: 1;

  min-height: 5rem;
  border: 1px solid ${(props) => borderColor[props.theme]};
  border-right: none;
  border-left: none;

  background-color: ${(props) => bgColor[props.theme]};
  color: ${color.black};

  :first-child {
    border-radius: 8px 0 0 8px;
    border-left: 1px solid ${(props) => borderColor[props.theme]};
  }
  :last-child {
    border-radius: 0 8px 8px 0;
    border-right: 1px solid ${(props) => borderColor[props.theme]};

    .arrow {
      display: none;
    }
  }

  ${(props) =>
    props.status !== STATUS.DEFAULT &&
    `
    cursor: pointer;
  `}
`;

const FlexBox = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  padding-left: 2rem;
`;

const StepCircle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 40px;
  min-width: 40px;
  height: 40px;
  border: ${(props) => circleBorder[props.status]} solid
    ${(props) => circleColor[props.theme][props.status]};
  border-radius: 50%;

  background-color: ${(props) => bgColor[props.theme]};
  color: ${color.gray500};

  transition: 0.3s;

  svg {
    stroke: ${color.blue100};
  }
`;

const TextBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 4px;
`;

const Title = styled.span`
  display: block;
  font-weight: 700;
  font-size: ${typography.paragraph};
  color: ${(props) => titleColor[props.theme][props.status]};

  transition: 0.3s;

  ${(props) =>
    props.status !== STATUS.CURRENT &&
    `
    transform: translateY(8px);
  `}
`;

const Description = styled.span`
  display: block;
  font-size: 0.75rem;
  color: ${color.gray500};

  transition: 0.3s;

  ${(props) =>
    props.status !== STATUS.CURRENT &&
    `
    opacity: 0
  `}
`;

const ArrowBox = styled.div`
  overflow: hidden;
  left: 14rem;

  width: 2rem;
  min-width: 2rem;
  height: 5rem;
`;

const Arrow = styled.div`
  float: left;
  position: relative;
  left: -50px;

  width: 5rem;
  height: 5rem;
  border: 1px solid ${(props) => borderColor[props.theme]};

  background-color: ${(props) => bgColor[props.theme]};
  transform: rotate(45deg) skew(15deg, 15deg);
`;
