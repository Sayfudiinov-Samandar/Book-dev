import { NavLink } from "react-router-dom";
import { GenreDataItem, GenreItemDiv, NameAuthor, NameAuthorFull } from "./BookStyled";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import axios from "axios";

export const BookAuthor = ({ item }) => {
  const state = useSelector((state) => state);
  const[author,setAuthor]=useState([])
  const theme = JSON.parse(state.theme.theme);
    
  useEffect(()=>{
        axios
        .get(`http://localhost:5000/author/authorId/${item.author_id}`, {
          headers: {
            Authorization: localStorage.getItem("token"),
          },
        })
        .then((res) => {
          if (res.status === 201) {
            setAuthor(res.data.first_name+" "+res.data.last_name)
        }
        })
        .catch((err) => console.log(err));
    },[])




  return (
    <GenreDataItem key={item.id} variant={theme}>
      <NavLink
        to={`/singlebook/${item.id}/${item.genre_id}`}
        style={{ textDecoration: "none", width: "100%" }}>
        <img
          style={{ height: "245px", width: "100%" }}
          src={`http://localhost:5000/${item.image}`}
          alt={item.first_name}
        />
        <GenreItemDiv variant={theme}>
          <NameAuthor variant={theme}>{item.title}</NameAuthor>
          <NameAuthorFull variant={theme}>{author}</NameAuthorFull>
        </GenreItemDiv>
      </NavLink>
    </GenreDataItem>
  );
};
