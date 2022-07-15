/** @jsxImportSource @emotion/react */
import {css} from "@emotion/react";
import { sendButton } from "../../styles/form";
import { backgroundThirdSection, buttonThirdSection } from "../../styles/home";

const ThirdSection = () => {
    return(
        <div css={backgroundThirdSection}>
            <div>
            Getting someone to rent your apartment has
            never been this easy
            </div>
            <button css={buttonThirdSection}>CREATE A ACCOUNT NOW</button>
        </div>
    ) 
}
export default ThirdSection;