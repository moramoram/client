import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import { Link } from "react-router-dom";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { CardSmall } from "@/components";

const CardSmallSlider = ({ data, theme, isLoading, ...props }) => {
  const swiperParams = {
    spaceBetween: 20,
    slidesPerView: "auto",
  };

  return (
    <Layout {...props}>
      <Swiper {...swiperParams}>
        {data.map(({ id, url, ...props }) => (
          <SwiperSlide key={id}>
            <CardItemLink to={url}>
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
