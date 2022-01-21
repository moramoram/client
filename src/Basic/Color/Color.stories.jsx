import React from "react";
import styled from "styled-components";

import { colors } from "../../_shared";

export default {
  title: "Basic/Color",
};

const ColorBox = styled.div`
  /* display: flex; */
`;

const Color = styled.div`
  width: 120px;
  height: 120px;
`;

const Meta = styled.div`
  color: ${colors.gray500};
  font-size: 12px;
`;

export const All = () => (
  <ColorBox>
    {Object.keys(colors).map((key) => (
      <div>
        <Color style={{ backgroundColor: colors[key] }}></Color>
        <Meta>
          {key} : {colors[key]}
        </Meta>
      </div>
    ))}
  </ColorBox>
);
