/** @jsxImportSource @emotion/react */
import {css} from "@emotion/react";
import { sendButton } from "./form";
import { card } from "./select-profile";
import { montW400S36, montW400S48 } from "./typography";
import { contCenterCenter, contColumnCenter, contColumnCenterCenter, contRow, contRowCenter } from "./utils";

export const mainText = css`
    ${contCenterCenter};
    flex-direction: column;
    width: 100%;
    position:absolute; 
    gap:30px;
    top:70px;
`
export const mainSearch = css`
    ${card};
    ${contRow}
`
export const titleSecondSection = css`
    ${montW400S36};
    color: #BF5F82;
`
export const backgroundThirdSection = css`
    ${contColumnCenter};
    justify-content: center;
    background: rgba(244, 143, 177, 0.15);
    height: 312px;
`
export const buttonThirdSection = css`
    ${sendButton};
    width: 264px;
    height: 56px;
`
export const backgroundFourthSection = css`
    ${contColumnCenterCenter};
    height: 486px;
    gap: 25px;
`
export const titleFourthSection = css`
    ${montW400S48};
    color: #BF5F82;
`
export const imageFourthSection = css`
    width: 180px;
    height: 180px;
    border-radius: 100px;
`
export const divMembers = css`
    ${contRow};
    gap:90px;
`