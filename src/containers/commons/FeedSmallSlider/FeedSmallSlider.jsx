import React, { useRef } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import { Link } from "react-router-dom";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import "swiper/css";

import { FeedItemSmall } from "@/components";
import { Icon } from "@/foundations";
import { colors } from "@/_shared";

const THEME = {
  LIGHT: "light",
  DARK: "dark",
};

const FeedSmallSlider = ({ data, isLoading, theme, ...props }) => {
  const feedData = isLoading
    ? new Array(3).fill({
        boardId: 1,
      })
    : data;
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
              <FeedItemLink to={boardId} key={boardId}>
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

const buttonHoverColor = {
  light: colors.gray25,
  dark: colors.gray900,
};

const buttonIconColor = {
  light: colors.gray900,
  dark: colors.gray25,
};

const Layout = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  .swiper {
    max-width: 960px;
    margin: 0 2rem;

    @media screen and (max-width: 960px) {
      margin: 0;
    }
  }

  .swiper-slide {
    width: 300px;
  }
`;

const FeedItemLink = styled(Link)`
  text-decoration: none;
  width: 100%;
`;

const Button = styled.button`
  height: 36px;
  border: none;
  border-radius: 4px;

  background: none;
  cursor: pointer;

  :hover {
    background-color: ${(props) => buttonHoverColor[props.theme]};
  }

  :nth-child(2) {
    order: 1;
  }

  svg {
    stroke: ${(props) => buttonIconColor[props.theme]};
  }

  @media screen and (max-width: 960px) {
    display: none;
  }
`;
