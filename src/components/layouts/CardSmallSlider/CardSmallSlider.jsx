import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import { Link } from "react-router-dom";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { CardSmall, CardSmallCreate } from "@/components";

const CardSmallSlider = ({ createMsg, data, theme, isLoading, ...props }) => {
  const items = isLoading ? cardData : data;
  const swiperParams = {
    spaceBetween: 20,
    slidesPerView: "auto",
  };

  return (
    <Layout {...props}>
      <Swiper {...swiperParams}>
        {createMsg && (
          <SwiperSlide>
            <CardSmallCreate theme={theme} content={createMsg} {...props} />
          </SwiperSlide>
        )}
        {items?.map(({ id, ...props }) => (
          <SwiperSlide key={id}>
            <CardItemLink to={id}>
              <CardSmall theme={theme} isLoading={isLoading} {...props} />
            </CardItemLink>
          </SwiperSlide>
        ))}
      </Swiper>
    </Layout>
  );
};

CardSmallSlider.propTypes = {
  list: PropTypes.arrayOf(Object),
};

export default CardSmallSlider;

const cardData = new Array(6).fill({
  contents: {
    title: "",
    subtitle: "",
    highlight: "",
    src: "",
  },
  badges: ["", "", ""],
  id: "",
});

const Layout = styled.div`
  width: 100%;

  .swiper-slide {
    width: 220px !important;
    flex-shrink: 0;
  }
`;

const CardItemLink = styled(Link)`
  text-decoration: none;
`;
