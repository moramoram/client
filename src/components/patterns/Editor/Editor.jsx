import React from "react";
// import PropTypes from "prop-types";
import styled from "styled-components";

import hljs from "highlight.js";
import "highlight.js/styles/base16/chalk.css";

import ReactQuill, { Quill } from "react-quill";
import MarkdownShortcuts from "quill-markdown-shortcuts";
import "react-quill/dist/quill.snow.css";

const Editor = (props) => {
  Quill.register("modules/markdownShortcuts", MarkdownShortcuts);
  window.hljs = hljs;
  // const { value, onChange } = props;
  // hljs.configure({
  //   // optionally configure hljs
  //   languages: ["javascript", "ruby", "python"],
  // });

  const modules = {
    syntax: {
      highlight: (text) => hljs.highlightAuto(text).value,
    },
    toolbar: [
      [{ header: [1, 2, 3, false] }],
      ["bold", "italic", "strike", "blockquote"],
      [{ list: "ordered" }, { list: "bullet" }],
      ["link", "image", "video"],
      [{ color: [] }, { background: [] }], // dropdown with defaults from theme
      ["clean"],
      ["code-block"],
    ],
    markdownShortcuts: {},
  };

  const formats = [
    //'font',
    "header",
    "bold",
    "italic",
    "underline",
    "strike",
    "blockquote",
    "list",
    "bullet",
    "indent",
    "link",
    "image",
    "video",
    "align",
    "color",
    "background",
    "code-block",
  ];

  return (
    <QuillEditor
      theme="snow"
      modules={modules}
      formats={formats}
      // value={value || ""}
      // onChange={(content, delta, source, editor) =>
      //   onChange(editor.getHTML())
      // }
    />
  );
};

export default Editor;

// const editorStyle = {
//   width: "900px",
//   height: "650px",
// };

const QuillEditor = styled(ReactQuill)`
  .ql-container {
    font-size: 1rem;
    border-radius: 0 0 1rem 1rem;
  }

  .ql-editor {
    font-family: Pretendard;
    letter-spacing: -0.02rem;

    padding: 1.25rem;
    min-height: 600px;
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
    border: 1px solid #ccc;
    border-radius: 1rem 1rem 0 0;
    background-color: #f8f9fa;
    box-sizing: border-box;
    font-family: Pretendard;
    padding: 1rem;
  }

  /* .ql-snow .ql-tooltip {
    background-color: #fff;
    border: 1px solid #ccc;
    box-shadow: 0px 0px 5px #ddd;
    color: #444;
    padding: 5px 12px;
    white-space: nowrap;
  } */

  .ql-syntax {
    font-family: monospace;
  }
`;
