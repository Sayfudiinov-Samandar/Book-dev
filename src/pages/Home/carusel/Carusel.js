import { Box, ImageListItem } from "@mui/material";
import React from "react";
import Slider from "react-slick";
import HeroCrBgImg from "../../../assests/img/Group 2.png";
import "./carusel.css";
import { TextHero } from "./CaruselStyled";
export const Carusel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      <Slider {...settings}>
        <Box sx={{ position: "relative", width: "100%" }}>
          <ImageListItem>
            <img src={HeroCrBgImg} alt="template" loading="lazy" />
          </ImageListItem>

          <TextHero>Temuriylar <br /> davri <br /> adabiyoti</TextHero>
        </Box>
        <Box sx={{ position: "relative", width: "100%" }}>
          <ImageListItem>
            <img src={HeroCrBgImg} alt="template" loading="lazy" />
          </ImageListItem>
          <TextHero>Jadid   <br /> davri <br /> adabiyoti</TextHero>

        </Box>{" "}
        <Box sx={{ position: "relative", width: "100%" }}>
          <ImageListItem>
            <img src={HeroCrBgImg} alt="template" loading="lazy" />
          </ImageListItem>

          <TextHero>Sovet   <br /> davri <br /> adabiyoti</TextHero>

        </Box>
        <Box sx={{ position: "relative", width: "100%" }}>
          <ImageListItem>
            <img src={HeroCrBgImg} alt="template" loading="lazy" />
          </ImageListItem>
          <TextHero>Mustaqillik  <br /> davri <br /> adabiyoti</TextHero>

        </Box>
      </Slider>
    </>
  );
};
