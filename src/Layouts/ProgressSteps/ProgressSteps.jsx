import React, { useState } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import ProgreeStepItem from "../../Components/ProgressStepItem";

const ProgressSteps = () => {
  const [itemState, setItemState] = useState(items);
  const [current, setCurrent] = useState(0);

  const handleSteps = (index) => {
    let newItem = [...itemState];

    newItem.map((item, idx) => {
      if (idx < index) {
        return (item.status = "completed");
      }
    });

    setCurrent(index);
    setItemState(newItem);
  };

  return (
    <Layout>
      {items.map(({ step, title, description, status }, index) => (
        <ProgreeStepItem
          step={step}
          title={title}
          description={description}
          onClick={() => handleSteps(index)}
          status={current === index ? "current" : status}
        />
      ))}
    </Layout>
  );
};

export default ProgressSteps;

const items = [
  {
    step: 1,
    title: "공고 요약",
    description: "공고를 한 눈에 볼 수 있도록 요약해주세요.",
    status: "default",
  },
  {
    step: 2,
    title: "상세 내용 입력",
    description: "에디터를 이용해 공고 원본을 그대로 담아주세요.",
    status: "default",
  },
  {
    step: 3,
    title: "미리보기",
    description: "채용 공고가 잘 작성되었는지 확인해보세요.",
    status: "default",
  },
];

const Layout = styled.div`
  display: flex;
`;
