import React, { useState } from "react";
import { useForm } from "react-hook-form";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import {
  AddBookBio,
  AddBookGenre,
  AddBookGenreOptionTmD,
  AddBookTitle,
  DivFlex,
  LAbelFotoText,
  LabelInputFoto,
  LoginContentDiv,
  LoginDivLEft,
  LoginDivRight,
  LoginForm,
  LoginFormButton,
  LoginH3,
} from "./AddBookStyled.js";
import { TextField } from "@mui/material";
import { Lang } from "../../Lang/Lang";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

export const AddBook = () => {
  const state=useSelector((state)=>state)
  const navigator=useNavigate()
  const [option, setOption] = useState([]);
  const [error, setError] = useState(false);
  const lang = state.lang.lang
  const theme = JSON.parse(state.theme.theme)
  const token = localStorage.getItem("token");

  const schema = Yup.object({
    title: Yup.string().required(""),
    pages: Yup.string().required(""),
    year: Yup.string().required(""),
    price: Yup.string().required(""),
    genre: Yup.string().required(""),
    author: Yup.string().required(""),
    bio: Yup.string().required(""),
    file: Yup.mixed().required(""),
  });

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    mode: "all",
    defaultValues: {
      title: "",
      pages: "",
      year: "",
      price: "",
      genre: "",
      author: "",
      bio: "",
      file: "",
    },
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    const formData = new FormData();

    formData.append("image", data.file[0]);
    formData.append("title", data.title);
    formData.append("page", data.pages);
    formData.append("year", data.year);
    formData.append("price", data.price);
    formData.append("genre_id", data.genre);
    formData.append("author_id", data.author);
    formData.append("description", data.bio);

    axios
      .post("http://localhost:5000/book", formData, {
        headers: {
          Authorization: token,
        },
      })
      .then((res) => {
        if (res.status===201) {
          if (window.confirm("Book is added") == true) {
            navigator("/book")
          }
        }
      })
      .catch((err) => console.log(err));
  };


  const handelChange = (id) => {
    axios
      .get(`http://localhost:5000/author/genreId/${id.target.value}`, {
        headers: {
          Authorization: token,
        },
      })
      .then((res) => {
        if (res.status === 201) {
          setOption(res.data);
          setError(true);

        }
      })

      .catch((err) => console.log(err));
  };

  return (
    <>
      <DivFlex>
        <LoginDivLEft variant={theme}>
          <LabelInputFoto variant={theme}>
            <LAbelFotoText for="file" variant={theme}>
              {Lang[lang].addAuthor.inpFile}
              <br /> {Lang[lang].addAuthor.inpFileBr}
              <TextField
                {...register("file")}
                id="file"
                sx={{ position: "absolute", zIndex: "-10", opacity: "0" }}
                type="file"
              />
            </LAbelFotoText>
          </LabelInputFoto>
        </LoginDivLEft>

        <LoginDivRight variant={theme}>
          <LoginContentDiv>
            <LoginH3 variant={theme}>{Lang[lang].addBook.pageTitle}</LoginH3>

            <LoginForm onSubmit={handleSubmit(onSubmit)}>
              <AddBookTitle
                variant={theme}
                {...register("title")}
                type="text"
                placeholder={Lang[lang].addBook.title}
              />
              <AddBookTitle
                variant={theme}
                {...register("pages")}
                type="number"
                placeholder={Lang[lang].addBook.pages}
              />
              <AddBookTitle
                variant={theme}
                {...register("year")}
                type="number"
                placeholder={Lang[lang].addBook.year}
              />
              <AddBookTitle
                variant={theme}
                {...register("price")}
                type="number"
                placeholder={Lang[lang].addBook.price}
              />

              <AddBookGenre {...register("genre")} onChange={handelChange}>
                <AddBookGenreOptionTmD value={1}>
                  {Lang[lang].addAuthor.temurilar}
                </AddBookGenreOptionTmD>
                <AddBookGenreOptionTmD value={2}>
                  {Lang[lang].addAuthor.jadid}
                </AddBookGenreOptionTmD>
                <AddBookGenreOptionTmD value={3}>
                  {Lang[lang].addAuthor.soved}
                </AddBookGenreOptionTmD>
                <AddBookGenreOptionTmD value={4}>
                  {Lang[lang].addAuthor.mustaqilik}
                </AddBookGenreOptionTmD>
              </AddBookGenre>

              {error ? (
                <AddBookGenre {...register("author")}>
                  {option.map((item) => (
                    <AddBookGenreOptionTmD value={item.id}>
                      {item.first_name}
                      {item.last_name}
                    </AddBookGenreOptionTmD>
                  ))}
                </AddBookGenre>
              ) : (
                <AddBookGenre disabled></AddBookGenre>
              )}

              <AddBookBio
                {...register("bio")}
                placeholder={Lang[lang].addAuthor.bio}
                type="text"
              />

              <LoginFormButton variant={theme}>
                {Lang[lang].addAuthor.formBtn}
              </LoginFormButton>
            </LoginForm>
          </LoginContentDiv>
        </LoginDivRight>
      </DivFlex>
    </>
  );
};
