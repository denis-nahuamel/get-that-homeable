import { pinkButton } from "./form";
import { card, cardWthPadding } from "./select-profile";
import { contRow, contRowCenter, contRowSpaceAround } from "./utils";

export const contactCard = `
    ${card};
    width: 210px;
    height: 150px;
    margin: 16px;
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
    margin: 40px; 0;
`
export const buttonFilter = `
    ${pinkButton};
    padding: 8px 16px;
`
export const filterOptions = `
    border-radius: 8px;
    background: white;
    position: relative;
    transform: translateY(0);
    transition: 200ms 100ms opacity, 300ms 100ms transform;
    
    box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.2);

    bottom: -10%;
`
