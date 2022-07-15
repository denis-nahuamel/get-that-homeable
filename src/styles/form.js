import { backgrondModal, background, contCenterCenter, contColumn, contColumnStart, contRowCenter, contRowGap } from "./utils"

export const backgroundLogin = `
    ${backgrondModal};
`
export const inputBasic = `
padding: 8px;
gap: 8px;
height: 30px;
background: #FFFFFF;
border-radius: 8px;
`
// background: url("https://static.thenounproject.com/png/101791-200.png") no-repeat scroll 5px 11px;
    
export const inputForm = `
    ${inputBasic};
    height: 25px;
    border: 1px solid #F48FB1;
`
export const input = `
    ${inputBasic};
    padding-left: 30px;
    background: url("https://static.thenounproject.com/png/101791-200.png") no-repeat scroll 5px 11px;
    background-size: 26px;
    border: 1px solid #F48FB1;
    width: 600px;
`
export const anotherInput = `
    ${inputBasic};
    border: 1px solid #F48FB1;
    height: 21px;
    `
export const textArea = `
    ${anotherInput};
    width: 600px;
    height: 76px;

`
// -webkit-appearance: none;
export const checkbox = `
    border: 1px solid #F48FB1;  
    width: 20px;
    height: 20px;
`
export const select = `
    ${inputBasic};
    border: 1px solid #F48FB1;
    height: 40px;
`
export const labelInputCont = `
    ${contColumnStart};
    gap:8px;
    margin:8px;
`
export const labelForm = `
    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    font-size: 10px;
    line-height: 12px;
    letter-spacing: 1.5px;
    text-transform: uppercase;
    color: #373737;
`
export const labelOptions = `
    ${contRowGap};
    margin:8px;
    `
    export const labelCheck = `
    ${contRowCenter};
    margin:8px;

`
export const thumbImages = `
    margin: 8px; 
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    left: 0px;
    top: 824px;

    /* Background */

    background: #F5F5F6;
`
export const thumbImage = `
${contCenterCenter}
width: 200px;
margin: 0.5rem;
/* BackgroundLight */

background: #E1E2E1;
border-radius: 8px;
`
// width: 274px;
export const  pinkButton = `
    height: 40px;

    border: 0px;
    color: white;

    background: #F48FB1;
    border-radius: 16px;
`
export const sendButton = `
    ${pinkButton};
    gap: 8px;
    margin: 16px;
    width: 90%;

`
export const signUpContainer = `
    ${contColumn};
    width: 380px;
    background: white;
    margin: 0 200px;
    box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.2);
    border-radius: 8px;
`
export const toggle = `
    width: 50px;
    height: 36px;
    
`
