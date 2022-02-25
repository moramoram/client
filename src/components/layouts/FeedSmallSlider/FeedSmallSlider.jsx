import React, { useRef } from "react";
import PropTypes from "prop-types";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import "swiper/css";

import { Layout, FeedItemLink, Button } from "./FeedSmallSlider.styled";
import { FeedItemSmall } from "@/components";
import { Icon } from "@/foundations";

const THEME = {
  LIGHT: "light",
  DARK: "dark",
};

const FeedSmallSlider = ({ data, isLoading, theme, ...props }) => {
  const feedData = isLoading ? new Array(3).fill({ boardId: 1 }) : data;
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
    <Layout {...props}>
      <Button ref={prevRef} theme={theme}>
        <Icon icon="chevronLeft" />
      </Button>
      <Button ref={nextRef} theme={theme}>
        <Icon icon="chevronRight" />
      </Button>
      <Swiper {...swiperParams}>
        {feedData.map(({ boardId, ...data }) => {
          const colorIdx = boardId % 17;
          return (
            <SwiperSlide key={boardId}>
              <FeedItemLink to={`/community/${boardId}`} key={boardId}>
                <FeedItemSmall
                  isLoading={isLoading}
                  colorIdx={colorIdx}
                  theme={theme}
                  {...data}
                  {...props}
                />
              </FeedItemLink>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </Layout>
  );
};

FeedSmallSlider.propTypes = {
  data: PropTypes.arrayOf(Object),
  theme: PropTypes.oneOf(Object.values(THEME)),
  isLoading: PropTypes.bool,
};

FeedSmallSlider.defaultProps = {
  theme: THEME.LIGHT,
};

export default FeedSmallSlider;
