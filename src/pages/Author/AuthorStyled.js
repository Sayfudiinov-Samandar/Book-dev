import styled from "styled-components";

export const AuthorInfoBox = styled.div`
  width: 60%;
`;

export const AuthorTitle = styled.h3`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 400;
  font-size: 48px;
  line-height: 72px;
  color: #c9ac8c;
  margin-bottom: 8px;
`;

export const AuthorInfo = styled.p`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: ${(props)=>(props.variant? "rgba(255, 255, 255, 0.8)" : "rgba(13, 13, 13, 0.8)")};
`;
export const AuthorBirdth = styled.p`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 18px;
  color: ${(props)=>(props.variant? "rgba(255, 255, 255, 0.6)" : "rgba(13, 13, 13, 0.6)")};
  margin-top: 45px;
`;

export const AuthorDb = styled.p`
  margin: 0;
  font-family: "Poppins";
  font-style: normal;
  font-weight: 400;
  font-size: 39px;
  line-height: 144.4%;
  color: #c9ac8c;
`;

export const LiBooksAuthor = styled.ul`
  display: flex;
  align-items: center;
  gap: 20px;
  padding: 0;
  list-style: none;
  overflow-x: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
`;

export const ListBookName = styled.p`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 27px;
  color: #c9ac8c;
`;

export const AsarlarText = styled.strong`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 400;
  font-size: 31px;
  line-height: 46px;
  text-align: center;
  color: #c9ac8c;
`;

export const AsarlarBarchasi = styled(AsarlarText)`
  font-size: 16px;
  line-height: 24px;
`;
