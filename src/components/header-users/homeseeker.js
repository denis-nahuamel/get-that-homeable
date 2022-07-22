/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { join, pluspeople } from "../../styles/logo";
import { contRowAround } from "../../styles/utils";
import {useNavigate} from "react-router-dom";
import addpeople from "../../images/AddPeople.png";
import { useAuth } from "../../context/auth-context";

const HomeSeeker = () => {
    const navigate = useNavigate();
    const {logoutAuth} = useAuth();
    const handleLogout = () => {
        logoutAuth().then(response => console.log(response))
        navigate("/")
    }
    const handleSavedProperties = () => {
        navigate("/my-saved-properties")
    }
    const handleProfile = () => {

    }
    return (
        <div css={css` ${contRowAround}; display: flex; `} >
            <button css={css` ${join} `} onClick={handleLogout} >
                <img src={addpeople} alt="" />
                LOGOUT
            </button>
            <button css={css` ${pluspeople} `} onClick={handleSavedProperties} >
                <img src={addpeople} alt="" />
                SAVED PROPERTIES
            </button>
            <button css={css` ${pluspeople} `} onClick={handleProfile} >
                <img src={addpeople} alt="" />
                PROFILE
            </button>
        </div>

    )
}
export default HomeSeeker;
