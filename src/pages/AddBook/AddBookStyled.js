import styled from "styled-components";
import LoginLEft from "../../assests/icons/add.svg";

export const AddBookGenre = styled.select.attrs({
})`
  width: 100%;
  padding: 20px 24px;
  margin-bottom: 20px;
  border: 1px solid #b4b4bb;
  background-color: transparent;
  cursor: pointer;
  color: #fff;
  border-radius: 10px;
  option {
    padding: 20px 24px;
    margin-bottom: 20px;
    border: 1px solid #b4b4bb;
    background-color: #191919;
    cursor: pointer;
    color: #fff;
    border-radius: 10px;
  }
`;

export const AddBookGenreOptionTmD = styled.option.attrs({
})`
`;
 

export const AddBookTitle = styled.input.attrs({
})`
  width: 100%;
  padding: 15px 24px;
  margin-bottom: 20px;
  border: 1px solid ${(props)=> (props.varaint? "#b4b4bb" : "#B4B4BB")};
  background-color: transparent;
  cursor: pointer;
  color: ${(props)=> (props.varaint? "#fff" : "#AAAA")};
  border-radius: 10px;
  &::placeholder {
    font-family: "Arial";
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 16px;
    color: #aaaaaa;
  }
`;


export const AddBookBio = styled(AddBookTitle).attrs({
})`
  padding: 20px 24px 50px;
`;

export const LoginFormButton = styled.button.attrs({
  type: "submit",
})`
  width: 100%;
  margin-top: 30px;
  padding: 7px 20px;
  font-family: "Red Hat Display";
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 36px;
  text-align: center;
  color: ${(props) => (props.variant? "#000" :"#FFFFFF")};
  background-color: ${(props) => (props.variant? "#fff" :"#152540")};
  border-radius: 99px;
  cursor: pointer;
`;

export const DivFlex = styled.div`
  display: flex;
  align-items: center;
`;

export const LoginDivLEft = styled.div`
  background-color: ${(props)=> (props.variant? "#1b1b1b" :"rgba(243, 243, 243, 0.93)")};
  width: 50%;
  height: 100vh;
  position: relative;
`;

export const LoginDivRight = styled(LoginDivLEft)`
  position: relative;
  background-color: ${(props)=> (props.variant? "#000" :"#fff")};
`;

export const LoginContentDiv = styled.div`
  position: absolute;
  top: 0px;
  left: 25%;
  width: 50%;
`;

export const LoginH3 = styled.h3`
  font-family: "Arial Black";
  font-style: normal;
  font-weight: 900;
  font-size: 36px;
  line-height: 51px;
  color: ${(props)=> (props.variant? "#fff": "#000")};
  margin-bottom: 10px;
`;

export const LoginForm = styled.form`
  width: 100%;
  margin-top: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const LabelInputFoto = styled.label`
  position: absolute;
  top: 15%;
  left: calc(50% + -200px);
  background-color: ${(props)=> (props.variant? "#4d4d4d" :"#F8F8F8")};
  padding: 300px 120px 210px;
  border: 1px dashed ${(props)=> (props.variant? "rgba(255, 255, 255, 0.3)"  :  " rgba(0, 0, 0, 0.3)")};
  border-radius: 17px;
`;


export const LAbelFotoText = styled.p`
  position: relative;
  font-family: "Poppins";
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 18px;
  display: flex;
  align-items: center;
  text-align: center;
  color: ${(props)=> (props.variant? "#fff" :"#000000")};
  opacity: 0.3;

  &::before {
    content: "";
    position: absolute;
    top: -75px;
    left: calc(50% + -35px);
    width: 70px;
    height: 70px;
    background-image: url(${LoginLEft});
    background-size: contain;
    background-repeat: no-repeat;
  }
`;
