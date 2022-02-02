import React, { useState } from "react";
import styled from "styled-components";

import { useRecoilValue } from "recoil";
import { themeState } from "@/recoil/theme";

import { CommentList } from "@/containers";
import { FeedDetail, Button, CommentInput } from "@/components";
import { Icon } from "@/foundations";

import { daysFromToday, numToMillion } from "@/utils";

const CommunityDetailPage = ({ match }) => {
  const theme = useRecoilValue(themeState);
  const [isLike, setIsLiked] = useState(0);

  return (
    <Layout>
      <FeedDetail theme={theme} {...feedData}></FeedDetail>
      <ButtonBox>
        <Button
          mode={isLike ? "primary" : "secondary"}
          onClick={() => setIsLiked(!isLike)}
        >
          <Icon icon="thumbsUp" />
          좋아요
        </Button>
      </ButtonBox>
      <CommentInput />
      <CommentList data={commentData}></CommentList>
    </Layout>
  );
};

export default CommunityDetailPage;

const feedData = {
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

const commentData = [
  {
    username: "Lorem",
    src: null,
    created: daysFromToday("2022-01-31"),
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque in lorem ut sapien placerat vulputate.",
  },
  {
    username: "홍길동",
    src: null,
    created: daysFromToday("2022-01-30"),
    content:
      "Nam tempus, est id rutrum suscipit, metus mi tincidunt nulla, ut rutrum magna tortor non velit. Suspendisse gravida pretium porta. Praesent eget vestibulum mauris. Nullam aliquet enim felis, in iaculis purus tempus pharetra.",
  },
  {
    username: null,
    src: null,
    created: daysFromToday("2022-01-24"),
    content:
      "Aliquam et lectus ultricies, fringilla ipsum ac, vulputate sapien.",
  },
  {
    username: "김싸페",
    src: null,
    created: daysFromToday("2022-01-12"),
    content:
      "Integer nulla sem, eleifend non ex id, aliquam tempor tellus. Sed vehicula justo ut diam semper mollis.",
  },
  {
    username: null,
    src: null,
    created: daysFromToday("2021-12-10"),
    content:
      "Donec nec tristique arcu. Curabitur at facilisis nibh. Mauris vel nisi ipsum. Morbi vitae sapien metus. Ut et quam a erat rutrum maximus. Vestibulum non elementum enim. ",
  },
  {
    username: "아이유",
    src: null,
    created: daysFromToday("2021-07-10"),
    content:
      "Ut in bibendum metus. Duis sed egestas ante. Etiam ex tortor, vehicula ac mollis sit amet, dapibus eget urna.",
  },
  {
    username: "수지",
    src: null,
    created: daysFromToday("2020-07-10"),
    content:
      "Nam tempus, est id rutrum suscipit, metus mi tincidunt nulla, ut rutrum magna tortor non velit. Suspendisse gravida pretium porta. Praesent eget vestibulum mauris. Nullam aliquet enim felis, in iaculis purus tempus pharetra.",
  },
];

const Layout = styled.div`
  max-width: 940px;
  padding: 100px 20px 20px 20px;
  margin: auto;
`;

const ButtonBox = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;

  padding-bottom: 3rem;
`;
