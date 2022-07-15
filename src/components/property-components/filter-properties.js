/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { filterButtons } from "../../styles/property-data";
import { contRow, contRow8Gap} from "../../styles/utils";
import ButtonFilter from "./button-filter";
const FilterProperties = () => {
    return (
        <div css = {css`${filterButtons}`}>
            <div><input placeholder="Search by adress" type="text" /></div>
            <div css = {css`${contRow8Gap}`}>
                <ButtonFilter text="PRICE" value={"price"}/>
                <ButtonFilter text="PROPERTY TYPE" value={"property_type"} />
                <ButtonFilter text="BEDS & BATHS" value={"beds_baths"}/>  
                <ButtonFilter text="MORE" value={"more"}/> 
            </div>
            <div>
                <button>Buying & Renting</button>
            </div>
        </div>
    )
}
export default FilterProperties