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
      <ReactQuill
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
