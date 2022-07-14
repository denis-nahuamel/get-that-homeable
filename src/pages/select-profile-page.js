/**@jsxImportSource @emotion/react */
import {css} from "@emotion/react"
import { backgroundSelect, card, cardsContainer, mainSelectContainer } from "../styles/select-profile";
import { contColumn, contRow, contRowCenter, contRowCenterCenter } from "../styles/utils";
import pana from "../images/pana.png";
import rafiki from "../images/rafiki.png";
import {useNavigate} from "react-router-dom";
import { useAuth } from "../context/auth-context";

const SelectProfile = () => {
    const navigate = useNavigate();
    const {userTypeAuth} = useAuth();
    const handleProfile = (value) =>{
        
        navigate("sign-up");
    }
    return (
        <div css={css`${mainSelectContainer}`}>
            <div>
                <p>Selecciona el perfil con el que te identificas</p>
                <p>¿Que estas buscando??</p>
            </div>
            <div css={css`${cardsContainer}`}>
                <div css={css`${card}`} onClick={()=>navigate("sign-up", { state: {type:"landlord"}})}>
                    <img src={pana} alt="pana"/>
                    <div>
                        <p>Landlord</p>
                        <p>You want to rent or sell a home</p>
                    </div>
                </div>
                <div css={css`${card}`} onClick={()=> navigate("sign-up", { state:{type:"homeseeker"} })}>
                    <img src={rafiki} alt="rafiki"/>
                    <div>
                        <p>Home seeker</p>
                        <p>You want to find a home</p>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}
export default SelectProfile;