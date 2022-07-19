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
            <div css={css`${montW300S64};line-height: 88px;`}>Meet your new Home</div>
            <div css={css`${montW400S24};line-height: 32px;`}>The easiest way to find where you belong</div>
            <div css={mainSearch}>
                <div css={css`padding-right: 8px;padding-left: 8px;text-align: left;`}>
                    <div css={css`padding-right: 8px;`}>I'M LOOKING FOR</div>
                    <select css={css`background: white;border: none;font-family: 'Inter';font-style: normal;font-size: 16px;`}>
                        <option value="apartment">An Apartment</option>
                        <option value="house">A House</option>
                    </select>
                </div>
                <div css={css`padding-right: 8px;padding-left: 8px;text-align: left;`}>
                    <div css={css`padding-right: 8px;`}>I WANT TO</div>
                    <select css={css`background: white;border: none;font-family: 'Inter';font-style: normal;font-size: 16px;`}>
                        <option value="rent">Rent</option>
                        <option value="buy">Buy</option>
                    </select>
                </div>
                <div>
                    <div css={css`text-align: left;`}>WHERE</div>
                    <input css={css`text-align: left;font-family: 'Inter';font-style: normal;font-size: 16px;`} placeholder="Favorite district"/>
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