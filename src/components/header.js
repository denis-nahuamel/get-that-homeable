/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import image from "../images/Vector.png";
import logo from "../images/Logo.png";
import {useNavigate} from "react-router-dom";
import addpeople from "../images/AddPeople.png";
import { contRowAround } from "../styles/utils";
import { join, Logo, Nav, Input, pluspeople } from "../styles/logo";
import { useAuth } from "../context/auth-context";
import Visitor from "./header-users/visitor";
import Landlord from "./header-users/landlord";
import HomeSeeker from "./header-users/homeseeker";
import { Link } from "react-router-dom";

const Header = () => {
  const navigate= useNavigate();
  const {user} = useAuth();
  console.log("user",user)
  const styledDiv = css`
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        justify-content: space-around;
        margin: 1rem;
        gap: 1rem;
    `;
  const styledLogo = css`
    cursor: pointer;
    `
  return (
    <nav css={styledDiv}>
      <Link  to="/">
        <img css={styledLogo}src={logo}alt=""/>
      </Link>

      {/* <img css={styledLogo}src={logo}alt=""/> */}
      <div css={css` display: flex; `} >
        {/* <div css={css` ${contRowAround}; display: flex; align-items: center; `} >
        </div> */}
        {user===null?<Visitor />:(
          user.user_type==="landlord"?<Landlord />:<HomeSeeker />)}
      </div>
    </nav>
  );
};
export default Header;
