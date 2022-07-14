/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { join, pluspeople } from "../../styles/logo";
import { contRowAround } from "../../styles/utils";

import addpeople from "../../images/AddPeople.png";
const Visitor = ({handleSignUp}) => {
    return (
        <div css={css` ${contRowAround}; display: flex; `} >
          <button css={css` ${join} `} onClick={handleSignUp} >
            <img src={addpeople} alt="" />
            JOIN
          </button>
          <button css={css` ${pluspeople} `} >
            <img src={addpeople} alt="" />
            LOGIN
          </button>
        </div>
    )
}
export default Visitor;