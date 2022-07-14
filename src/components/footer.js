/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { rubyk, reactT} from "../styles/logo";
import ruby from "../images/Ruby.png";
import react from "../images/React.png";
import { contRowAroundFullWidth } from "../styles/utils";
const Footer = () => {
    return (
        <div css={css`${contRowAroundFullWidth}; gap:8px; position:fixed;bottom:0`}>
            <div>© 2021 - Find That Home </div>
            <div>
                <div>Source Code</div>
                <div css={css`display:flex; gap: 10px;`} >
                <div><img css={css`${rubyk}`} src={ruby} alt=""/>Ruby on Rails REST API</div>
                <div><img css={css`${reactT}`} src={react} alt=""/>React Responsive SPA</div>
                </div>
            </div>
            <div>Codeable - Cohort 6 Final Project</div>
        </div>
    )
}
export default Footer;