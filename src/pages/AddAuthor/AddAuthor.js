import React from "react";
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
} from "./AddAuthorStyled.js";
import { TextField } from "@mui/material";
import { Lang } from "../../Lang/Lang";
import axios from "axios";
import { useSelector } from "react-redux";
export const AddAthor = () => {

  const state = useSelector(state => state);
  
  const lang = state.lang.lang
  const theme =JSON.parse(state.theme.theme)
  const token = state.token.token



  const schema = Yup.object({
    first_name: Yup.string().required(""),
    last_name: Yup.string().required(""),
    date_of_birth: Yup.string().required(""),
    date_of_death: Yup.string().required(""),
    country: Yup.string().required(""),
    genre_id: Yup.string().required(""),
    bio: Yup.string().required(""),
    image: Yup.mixed().required(""),
  });

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    mode: "all",
    defaultValues: {
      first_name: "",
      last_name: "",
      date_of_birth: "",
      date_of_death: "",
      country: "",
      genre_id: "",
      bio: "",
      image: "",
    },
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    console.log(data);

    const formData = new FormData();
    formData.append("image", data.image[0]);
    formData.append("first_name", data.first_name);
    formData.append("last_name", data.last_name);
    formData.append("date_of_birth", data.date_of_birth);
    formData.append("date_of_death", data.date_of_death);
    formData.append("country", data.country);
    formData.append("bio", data.bio);
    formData.append("genre_id", data.genre_id);

    axios
      .post("http://localhost:5000/author", formData, {
        headers: {
          Authorization: token,
        },
      })
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };

  return (
    <>
      <DivFlex>
        <LoginDivLEft variant={theme}>
          <LabelInputFoto variant={theme}>
            <LAbelFotoText for="file" variant={theme}>
              {Lang[lang].addAuthor.inpFile}
              <br />
              {Lang[lang].addAuthor.inpFileBr}
              <TextField
                id="file"
                {...register("image")}
                sx={{ position: "absolute", zIndex: "-10", opacity: "0" }}
                type="file"
              />
            </LAbelFotoText>
          </LabelInputFoto>
        </LoginDivLEft>

        <LoginDivRight variant={theme}>
          <LoginContentDiv>
            <LoginH3 variant={theme}>{Lang[lang].addAuthor.title}</LoginH3>

            <LoginForm onSubmit={handleSubmit(onSubmit)}>
              <AddBookTitle
                variant={theme}
                {...register("first_name")}
                placeholder={Lang[lang].addAuthor.first_name}
                type="text"
              />
              <AddBookTitle
                variant={theme}
                {...register("last_name")}
                placeholder={Lang[lang].addAuthor.last_name}
                type="text"
              />
              <AddBookTitle
                variant={theme}
                {...register("date_of_birth")}
                placeholder={Lang[lang].addAuthor.birth}
                type="number"
              />
              <AddBookTitle
                variant={theme}
                {...register("date_of_death")}
                placeholder={Lang[lang].addAuthor.death}
                type="number"
              />
              <AddBookTitle
                variant={theme}
                {...register("country")}
                placeholder={Lang[lang].addAuthor.country}
                type="text"
              />

              <AddBookGenre variant={theme} {...register("genre_id")}>
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

              <AddBookBio
                {...register("bio")}
                placeholder={Lang[lang].addAuthor.bio}
                type="text"
              />

              <LoginFormButton variant={theme}>
                {" "}
                {Lang[lang].addAuthor.formBtn}
              </LoginFormButton>
            </LoginForm>
          </LoginContentDiv>
        </LoginDivRight>
      </DivFlex>
    </>
  );
};
