/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { input, inputForm, labelForm, labelInputCont } from "../styles/form";

const InputComponent = ({labelText,idInput, placeholder, type,width }) => {
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
export default InputComponent;