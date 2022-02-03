import React, { useState } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import { useRecoilValue } from "recoil";
import { themeState } from "@/recoil/theme";

import { FeedGrid } from "@/containers";
import { colors, fontSize, lineHeight, fontWeight } from "@/_shared";

import { daysFromToday, numToMillion } from "@/utils";

const THEME = {
  LIGHT: "light",
  DARK: "dark",
};

const MyFeed = () => {
  const theme = useRecoilValue(themeState);

  return (
    <Layout>
      <Title theme={theme}>내가 쓴 글</Title>
      <SubTitle theme={theme}>지금까지 무슨 이야기를 나눴을까요?</SubTitle>
      <FeedGrid data={feedData} theme={theme} />
    </Layout>
  );
};

const feedData = [
  {
    username: "아이유",
    avatar:
      "https://image.bada.io/files//crawling/2021/04/05/bobaedream/1612930_i14788674553.jpg",
    campus: "서울",
    ordinal: "6기",
    created: daysFromToday("2022-02-01"),
    title: "겨울잠",
    content:
      "때 이른 봄 몇 송이 꺾어다 너의 방 문 앞에 두었어. 긴 잠 실컷 자고 나오면 그때쯤엔 예쁘게 피어 있겠다. 별 띄운 여름 한 컵 따라다 너의 머리맡에 두었어. 금세 다 녹아버릴 텐데 너는 아직 혼자 쉬고 싶은가 봐. 너 없이 보는 첫 봄이, 여름이 괜히 왜 이렇게 예쁘니 다 가기 전에 널 보여줘야 하는데",
    thumbnail:
      "https://w.namu.la/s/e8a1981b6f848717dc05daeff3db84ad42bf24bcd02671d9e743d22b4d1fd28ebf66def6a7c341e158e961c4b826db435d30d994056f5a4095b789d168f8254bc908459c951c9fc48b94b21f5588baed",
    likecount: numToMillion(124),
    commentcount: numToMillion(102),
    viewcount: numToMillion(11328),
    id: "1",
  },
];

MyFeed.propTypes = {
  theme: PropTypes.oneOf(Object.values(THEME)),
  data: PropTypes.arrayOf(Object),
};

MyFeed.defaultProps = {
  theme: THEME.LIGHT,
};

export default MyFeed;

const titleColor = {
  light: colors.gray900,
  dark: colors.gray25,
};

const subtitleColor = {
  light: colors.gray400,
  dark: colors.gray500,
};

const Layout = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 86px;
`;

const Title = styled.div`
  line-height: ${lineHeight.h2};
  margin-bottom: 15px;

  font-weight: ${fontWeight.bold};
  font-size: ${fontSize.h2};
  color: ${(props) => titleColor[props.theme]};
`;

const SubTitle = styled.div`
  margin-bottom: 3rem;

  font-size: ${fontSize.p};
  color: ${(props) => subtitleColor[props.theme]};
`;
