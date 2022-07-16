/** @jsxImportSource @emotion/react */
import { css, ThemeProvider } from "@emotion/react";
import { sendButton } from "../../styles/form";
import { contactCard } from "../../styles/property-data";
import { card } from "../../styles/select-profile";
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import MonetizationOnOutlinedIcon from '@mui/icons-material/MonetizationOnOutlined';
import { contColumn, contRow, contRowBetween, contRowCenter, contRowCenterGap, contStart } from "../../styles/utils";
import Slider from "../slider";
import { montW400S15, montW400S24, montW400S36 } from "../../styles/typography";
import DataContainer from "./data-container";
import {useLocation} from "react-router-dom";

export const PropertyData = ({property}) => {
    const location = useLocation();
    const propertyData = location.state.propertyData;
    const {price, property_type, address, bedrooms, bathrooms, area, pets, about }= propertyData;
    const direction2 = "Miraflores, Lima";
    const price2 = "+100";
    return (
    <div css={css`${contRow}; gap: 16px; margin: 32px`}>
        {/* info part */}
        <div>
            <Slider />
            <div css={css`${contRowBetween}`} >
                <p css={css`${montW400S24}`}> {address}</p>
                <div css={css`${contRowCenter}; gap: 12px`}>
                    <MonetizationOnOutlinedIcon />
                    <p css={css`${montW400S24}`}>{price}</p>
                </div>
            </div>
            <div css={css`${contRowBetween}`} >
                <p css={css`${montW400S15}`}> {direction2}</p>
                <p css={css`${montW400S15}`}>{price2}</p>    
            </div>
            <DataContainer bedrooms={bedrooms} bathrooms={bathrooms} area={area} pets={"si"} />
            <div css={css`${contStart}`}>About this property</div>
            <div css={css`${contStart}`}>{about}</div>
            <div css={css`${contStart}`}>Location</div>
            <div css={css`${contStart}`}>{address}</div>
        </div>
        {/* contact advertiser */}
        <div>
            <div css={css`${contactCard}`}>
                    <button css={css`${sendButton}`}>CONTACT ADVERTISER</button>
                    <FavoriteBorderOutlinedIcon fontSize="large"/>
                    <p> Add to favorites</p>
            </div>
        </div>
    </div>
    )
}
export default PropertyData;