import styled from "styled-components";
import SerchIcon from "../../../assests/icons/search.svg";
import ItemBgIng from "../../../assests/icons/gereItemBgImg.svg";
import ItemBgIngDark from "../../../assests/icons/Frame.png";

export const TextHero = styled.h3`
  margin: 20px 0 0 100px;
  position: absolute;
  top: 0%;
  font-family: "Roboto";
  font-style: normal;
  font-weight: 400;
  font-size: 61px;
  line-height: 67px;
  color: #c9ac8c;
`;

export const HeroFormText = styled.h3`
  margin: 0;
  font-family: "Roboto";
  font-style: normal;
  font-weight: 400;
  font-size: 32px;
  line-height: 48px;
  color: ${(props) => (props.variant ? "#C9AC8C" : "#D1B89D")};
  text-align: center;
`;

export const HeroFormBox = styled.div`
  position: relative;
  top: -70px;
  left: 12%;
  width: 75%;
  padding: 30px 80px 30px 80px;
  background-color: ${(props) => (props.variant ? "#191919" : "#fff")};
  box-shadow: 0px 4px 77px rgba(0, 0, 0, 0.25);
  border-radius: 15px;
`;

export const HeroSearchForm = styled.form`
  display: flex;
  align-items: center;
`;
export const HeroFormBtn = styled.button`
  background-color: ${(props) => (props.variant ? "#c9ac8c" : "#EFDAC3")};
  border-radius: 15px;
  margin-left: 15px;
  padding: 12px 40px 12px 72px;
  position: relative;
  border: none;
  &::before {
    content: "";
    position: absolute;
    top: 8px;
    left: 35px;
    width: 25px;
    height: 25px;
    background-image: url(${SerchIcon});
    background-size: contain;
    background-repeat: no-repeat;
  }
`;

export const HeroSearchInput = styled.input`
  width: 100%;
  padding: 12px 25px;
  background-color: ${(props) => (props.variant ? "#404040" : "#F5F5F5")};
  border-radius: 15px;
  color: ${(props) =>
      props.variant ? "rgba(255, 255, 255, 0.3)" : "rgba(13, 13, 13, 0.3)"};
  border: none;
  &::placeholder {
    font-family: "Poppins";
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    color: ${(props) =>
      props.variant ? "rgba(255, 255, 255, 0.3)" : "rgba(13, 13, 13, 0.3)"};
  }
`;

export const GenreList = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 60px;
  list-style: none;
  margin-bottom: 50px;
`;
export const GenreItem = styled.li``;

export const GenreLink = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  font-family: "Poppins";
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 27px;
  color: ${(props) => (props.variant ? "#C9AC8C" : "rgba(13, 13, 13, 0.3)")};  
`;


export const GenreDataItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${(props) => (props.variant ? "#1e1e1e" : "#F5F5F5")};
  border-radius: 22px;
  width: 295px;
`;

export const GenreItemDiv = styled.div`
  width: 100%;
  padding: 12px 90px 60px 16px;
  background-image: ${(props) =>
    props.variant
      ? `url(${ItemBgIngDark}), url(${ItemBgIngDark})`
      : `url(${ItemBgIng}), url(${ItemBgIng})`};
  background-size: 150px 150px;
  background-repeat: no-repeat;
  background-position: calc(50% + 125px) calc(50% + -25px),
    calc(50% + -165px) calc(50% + 75px);
`;

export const NameAuthor = styled.p`
  margin: 0;
  font-family: "Poppins";
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 36px;
  color: ${(props) => (props.variant ? "#c9ac8c" : "#000000")};
  margin-bottom: 6px;
`;

export const DateBrDe = styled(NameAuthor)`
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
`;
