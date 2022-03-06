import React, { useRef } from "react";
import PropTypes from "prop-types";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import "swiper/css";

import { Layout, CardItemLink, Button } from "./CardSlider.styled";
import { CardResponsive } from "@/components";
import { Icon } from "@/foundations";

const THEME = {
  LIGHT: "light",
  DARK: "dark",
};

const CardSlider = ({ data, isLoading, theme, ...props }) => {
  const items = isLoading ? cardData : data;
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  const swiperParams = {
    onBeforeInit: (swiper) => {
      swiper.params.navigation.prevEl = prevRef.current;
      swiper.params.navigation.nextEl = nextRef.current;
    },
    spaceBetween: 20,
    slidesPerView: "auto",
    centeredSlides: true,
    loop: true,
    navigation: {
      prevEl: prevRef.current,
      nextEl: nextRef.current,
    },
    modules: [Navigation],
  };

  return (
    <Layout>
      <Button ref={prevRef} theme={theme}>
        <Icon icon="chevronLeft" />
      </Button>
      <Button ref={nextRef} theme={theme}>
        <Icon icon="chevronRight" />
      </Button>
      <Swiper {...swiperParams}>
        {items.map(({ id, ...props }, idx) => (
          <SwiperSlide key={idx}>
            <CardItemLink to={id}>
              <CardResponsive
                id={id}
                isLoading={isLoading}
                theme={theme}
                {...props}
              />
            </CardItemLink>
          </SwiperSlide>
        ))}
      </Swiper>
    </Layout>
  );
};

CardSlider.propTypes = {
  theme: PropTypes.oneOf(Object.values(THEME)),
};

CardSlider.defaultProps = {
  theme: THEME.LIGHT,
};

export default CardSlider;

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
