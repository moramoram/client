import React from "react";
// import PropTypes from "prop-types";
import styled from "styled-components";

import ReactQuill, { Quill } from "react-quill";
import MarkdownShortcuts from "quill-markdown-shortcuts";
import "react-quill/dist/quill.snow.css";

import hljs from "highlight.js";
import "highlight.js/styles/base16/decaf.css";

import { colors } from "@/_shared";

const Editor = (props) => {
  Quill.register("modules/markdownShortcuts", MarkdownShortcuts);
  window.hljs = hljs;

  const modules = {
    syntax: {
      highlight: (text) => hljs.highlightAuto(text).value,
    },
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

  return <QuillEditor modules={modules} formats={formats} />;
};

export default Editor;

const QuillEditor = styled(ReactQuill)`
  .ql-container {
    border: 1px solid ${colors.gray500};
    border-radius: 0 0 1rem 1rem;
    font-size: 1rem;
  }

  .ql-editor {
    min-height: 600px;
    padding: 1.25rem;
    font-family: Pretendard;
    letter-spacing: -0.02rem;
  }

  .ql-snow .ql-editor h1 {
    font-size: 2em;
    font-weight: 700;
  }
  .ql-snow .ql-editor h2 {
    font-size: 1.5em;
    font-weight: 700;
  }
  .ql-snow .ql-editor h3 {
    font-size: 1.25em;
    font-weight: 700;
  }

  .ql-toolbar.ql-snow {
    padding: 1rem;
    border: 1px solid ${colors.gray500};
    border-radius: 1rem 1rem 0 0;
    font-family: Pretendard;

    /* .ql-stroke {
      stroke: ${colors.gray500};
    }

    .ql-fill {
      fill: ${colors.gray500};
    } */
  }

  .ql-syntax {
    font-family: "SFMono-Regular", Consolas, "Liberation Mono", Menlo, Courier,
      monospace;
  }

  .ql-snow .ql-editor pre.ql-syntax {
    background-color: #1c2023;
  }

  .ql-video {
    width: 560px;
    height: 315px;
  }
`;
