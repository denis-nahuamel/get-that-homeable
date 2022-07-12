/**@jsxImportSource @emotion/react */
import {css} from "@emotion/react"
import LoginForm from "../components/login-form";
import { background } from "../styles/utils";

const LoginPage = () => {
return (
    <div css={css`${background}`}>
        <LoginForm />
    </div>)
}
export default LoginPage;