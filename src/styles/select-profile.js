import { contColumn, contRow } from "./utils"

export const backgroundSelect = `
    background: linear-gradient(to bottom, rgba(244, 143, 177, 0.15) 50%, white 50%);
    
    width: 100%;
    height: 100%;
    top: 0;
    left: 0
`
export const cardWthPadding = `
cursor: pointer;
background: #FFFFFF;
box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.2);
border-radius: 8px;
`
export const card = `
    ${cardWthPadding}
    padding: 16px;
`
export const mainSelectContainer = `
    ${backgroundSelect}; 
    ${contColumn};
`
export const cardsContainer = `
${contRow};
    justify-content: space-evenly;
`