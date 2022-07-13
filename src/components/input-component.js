/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { input, inputForm, labelForm, labelInputCont, select } from "../styles/form";
import { contColumn } from "../styles/utils";

export const InputComponent = ({labelText,idInput, placeholder, type,width }) => {
    return (
        <div css={css`${labelInputCont}`}>
                <label css={css`${labelForm}`}>{labelText}</label>
                <input css={css`${inputForm}; width: ${width?width:'90%' };`}
                    type={type} 
                    id={idInput} 
                    name = {idInput} 
                    placeholder={placeholder}/>
        </div>
    )
}
export const SelectComponent = ({labelText, id}) => {
    return (
        <div css={css`${contColumn}`}>
        <label css={css`${labelForm}`}>{labelText}</label>
            <select css={css`${select}`} name={id} id={id}>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
            </select>
        </div>
    )
}
export const TextAreaComponent = () =>{

}