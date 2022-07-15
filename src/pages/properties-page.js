/** @jsxImportSource @emotion/react */
import { css, ThemeProvider } from "@emotion/react";
import { useEffect, useState } from "react";
import FilterProperties from "../components/property-components/filter-properties";
import ListProperties from "../components/property-components/list-properties";
import PropertyCard from "../components/property-components/property-card";
import { getProperties } from "../services/property-service";
import { listProperties } from "../styles/property-data";
import { contRow } from "../styles/utils";

const PropertiesPage = ()=> {
    const [properties, setProperties] = useState([])
    const [info, setInfo] = useState({})
    const [filterParams, setFilterParams] = useState({ 
        address : null, 
        min_price: null, 
        max_price: null, 
        min_area: null, 
        max_area: null,
        pets: null, 
        page: 2,
        bedrooms: null, 
        bathrooms: null, 
        operation_rent: null, 
        operation_sale: null, 
        property_type_apartment: null, 
        property_type_house: null
        })

    useEffect(()=>{
        getProperties(filterParams).then(response => {
            setProperties(response.results)
            setInfo(response.info)
            console.log(response.info)
        })
    },[filterParams])
    return (
        <>
            <FilterProperties />
            <ListProperties properties = {properties} />
        </>)
}
export default PropertiesPage;