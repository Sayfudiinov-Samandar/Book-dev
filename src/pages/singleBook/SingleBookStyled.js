import styled from "styled-components";
import MarBottom from "../../assests/icons/mark-bottom.svg";
import MarBottomLight from "../../assests/icons/light-marBootom.svg";

export const InfoBook = styled.p`
  margin: 0;
  margin-bottom: 12px;
  font-family: "Poppins";
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 30px;
  color: ${(props) =>
    props.variant ? "rgba(255, 255, 255, 0.6)" : " rgba(13, 13, 13, 0.6)"};
`;
export const InfoBookApi = styled.p`
  margin: 0;
  font-family: "Poppins";
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 30px;
  color: ${(props) => (props.variant ? "#fff" : "#0d0d0d")};
`;

export const ToliqInfoText = styled.p`
  position: relative;
  margin: 0;
  font-family: "Poppins";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: ${(props) => (props.variant ? "#C9AC8C" : "#d1b89d")};

  &::after {
    content: "";
    position: absolute;
    top: 7px;
    right: -17px;
    width: 7px;
    height: 12px;
    background-image: ${props=>props.variant? `url(${MarBottom})`: `url(${MarBottomLight})`};
    background-size: contain;
    background-repeat: no-repeat;
  }
`;

export const JustLine = styled.span`
  width: 80%;
  height: 1px;
  background-color: rgba(201, 172, 140, 0.6);
`;

export const BookDiscreption = styled.p`
  /* font-family: "Poppins"; */
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 150%;
  color: ${(props)=>(props.variant? "rgba(255, 255, 255, 0.8)": "rgba(13, 13, 13, 0.8)")};
`;
