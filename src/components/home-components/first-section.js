/** @jsxImportSource @emotion/react */
import {css} from "@emotion/react";
import { sendButton } from "../../styles/form";
import { mainSearch, mainText } from "../../styles/home";
import { montW300S64, montW400S24 } from "../../styles/typography";
import background from "../../images/Group.png"
import { Link } from "react-router-dom";

const FirstSection = () => {
    const styledButton = css`
        text-decoration: none;
        color: inherit;
        font-size: 1.2rem;
        `;
    const  PinkButton = css`
        flex-wrap: wrap;
        border: none;
        color: white;
        background: #F48FB1;
        border-radius: 16px;
        // margin: 16px;
        // width: 90%;
        cursor: pointer;
        padding: 2rem;
        display: flex;
        align-content: center;
        justify-content: center;
    `
    return (
        <div css={css`position: relative`}>
            <img css={css`height:600px;`} src={background} alt="home" />
            <div css={mainText}>
            <div css={css`${montW300S64}`}>Meet your new Home</div>
            <div css={css`${montW400S24}`}>The easiest way to find where you belong</div>
            <div css={mainSearch}>
                <button css={PinkButton}><Link css={styledButton} to="/list-properties">Search Properties</Link></button>

                {/* <div>
                    <div>I'M LOOKING FOR</div>
                    <select>
                        <option value="apartment">An Apartment</option>
                        <option value="house">A House</option>
                    </select>
                </div>
                <div>
                    <div>I WANT TO</div>
                    <select>
                        <option value="rent">Rent</option>
                        <option value="buy">Buy</option>
                    </select>
                </div>
                <div>
                    <div>WHERE</div>
                    <input placeholder="Favorite district"/>
                </div> */}
           
            </div>
            
        </div>

    </div>
    )
}
export default FirstSection;