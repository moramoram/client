import React from "react";
import styled from "styled-components";

import { color } from "../../shared/styles";

export default {
  title: "Basic/Color",
};

const ColorBox = styled.div`
  display: flex;
`;

const Color = styled.div`
  width: 120px;
  height: 120px;
`;

const Meta = styled.div`
  color: ${color.gray500};
  font-size: 12px;
`;

export const All = () => (
  <ColorBox>
    {Object.keys(color).map((key) => (
      <div>
        <Color style={{ backgroundColor: color[key] }}></Color>
        <Meta>{key}</Meta>
      </div>
    ))}
  </ColorBox>
);
