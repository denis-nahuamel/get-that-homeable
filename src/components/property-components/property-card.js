/** @jsxImportSource @emotion/react */
import { css, ThemeProvider } from "@emotion/react";
import slide from "../../images/slide1.png"
import { iconsGap, imageCard, propertyCard, savedPropertyCard } from "../../styles/property-data";
import MonetizationOnOutlinedIcon from '@mui/icons-material/MonetizationOnOutlined';
import { montW400S24 } from "../../styles/typography";
import BedOutlinedIcon from '@mui/icons-material/BedOutlined';
import BathtubOutlinedIcon from '@mui/icons-material/BathtubOutlined';
import PetsOutlinedIcon from '@mui/icons-material/PetsOutlined';
import { contRow, contRowAround, contRowBetween, contRowCenter, contRowSpaceAround } from "../../styles/utils";
import ApartmentOutlinedIcon from '@mui/icons-material/ApartmentOutlined';
import DataContainer from "./data-container";
import { theme } from "../themes";
import areaImg from "../../images/icons/bx-area.png"
import { generatePath, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/auth-context";

import DriveFileRenameOutlineOutlinedIcon from '@mui/icons-material/DriveFileRenameOutlineOutlined';
import CancelOutlinedIcon from '@mui/icons-material/CancelOutlined';
export const PropertyCard = ({property}) => {
    // console.log(property)
    const navigate = useNavigate();
    const {user} = useAuth();

    const {price, property_type, photos, address, bedrooms, bathrooms, area, pets, about }= property;

    const handlePropertyData = (event) => {
        event.preventDefault();
        navigate(`/list-properties/${property.id}`, {state:{propertyData:property}})
        // navigate("property-data",{state:{propertyData:property}})
    }
    const handleEditProperty = () => {

    }
    const handleCloseProperty = () => {
        console.log("property closed")
    }
    return (
        <div css={css`${propertyCard}`} >
            <div>
                <img src={slide} css={css`${imageCard}`} alt="images" onClick={handlePropertyData}/>
                <div>for free</div>
            </div>
            <div css={css`${contRowBetween}; margin: 0 5px;`}>
                <div css={css`display:flex; `}>
                        <MonetizationOnOutlinedIcon />
                        <div css={css`${montW400S24}`}>{price}</div>
                </div>
                <div css={css`${contRowCenter}`}>
                    <ApartmentOutlinedIcon />
                    {property_type}
                </div>
            </div>
            <div css={css`text-justify:auto`}>
               {address} 
            </div>
            <ThemeProvider theme={theme}>
                <div css={css`${contRowSpaceAround}`}>
                    <div css={css`${iconsGap}`}>
                        <BedOutlinedIcon color="gray" fontSize="small" />
                        <p>{bedrooms} </p>
                    </div>
                    <div css={css`${iconsGap}`}>
                        <BathtubOutlinedIcon color="gray" fontSize="small"/>
                        <p>{bathrooms} </p>
                    </div>
                    <div css={css`${iconsGap}`}>
                        <img  src={areaImg} alt="area" width="22"/>
                        <p>{area} m2</p>
                    </div>
                    <div css={css`${iconsGap}`}>
                        
                        {pets===true?
                        <PetsOutlinedIcon color="gray" fontSize="small"/>: null}
                    </div>
                </div>
             </ThemeProvider> 
            {user?.user_type === "landlord"?<div css={savedPropertyCard}>
                <div css={css`${contRow} ; gap:10px;`} onClick={handleEditProperty}>
                    <DriveFileRenameOutlineOutlinedIcon />
                    <div>EDIT</div>
                </div>
                <div css={css`${contRow}; gap:10px;`} onClick={handleCloseProperty}> 
                    <CancelOutlinedIcon />
                   <div> CLOSE</div>
                </div>
            </div>:null}
        </div>
    )
}
export default PropertyCard;