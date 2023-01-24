import React, { useEffect, useRef } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Carusel } from "../../pages/Home/carusel/Carusel";
import { Box } from "@mui/material";
import {
  GenreItem,
  GenreLink,
  GenreList,
  HeroFormBox,
  HeroFormBtn,
  HeroFormText,
  HeroSearchForm,
  HeroSearchInput,
} from "../../pages/Home/carusel/CaruselStyled";
import axios from "axios";
import { useState } from "react";
import { useSelector } from "react-redux";
import { BookAuthor } from "./BookAuthor";
import { TabBar } from "../../commponents/TabBar/TabBar";
import {Lang}from "../.././Lang/Lang"


export const Book = () => {
  const state = useSelector((state) => state);
  const [genre, setGenre] = useState([]);
  const theme = JSON.parse(state.theme.theme);
  const [genreData, setGenreData] = useState([]);
  let lang=state.lang.lang

  const inputSerchBook = useRef();

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
      .get(`http://localhost:5000/book/genreId/${id}`, {
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

  const bookSerchSubmit = (evt) => {
    evt.preventDefault();
    axios
      .get(
        `http://localhost:5000/book/search?book=${inputSerchBook.current.value}`,
        {
          headers: {
            Authorization: localStorage.getItem("token"),
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
  useEffect(() => {
    handalSubmit();
  }, []);

  return (
    <>
      <Box
        sx={{
          padding: "0 80px 20px ",
          bgcolor: theme ? "#191919" : "#FFFFFF",
        }}>
        <TabBar />
        <Carusel />

        <HeroFormBox variant={theme}>
          <HeroFormText variant={theme}>{Lang[lang].headers.serach}</HeroFormText>
          <HeroSearchForm onSubmit={bookSerchSubmit}>
            <HeroSearchInput
              ref={inputSerchBook}
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
            <GenreItem>
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
          {genreData.map((item) => {
            return <BookAuthor item={item} />;
          })}
        </ul>
      </Box>
    </>
  );
};
