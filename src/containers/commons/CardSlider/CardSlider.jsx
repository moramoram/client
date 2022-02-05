import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import { Link } from "react-router-dom";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import "swiper/css";

import { CardResponsive } from "@/components";
import { Icon } from "@/foundations";
import { colors } from "@/_shared";

const THEME = {
  LIGHT: "light",
  DARK: "dark",
};

const CardSlider = ({ data, isLoading, theme, ...props }) => {
  const items = isLoading ? cardData : data;
  return (
    <Layout>
      <Button className="swiper-button-prev" theme={theme}>
        <Icon icon="chevronLeft" />
      </Button>

      <Swiper
        spaceBetween={20}
        slidesPerView={"auto"}
        centeredSlides={true}
        loop={true}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        modules={[Navigation]}
      >
        {items.map(({ id, ...props }, idx) => (
          <SwiperSlide key={idx}>
            <CardItemLink to={id}>
              <CardResponsive
                {...cardData}
                isLoading={isLoading}
                theme={theme}
                {...props}
              />
            </CardItemLink>
          </SwiperSlide>
        ))}
      </Swiper>
      <Button className="swiper-button-next" theme={theme}>
        <Icon icon="chevronRight" />
      </Button>
    </Layout>
  );
};

CardSlider.defaultProps = {
  theme: THEME.LIGHT,
};

CardSlider.propTypes = {
  theme: PropTypes.oneOf(Object.values(THEME)),
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

const CardItemLink = styled(Link)`
  text-decoration: none;
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

  svg {
    stroke: ${(props) => buttonIconColor[props.theme]};
  }

  @media screen and (max-width: 960px) {
    display: none;
  }
`;
