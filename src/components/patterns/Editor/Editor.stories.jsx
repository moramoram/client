import React from "react";

import Editor from "./Editor";
// import { Background } from "@/foundations";

export default {
  title: "Patterns/Editor",
  component: Editor,
};

export const Default = (args) => (
  <>
    <Editor {...args} />
    <div></div>
  </>
);

// export const AllTypes = () => (
//   <>
//     <Background theme="light">
//       <CommentInput theme="light" />
//     </Background>
//     <Background theme="dark">
//       <CommentInput theme="dark" />
//     </Background>
//   </>
// );
