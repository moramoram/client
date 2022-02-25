import React, { forwardRef } from "react";
import PropTypes from "prop-types";

import Dropzone from "react-dropzone";

import { Layout, Title, Description } from "./InputImage.styled";
import { Icon } from "@/foundations";

const THEME = {
  LIGHT: "light",
  DARK: "dark",
};

const STATUS = {
  DEFAULT: "default",
  ERROR: "error",
};

const InputImage = forwardRef(({ ...props }, imgRef) => {
  return (
    <Dropzone
      onDrop={(acceptedFiles) => {
        props.onChange(acceptedFiles);
      }}
      ref={imgRef}
    >
      {({ getRootProps, getInputProps }) => (
        <Layout {...getRootProps()} {...props}>
          <input {...getInputProps()} type="file" accept="image/*" />
          <Icon icon="image" />
          <Title>이미지를 업로드하세요</Title>
          <Description>
            여기를 클릭하거나 파일을 마우스로 끌어보세요.
          </Description>
        </Layout>
      )}
    </Dropzone>
  );
});

InputImage.propTypes = {
  theme: PropTypes.oneOf(Object.values(THEME)),
  status: PropTypes.oneOf(Object.values(STATUS)),
};

InputImage.defaultProps = {
  theme: THEME.LIGHT,
  status: STATUS.DEFAULT,
};

export default InputImage;
