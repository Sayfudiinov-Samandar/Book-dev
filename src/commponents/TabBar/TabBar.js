import {
  AppBar,
  Avatar,
  Container,
  IconButton,
  Menu,
  MenuItem,
  Toolbar,
  Tooltip,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { GenreItem } from "../../pages/Home/carusel/CaruselStyled";
import { HomeLogoTitle } from "../../pages/Home/HomeStyled";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { getToken } from "../../redux/token/tokenAction";
import GlobalStyled from "../../assests/style/GlobalStyle";
import { Lang } from "../../Lang/Lang";
import { useNavigate } from "react-router-dom";

export const TabBar = () => {
  const navigator=useNavigate()
  const dispatch = useDispatch();
  const state = useSelector((state) => state);
  const [me, setMe] = useState({});

  let theme = JSON.parse(state.theme.theme);
  let lang=state.lang.lang

  const [anchorElUser, setAnchorElUser] = useState(null);
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };


  useEffect(() => {
    axios
      .get(`http://localhost:5000/user/me`, {
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
  }, []);

  return (
    <AppBar
      position="static"
      sx={{ bgcolor: theme ? "#191919" : "#FFFFFF", boxShadow: "none" }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <HomeLogoTitle variant={theme}>Badiiyat</HomeLogoTitle>

          <Box sx={{ flexGrow: 1 }}></Box>

          <Box sx={{ flexGrow: 0, display: "flex", gap: "60px" }}>
            <ul
              style={{
                display: "flex",
                alignItems: "center",
                gap: "42px",
                listStyle: "none",
              }}>
              <GenreItem>
                <NavLink
                  to={"/"}
                  style={{
                    fontFamily: "Poppins",
                    fontStyle: "normal",
                    fontWeight: "400",
                    fontSize: "16px",
                    lineHeight: "144.4%",
                    color: theme ? "#FFFFFF" : "#0D0D0D",
                    textDecoration: "none",
                    opacity: "0.4",
                  }}
                  className={GlobalStyled}
                  >
                    
                  {Lang[lang].headers.boshSahilfa}
                </NavLink>
              </GenreItem>
              <GenreItem>
                <NavLink
                  to={"/book"}
                  style={{
                    fontFamily: "Poppins",
                    fontStyle: "normal",
                    fontWeight: "400",
                    fontSize: "16px",
                    lineHeight: "144.4%",
                    opacity: "0.4",

                    color: theme ? "#FFFFFF" : "#0D0D0D",
                    textDecoration: "none",
                  }}>
                  {Lang[lang].headers.books}
                </NavLink>
              </GenreItem>
            </ul>

            {me.image ? (
              <Tooltip title="Open settings">
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  <img
                    src={`http://localhost:5000/${me.image}`}
                    style={{ borderRadius: "50%" }}
                    width="50"
                    height="50"
                    alt={me.firs_name}
                  />
                </IconButton>
              </Tooltip>
            ) : (
              <Tooltip title="Open settings">
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
                </IconButton>
              </Tooltip>
            )}
            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}>
              <MenuItem
                onClick={handleCloseUserMenu}
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "start",
                  gap: "8px",
                }}>
                <Typography
                  textAlign="center"
                  onClick={() => {
                    navigator("/setting");
                  }}>
               {Lang[lang].headers.profile}
                </Typography>

                <Typography
                  textAlign="center"
                  onClick={() => {
                    navigator("/addAuthor");
                  }}>
                  {Lang[lang].headers.addAuthor}
                </Typography>

                <Typography
                  textAlign="center"
                  onClick={() => {
                    navigator("/addBook");
                  }}>
                   {Lang[lang].headers.addBook}
                </Typography>

                <Typography
                  textAlign="center"
                  onClick={() => {
                    dispatch(getToken(""));
                    localStorage.removeItem("token", "");
                    navigator("/login");
                  }}>
                  {Lang[lang].headers.logOut}
                </Typography>
              </MenuItem>
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
