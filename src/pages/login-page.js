/**@jsxImportSource @emotion/react */
import {css} from "@emotion/react"
import LoginForm from "../components/login-form";
import { background, backgroundLogin } from "../styles/utils";

const LoginPage = () => {
return (
    <div css={css`${backgroundLogin}`}>
        <LoginForm />
    </div>)
}
export default LoginPage;