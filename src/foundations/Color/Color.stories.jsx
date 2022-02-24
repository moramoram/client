import React from "react";
import styled from "styled-components";

import { colors, fontSize, fontWeight } from "@/_shared";

export default {
  title: "Foundations/Color",
};

export const AllTypes = () => (
  <>
    <Layout>
      {Object.keys(colors).map((key) => (
        <ColorBox>
          <Color style={{ backgroundColor: colors[key] }}></Color>
          <Name>{key}</Name>
          <Meta>{colors[key]}</Meta>
        </ColorBox>
      ))}
    </Layout>
  </>
);

const Layout = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
`;

const ColorBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
`;

const Color = styled.div`
  width: 120px;
  height: 120px;
`;

const Name = styled.div`
  color: ${colors.gray900};
  font-size: ${fontSize.sm};
  font-weight: ${fontWeight.bold};
`;

const Meta = styled.div`
  color: ${colors.gray500};
  font-size: ${fontSize.xs};
`;
