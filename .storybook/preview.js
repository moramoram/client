import React from 'react';

import { GlobalStyle } from '../src/shared/global';

// 모든 스토리에 스타일을 적용하기 위한 글로벌 decorator
export const decorators = [
  Story => (
    <>
      <GlobalStyle />
      <Story />
    </>
  ),
];

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  a11y: {
    element: '#root',
    manual: false,
  },
};