import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import { Icon } from "../../Basic/Icon";
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

const ProgressStepItem = ({ step, title, description, status, ...props }) => {
  const stepNumRender = {
    default: step,
    current: null,
    completed: <Icon icon="check" />,
  };

  return (
    <Item {...props}>
      <Content>
        <StepNum status={status} {...props}>
          {stepNumRender[status]}
        </StepNum>
        <TextBox>
          <Title status={status}>{title}</Title>
          <Description>{description}</Description>
        </TextBox>
      </Content>
      <ArrowBox className="arrow">
        <Arrow />
      </ArrowBox>
    </Item>
  );
};

export default ProgressStepItem;

ProgressStepItem.propTypes = {
  theme: PropTypes.oneOf(Object.values(THEME)),
  status: PropTypes.oneOf(Object.values(STATUS)),
  step: PropTypes.node.isRequired,
  title: PropTypes.node.isRequired,
  description: PropTypes.node.isRequired,
};

ProgressStepItem.defaultProps = {
  theme: THEME.LIGHT,
  status: STATUS.DEFAULT,
  step: 1,
  title: "공고 요약",
  description: "공고를 한 눈에 볼 수 있도록 요약해주세요.",
};

const borderWidth = {
  current: "12px",
  default: "3px",
  completed: "3px",
};

const borderColor = {
  current: color.blue100,
  default: color.gray300,
  completed: color.blue100,
};

const titleColor = {
  current: color.blue100,
  default: color.gray900,
  completed: color.gray900,
};

const Item = styled.div`
  float: left;
  height: 5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border: 1px solid ${color.gray300};
  border-right: none;
  border-left: none;
  background-color: ${color.white};
  color: ${color.black};
  width: 33%;
  position: relative;

  :first-child {
    border-radius: 8px 0 0 8px;
    border-left: 1px solid ${color.gray300};
  }
  :last-child {
    border-radius: 0 8px 8px 0;
    border-right: 1px solid ${color.gray300};

    .arrow {
      display: none;
    }
  }
`;

const Content = styled.div`
  display: flex;
  gap: 1rem;
  padding-left: 2rem;
`;

const StepNum = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 40px;
  height: 40px;
  border: ${(props) => borderWidth[props.status]} solid
    ${(props) => borderColor[props.status]};
  background-color: ${color.white};

  border-radius: 50%;
  color: ${color.gray500};

  svg {
    stroke: ${color.blue100};
  }

  transition: 0.3s;
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
  color: ${(props) => titleColor[props.status]};

  transition: 0.3s;
`;

const Description = styled.span`
  display: block;
  font-size: 12px;
  overflow-wrap: normal;
  color: ${color.gray500};
`;

const ArrowBox = styled.div`
  width: 2rem;
  height: 5rem;
  overflow: hidden;
  left: 14rem;
`;

const Arrow = styled.div`
  float: left;
  position: relative;
  transform: rotate(45deg) skew(15deg, 15deg);
  background-color: ${color.white};
  border: 1px solid ${color.gray300};
  width: 5rem;
  height: 5rem;
  left: -58px;
`;
