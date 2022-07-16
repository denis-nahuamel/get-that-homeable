/** @jsxImportSource @emotion/react */
import {css} from "@emotion/react";
import { useEffect, useState } from "react";
import { getProperties } from "../../services/property-service";
import { titleSecondSection } from "../../styles/home";
import ListProperties from "../property-components/list-properties";

const SecondSection = () => {
    const [properties, setProperties] = useState([])
    const filterParams ={ 
        address : null, 
        min_price: null, 
        max_price: null, 
        min_area: null, 
        max_area: null,
        pets: null, 
        page: 1,
        bedrooms: null, 
        bathrooms: null, 
        operation_rent: null, 
        operation_sale: null, 
        property_type_apartment: null, 
        property_type_house: null,
        limit:3,
        }

    useEffect(()=>{
        getProperties(filterParams).then(response => {
            setProperties(response.results)
        })
    },[])
    return (
        <>
        <div>Find an Apartment you Love</div>
        <div css={titleSecondSection}>Homes for rent at the best prices</div>
        <div>
            <ListProperties properties = {properties} />
        </div>
        </>
    )
}
export default SecondSection;