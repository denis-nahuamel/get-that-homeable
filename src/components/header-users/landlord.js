/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { join, pluspeople } from "../../styles/logo";
import { contRowAround } from "../../styles/utils";
import {useNavigate} from "react-router-dom";
import addpeople from "../../images/AddPeople.png";
import HouseOutlinedIcon from '@mui/icons-material/HouseOutlined';
import PersonAddAltOutlinedIcon from '@mui/icons-material/PersonAddAltOutlined';
import { useAuth } from "../../context/auth-context";

const Landlord = ()=> {
    const navigate = useNavigate();
    const {logoutAuth} = useAuth();
    const handleLogout = () => {
        logoutAuth().then(response => console.log(response))
        navigate("/")
    }
    const handleListedProperties = () => {
        navigate("/my-listed-properties")
    }
    const handleProfile = () => {

    }
    const handleNewProperty = () => {
        navigate("/create-property")
    }
    return (
        <div css={css` ${contRowAround}; display: flex; `} >
            <button css={css` ${join} `} onClick={handleLogout} >
                {/* <img src={addpeople} alt="" /> */}
                <PersonAddAltOutlinedIcon />
                LOGOUT
            </button>
            <button css={css` ${pluspeople} `} onClick={handleListedProperties} >
                {/* <img src={addpeople} alt="" /> */}
                <HouseOutlinedIcon  />
                MY PROPERTIES
            </button>
            <button css={css` ${pluspeople} `} onClick={handleNewProperty} >
                {/* <img src={addpeople} alt="" /> */}
                <HouseOutlinedIcon  />
                NEW PROPERTY
            </button>
            <button css={css` ${pluspeople} `} onClick={handleProfile} >
                {/* <img src={addpeople} alt="" /> */}
                <PersonAddAltOutlinedIcon />
                PROFILE
            </button>
        </div>

    )
}
export default Landlord;