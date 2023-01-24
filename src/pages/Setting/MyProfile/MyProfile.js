import { Avatar, Box, Button, Grid, IconButton, Stack, TextField, Tooltip } from "@mui/material";
import React, { useEffect, useState } from "react";
import {
  MyPrImgLb,
  MyPrInp,
  MyPrInpPhone,
  MyPrInpText,
  MyPrTitle,
  SettingFormBtn,
} from "./MyProfileStyled";
import * as Yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import {Lang} from "../../../Lang/Lang"
export const MyProfile = () => {
  const state = useSelector(state => state);


  const [me, setMe] = useState([]);
  const lang =state.lang.lang
  const theme = JSON.parse(state.theme.theme)
  const navigate = useNavigate();

  const schema = Yup.object({
    first_name: Yup.string().required(""),
    last_name: Yup.string().required(""),
    phone: Yup.string().required(""),
    file: Yup.mixed().required(""),
  });

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    mode: "all",
    defaultValues: {
      first_name: "",
      phone: "",
      file: "",
    },
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    const formData = new FormData();

    formData.append("first_name", data.first_name);
    formData.append("last_name", data.last_name);
    formData.append("phone", data.phone);
    formData.append("image", data.file[0]);
    axios
      .put("http://localhost:5000/user/account", formData, {
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      })
      .then((res) => {

        if (res.status===201) {
          window.location.reload()
        }
      })
      .catch((err) => console.log(err));
  };

  const GetMe = () => {
    axios
      .get("http://localhost:5000/user/me", {
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      })
      .then((res) => {
        if (res.status === 201) {
          setMe(res.data);

        }
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    GetMe();
  }, []);

  return (
    <>
      <Box>

      <Grid container spacing={0}>
          <Grid
            item
            xs={4}
            sx={{
              bgcolor: "#DDE6F5",
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
                    bgcolor: "#152540",
                    padding: "6px 10px",
                    borderRadius: "6px",
                    color: "#fff",
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
              bgcolor: "##F3F6F9",
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
                    bgcolor: "#E5EAEE",
                    padding: "6px 10px",
                    borderRadius: "6px",
                    color: "##3699FF",
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
          <Box>
            {me.image ? (
              <img
                src={`http://localhost:5000/${me.image}`}
                style={{ borderRadius: "50%" }}
                width="175"
                height="175"
                alt={me.firs_name}
              />
            ) : (
              <Tooltip>
                <IconButton sx={{ p: 0 }}>
                  <Avatar
                    alt="Remy Sharp"
                    src="/static/images/avatar/2.jpg"
                    sx={{ width: "175px", height: "175px" }}
                  />
                </IconButton>
              </Tooltip>
            )}
            <MyPrImgLb variant={theme} htmlFor="MyPrId">
              <TextField
                {...register("file")}
                id="MyPrId"
                style={{ border: "none", opacity: "0" }}
                type={"file"}
              />
            </MyPrImgLb>
          </Box>

          <Box sx={{ width: "100%" }}>
            <MyPrTitle variant={theme}>{Lang[lang].setting.myProfile}</MyPrTitle>
            <form onSubmit={handleSubmit(onSubmit)}>
              <Box sx={{ marginBottom: "22px" }}>
                <MyPrInpText variant={theme}>{Lang[lang].setting.firstName}</MyPrInpText>

                <MyPrInp
                  variant={theme}
                  placeholder={me ? me.first_name : "John"}
                  type={"text"}
                  {...register("first_name")}
                />
                <MyPrInpText variant={theme}>{Lang[lang].setting.askName}</MyPrInpText>
              </Box>
              <Box sx={{ marginBottom: "20px" }}>
                <MyPrInpText>{Lang[lang].setting.lastName}</MyPrInpText>
                <MyPrInp
                  placeholder={me ? me.last_name : "Wick"}
                  type={"text"}
                  {...register("last_name")}
                />
                <MyPrInpText variant={theme}>{Lang[lang].setting.askLastName}</MyPrInpText>
              </Box>
              <Box
                sx={{
                  borderBottom: "1px solid #161D23",
                  paddingBottom: "26px",
                }}>
                <MyPrInpText variant={theme}>{Lang[lang].setting.phone}</MyPrInpText>
                <MyPrInpPhone
                  placeholder={me ? `+998${me.phone}` : "+61412345678"}
                  type={"phone"}
                  {...register("phone")}
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
