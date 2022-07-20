/** @jsxImportSource @emotion/react */
import { css, ThemeProvider } from "@emotion/react";
import { pinkButton } from "./form";
import { card, cardWthPadding } from "./select-profile";
import { contRow, contRowCenter, contRowSpaceAround, line } from "./utils";

export const contactCard = `
    ${card};
    width: 30%;
    height: 20%;
    margin: 0.5rem;
    padding: 0.5rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`
export const propertyCard = `
    ${cardWthPadding};
    width: 300px;
`
export const imageCard = `
    width: 300px;
`
export const iconsGap = `
${contRowCenter};
gap: 6px;
`
export const listProperties = `
    ${contRow};
    flex-wrap: wrap;
    margin: 10px;
    gap: 70px;
`
export const filterButtons = `
    ${contRowSpaceAround};
    align-items:center;
    margin: 40px; 0;
`
export const buttonFilter = `
    ${pinkButton};
    padding: 8px 16px;
`
export const filterOptions = `
    border-radius: 8px;
    background: white;
    padding: 8px;
    position: relative;
    transform: translateY(0);
    transition: 200ms 100ms opacity, 300ms 100ms transform;
    
    box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.2);

    bottom: -10%;
`
export const savedPropertyCard = css`
    ${contRowSpaceAround};
    padding: 10px;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
    color: white;
    background-color: #BF5F82;
`
/**landlord properties page */
export const contActiveClosed = css`
    ${contRow};
    margin: 32px;
    color: #373737;
    gap: 20px;
    font-family: 'Inter';
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 24px;
`
export const lineActiveClosed = css`
    ${line};
    margin-top: 6px;

`
