import React, { useEffect, useRef } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Carusel } from "./carusel/Carusel";
import { Box } from "@mui/material";
import {
  DateBrDe,
  GenreDataItem,
  GenreItem,
  GenreItemDiv,
  GenreLink,
  GenreList,
  HeroFormBox,
  HeroFormBtn,
  HeroFormText,
  HeroSearchForm,
  HeroSearchInput,
  NameAuthor,
} from "./carusel/CaruselStyled";
import axios from "axios";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { TabBar } from "../../commponents/TabBar/TabBar";
import {Lang}from "../.././Lang/Lang"
export const Home = () => {
  const state = useSelector((state) => state);
  const [genre, setGenre] = useState([]);

  const [genreData, setGenreData] = useState([]);

  let theme = JSON.parse(state.theme.theme);
  let lang=state.lang.lang

  const searchInp = useRef();

  useEffect(() => {
    axios
      .get("http://localhost:5000/genre", {
        headers: {
          token: localStorage.getItem("token"),
        },
      })
      .then((res) => {
        if (res.status === 201) {
          setGenre(res.data);
        }
      })
      .catch((err) => console.log(err));
  }, []);

  const handalSubmit = (id = 1) => {
    axios
      .get(`http://localhost:5000/author/genreId/${id}`, {
        headers: {
          token: localStorage.getItem("token"),
        },
      })
      .then((res) => {
        if (res.status === 201) {
          setGenreData(res.data);
        }
      })
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    handalSubmit();
  }, []);

  const onSubmit = (evt) => {
    evt.preventDefault();

    axios
      .get(
        `http://localhost:5000/author/search?author=${searchInp.current.value}`,
        {
          headers: {
            token: localStorage.getItem("token"),
          },
        },
      )
      .then((res) => {
        if (res.status === 201) {
          setGenreData(res.data);
        }
      })
      .catch((err) => console.log(err));
  };


  return (
    <>
      <Box
        sx={{
          padding: "0 80px 20px ",
          bgcolor: theme ? "#191919" : "#FFFFFF",
        }}>
        <TabBar />
        <Carusel />

        <HeroFormBox variant={theme} onSubmit={onSubmit}>
          <HeroFormText variant={theme}>{Lang[lang].headers.serach}</HeroFormText>
          <HeroSearchForm>
            <HeroSearchInput
              ref={searchInp}
              variant={theme}
              placeholder={Lang[lang].headers.heroInpPlac}
            />
            <HeroFormBtn variant={theme} type="submit">
            {Lang[lang].headers.serach}
            </HeroFormBtn>
          </HeroSearchForm>
        </HeroFormBox>

        <HeroFormText variant={theme}>{Lang[lang].headers.ganre}</HeroFormText>
        <GenreList>
          {genre.map((item) => (
            <GenreItem key={item.id}>
              <GenreLink onClick={() => handalSubmit(item.id)} variant={theme}>
                {item.name}
              </GenreLink>
            </GenreItem>
          ))}
        </GenreList>

        <ul
          style={{
            display: "flex",
            flexWrap: "wrap",
            alignContent: "center",
            justifyContent: "center",
            padding: "0",
            gap: "50px",
          }}>
          {genreData.map((item) => (
            <GenreDataItem key={item.id} variant={theme}>
              <NavLink
                to={`/author/${item.id}`}
                style={{
                  textDecoration: "none",
                  width: "100%",
                  borderRadius: "20px",
                }}>
                <img
                  style={{
                    height: "245px",
                    width: "100%",
                    borderTopLeftRadius: "20px",
                    borderTopRightRadius: "20px",
                  }}
                  src={`http://localhost:5000/${item.image}`}
                  alt={item.first_name}
                />
                <GenreItemDiv variant={theme}>
                  <NameAuthor variant={theme}>
                    {item.first_name} {item.last_name}
                  </NameAuthor>
                  <DateBrDe variant={theme}>
                    {" "}
                    {item.date_of_birth}-{item.date_of_death}
                  </DateBrDe>
                </GenreItemDiv>
              </NavLink>
            </GenreDataItem>
          ))}
        </ul>
      </Box>
    </>
  );
};
