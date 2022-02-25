import React from "react";
import PropTypes from "prop-types";

import ReactQuill, { Quill } from "react-quill";
import MarkdownShortcuts from "quill-markdown-shortcuts";
import "react-quill/dist/quill.snow.css";

import { Layout } from "./Editor.styled";

const THEME = {
  DARK: "dark",
  LIGHT: "light",
};

const Editor = (props) => {
  Quill.register("modules/markdownShortcuts", MarkdownShortcuts);

  const modules = {
    toolbar: [
      [{ header: [1, 2, 3, false] }],
      ["bold", "italic", "strike", "blockquote", "code-block"],
      [{ list: "ordered" }, { list: "bullet" }],
      ["link", "image", "video"],
      ["clean"],
    ],
    markdownShortcuts: {},
  };

  const formats = [
    "header",
    "bold",
    "italic",
    "strike",
    "blockquote",
    "list",
    "bullet",
    "link",
    "image",
    "video",
    "code-block",
    "code",
  ];

  return (
    <Layout {...props}>
      <ReactQuill modules={modules} formats={formats} />
    </Layout>
  );
};

Editor.propTypes = {
  theme: PropTypes.oneOf(Object.values(THEME)),
};

Editor.defaultProps = {
  theme: THEME.LIGHT,
};

export default Editor;
