import { Box, Button, Grid, Stack } from "@mui/material";
import React, { useEffect } from "react";
import {
  MyPrInp,
  MyPrInpPhone,
  MyPrInpText,
  MyPrTitle,
  SettingFormBtn,
} from "./ChangeStyled";
import * as Yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { Lang } from "../../../Lang/Lang";
export const Change = () => {
  const state = useSelector((state) => state);
  const theme = JSON.parse(state.theme.theme);
  const lang = state.lang.lang;
  const navigate = useNavigate();

  const schema = Yup.object({
    email: Yup.string().required(""),
    currentPassword: Yup.string().required(""),
    newPassword: Yup.string().required(""),
  });

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    mode: "all",
    defaultValues: {
      email: "",
      currentPassword: "",
      newPassword: "",
    },
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    const formData = new FormData();

    formData.append("email", data.email);
    formData.append("currentPassword", data.currentPassword);
    formData.append("newPassword", data.newPassword);

    axios
      .put("http://localhost:5000/user/security", formData, {
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      })
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };

  useEffect(() => {}, []);

  return (
    <>
      <Box>
        <Grid container spacing={0}>
          <Grid
            item
            xs={4}
            sx={{
              bgcolor: "transparent",
            }}>
            <Button
              onClick={() => {
                navigate("/setting");
              }}
              sx={{
                display: "block",
                width: "100%",
                padding: "25px",
                borderRadius: "4px 4px 0px 0px",
              }}>
              <Stack direction={"row"} alignItems="center" gap={"9px"}>
                <Box
                  sx={{
                    bgcolor: "#E5EAEE",
                    padding: "6px 10px",
                    borderRadius: "6px",
                    color: "##3699FF",
                  }}>
                  1
                </Box>
                <Box>{Lang[lang].setting.profile}</Box>
              </Stack>
            </Button>
          </Grid>

          <Grid
            item
            xs={4}
            sx={{
              bgcolor: "#DDE6F5",
            }}>
            <Button
              onClick={() => {
                navigate("myChange");
              }}
              sx={{
                display: "block",
                width: "100%",
                padding: "25px",
                borderRadius: "4px 4px 0px 0px",
              }}>
              <Stack direction={"row"} alignItems="center" gap={"9px"}>
                <Box
                  sx={{
                    bgcolor: "#152540",
                    padding: "6px 10px",
                    borderRadius: "6px",
                    color: "#fff",
                  }}>
                  2
                </Box>
                <Box>{Lang[lang].setting.security}</Box>
              </Stack>
            </Button>
          </Grid>

          <Grid
            item
            xs={4}
            sx={{
              bgcolor: "##F3F6F9",
            }}>
            <Button
              onClick={() => {
                navigate("/setting/changeThemes");
              }}
              sx={{
                display: "block",
                width: "100%",
                padding: "25px",
                borderRadius: "4px 4px 0px 0px",
              }}>
              <Stack direction={"row"} alignItems="center" gap={"9px"}>
                <Box
                  sx={{
                    bgcolor: "#E5EAEE",
                    padding: "6px 10px",
                    borderRadius: "6px",
                    color: "##3699FF",
                  }}>
                  3
                </Box>
                <Box>{Lang[lang].setting.settings}</Box>
              </Stack>
            </Button>
          </Grid>
        </Grid>
        <Box
          sx={{
            display: "flex",
            gap: "100px",
            width: "80%",
            mx: "auto",
            marginTop: "80px",
          }}>
          <Box sx={{ width: "100%" }}>
            <MyPrTitle variant={theme}>
              {Lang[lang].setting.changeTitle}
            </MyPrTitle>
            <form onSubmit={handleSubmit(onSubmit)}>
              <Box sx={{ marginBottom: "22px" }}>
                <MyPrInpText variant={theme}>Email</MyPrInpText>

                <MyPrInp
                  placeholder="admin@mail.ru"
                  type={"email"}
                  {...register("email")}
                />
                <MyPrInpText variant={theme}>
                  {Lang[lang].setting.askName}
                </MyPrInpText>
              </Box>
              <Box sx={{ marginBottom: "20px" }}>
                <MyPrInpText variant={theme}>
                  {" "}
                  {Lang[lang].setting.currentPassword}
                </MyPrInpText>
                <MyPrInp
                  placeholder="123456789"
                  type={"password"}
                  {...register("currentPassword")}
                />
                <MyPrInpText variant={theme}>
                {Lang[lang].setting.askPhone}
                </MyPrInpText>
              </Box>
              <Box
                sx={{
                  borderBottom: "1px solid #161D23",
                  paddingBottom: "26px",
                }}>
                <MyPrInpText variant={theme}>{Lang[lang].setting.newPassword}</MyPrInpText>
                <MyPrInpPhone
                  placeholder="123456789"
                  type={"password"}
                  {...register("newPassword")}
                />
                <MyPrInpText variant={theme}>
                {Lang[lang].setting.askPhone}
                </MyPrInpText>
              </Box>

              <SettingFormBtn type="submit" varaint={theme}>
              {Lang[lang].setting.saveChange}
              </SettingFormBtn>
            </form>
          </Box>
        </Box>
      </Box>
    </>
  );
};
