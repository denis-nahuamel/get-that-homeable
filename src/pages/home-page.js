/** @jsxImportSource @emotion/react */
import {css} from "@emotion/react";
import background from "../images/Group.png"
import { mainText } from "../styles/home";
const HomePage = () => {
    return (
    <>
    <div css={css`position: relative`}>
        <img css={css`height:600px;`} src={background} alt="home" />
        <div css={css`${mainText}`}>
            <p >Meet your new Home</p>
        </div>
    </div>
    </>
    )
}
export default HomePage;