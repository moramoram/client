import React from "react";
import styled, { css } from "styled-components";

import { Controller } from "react-hook-form";

import ReactQuill, { Quill } from "react-quill";
import MarkdownShortcuts from "quill-markdown-shortcuts";
import hljs from "highlight.js";
import "react-quill/dist/quill.snow.css";
import "highlight.js/styles/base16/decaf.css";

import { useMediaQuery } from "react-responsive";

import { colors } from "@/_shared";

const StudyCreateEditor = ({
  register,
  control,
  errors,
  originalData,
  ...props
}) => {
  Quill.register("modules/markdownShortcuts", MarkdownShortcuts);
  Quill.debug("error");
  window.hljs = hljs;

  const modules = {
    syntax: {
      highlight: (text) => hljs.highlightAuto(text).value,
    },
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

const bgColor = {
  light: colors.gray50,
  dark: colors.gray900,
};

const focusBgColor = {
  light: colors.white,
  dark: colors.black,
};

const borderColor = {
  light: {
    default: colors.gray50,
    error: colors.errorOpacity200,
  },
  dark: {
    default: colors.gray900,
    error: colors.errorOpacity200,
  },
};

const hoverColor = {
  default: colors.blueOpacity200,
  error: colors.errorOpacity200,
};

const insetColor = {
  default: colors.blue100,
  error: colors.errorOpacity200,
};

const focusColor = {
  default: colors.blueOpacity100,
  error: colors.errorOpacity100,
};

const pickerBorderColor = {
  light: colors.gray300,
  dark: colors.gray800,
};

const toolsColor = {
  light: colors.gray700,
  dark: colors.gray200,
};

const textColor = {
  light: colors.gray800,
  dark: colors.gray200,
};

const Layout = styled.div`
  border-radius: 8px;

  width: 100%;

  .ql-container {
    width: 100%;
    height: auto;
    border: none;
    font-size: 1rem;
  }

  .ql-editor {
    height: 500px;
    overflow-y: auto;

    padding: 2rem;
    border: 1px solid ${(props) => borderColor[props.theme][props.status]};
    border-radius: 8px;
    background-color: ${(props) => bgColor[props.theme]};

    font-family: Pretendard;
    color: ${(props) => textColor[props.theme]};
    letter-spacing: -0.02rem;

    transition: 0.3s;

    ${(props) => css`
      :hover {
        border: 1px solid ${hoverColor[props.status]};
        box-shadow: inset 0 0 0 1px ${hoverColor[props.status]};
        background-color: ${focusBgColor[props.theme]};
      }

      :focus-within {
        box-shadow: 0 0 0 3px ${focusColor[props.status]},
          inset 0 0 0 1px ${insetColor[props.status]};
        background-color: ${focusBgColor[props.theme]};
      }

      :focus-within:hover {
        border: 1px solid ${insetColor[props.status]};
      }
    `}
  }

  .ql-editor.ql-blank::before {
    padding-left: 1rem;
    color: ${colors.gray500};
    line-height: 1.5rem;
    ${(props) => props.status === "error" && `color: ${colors.error};`}
  }

  .ql-toolbar.ql-snow {
    top: 10px;
    left: 0px;
    z-index: 9999;

    width: 100%;
    padding: 1rem;
    border: none;
    border-radius: 12px 12px 0 0;

    font-family: Pretendard;

    @media screen and (max-width: 610px) {
      padding: 1rem 0;
    }

    .ql-stroke {
      stroke: ${(props) => toolsColor[props.theme]};
    }

    .ql-fill {
      fill: ${(props) => toolsColor[props.theme]};
    }
  }

  .ql-snow .ql-picker {
    color: ${(props) => toolsColor[props.theme]};
  }

  .ql-snow .ql-picker-options {
    background-color: ${(props) => bgColor[props.theme]};
  }

  .ql-toolbar.ql-snow .ql-picker.ql-expanded .ql-picker-options {
    border: 1px solid ${(props) => pickerBorderColor[props.theme]};
    border-radius: 4px;
  }

  .ql-toolbar.ql-snow .ql-picker.ql-expanded .ql-picker-label {
    border: 1px solid ${(props) => pickerBorderColor[props.theme]};
  }

  .ql-snow .ql-editor h1 {
    padding: 3px 0;
    font-size: 1.5rem;
    font-weight: 700;
  }
  .ql-snow .ql-editor h2 {
    padding: 3px 0;
    font-size: 1.25rem;
    font-weight: 700;
  }
  .ql-snow .ql-editor h3 {
    padding: 3px 0;
    font-size: 1.125em;
    font-weight: 700;
    line-height: 1.3;
  }

  .ql-snow .ql-editor p {
    padding: 3px 0;
    font-size: 1rem;
    line-height: 1.5rem;
  }

  .ql-syntax,
  .ql-snow .ql-editor code {
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

  .ql-snow.ql-toolbar button:hover,
  .ql-snow .ql-toolbar button:hover,
  .ql-snow.ql-toolbar button:focus,
  .ql-snow .ql-toolbar button:focus,
  .ql-snow.ql-toolbar button.ql-active,
  .ql-snow .ql-toolbar button.ql-active,
  .ql-snow.ql-toolbar .ql-picker-label:hover,
  .ql-snow .ql-toolbar .ql-picker-label:hover,
  .ql-snow.ql-toolbar .ql-picker-label.ql-active,
  .ql-snow .ql-toolbar .ql-picker-label.ql-active,
  .ql-snow.ql-toolbar .ql-picker-item:hover,
  .ql-snow .ql-toolbar .ql-picker-item:hover,
  .ql-snow.ql-toolbar .ql-picker-item.ql-selected,
  .ql-snow .ql-toolbar .ql-picker-item.ql-selected {
    color: ${colors.blue100} !important;
  }
  .ql-snow.ql-toolbar button:hover .ql-fill,
  .ql-snow .ql-toolbar button:hover .ql-fill,
  .ql-snow.ql-toolbar button:focus .ql-fill,
  .ql-snow .ql-toolbar button:focus .ql-fill,
  .ql-snow.ql-toolbar button.ql-active .ql-fill,
  .ql-snow .ql-toolbar button.ql-active .ql-fill,
  .ql-snow.ql-toolbar .ql-picker-label:hover .ql-fill,
  .ql-snow .ql-toolbar .ql-picker-label:hover .ql-fill,
  .ql-snow.ql-toolbar .ql-picker-label.ql-active .ql-fill,
  .ql-snow .ql-toolbar .ql-picker-label.ql-active .ql-fill,
  .ql-snow.ql-toolbar .ql-picker-item:hover .ql-fill,
  .ql-snow .ql-toolbar .ql-picker-item:hover .ql-fill,
  .ql-snow.ql-toolbar .ql-picker-item.ql-selected .ql-fill,
  .ql-snow .ql-toolbar .ql-picker-item.ql-selected .ql-fill,
  .ql-snow.ql-toolbar button:hover .ql-stroke.ql-fill,
  .ql-snow .ql-toolbar button:hover .ql-stroke.ql-fill,
  .ql-snow.ql-toolbar button:focus .ql-stroke.ql-fill,
  .ql-snow .ql-toolbar button:focus .ql-stroke.ql-fill,
  .ql-snow.ql-toolbar button.ql-active .ql-stroke.ql-fill,
  .ql-snow .ql-toolbar button.ql-active .ql-stroke.ql-fill,
  .ql-snow.ql-toolbar .ql-picker-label:hover .ql-stroke.ql-fill,
  .ql-snow .ql-toolbar .ql-picker-label:hover .ql-stroke.ql-fill,
  .ql-snow.ql-toolbar .ql-picker-label.ql-active .ql-stroke.ql-fill,
  .ql-snow .ql-toolbar .ql-picker-label.ql-active .ql-stroke.ql-fill,
  .ql-snow.ql-toolbar .ql-picker-item:hover .ql-stroke.ql-fill,
  .ql-snow .ql-toolbar .ql-picker-item:hover .ql-stroke.ql-fill,
  .ql-snow.ql-toolbar .ql-picker-item.ql-selected .ql-stroke.ql-fill,
  .ql-snow .ql-toolbar .ql-picker-item.ql-selected .ql-stroke.ql-fill {
    fill: ${colors.blue100} !important;
  }
  .ql-snow.ql-toolbar button:hover .ql-stroke,
  .ql-snow .ql-toolbar button:hover .ql-stroke,
  .ql-snow.ql-toolbar button:focus .ql-stroke,
  .ql-snow .ql-toolbar button:focus .ql-stroke,
  .ql-snow.ql-toolbar button.ql-active .ql-stroke,
  .ql-snow .ql-toolbar button.ql-active .ql-stroke,
  .ql-snow.ql-toolbar .ql-picker-label:hover .ql-stroke,
  .ql-snow .ql-toolbar .ql-picker-label:hover .ql-stroke,
  .ql-snow.ql-toolbar .ql-picker-label.ql-active .ql-stroke,
  .ql-snow .ql-toolbar .ql-picker-label.ql-active .ql-stroke,
  .ql-snow.ql-toolbar .ql-picker-item:hover .ql-stroke,
  .ql-snow .ql-toolbar .ql-picker-item:hover .ql-stroke,
  .ql-snow.ql-toolbar .ql-picker-item.ql-selected .ql-stroke,
  .ql-snow .ql-toolbar .ql-picker-item.ql-selected .ql-stroke,
  .ql-snow.ql-toolbar button:hover .ql-stroke-miter,
  .ql-snow .ql-toolbar button:hover .ql-stroke-miter,
  .ql-snow.ql-toolbar button:focus .ql-stroke-miter,
  .ql-snow .ql-toolbar button:focus .ql-stroke-miter,
  .ql-snow.ql-toolbar button.ql-active .ql-stroke-miter,
  .ql-snow .ql-toolbar button.ql-active .ql-stroke-miter,
  .ql-snow.ql-toolbar .ql-picker-label:hover .ql-stroke-miter,
  .ql-snow .ql-toolbar .ql-picker-label:hover .ql-stroke-miter,
  .ql-snow.ql-toolbar .ql-picker-label.ql-active .ql-stroke-miter,
  .ql-snow .ql-toolbar .ql-picker-label.ql-active .ql-stroke-miter,
  .ql-snow.ql-toolbar .ql-picker-item:hover .ql-stroke-miter,
  .ql-snow .ql-toolbar .ql-picker-item:hover .ql-stroke-miter,
  .ql-snow.ql-toolbar .ql-picker-item.ql-selected .ql-stroke-miter,
  .ql-snow .ql-toolbar .ql-picker-item.ql-selected .ql-stroke-miter {
    stroke: ${colors.blue100} !important;
  }
`;
