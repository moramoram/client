import React, { useState } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import { ProgressItem } from "./ProgressItem";

const THEME = {
  DARK: "dark",
  LIGHT: "light",
};

const Progress = ({ items, ...props }) => {
  const [itemState, setItemState] = useState(items);
  const [current, setCurrent] = useState(1);

  const handleSteps = (step) => {
    setCurrent(step);
    setItemState(
      itemState.map((item, idx) => ({
        ...item,
        status: idx < step - 1 ? "completed" : item.status,
      }))
    );
  };

  return (
    <Layout>
      {itemState.map(({ step, title, description, status }) => (
        <ProgressItem
          step={step}
          title={title}
          description={description}
          onClick={() => handleSteps(step)}
          status={current === step ? "current" : status}
          key={step}
          {...props}
        />
      ))}
    </Layout>
  );
};

Progress.propTypes = {
  theme: PropTypes.oneOf(Object.values(THEME)),
  items: PropTypes.array.isRequired,
};

Progress.defaultProps = {
  theme: THEME.LIGHT,
  items: [
    {
      step: 1,
      title: "공고 요약",
      description: "한 눈에 들어오게 요약해주세요",
      status: "default",
    },
    {
      step: 2,
      title: "상세 내용 입력",
      description: "공고 내용을 그대로 옮겨주세요",
      status: "default",
    },
    {
      step: 3,
      title: "미리보기",
      description: "잘 작성되었는지 확인해보세요.",
      status: "default",
    },
  ],
};

export default Progress;

const Layout = styled.div`
  display: flex;
  justify-content: space-between;
`;
