/**@jsxImportSource @emotion/react */
import {css} from "@emotion/react"
import SignUpForm from "../components/sign-up-form";
import { mainSelectContainer, mainSignUpContainer } from "../styles/select-profile";

const SignUpPage = ()=> {

return (
<div css={css`${mainSignUpContainer}`}>
    <SignUpForm />
</div>
)
}
export default SignUpPage;