/** @jsxImportSource @emotion/react */
import { css, ThemeProvider } from "@emotion/react";
import { useEffect, useState } from "react";
import ButtonFilter from "../components/property-components/button-filter";
import FilterProperties from "../components/property-components/filter-properties";
import ListProperties from "../components/property-components/list-properties";
import ReturnContent from "../components/property-components/options-content";
import PropertyCard from "../components/property-components/property-card";
import { getProperties } from "../services/property-service";
import { listProperties } from "../styles/property-data";
import { contRow } from "../styles/utils";

const PropertiesPage = ()=> {
    
    const [properties, setProperties] = useState([])
    const [pagination, setPagination] = useState({})
    const [filterParams, setFilterParams] = useState({ 
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
        property_type_house: null
        })

    useEffect(()=>{
        getProperties(filterParams).then(response => {           
            setProperties(response.properties)
            setPagination(response.pagination)
        })
    },[filterParams])
    const handleFilterParams = (filters) => {
            setFilterParams(filters)
    }
    return (
        <>
            <FilterProperties onFilterParams= {handleFilterParams}>
                {/* <ButtonFilter>
                    <ReturnContent onFilterParams= {handleFilterParams} params={filterParams} />
                </ButtonFilter> */}
            </FilterProperties>
            <ListProperties properties = {properties} />
        </>)
}
export default PropertiesPage;