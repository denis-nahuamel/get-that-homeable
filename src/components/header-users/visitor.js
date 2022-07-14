/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { join, pluspeople } from "../../styles/logo";
import { contRowAround } from "../../styles/utils";
import {useNavigate} from "react-router-dom";
import addpeople from "../../images/AddPeople.png";
const Visitor = () => {
  const navigate = useNavigate();

  const handleSignUp = (event)=>{
    event.preventDefault();
    navigate("select-profile")
   }
  const handleLogin = (event)=>{
    event.preventDefault();
    navigate("login")
   }
    return (
        <div css={css` ${contRowAround}; display: flex; `} >
          <button css={css` ${join} `} onClick={handleSignUp} >
            <img src={addpeople} alt="" />
            JOIN
          </button>
          <button css={css` ${pluspeople} `} onClick={handleLogin} >
            <img src={addpeople} alt="" />
            LOGIN
          </button>
        </div>
    )
}
export default Visitor;