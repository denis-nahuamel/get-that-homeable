/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { sendButton, signUpContainer } from "../styles/form";
import { montW400S24 } from "../styles/typography";
import InputComponent from "./input-component";

const SignUpForm = () => {
    return (
        <div css={css`${signUpContainer}`}>
            <p css={css`${montW400S24}`}>Create your Acount</p>
            <form>
                <InputComponent labelText={"NAME"} 
                    idInput={"name"} 
                    placeholder={"John doe"} />
                <InputComponent 
                    labelText={"EMAIL"} 
                    idInput={"email"} 
                    placeholder={"user@gmail.com"}
                    type="email" />
                <InputComponent labelText={"PHONE"} 
                    idInput={"phone"} placeholder={"999-999-999"} />
                <InputComponent labelText={"PASSWORD"} 
                    idInput={"password"} 
                    type="password"
                    placeholder={"********"} />
                <InputComponent labelText={"PASSWORD CONFIRMATION"} 
                    idInput={"passwordConfirmation"} 
                    type="password"
                    placeholder={"********"} /> 
                <button css={css`${sendButton}`}>CREATE ACOUNT</button>
            </form>
        </div>
    )
}
export default SignUpForm;