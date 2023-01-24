import { useState } from "react";
import styled from "styled-components";
import LoginLEft from "../../assests/img/RegisterLeft.svg";

export const LoginInput = styled.input.attrs({

})`
  width: 100%;
  padding: 20px 24px;
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


export const LoginFormButton = styled.button`
  width: 100%;
  margin-top: 50px;
  padding: 7px 20px;
  font-family: "Red Hat Display";
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 36px;
  text-align: center;
  color: ${(props) => (props.variant? "#000" :"#FFFFFF")};
  background-color:${(props) => (props.variant? "#fff" :"#152540")};
  border-radius: 99px;
`;

export const DivFlex = styled.div`
  display: flex;
  align-items: center;
`;

export const LoginDivLEft = styled.div`
  background-color: ${(props)=> (props.variant? "#1b1b1b" :"rgba(201, 172, 140, 0.93)")};
  width: 50%;
  height: 100vh;
  position: relative;
`;

export const Img = styled.img.attrs({
  src: `${LoginLEft}`,
})`
  position: absolute;
  top: 100px;
  left: 80px;
  width: 80%;
`;

export const LoginDivRight = styled(LoginDivLEft)`
  position: relative;
  background-color: ${(props)=> (props.variant? "#000" :"#fff")};
`;

export const LoginContentDiv = styled.div`
  position: absolute;
  top: 5%;
  left: 25%;
  width: 50%;
`;

export const LoginH3 = styled.h3`
  font-family: "Arial Black";
  font-style: normal;
  font-weight: 900;
  font-size: 36px;
  line-height: 51px;
  color:${(props)=> (props.variant? "#fff": "#000")};
  margin-bottom: 10px;
`;

export const LoginP = styled.p`
  font-family: "Arial";
  font-style: normal;
  font-weight: 400;
  font-size: 13px;
  line-height: 15px;
  color: ${(props)=> (props.variant? "#fff": "#000")};
`;

export const LoginToRegister = styled.button`
  border: none;
  background-color: transparent;
  padding: 0;
  color: ${(props)=> (props.variant? "#549ff9": "#0000FF")};
  cursor: pointer;
`;

export const LoginForm = styled.form`
  width: 100%;
  margin-top: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
