/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { useAuth } from "../context/auth-context";
import { sendButton, signUpContainer } from "../styles/form";
import { montW400S24 } from "../styles/typography";
import {InputComponent} from "./input-component";
import {useLocation, useNavigate } from "react-router-dom";
const SignUpForm = () => {
    //location.state.type
    const navigate = useNavigate();
    const location = useLocation();
    const {signupAuth} = useAuth();
    const handleSignUp = (event) => {
        event.preventDefault();
        console.log("licat", location.state.type)
        let value = event.target.elements;
        const send = {
            name: value.name.value, 
            email: value.email.value, 
            phone: value.phone.value, 
            password: value.password.value,
            user_type: location.state.type
        };
         signupAuth(send).then((response)=> navigate("/"));
    }
    return (
        <div css={css`${signUpContainer}`}>
            <p css={css`${montW400S24}`}>Create your Acount</p>
            <form onSubmit={handleSignUp}>
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
                <button css={css`${sendButton}`} type="submit">CREATE ACOUNT</button>
            </form>
        </div>
    )
}
export default SignUpForm;