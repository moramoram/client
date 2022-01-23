import React from "react";
import ReactQuill, { Quill } from "react-quill";
import MarkdownShortcuts from "quill-markdown-shortcuts";
// import PropTypes from "prop-types";
import styled from "styled-components";
import "react-quill/dist/quill.snow.css";

// import "./QuillEditor.css";

const Editor = (props) => {
  Quill.register("modules/markdownShortcuts", MarkdownShortcuts);

  // const { value, onChange } = props;

  const modules = {
    toolbar: [
      [{ header: [1, 2, 3, false] }],
      ["bold", "italic", "strike", "blockquote"],
      [{ list: "ordered" }, { list: "bullet" }],
      ["link", "image"],
      [{ color: [] }, { background: [] }], // dropdown with defaults from theme
      ["clean"],
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
    "align",
    "color",
    "background",
  ];

  return (
    <div style={editorStyle}>
      <QuillEditor
        style={{ height: "600px" }}
        theme="snow"
        modules={modules}
        formats={formats}
        // value={value || ""}
        // onChange={(content, delta, source, editor) =>
        //   onChange(editor.getHTML())
        // }
      />
    </div>
  );
};

export default Editor;

const editorStyle = {
  width: "900px",
  height: "650px",
};

const QuillEditor = styled(ReactQuill)`
  * {
    font-family: Pretendard;
    letter-spacing: -0.02rem;
  }

  .ql-container {
    box-sizing: border-box;
    font-size: 1rem;
    height: 100%;
    margin: 0px;
    position: relative;
    border-radius: 0 0 1rem 1rem;
  }
  .ql-editor {
    box-sizing: border-box;
    line-height: 1.42;
    height: 100%;
    outline: none;
    overflow-y: auto;
    padding: 1.25rem;
    tab-size: 4;
    -moz-tab-size: 4;
    text-align: left;
    white-space: pre-wrap;
    word-wrap: break-word;
  }
  .ql-snow .ql-editor h1 {
    font-size: 2em;
  }
  .ql-snow .ql-editor h2 {
    font-size: 1.5em;
  }
  .ql-snow .ql-editor h3 {
    font-size: 1.25em;
  }

  .ql-toolbar.ql-snow {
    border: 1px solid #ccc;
    border-radius: 1rem 1rem 0 0;
    background-color: #f8f9fa;
    box-sizing: border-box;
    font-family: "Helvetica Neue", "Helvetica", "Arial", sans-serif;
    padding: 1rem;
  }
  .ql-snow .ql-tooltip {
    background-color: #fff;
    border: 1px solid #ccc;
    box-shadow: 0px 0px 5px #ddd;
    color: #444;
    padding: 5px 12px;
    white-space: nowrap;
  }
`;
