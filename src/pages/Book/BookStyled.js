import styled from "styled-components";

export const GenreItemDiv = styled.div`
  background-color: transparent;
`;
export const GenreDataItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: transparent;
  border-radius: 22px;
  width: 195px;
`;
export const NameAuthor = styled.p`
  margin: 0;
  margin-top: 12px;
  font-family: "Poppins";
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 27px;
  color: #c9ac8c;
`;
export const NameAuthorFull = styled(NameAuthor)`
margin-top: 6px;
  font-size: 16px;
  line-height: 24px;
  color: ${props=>props.variant? "rgba(255, 255, 255, 0.6)": "rgba(0, 0, 0, 0.6)"};
`;

export const BookAuthorId = ({ children }) => {
  return children;
};
