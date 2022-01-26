import React, { useState, useCallback } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import Cropper from "react-easy-crop";

import { Button, InputImage } from "@/components";
import { getCroppedImg } from "@/utils";

const THEME = {
  LIGHT: "light",
  DARK: "dark",
};

const ImageUploader = ({ aspect, ...props }) => {
  const [imageSrc, setImageSrc] = React.useState(null);
  const [crop, setCrop] = useState({ x: 0, y: 0 });
  const [zoom, setZoom] = useState(1);
  const [croppedAreaPixels, setCroppedAreaPixels] = useState(null);
  const [croppedImage, setCroppedImage] = useState(null);

  const readFile = (file) => {
    return new Promise((resolve) => {
      const reader = new FileReader();
      reader.addEventListener("load", () => resolve(reader.result), false);
      reader.readAsDataURL(file);
    });
  };

  const onCropComplete = useCallback((croppedArea, croppedAreaPixels) => {
    setCroppedAreaPixels(croppedAreaPixels);
  }, []);

  const showCroppedImage = useCallback(async () => {
    try {
      const croppedImage = await getCroppedImg(imageSrc, croppedAreaPixels);
      setCroppedImage(croppedImage);
    } catch (e) {
      console.error(e);
    }
  }, [imageSrc, croppedAreaPixels]);

  const onClose = useCallback(() => {
    setImageSrc(null);
  }, []);

  const onFileChange = async (files) => {
    if (files && files.length > 0) {
      const file = files[0];
      let imageDataUrl = await readFile(file);

      setImageSrc(imageDataUrl);
    }
  };

  return (
    <>
      {imageSrc && (
        <CropperBox>
          <Cropper
            image={imageSrc}
            crop={crop}
            zoom={zoom}
            aspect={aspect}
            onCropChange={setCrop}
            onCropComplete={onCropComplete}
            onZoomChange={setZoom}
          />
          <SubmitButton
            onClick={() => {
              showCroppedImage();
              onClose();
            }}
          >
            이미지 자르기
          </SubmitButton>
        </CropperBox>
      )}
      <Layout>
        <InputImage onChange={onFileChange} accept="image/*" {...props} />
        {croppedImage && (
          <ImgBox>
            <img src={croppedImage} alt="Cropped" />
          </ImgBox>
        )}
      </Layout>
    </>
  );
};

ImageUploader.propTypes = {
  theme: PropTypes.oneOf(Object.values(THEME)),
  aspect: PropTypes.node,
};

ImageUploader.defaultProps = {
  theme: THEME.LIGHT,
  aspect: 4 / 3,
};

export default ImageUploader;

const Layout = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const CropperBox = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 1;
`;

const SubmitButton = styled(Button)`
  position: absolute;
  left: calc(50% - 90px);
  bottom: 18%;

  width: 180px;
  margin: auto;
`;

const ImgBox = styled.div`
  img {
    border-radius: 8px;
  }
`;
