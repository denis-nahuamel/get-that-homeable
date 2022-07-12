/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { anotherInput, checkbox, input, inputBasic, labelCheck, labelForm, labelInputCont, labelOptions, select, sendButton, textArea, thumbImage, thumbImages } from "../styles/form";
import { montW500S20 } from "../styles/typography";
import { basicContainer, contColumn, contColumnStart, contRow, contRowCenter, contRowCenterGap, contRowGap } from "../styles/utils";
const PropertyForm = () => {
    return (
        <div css={css`${contColumnStart}`}>
            <div css={css`${labelInputCont}`}>
                <label css={css`${labelForm}`}>OPERATION TYPE</label>
                
            </div>
            <div css={css`${labelInputCont}`}>
                <label css={css`${labelForm}`}>ADDRESS</label>
                <input css={css`${input}`} type="text" placeholder="start typing to autocomplete"/>
            </div>
            <div css={css`${labelInputCont}`}>
                <label css={css`${labelForm}`}>MONTLY RENT</label>
                <input css={css`${input}`} type="text"/>
            </div>
            <div css={css`${labelInputCont}`}>
                <label css={css`${labelForm}`}>MAINTANANCE</label>
                <input css={css`${input}`} type="text"/>
            </div>
            <div css={css`${labelInputCont}`}>
                <label css={css`${labelForm}`}>PROPERTY TYPE</label>
                <div css={css`${contRowCenter}`}>
                    <div css={css`${contRowCenter}`}>
                        <input css={css`${checkbox}`} type="checkbox"/>
                        <label css={css`${labelForm}`}>Apartment</label>
                    </div>
                    <div css={css`${contRowCenter}`}>
                        <input css={css`${checkbox}`} type="checkbox"/>
                        <label css={css`${labelForm}`}>House</label>
                    </div>
                </div>
            </div>
            {/* BEDROOMS AND BATHROOMS */}
            <div css={css`${labelOptions}`}>
                <div css={css`${contColumn}`}>
                <label css={css`${labelForm}`}>BEDROOMS</label>
                    <select css={css`${select}`}>
                        <option value="1">option 1</option>
                    </select>
                </div>
                <div css={css`${contColumn}`}>
                <label css={css`${labelForm}`}>BATHROOMS</label>
                    <select css={css`${select}`}>
                        <option value="1">option 1</option>
                    </select>
                </div>
                <div css={css`${contColumn}`}>
                    <label css={css`${labelForm}`}>AREA IN M2</label>
                    <input css={css`${anotherInput}`} type="text"/>
                </div>
            </div>
            {/* pets allowd */}
            <div css={css`${labelCheck}`}>
                <input css={css`${checkbox}`} type="checkbox"/>
                <label css={css`${labelForm}`}>Pets Allowed</label>
            </div>
            <div>
                <label css={css`${labelForm}`}>
                    Allowing pets increases the likehood of renters  liking the property by 9001%.
                    It also makes you a better person.
                </label>
            </div>
            <div css={css`${labelInputCont}`}>
                <label css={css`${labelForm}`}>ABOUT THIS PROPERTY</label>
                <textarea css={css`${textArea}`} placeholder="My apartment is great because..."/>
            </div>
            <div css={css`${labelInputCont}`}>
                <label css={css`${montW500S20}`} >Photos</label>
            </div>
            <div css={css`${labelInputCont}`}>
                <label css={css`${labelForm}`}>Upload as many photos as you wish</label>
                <input css={css`${inputBasic}`} type="file"/>
            </div>
            {/* thumbnail images */}
            <div css={css`${thumbImages}`}>
                <div css={css`${thumbImage}`}>
                    <label>No images yet</label>
                </div>
            </div>
            <div>
                <button css={css`${sendButton}`}>PUBLISH PROPERTY LISTING</button>
            </div>
        </div>
    )
}
export default PropertyForm;