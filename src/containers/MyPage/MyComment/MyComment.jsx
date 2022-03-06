import React from "react";
import PropTypes from "prop-types";

import { useRecoilValue } from "recoil";
import { themeState } from "@/recoil/theme";

import { Layout, Title, SubTitle } from "./MyComment.styled";
import { CommentList } from "@/components";

import { daysFromToday } from "@/utils";

const THEME = {
  LIGHT: "light",
  DARK: "dark",
};

const MyComment = () => {
  const theme = useRecoilValue(themeState);

  return (
    <Layout>
      <Title theme={theme}>내가 쓴 댓글</Title>
      <SubTitle theme={theme}>
        지금까지 총 {commentData.length}개의 댓글을 남겼어요
      </SubTitle>
      {/* TODO : 원본 글 링크 */}
      <CommentList data={commentData} theme={theme} />
    </Layout>
  );
};

MyComment.propTypes = {
  theme: PropTypes.oneOf(Object.values(THEME)),
  data: PropTypes.arrayOf(Object),
};

MyComment.defaultProps = {
  theme: THEME.LIGHT,
};

export default MyComment;

const commentData = [
  {
    username: null,
    src: null,
    created: daysFromToday("2022-01-31"),
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque in lorem ut sapien placerat vulputate.",
  },
  {
    username: null,
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
    username: null,
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
    username: null,
    src: null,
    created: daysFromToday("2021-07-10"),
    content:
      "Ut in bibendum metus. Duis sed egestas ante. Etiam ex tortor, vehicula ac mollis sit amet, dapibus eget urna.",
  },
  {
    username: null,
    src: null,
    created: daysFromToday("2020-07-10"),
    content:
      "Nam tempus, est id rutrum suscipit, metus mi tincidunt nulla, ut rutrum magna tortor non velit. Suspendisse gravida pretium porta. Praesent eget vestibulum mauris. Nullam aliquet enim felis, in iaculis purus tempus pharetra.",
  },
];
