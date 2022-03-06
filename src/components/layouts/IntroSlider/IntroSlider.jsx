import React from "react";

import { useMediaQuery } from "react-responsive";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/navigation";

import {
  Layout,
  Item,
  Content,
  Background,
  TitleBox,
  SubTitle,
  Title,
  Description,
  JobLink,
} from "./IntroSlider.styled";
import { Button, ImageBox } from "@/components";

import { getEndDate } from "@/utils";

const IntroSlider = ({ data, ...props }) => {
  const swiperParams = {
    spaceBetween: 20,
    slidesPerView: "auto",
    centeredSlides: true,
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    modules: [Autoplay],
  };

  const isDefault = useMediaQuery({
    query: "(max-width:980px) and (min-width:530px)",
  });
  const isSmall = useMediaQuery({ query: "(max-width:530px)" });

  return (
    <Layout>
      <Swiper {...swiperParams}>
        {data.map(({ recruitId, company, title, closeDate }) => (
          <SwiperSlide key={recruitId}>
            <Item>
              <Content>
                {!isSmall && (
                  <ImageBox
                    size={isDefault ? "medium" : "large"}
                    src={company.logoImg}
                  />
                )}

                <TitleBox>
                  <SubTitle {...props}>{company.companyName}</SubTitle>
                  <Title {...props}>{title}</Title>
                  <Description {...props}>{getEndDate(closeDate)}</Description>
                  <JobLink to={`/job/${recruitId}`}>
                    <Button mode="primary">바로가기</Button>
                  </JobLink>
                </TitleBox>
              </Content>
              <Background image={company.logoImg} />
            </Item>
          </SwiperSlide>
        ))}
      </Swiper>
    </Layout>
  );
};

export default IntroSlider;
