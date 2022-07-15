/**@jsxImportSource  @emotion/react*/
import {css} from "@emotion/react";
import { ThemeProvider } from "@emotion/react"
import { ToggleButton, ToggleButtonGroup } from "@mui/material"
import { useState } from "react";
import { toggle } from "../../styles/form"
import { contColumn, contRow } from "../../styles/utils";
import { theme } from "../themes"

export const PriceContent = ({onFilterParams}) => {
    console.log("pa", onFilterParams)
    const handleFilterPrice = (event) => {
        event.preventDefault();
        let values= event.target.elements;
        onFilterParams(filterParams => ({
            ...filterParams,
            min_price: values.min_price.value, 
            max_price: values.max_price.value, 
        }))
    }
    return (
        <div>
            <div>SALARY RANGE</div>
            <form onSubmit={handleFilterPrice}>
                <div>
                    <input placeholder="min" id="min_price" name="min_price"></input> - 
                    <input placeholder="max" id="max_price" name="max_price"></input>
                </div>
                <div><button type="submit">DONE</button></div>
            </form>
        </div>
    )
}
export const PropertyContent = ({onFilterParams}) => {
    const handleFilterPrice = (event) => {
        event.preventDefault();
        let values= event.target.elements;
        onFilterParams(filterParams => ({
            ...filterParams,
            property_type_apartment: values.apartment.checked===true?"apartment":null, 
            property_type_house: values.house.checked===true?"house":null
        }))
    }
    return (
        <div>
            <div>PROPERTY TYPE</div>
            <form onSubmit={handleFilterPrice}>
                <div>
                    <input type="checkbox" id="house" name="house"/> Houses
                    <input type="checkbox" id="apartment" name="apartment"/> Apartments 
                    
                </div>
                <div><button type="submit">DONE</button></div>
            </form>
        </div>
    )
}
export const BedsBathsContent = ({onFilterParams}) => {
    const [bed, setBed] = useState("0");
    const handleBed = (_event, value) => {
        setBed(value)
        onFilterParams(filterParams => ({
            ...filterParams,
            bedrooms: value 
        }))
    }
    const [bath, setBath] = useState("0");
    const handleBath = (_event, value) => {
        setBath(value)
        onFilterParams(filterParams => ({
            ...filterParams,
            bathrooms: value 
        }))
    }
    return (
        <div>
            <div css={css`${contColumn}`}>
               <label>BEDS</label> 
                <ThemeProvider theme={theme}>
                        <ToggleButtonGroup
                            color="pink"
                            exclusive
                            aria-label="text alignment"
                            value={bed}
                            onChange={handleBed}
                            >
                            <ToggleButton
                            css={css`${toggle}`} value="" aria-label="left aligned">
                                Any
                            </ToggleButton>
                            <ToggleButton css={css`${toggle}`} value="1" aria-label="centered">
                                1+
                            </ToggleButton>
                            <ToggleButton css={css`${toggle}`} value="2" aria-label="centered">
                                2+
                            </ToggleButton>
                            <ToggleButton css={css`${toggle}`} value="3" aria-label="centered">
                                3+
                            </ToggleButton>
                            <ToggleButton css={css`${toggle}`} value="4" aria-label="centered">
                                4+
                            </ToggleButton>
                        </ToggleButtonGroup>
                    </ThemeProvider>
            </div>
            <div css={css`${contColumn}`}>
               <label>BATHS</label> 
                <ThemeProvider theme={theme}>
                        <ToggleButtonGroup
                            color="pink"
                            exclusive
                            aria-label="text alignment"
                            value={bath}
                            onChange={handleBath}
                            >
                            <ToggleButton
                            css={css`${toggle}`} value="" aria-label="left aligned">
                                Any
                            </ToggleButton>
                            <ToggleButton css={css`${toggle}`} value="1" aria-label="centered">
                                1+
                            </ToggleButton>
                            <ToggleButton css={css`${toggle}`} value="2" aria-label="centered">
                                2+
                            </ToggleButton>
                            <ToggleButton css={css`${toggle}`} value="3" aria-label="centered">
                                3+
                            </ToggleButton>
                            <ToggleButton css={css`${toggle}`} value="4" aria-label="centered">
                                4+
                            </ToggleButton>
                        </ToggleButtonGroup>
                    </ThemeProvider>
            </div>
            <div>
        
            </div>
            {/* <div><button>DONE</button></div> */}
        </div>
    )
}
const ReturnContent = ({type, onFilterParams, params})=>{
    console.log("para", params)
    if(type==="price") return <PriceContent onFilterParams={onFilterParams} />
    if(type==="property_type") return <PropertyContent onFilterParams={onFilterParams}/>
    if(type==="beds_baths") return <BedsBathsContent onFilterParams={onFilterParams}/>
}
export default ReturnContent;