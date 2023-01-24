import styled from "styled-components";

export const SettingAssestTitle = styled.h3`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 37px;
  color: ${(props)=> (props.varaint? "#fff" : "#212121")};
`;

export const SeletTopText = styled.p`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 400;
  font-size: 13px;
  line-height: 20px;
  color: ${(props)=> (props.varaint? "#fff" : "#b5b5c3")};
  margin-bottom: 7px;
`;
export const SelectBottomText = styled.p`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 18px;
  color: ${(props)=> (props.varaint? "#fff" : "#b5b5c3")};
  opacity: 0.8;
  margin-top: 3px;
`;

export const BoxSetting = styled.div`
  width: 70%;
  margin: 0 auto;
  padding-top: 150px;
`;

export const SeetingForm = styled.form`
  width: 100%;

`;

export const SettingSelct = styled.select`
  width: 100%;
  background-color: #f3f6f9;
  padding: 15px 20px;
  border-radius: 4px;
`;
export const Option = styled.option``;

export const CheckBoxWrapper = styled.div`
  padding-bottom: 60px;
  border-bottom: 3px solid #ecf0f3;
  position: relative;
`;
export const CheckBoxLabel = styled.label`
  position: absolute;
  top: 0;
  left: 0;
  width: 70px;
  height: 26px;
  cursor: pointer;
  background: #f3f6f9;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 34px;
  &::after {
    content: "";
    display: block;
    border-radius: 50%;
    width: 18px;
    height: 18px;
    margin: 3px;
    background: #3699ff;
    box-shadow: 1px 3px 3px 1px rgba(0, 0, 0, 0.2);
    transition: 0.2s;
  }
`;
export const CheckBox = styled.input`
  opacity: 0;
  z-index: 1;
  border-radius: 15px;
  width: 70px;
  height: 26px;
  &:checked + ${CheckBoxLabel} {
    background: #f3f6f9;
    &::after {
      content: "";
      display: block;
      border-radius: 50%;
      width: 18px;
      height: 18px;
      margin-left: 48px;
      transition: 0.2s;
    }
  }
`;
export const SettingFormBtn = styled.button`
  display: block;
  margin: 0 0 0 auto ;
  margin-top: 50px;
  padding: 12px 20px;
  background-color: ${(props)=> (props.varaint? "#fff" : "#152540")};
  border-radius: 4px;
  cursor: pointer;
  font-family: "Poppins";
  font-style: normal;
  font-weight: 600;
  font-size: 13px;
  line-height: 20px;
  color: ${(props)=> (props.varaint? "#152540" : "#fff")};
`;
