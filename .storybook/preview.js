import React from "react";

import {MemoryRouter} from 'react-router-dom';
import { GlobalStyle } from "@/_shared/global";

// 모든 스토리에 스타일을 적용하기 위한 글로벌 decorator
export const decorators = [
  (Story) => (
    <MemoryRouter>
      <GlobalStyle />
      <Story />
    </MemoryRouter>
  ),
];

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  a11y: {
    element: "#root",
    manual: false,
  },
  options: {
    storySort: {
      order: ["Foundations", "Components", "Patterns", "Containers", "*"],
    },
  },
};
