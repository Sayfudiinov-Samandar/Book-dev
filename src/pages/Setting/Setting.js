import { Box, Button, Grid } from "@mui/material";
import { Stack } from "@mui/system";
import React from "react";
import { useState } from "react";
import { NavLink, Route, Routes, useNavigate } from "react-router-dom";
import { Change } from "./Change/Change";
import { MyProfile } from "./MyProfile/MyProfile";
import { SettingAssests } from "./settingAssests/SettingAssests";
import { useSelector } from "react-redux";
export const Setting = () => {

  const state = useSelector(state => state);
  const navigate = useNavigate();
  const theme = JSON.parse(state.theme.theme)

  let activeStyle = {
    textDecoration: "underline",
  };

  let activeClassName = "underline";


  return (
    <>
      <Box sx={{bgcolor: theme? "#191919": "#fff", height: "100vh"}}>
      
        <Routes>
          <Route path="/" element={<MyProfile />} />
          <Route path="/myChange" element={<Change />} />
          <Route path="/changeThemes" element={<SettingAssests />} />
        </Routes>
      </Box>
    </>
  );
};
