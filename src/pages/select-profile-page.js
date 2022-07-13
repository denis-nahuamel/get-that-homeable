/**@jsxImportSource @emotion/react */
import {css} from "@emotion/react"
import { backgroundSelect, card, cardsContainer, mainSelectContainer } from "../styles/select-profile";
import { contColumn, contRow, contRowCenter, contRowCenterCenter } from "../styles/utils";
const SelectProfile = () => {
    const handleProfile = (value) =>{
        console.log("val")
    }
    return (
        <div css={css`${mainSelectContainer}`}>
            <div>
                <p>Selecciona el perfil con el que te identificas</p>
                <p>¿Que estas buscando??</p>
            </div>
            <div css={css`${cardsContainer}`}>
                <div css={css`${card}`} onClick={handleProfile("landlord")}>
                    <img src={process.env.PUBLIC_URL + "/pana.png"}/>
                    <div>
                        <p>Landlord</p>
                        <p>You want to rent or sell a home</p>
                    </div>
                </div>
                <div css={css`${card}`} onClick={handleProfile("homeseeker")}>
                    <img src={process.env.PUBLIC_URL + "/rafiki.png"}/>
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