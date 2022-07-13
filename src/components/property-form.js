/** @jsxImportSource @emotion/react */
import { css, ThemeProvider } from "@emotion/react";
import { alpha, styled } from '@mui/material/styles';
import { anotherInput, checkbox, input, inputBasic, labelCheck, labelForm, labelInputCont, labelOptions, select, sendButton, textArea, thumbImage, thumbImages, toggle } from "../styles/form";
import { montW500S20 } from "../styles/typography";
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import {  contColumn, contColumnStart, contRowCenter, } from "../styles/utils";
import { useState } from "react";
import { theme } from "./themes";
import { PetAllowed, RentSale } from "./rent-sale.component";
import {InputComponent, SelectComponent} from "./input-component";
import { addProperty } from "../services/property-service";
const PropertyForm = () => {
    const [rentSale, setRentSale] = useState('rent');
    const handleRentSale= (_event,value)=>{
        setRentSale(value)
        console.log("renst", value)
    }
    const handleSubmit =(event)=>{
        let values = event.target.elements;
        event.preventDefault();
        const send = {
            address: values.address.value,
            montly: values.montlyRent.value,
            maintanance: values.maintanance.value, 
            property_type: values.apartment.value,// corregir
            bedrooms: values.bedrooms.value,
            bathrooms:values.bathrooms.value,
            area: values.area.value,
            pets_allowed: values.pets.checked,
            about: values.about.value,

        }
        console.log("han", send)
        addProperty(send).then(response => console.log(response))
    }
    return (
        <div css={css`${contColumnStart}`}>
            <form onSubmit={handleSubmit}>
                <div css={css`${labelInputCont}`}>
                    <label css={css`${labelForm}`}>OPERATION TYPE</label>
                    <ThemeProvider theme={theme}>
                        <ToggleButtonGroup
                            color="pink"
                            value={rentSale}
                            exclusive
                            onChange={handleRentSale}
                            aria-label="text alignment"
                            >
                            <ToggleButton
                            css={css`${toggle}`} value="rent" aria-label="left aligned">
                                Rent
                            </ToggleButton>
                            <ToggleButton css={css`${toggle}`} value="sale" aria-label="centered">
                                Sale
                            </ToggleButton>
                        </ToggleButtonGroup>
                    </ThemeProvider>
                </div>

                <InputComponent labelText={"ADDRESS"} 
                        idInput={"address"} 
                        placeholder={"start typing to autocomplete"} width={"600px"}/>
                
                <RentSale value={rentSale}/>
                <div css={css`${labelInputCont}`}>
                    <label css={css`${labelForm}`}>PROPERTY TYPE</label>
                    <div css={css`${contRowCenter}`}>
                        <div css={css`${contRowCenter}`}>
                            <input css={css`${checkbox}`} type="checkbox" name="apartment" id="apartment"/>
                            <label css={css`${labelForm}`}>Apartment</label>
                        </div>
                        <div css={css`${contRowCenter}`}>
                            <input css={css`${checkbox}`} type="checkbox" name="house" id="house"/>
                            <label css={css`${labelForm}`}>House</label>
                        </div>
                    </div>
                </div>
                {/* BEDROOMS AND BATHROOMS */}
                <div css={css`${labelOptions}`}>
                <SelectComponent labelText={"BEDROOMS"} id={"bedrooms"}/>
                <SelectComponent labelText={"BATHROOMS"} id={"bathrooms"} />
                    <div css={css`${contColumn}`}>
                        <label css={css`${labelForm}`}>AREA IN M2</label>
                        <input css={css`${anotherInput}`} id="area" name="area" type="text"/>
                    </div>
                </div>
                {/* pets allowd */}
                <PetAllowed value={rentSale} id={"pets"} />
                <div>
                    <label css={css`${labelForm}`}>
                        Allowing pets increases the likehood of renters  liking the property by 9001%.
                        It also makes you a better person.
                    </label>
                </div>
                <div css={css`${labelInputCont}`}>
                    <label css={css`${labelForm}`}>ABOUT THIS PROPERTY</label>
                    <textarea css={css`${textArea}`} 
                        id="about"
                        name="about"
                        placeholder="My apartment is great because..."/>
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
                    <button css={css`${sendButton}`} type="submit">PUBLISH PROPERTY LISTING</button>
                </div>
            </form>
        </div>
    )
}
export default PropertyForm;