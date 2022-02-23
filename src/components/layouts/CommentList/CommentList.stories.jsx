import React from "react";
import CommentList from ".";

import { daysFromToday } from "@/utils";

export default {
  title: "layouts/CommentList",
  component: CommentList,
};

export const Default = (args) => <CommentList {...args} />;

Default.args = {
  theme: "light",
  data: [
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
  ],
};
