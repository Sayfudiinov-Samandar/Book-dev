import styled from "styled-components";

export const HomeLogoTitle = styled.p`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 400;
  font-size: 25px;
  line-height: 38px;
  color: ${(props)=> (props.variant? "#c9ac8c" : "#D1B89D")};
`;
