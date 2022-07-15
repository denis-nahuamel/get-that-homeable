/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { checkbox, labelCheck, labelForm } from "../styles/form";
import {InputComponent} from "./input-component";
export const RentSale = ({value}) => {
    return (
    value==="rent"?
    <div>
        <InputComponent labelText={"MONTLY RENT"} 
                    idInput={"price"} 
                    placeholder={"2000"} />
        <InputComponent labelText={"MAINTENANCE"} 
                    idInput={"maintenance"} 
                    placeholder={"100"} />
    </div>: <InputComponent labelText={"PRICE"} 
                    idInput={"price"} 
                    placeholder={"2000"} /> 
    )
}
export const PetAllowed = ({value, id}) => {
    return value ==="rent"?
    <div css={css`${labelCheck}`}>
       <input css={css`${checkbox}`} id={id} name={id} type="checkbox"/>
       <label css={css`${labelForm}`}>Pets Allowed</label>
   </div>: null 
    
} 
