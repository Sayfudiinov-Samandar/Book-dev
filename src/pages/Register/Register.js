import React, { useState } from "react";
import { useForm } from "react-hook-form";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import {
  DivFlex,
  Img,
  LoginContentDiv,
  LoginDivLEft,
  LoginDivRight,
  LoginForm,
  LoginFormButton,
  LoginH3,
  LoginInput,
  LoginP,
  LoginToRegister,
} from "./RegisterStyled";
import { useNavigate } from "react-router-dom";
import { Lang } from "../../Lang/Lang";
import axios from "axios";
import { useDispatch } from "react-redux";
import { getToken } from "../../redux/token/tokenAction";
export const Register = () => {
  const navigate = useNavigate();
  const [lang] = useState(localStorage.getItem("lang"));
  const [theme] = useState(localStorage.getItem("theme"));


  
  const schema = Yup.object({
    first_name: Yup.string().required(""),
    last_name: Yup.string().required(""),
    phone: Yup.string().required(""),
    email: Yup.string().email("Invalid format email").required(""),
    password: Yup.string()
      .min(3, "Min 3 length")
      .max(8, "Max 8 length")
      .required("Requred"),
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
      phone: "",
      email: "",
      password: "",
    },
    resolver: yupResolver(schema),
  });
  const dispatch = useDispatch();

  const onSubmit = (data) => {
    axios
      .post("http://localhost:5000/user/register", data)
      .then((res) => {
        if (res.status === 201) {
          dispatch(getToken(res.data.token));
          localStorage.setItem("token", res.data.token);
          navigate("/")
        }

      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      <DivFlex>
        <LoginDivLEft variant={false}>
          <Img />
        </LoginDivLEft>

        <LoginDivRight variant={theme}>
          <LoginContentDiv>
            <LoginH3 variant={theme}>{Lang[lang].login.textTo}</LoginH3>
            <LoginP variant={theme}>
              {Lang[lang].login.text}
              <LoginToRegister
                variant={theme}
                onClick={() => {
                  navigate("/login");
                }}>
                {Lang[lang].login.title}
              </LoginToRegister>
            </LoginP>

            <LoginForm onSubmit={handleSubmit(onSubmit)}>
              <LoginInput
                variant={theme}
                {...register("first_name")}
                placeholder={Lang[lang].addAuthor.first_name}
                type="text"
              />
              <LoginInput
                variant={theme}
                {...register("last_name")}
                placeholder={Lang[lang].addAuthor.last_name}
                type="text"
              />
              <LoginInput
                variant={theme}
                {...register("phone")}
                placeholder={Lang[lang].register.phone}
                type="tel: +998"
              />
              <LoginInput
                variant={theme}
                {...register("email")}
                placeholder={Lang[lang].register.email}
                type="email"
              />
              <LoginInput
                variant={theme}
                {...register("password")}
                placeholder={Lang[lang].register.password}
                type="password"
              />
              <LoginFormButton variant={theme}>
                {Lang[lang].login.formBtn}
              </LoginFormButton>
            </LoginForm>
          </LoginContentDiv>
        </LoginDivRight>
      </DivFlex>
    </>
  );
};
