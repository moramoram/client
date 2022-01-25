import React from "react";

import FeedItem from "./";
import { Background } from "@/foundations";

import { daysFromToday, numToMillion } from "@/utils";

export default {
  title: "Patterns/FeedItem",
  component: FeedItem,
};

export const Default = (args) => <FeedItem {...args} />;

Default.args = {
  username: "아이유",
  avatar:
    "https://image.bada.io/files//crawling/2021/04/05/bobaedream/1612930_i14788674553.jpg",
  campus: "서울",
  ordinal: "6기",
  created: daysFromToday("2022-01-24"),
  title: "겨울잠",
  content:
    "때 이른 봄 몇 송이 꺾어다 너의 방 문 앞에 두었어. 긴 잠 실컷 자고 나오면 그때쯤엔 예쁘게 피어 있겠다. 별 띄운 여름 한 컵 따라다 너의 머리맡에 두었어. 금세 다 녹아버릴 텐데 너는 아직 혼자 쉬고 싶은가 봐.",
  thumbnail:
    "https://w.namu.la/s/e8a1981b6f848717dc05daeff3db84ad42bf24bcd02671d9e743d22b4d1fd28ebf66def6a7c341e158e961c4b826db435d30d994056f5a4095b789d168f8254bc908459c951c9fc48b94b21f5588baed",
  likecount: numToMillion(1224),
  commentcount: numToMillion(2102),
  viewcount: numToMillion(2124128),
};

export const AllTypes = () => (
  <>
    <Background theme="light">
      <FeedItem theme="light" />
    </Background>
    <Background theme="dark">
      <FeedItem theme="dark" />
    </Background>
  </>
);
