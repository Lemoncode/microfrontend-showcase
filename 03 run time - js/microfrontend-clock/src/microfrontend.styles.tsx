import { injectGlobal } from "emotion";
import MontserratFont from "./assets/font/montserrat-regular.ttf";

injectGlobal`
  @font-face {
    font-family: "Montserrat";
    font-style: normal;
    font-display: swap;
    font-weight: 400;
    src:
      local('Montserrat'),
      local('Montserrat-Regular'),
      url(${MontserratFont}) format('truetype');
  }
`;
