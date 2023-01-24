import React from "react";
import {
  BoxSetting,
  CheckBox,
  CheckBoxLabel,
  CheckBoxWrapper,
  Option,
  SeetingForm,
  SelectBottomText,
  SeletTopText,
  SettingAssestTitle,
  SettingFormBtn,
  SettingSelct,
} from "./SettingAssestsStyle";

import * as Yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { changeLightTheme } from "../../../redux/theme/themeAction";
import { changeLang } from "../../../redux/language/langAction";
import { useDispatch, useSelector } from "react-redux";
import { Box, Button, Grid, Stack } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { Lang } from "../../../Lang/Lang";

export const SettingAssests = () => {
  const state = useSelector((state) => state);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const lang = state.lang.lang;
  const theme = JSON.parse(state.theme.theme);

  const schema = Yup.object({
    language: Yup.string(),
    theme: Yup.mixed(),
  });

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    mode: "all",
    defaultValues: {
      language: "",
      theme: false,
    },
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    dispatch(changeLightTheme(data.theme));

    dispatch(changeLang(data.language));
    localStorage.setItem("theme", data.theme);
    JSON.stringify(localStorage.setItem("lang", data.language));
  };

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
              bgcolor: "##F3F6F9",
            }}>
            <Button
              onClick={() => {
                navigate("/setting/myChange");
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
              bgcolor: "#DDE6F5",
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
                    bgcolor: "#152540",
                    padding: "6px 10px",
                    borderRadius: "6px",
                    color: "#fff",
                  }}>
                  3
                </Box>
                <Box>{Lang[lang].setting.settings}</Box>
              </Stack>
            </Button>
          </Grid>
        </Grid>
        <BoxSetting>
          <SettingAssestTitle varaint={theme}>
            {Lang[lang].setting.settings}
          </SettingAssestTitle>

          <SeetingForm onSubmit={handleSubmit(onSubmit)}>
            <SeletTopText varaint={theme}>
              {Lang[lang].setting.langugae}
            </SeletTopText>
            <SettingSelct {...register("language")} required>
              <Option value={"en"} selected>
                English
              </Option>
              <Option value={"ru"}>Russion</Option>
              <Option value={"uz"}>Uzb</Option>
            </SettingSelct>
            <SelectBottomText varaint={theme}>
              {Lang[lang].setting.askPhone}
            </SelectBottomText>
            <SeletTopText varaint={theme}>
              {Lang[lang].setting.theme}
            </SeletTopText>
            <CheckBoxWrapper>
              <CheckBox id="checkbox" {...register("theme")} type="checkbox" />
              <CheckBoxLabel htmlFor="checkbox" />
            </CheckBoxWrapper>
            <SettingFormBtn type="submit" varaint={theme}>
              {Lang[lang].setting.saveChange}
            </SettingFormBtn>
          </SeetingForm>
        </BoxSetting>
      </Box>
    </>
  );
};
