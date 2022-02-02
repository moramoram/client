import React from "react";

import FeedDetail from ".";
import { Background } from "@/foundations";

import { daysFromToday, numToMillion } from "@/utils";

export default {
  title: "Patterns/FeedDetail",
  component: FeedDetail,
};

export const Default = (args) => <FeedDetail {...args} />;

Default.args = {
  username: "파워블로거",
  avatar: "",
  campus: "서울",
  ordinal: "6기",
  created: daysFromToday("2022-01-24"),
  title: "Lorem Ipsum",
  content: (
    <>
      <p>
        <img
          src="https://file.mk.co.kr/meet/neds/2015/09/image_readtop_2015_891935_14423221542127136.jpg"
          alt="img"
        />
      </p>
      <p>안녕하세요~~</p>
      <p>오늘도 어김없이 여러분에게 꿀팁과 알뜰정보를 알려주러 왔어요!!</p>
      <p>
        <br />
      </p>
      <p>
        <img
          src="http://123emoji.com/wp-content/uploads/2017/08/sticker-8-45.png"
          alt="img"
        />
      </p>
      <p>
        <br />
      </p>
      <p>요즘은 바람도 쌀쌀하게 불고~~</p>
      <p>횐님들 모두 감기 조심하세요~~^^</p>
      <p>
        <br />
      </p>
      <p>
        <img
          src="http://123emoji.com/wp-content/uploads/2017/08/sticker-2-45.png"
          alt="img"
        />
      </p>
      <p>그럼 다음에 만나요!</p>
    </>
  ),
  thumbnail: "",
  likecount: numToMillion(1224),
  commentcount: numToMillion(2102),
  viewcount: numToMillion(2124128),
};

export const AllTypes = () => (
  <>
    <Background theme="light">
      <FeedDetail theme="light" />
    </Background>
    <Background theme="dark">
      <FeedDetail theme="dark" />
    </Background>
  </>
);
