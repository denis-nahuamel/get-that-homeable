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

const Header = () => {
  const navigate= useNavigate();
  const {user} = useAuth();
  console.log("user",user)
  
  return (
    <nav css={css`${Nav}`}>
      <img css={css`${Logo}`}src={logo}alt=""/>
      <div css={css` display: flex; `} >
        <div css={css` ${contRowAround}; display: flex; align-items: center; `} >
          <img src={image} alt="take" />
          <input css={css` ${Input} `} placeholder="FIND A HOME" />
        </div>
        {user===null?<Visitor />:(
          user.user_type==="landlord"?<Landlord />:<HomeSeeker />)}
      </div>
    </nav>
  );
};
export default Header;
