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

export const PropertyData = ({property}) => {
    const direction = "Francisco de Paula Ugarriza 27";
    const direction2 = "Miraflores, Lima";
    const price = "3,000";
    const price2 = "+100";
    const description = "3 Bedroom/2 Bathroom apartment available for ASAP move-in!Apartment features hardwood floors throughout, virtual doorman, Central AC/heat, dishwasher and a microwave. The kitchen has custom cabinetry and the living room is big enough to fit a dinner table, a couch and a tv set up.";
    return (
    <div css={css`${contRow}; gap: 16px; margin: 32px`}>
        {/* info part */}
        <div>
            <Slider />
            <div css={css`${contRowBetween}`} >
                <p css={css`${montW400S24}`}> {direction}</p>
                <div css={css`${contRowCenter}; gap: 12px`}>
                    <MonetizationOnOutlinedIcon />
                    <p css={css`${montW400S24}`}>{price}</p>
                </div>
            </div>
            <div css={css`${contRowBetween}`} >
                <p css={css`${montW400S15}`}> {direction2}</p>
                <p css={css`${montW400S15}`}>{price2}</p>    
            </div>
            <DataContainer bedrooms={4} bathrooms={4} area={180} pets={"si"} />
            <div css={css`${contStart}`}>About this property</div>
            <div css={css`${contStart}`}>{description}</div>
            <div css={css`${contStart}`}>Location</div>
            <div css={css`${contStart}`}>{direction}</div>
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