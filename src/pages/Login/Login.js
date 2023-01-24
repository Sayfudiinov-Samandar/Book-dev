import React, { useState } from "react";
import { useForm } from "react-hook-form";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { DivFlex, Img, LoginContentDiv, LoginDivLEft, LoginDivRight, LoginForm, LoginFormButton, LoginH3, LoginInput, LoginP, LoginToRegister } from "./LoginStyled";
import { useNavigate } from "react-router-dom";
import { Lang } from "../../Lang/Lang";
import axios from "axios";
import { useDispatch } from "react-redux";
import { getToken } from "../../redux/token/tokenAction";

export const Login = () => {
  const navigate = useNavigate();
  const [lang] = useState(localStorage.getItem("lang"));
  const [theme]=useState(localStorage.getItem("theme"))
  const dispatch = useDispatch();

  const schema = Yup.object({
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
      email: "",
      password: "",
    },
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    axios
      .post("http://localhost:5000/user/login", data)
      .then((res) => {
        if (res.status === 201) {
          console.log(res);
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
        <LoginDivLEft>
          <Img />
        </LoginDivLEft>

        <LoginDivRight variant={theme}>
          <LoginContentDiv>
            <LoginH3 variant={theme}>{Lang[lang].login.title}</LoginH3>
            <LoginP variant={theme}>
            {Lang[lang].login.text}
              <LoginToRegister onClick={()=>{
              navigate("/register")
              }} variant={theme}>{Lang[lang].login.textTo}</LoginToRegister>
            </LoginP>

            <LoginForm onSubmit={handleSubmit(onSubmit)}>
              <LoginInput   {...register("email")} placeholder={Lang[lang].register.email} type="email " variant={true} />
              <LoginInput {...register("password")} placeholder={Lang[lang].register.password} type="password" variant={true}/>
              <LoginFormButton variant={theme}>{Lang[lang].login.formBtn}</LoginFormButton>
            </LoginForm>

          </LoginContentDiv>
        </LoginDivRight>

      </DivFlex>

    </>
  );
};
