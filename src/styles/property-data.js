import { card, cardWthPadding } from "./select-profile";
import { contRow, contRowCenter } from "./utils";

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
