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
    useEffect(()=>{
        getProperties().then(response => setProperties(response))
    },[])
    return (
        <>
            <FilterProperties />
            <ListProperties properties = {properties} />
        </>)
}
export default PropertiesPage;