import { Box } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom";

import {
  AsarlarBarchasi,
  AsarlarText,
  AuthorBirdth,
  AuthorDb,
  AuthorInfo,
  AuthorInfoBox,
  AuthorTitle,
  LiBooksAuthor,
} from "./AuthorStyled";
import { useSelector } from "react-redux";
import { BookAuthor } from "../Book/BookAuthor";
import { TabBar } from "../../commponents/TabBar/TabBar";
import { Lang } from "../../Lang/Lang";
export const Author = () => {
  const state = useSelector((state) => state);

  const { id } = useParams();

  const theme = JSON.parse(state.theme.theme);
  const lang = state.lang.lang;

  const [genreData, setGenreData] = useState([]);
  const [books, setBooks] = useState([]);

  const JustAxios = (idA) => {
    axios
      .get(`http://localhost:5000/author/authorId/${idA}`, {
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      })
      .then((res) => {
        if (res.status === 201) {
          console.log(res);
          setGenreData(res.data);
        }
      })
      .catch((err) => console.log(err));

    axios
      .get(`http://localhost:5000/author/books/${idA}`, {
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      })
      .then((res) => {
        setBooks(res.data);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    JustAxios(id);
  }, [id]);

  return (
    <>
      <Box
        sx={{
          padding: "0 80px 20px ",
          bgcolor: theme ? "#191919" : "#FFFFFF",
        }}>
        <TabBar />

        <Box key={genreData.id} sx={{ display: "flex", gap: "60px" }}>
          <img
            src={`http://localhost:5000/${genreData.image}`}
            width="505"
            height="681"
            alt="template"
          />

          <AuthorInfoBox>
            <AuthorTitle>
              {genreData.first_name} {genreData.last_name}
            </AuthorTitle>
            <AuthorInfo variant={theme}>{genreData.bio}</AuthorInfo>

            <Box sx={{ display: "flex", gap: "50px", alignItems: "center" }}>
              <AuthorBirdth variant={theme}>
                {Lang[lang].singlePAges.author.birth}
                <AuthorDb>{genreData.date_of_birth}</AuthorDb>
                {genreData.country}
              </AuthorBirdth>

              <AuthorBirdth variant={theme}>
                {Lang[lang].singlePAges.author.death}
                <AuthorDb>{genreData.date_of_death}</AuthorDb>
                {genreData.country}
              </AuthorBirdth>
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
          {books.map((item) => (
            <BookAuthor item={item} />
          ))}
        </LiBooksAuthor>
      </Box>
    </>
  );
};
