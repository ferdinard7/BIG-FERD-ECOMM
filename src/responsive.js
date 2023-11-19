import { css } from "styled-components";

function mobile(props) {
    return css`
        @media only screen and (max-width: 440px) {
         ${props}
        }
    `;
}


export default mobile;