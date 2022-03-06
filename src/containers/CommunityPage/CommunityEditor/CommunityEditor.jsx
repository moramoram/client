import React, { useEffect } from "react";

import ReactQuill, { Quill } from "react-quill";
import MarkdownShortcuts from "quill-markdown-shortcuts";
import "react-quill/dist/quill.snow.css";

import { Controller } from "react-hook-form";
import { useMediaQuery } from "react-responsive";

import { InputBox, Layout, Title } from "./CommunityEditor.styled";
import { Selector } from "@/components";

const CommunityEditor = ({
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

  const isDefaultView = useMediaQuery({ query: "(min-width:560px)" });

  const options = [
    { value: "1", label: "자유게시판" },
    { value: "2", label: "익명게시판" },
    { value: "3", label: "취업 정보 게시판" },
    { value: "4", label: "질문 게시판" },
  ];

  useEffect(() => {
    if (errors.title?.type === "maxLength") {
      window.alert("제목은 45자 이내로 입력해주세요");
    }
  });

  return (
    <>
      <InputBox {...props}>
        {originalData ? (
          <Selector
            placeholder="카테고리"
            value={options[originalData?.boardType - 1]}
            isDisabled
            {...props}
          />
        ) : (
          <Controller
            name="boardType"
            control={control}
            rules={{ required: true }}
            render={({ field }) => (
              <Selector
                placeholder="카테고리"
                options={options}
                status={errors?.boardType ? "error" : "default"}
                {...field}
                {...props}
              />
            )}
          />
        )}
      </InputBox>
      <Title
        placeholder="제목"
        className="title"
        status={
          errors.title?.type === "required" ||
          errors.title?.type === "maxLength"
            ? "error"
            : "default"
        }
        defaultValue={originalData?.title}
        {...register("title", {
          required: !originalData,
          maxLength: 45,
        })}
        {...props}
      />
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
    </>
  );
};

export default CommunityEditor;
