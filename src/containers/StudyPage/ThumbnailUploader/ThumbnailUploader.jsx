import React, { useState, useCallback } from "react";
import styled from "styled-components";

import Cropper from "react-easy-crop";

import { Button, InputImage } from "@/components";
import { getCroppedImg } from "@/utils";

const ThumbnailUploader = ({ croppedImage, setCroppedImage, ...props }) => {
  const [imageSrc, setImageSrc] = useState(null);
  const [crop, setCrop] = useState({ x: 0, y: 0 });
  const [zoom, setZoom] = useState(1);
  const [croppedAreaPixels, setCroppedAreaPixels] = useState(null);

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
  }, [imageSrc, croppedAreaPixels, setCroppedImage]);

  const onClose = useCallback(() => {
    setImageSrc(null);
  }, []);

  const onFileChange = async (files) => {
    if (files?.length > 0) {
      const file = files[0];
      if (file?.size > 10485760) {
        alert("10MB 이하로 업로드해주세요");
      } else {
        let imageDataUrl = await readFile(file);
        setImageSrc(imageDataUrl);
      }
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
            aspect="2"
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

export default ThumbnailUploader;

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
    max-width: 100%;
    border-radius: 8px;
  }
`;
