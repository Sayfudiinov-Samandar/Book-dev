import {createGlobalStyle} from "styled-components"
import poppinsV20LatinRegularWoff2 from "../fonts/poppins-v20-latin-regular.woff2" 
import poppinsV20LatinRegularWoff from'../fonts/poppins-v20-latin-regular.woff'
import poppins500w2 from'../fonts/poppins-v20-latin-500.woff2'
import poppins500w from '../fonts/poppins-v20-latin-500.woff'
import poppins600w2 from '../fonts/poppins-v20-latin-600.woff2'
import poppins600w from '../fonts/poppins-v20-latin-600.woff'
import poppins700w2 from '../fonts/poppins-v20-latin-700.woff2'
import poppins700w from '../fonts/poppins-v20-latin-700.woff'






const GlobalStyled=createGlobalStyle`
/* poppins-regular - latin */
@font-face {
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 400;
  src: local(''),
       url(${poppinsV20LatinRegularWoff2}) format('woff2'), /* Chrome 26+, Opera 23+, Firefox 39+ */
       url(${poppinsV20LatinRegularWoff}) format('woff'); /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */
}
/* poppins-500 - latin */
@font-face {
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 500;
  src: local(''),
       url(${poppins500w2}) format('woff2'), /* Chrome 26+, Opera 23+, Firefox 39+ */
       url(${poppins500w}) format('woff'); /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */
}
/* poppins-600 - latin */
@font-face {
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 600;
  src: local(''),
       url(${poppins600w2}) format('woff2'), /* Chrome 26+, Opera 23+, Firefox 39+ */
       url(${poppins600w}) format('woff'); /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */
}
/* poppins-700 - latin */
@font-face {
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 700;
  src: local(''),
       url(${poppins700w2}) format('woff2'), /* Chrome 26+, Opera 23+, Firefox 39+ */
       url(${poppins700w}) format('woff'); /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */
}



    /* GENERAL */

*{
  box-sizing: border-box;
}

*::before,
*::after{
  box-sizing: inherit;
}

html{
  height: 100%;
  box-sizing: border-box;
}

img{
  display: block;
  height: auto;
}

body{
  display: flex;
  flex-direction: column;
  height: 100%;
  margin: 0;
  padding: 0;
  font-family: "Poppins", "Arial", sans-serif;
  /* font-size: 16px; */
  /* font-weight: 400; */
  /* line-height: var(--main-line-height); */
}

/* STICKY-FOOTER */
.site-main{
  flex-grow: 1;
}

.active{
  opacity: 1 !important;
}







`

export default GlobalStyled;