import { Box } from "@mui/material";
import { Route, Routes } from "react-router-dom";
import GlobalStyled from "./assests/style/GlobalStyle";
import { AddAthor } from "./pages/AddAuthor/AddAuthor";
import { AddBook } from "./pages/AddBook/AddBook";
import { Home } from "./pages/Home/Home";
import { Login } from "./pages/Login/Login";
import { Register } from "./pages/Register/Register";
import { Setting } from "./pages/Setting/Setting";
import "../src/assests/style/Carusel.css";
import { Book } from "./pages/Book/Book";
import { Author } from "./pages/Author/Author";
import { SingleBook } from "./pages/singleBook/SingleBook";
import { useSelector } from "react-redux";
function App() {
  const state = useSelector(state => state);

  const token=state.token.token

  return (
    <>
      <GlobalStyled />
      <Box sx={{ height: "100%" }}>
        <Routes>
          <Route path="/" element={token? <Home/> : <Login/>} />
          <Route path="/addBook" element={ token? <AddBook /> : <Login/>} />
          <Route path="/addAuthor" element={token?  <AddAthor />: <Login/>} />
          <Route path="/login" element={<Login />} />
          <Route path="/book" element={token ? <Book /> : <Login/>} />
          <Route path="/author/:id/" element={token?  <Author /> : <Login/>} />
          <Route path="/singlebook/:id/:ganreId" element={token?  <SingleBook /> : <Login/>} />
          <Route path="/register" element={<Register />} />
          <Route path="/setting/*" element={token?  <Setting />: <Login/>} />
        </Routes>
      </Box>
    </>
  );
}

export default App;
