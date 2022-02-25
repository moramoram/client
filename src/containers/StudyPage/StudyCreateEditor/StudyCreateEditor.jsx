import React from "react";

import { Controller } from "react-hook-form";
import { useMediaQuery } from "react-responsive";

import ReactQuill, { Quill } from "react-quill";
import MarkdownShortcuts from "quill-markdown-shortcuts";
import "react-quill/dist/quill.snow.css";

import { Layout } from "./StudyCreateEditor.styled";

const StudyCreateEditor = ({
  register,
  control,
  errors,
  originalData,
  ...props
}) => {
  Quill.register("modules/markdownShortcuts", MarkdownShortcuts);
  Quill.debug("error");

  const modules = {
    toolbar: [
      [{ header: [1, 2, 3, false] }],
      ["bold", "italic", "underline", "strike", "blockquote"],
      [{ list: "ordered" }, { list: "bullet" }],
      ["link"],
      ["clean"],
    ],
    markdownShortcuts: {},
  };

  const mobileModules = {
    ...modules,
    toolbar: [
      ["bold", "italic", "underline"],
      [{ list: "ordered" }, { list: "bullet" }],
      ["link"],
      ["clean"],
    ],
  };

  const formats = [
    "header",
    "bold",
    "italic",
    "strike",
    "underline",
    "blockquote",
    "list",
    "bullet",
    "link",
    "image",
    "code-block",
    "code",
  ];

  const isDefaultView = useMediaQuery({ query: "(min-width:610px)" });

  return (
    <Controller
      name="content"
      control={control}
      rules={{
        validate: {
          required: (v) => v !== "<p><br></p>",
        },
      }}
      defaultValue={originalData?.content}
      render={({ field }) => (
        <Layout status={!errors?.content ? "default" : "error"} {...props}>
          <ReactQuill
            modules={isDefaultView ? modules : mobileModules}
            formats={formats}
            placeholder="내용을 입력하세요"
            {...field}
          />
        </Layout>
      )}
    />
  );
};

export default StudyCreateEditor;
