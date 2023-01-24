import {

  Box,

} from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom";

import {
  AsarlarBarchasi,
  AsarlarText,
  AuthorInfo,
  AuthorInfoBox,
  AuthorTitle,
  LiBooksAuthor,
} from "../../pages/Author/AuthorStyled";

import {
  BookDiscreption,
  InfoBook,
  InfoBookApi,
  JustLine,
  ToliqInfoText,
} from "./SingleBookStyled";
import { useSelector } from "react-redux";
import { BookAuthor } from "../Book/BookAuthor";
import { TabBar } from "../../commponents/TabBar/TabBar";
import { Lang } from "../../Lang/Lang";
export const SingleBook = () => {
  const state = useSelector((state) => state);
  const { id, ganreId } = useParams();

  const theme = JSON.parse(state.theme.theme);
  const lang=state.lang.lang
  console.log();
  const [genreData, setGenreData] = useState({});
  const [genreDataL, setGenreDataL] = useState([]);
 
  const JustAxios = (idA) => {
    axios
      .get(`http://localhost:5000/book/bookId/${idA}`, {
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      })
      .then((res) => {
        if (res.status === 201) {
          setGenreData(res.data);
        }
      })
      .catch((err) => console.log(err));

    axios
      .get(`http://localhost:5000/book/genreId/${ganreId}`, {
        headers: {
          token: localStorage.getItem("token"),
        },
      })
      .then((res) => {
        if (res.status === 201) {
          setGenreDataL(res.data);
        }
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    JustAxios(id);
  }, []);

  return (
    <>
      <Box
        sx={{
          padding: "0 80px 20px ",
          bgcolor: theme ? "#191919" : "#FFFFFF",
        }}>
        <TabBar/>

        <Box sx={{ display: "flex", gap: "60px" }}>
          <img
            src={`http://localhost:5000/${genreData.image}`}
            width="505"
            height="681"
            alt="template"
          />

          <AuthorInfoBox>
            <AuthorTitle>{genreData.title}</AuthorTitle>
            <AuthorInfo variant={theme}>{genreData.bio}</AuthorInfo>

            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}>
              <InfoBook variant={theme}>{Lang[lang].singlePAges.book.pagesCount}</InfoBook>
              <InfoBookApi variant={theme}>{genreData.page} {Lang[lang].singlePAges.book.page}</InfoBookApi>
            </Box>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}>
              <InfoBook variant={theme}>{Lang[lang].singlePAges.book.published}</InfoBook>
              <InfoBookApi variant={theme}>{genreData.year} {Lang[lang].singlePAges.book.year}</InfoBookApi>
            </Box>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}>
              <InfoBook variant={theme}>{Lang[lang].singlePAges.book.bookPrice}</InfoBook>
              <InfoBookApi variant={theme}>${genreData.price} </InfoBookApi>
            </Box>

            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                gap: "15px",
                marginTop: "40px",
              }}>
              <ToliqInfoText variant={theme}>{Lang[lang].singlePAges.book.fullInfo}</ToliqInfoText>
              <JustLine></JustLine>
            </Box>

            <Box sx={{ marginTop: "12px" }}>
              <BookDiscreption variant={theme}>
                {genreData.description}
              </BookDiscreption>
            </Box>
          </AuthorInfoBox>
        </Box>

        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginTop: "80px",
          }}>
          <AsarlarText>{Lang[lang].singlePAges.book.works}</AsarlarText>

          <NavLink to={"/book"} style={{ textDecoration: "none" }}>
            <AsarlarBarchasi>{Lang[lang].singlePAges.book.seeAll}</AsarlarBarchasi>
          </NavLink>
        </Box>

        <LiBooksAuthor>
          {genreDataL.map((item) => (
            <BookAuthor item={item} />
          ))}
        </LiBooksAuthor>
      </Box>
    </>
  );
};
