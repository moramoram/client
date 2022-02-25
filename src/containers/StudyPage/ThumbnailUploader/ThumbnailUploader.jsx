import React, { useState, useCallback } from "react";

import Cropper from "react-easy-crop";

import {
  Layout,
  CropperBox,
  SubmitButton,
  ImgBox,
} from "./ThumbnailUploader.styled";
import { InputImage } from "@/components";
import { getCroppedImg } from "@/utils";

const ThumbnailUploader = ({
  croppedImage,
  setCroppedImage,
  originalData,
  ...props
}) => {
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
        {(originalData?.thumbnailImg || croppedImage) && (
          <ImgBox>
            <img
              src={croppedImage || originalData?.thumbnailImg}
              alt="Cropped"
            />
          </ImgBox>
        )}
      </Layout>
    </>
  );
};

export default ThumbnailUploader;
