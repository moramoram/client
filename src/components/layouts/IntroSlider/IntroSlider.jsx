import React from "react";
import styled from "styled-components";

import { Link } from "react-router-dom";
import { useMediaQuery } from "react-responsive";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/navigation";

import { Button, ImageBox } from "@/components";
import { colors, fontSize, lineHeight, fontWeight } from "@/_shared";

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

const titleColor = {
  light: colors.gray800,
  dark: colors.gray25,
};

const subtitleColor = {
  light: colors.gray400,
  dark: colors.gray500,
};

const Layout = styled.div`
  width: 100%;

  .swiper {
    height: 400px;
  }
`;

const Item = styled.div`
  position: relative;
  overflow: hidden;
  height: 400px;
  padding: 40px 0 0 0px;
`;

const Content = styled.div`
  display: flex;
  height: 400px;
  justify-content: center;
  align-items: center;
`;

const Background = styled.div`
  position: absolute;
  top: 0;
  width: 100%;
  height: 400px;
  background: url(${(props) => props.image});
  background-repeat: no-repeat;
  background-size: cover;
  filter: opacity(0.3) blur(500px);
  z-index: -1;
`;

const TitleBox = styled.div`
  padding: 4rem;
  border-radius: 8px;
  flex-shrink: 0;
  word-break: keep-all;

  @media screen and (max-width: 530px) {
    flex-shrink: 1;
  }
`;

const SubTitle = styled.div`
  padding-bottom: 0.5rem;

  line-height: ${lineHeight.h3};
  font-weight: ${fontWeight.bold};
  font-size: ${fontSize.h3};
  color: ${(props) => subtitleColor[props.theme]};

  @media screen and (max-width: 980px) {
    font-size: ${fontSize.lg};
    line-height: ${lineHeight.lg};
    padding-bottom: 0;
  }
`;

const Title = styled.div`
  padding-bottom: 1rem;

  line-height: ${lineHeight.h2};
  font-weight: ${fontWeight.bold};
  font-size: ${fontSize.h2};
  color: ${(props) => titleColor[props.theme]};

  @media screen and (max-width: 980px) {
    font-size: ${fontSize.h3};
  }
`;

const Description = styled.div`
  padding-bottom: 2rem;

  font-size: ${fontSize.p};
  color: ${(props) => subtitleColor[props.theme]};

  @media screen and (max-width: 980px) {
    font-size: ${fontSize.sm};
  }
`;

const JobLink = styled(Link)`
  text-decoration: none;
`;
