import { createGlobalStyle } from "styled-components";

import Monoton from "./Monoton/Monoton-Regular.ttf";
import Roboto1 from "./Roboto_Mono/RobotoMono-Italic-VariableFont_wght.ttf";
import Roboto2 from "./Roboto_Mono/RobotoMono-VariableFont_wght.ttf";

export default createGlobalStyle`
    @font-face {
        font-family: 'Font Name';
        src: local('Font Name'), local('FontName'),
        url(${NameOfYourFontWoff2}) format('woff2'),
        url(${NameOfYourFontWoff}) format('woff');
        url(${NameOfYourFontWoff}) format('woff');
        font-weight: 300;
        font-style: normal;
    }
`;