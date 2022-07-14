/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import image from "../images/Vector.png";
import logo from "../images/Logo.png";
import addpeople from "../images/AddPeople.png";
import { contRowAround } from "../styles/utils";
import { join, Logo, Nav, Input, pluspeople } from "../styles/logo";
const Header = () => {
    return (
        <nav css={css`${Nav}`}>
            <img css={css`${Logo}`}
            src={logo} alt=''/>  
            <div css={css`display:flex;`}>
                <div css={css`${contRowAround};display: flex; align-items: center;`}>
    <img src={image} alt="take"/>
    <input css={css`${Input}`} placeholder ="FIND A HOME"/>
    </div>
<div css={css`${contRowAround};display: flex;`}>
<button css={css`${join}`}><img src={addpeople} alt=""/>JOIN</button>
<button css={css`${pluspeople}`}><img src={addpeople} alt=""/>LOGIN</button>
</div>
</div>           
        </nav>
    )
}
export default Header;