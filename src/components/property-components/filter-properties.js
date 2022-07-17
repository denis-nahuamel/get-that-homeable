/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { filterButtons } from "../../styles/property-data";
import { contRow, contRow8Gap} from "../../styles/utils";
import ButtonFilter from "./button-filter";
import ReturnContent from "./options-content";

import MultipleSelect from "./multi-select";
const FilterProperties = ({onFilterParams}) => {
    return (
        <div css = {css`${filterButtons}`}>
            {/* <div><input placeholder="Search by adress" type="text" /></div> */}
            {/* <ButtonFilter text="ADDRESS" value={"address"} onFilterParams={onFilterParams}/> */}
            <ReturnContent  type={"address"} onFilterParams={onFilterParams}/>

            <div css = {css`${contRow8Gap}`}>
                {/* <ReturnContent  type={"address"} onFilterParams={onFilterParams}/> */}
                {/* <ButtonFilter text="ADDRESS" value={"address"} onFilterParams={onFilterParams}/> */}
                <ButtonFilter text="PRICE" value={"price"} onFilterParams={onFilterParams}/>
                <ButtonFilter text="PROPERTY TYPE" value={"property_type"} onFilterParams={onFilterParams}/>
                <ButtonFilter text="BEDS & BATHS" value={"beds_baths"} onFilterParams={onFilterParams}/>  
                <ButtonFilter text="MORE" value={"more"} onFilterParams={onFilterParams}/> 
            </div>
            
            <MultipleSelect onFilterParams={onFilterParams}/>
        </div>
    )
}
export default FilterProperties