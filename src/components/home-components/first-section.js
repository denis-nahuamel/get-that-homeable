/** @jsxImportSource @emotion/react */
import {css} from "@emotion/react";
import { sendButton } from "../../styles/form";
import { mainSearch, mainText } from "../../styles/home";
import { montW300S64, montW400S24 } from "../../styles/typography";
import background from "../../images/Group.png"
const FirstSection = () => {
    return (
        <div css={css`position: relative`}>
            <img css={css`height:600px;`} src={background} alt="home" />
            <div css={mainText}>
            <div css={css`${montW300S64}`}>Meet your new Home</div>
            <div css={css`${montW400S24}`}>The easiest way to find where you belong</div>
            <div css={mainSearch}>
                <div>
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
                </div>
                <div>
                    <button css={css`${sendButton}`} >SEARCH</button>
                </div>
            </div>
            
        </div>

    </div>
    )
}
export default FirstSection;