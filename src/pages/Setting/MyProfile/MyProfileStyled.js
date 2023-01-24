import styled from "styled-components";
import Camera from "../../../assests/icons/camera.svg";
export const MyPrImgLb = styled.label`
  position: relative;
  display: block;
  top: -35px;
  right: -120px;
  width: 50px;
  height: 50px;
  padding: 13px 9px;
  background-color: ${(props) => (props.varaint ? "#161616" : "#F3F6F9")};
  border-radius: 8px;

  &::after {
    content: "";
    position: absolute;
    top: 11px;
    left: 9px;
    width: 33px;
    height: 24px;
    background-image: url(${Camera});
    background-size: contain;
    background-repeat: no-repeat;
  }
`;

export const MyPrTitle = styled.h4`
  margin: 0;
  margin-bottom: 35px;
  font-family: "Poppins";
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 27px;
  color: ${props=> props.variant? "#dedede": "#212121"};
`;

export const MyPrInp = styled.input`
  width: 100%;
  padding: 12px 20px;
  background-color: ${props=> props.variant? "#f3f6f9": "#F3F6F9"};
  border-radius: 4px;
  border: none;
`;

export const MyPrInpPhone = styled(MyPrInp)`
  width: 50%;
`;

export const MyPrInpText = styled.p`
  margin: 0;
  margin-bottom: 7px;
  font-family: "Poppins";
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 18px;
  color: ${(props) => (props.variant ? "#f3f6f9" : "#212121")};
`;

export const SettingFormBtn = styled.button`
  display: block;
  margin: 0 0 0 auto;
  margin-top: 50px;
  padding: 12px 20px;
  background-color: ${(props) => (props.varaint ? "#fff" : "#152540")};
  border-radius: 4px;
  cursor: pointer;
  font-family: "Poppins";
  font-style: normal;
  font-weight: 600;
  font-size: 13px;
  line-height: 20px;
  color: ${(props) => (props.varaint ? "#152540" : "#fff")};
`;
