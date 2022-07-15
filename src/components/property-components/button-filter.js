/** @jsxImportSource @emotion/react */
import {css} from "@emotion/react";
import { useState } from "react";
import { pinkButton, sendButton } from "../../styles/form";
import { buttonFilter, filterOptions } from "../../styles/property-data";
import ReturnContent from "./options-content";
const ButtonFilter = ({text, value}) => {
    const [hideOptions, setHideOptions] = useState("none")
    const handleVisibility = (event) => {
        event.preventDefault();
        hideOptions==="none"? setHideOptions("block"): setHideOptions("none")
    }
    return (
        <div css={css`display:flex; flex-direction:column   `}>
            <button css={css`${buttonFilter}`} onClick={handleVisibility}>{text}</button>
            {hideOptions=== "block"?
            <div css={css`${filterOptions}`}><ReturnContent  type={value}/></div>:null}
        </div>
    )
}
export default ButtonFilter