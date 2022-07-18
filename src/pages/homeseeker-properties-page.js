/** @jsxImportSource @emotion/react */
import { css, ThemeProvider } from "@emotion/react";
import { useEffect, useState } from "react";
import ButtonFilter from "../components/property-components/button-filter";
import FilterProperties from "../components/property-components/filter-properties";
import ListProperties from "../components/property-components/list-properties";
import ReturnContent from "../components/property-components/options-content";
import PropertyCard from "../components/property-components/property-card";
import { getListedProperties } from "../services/property-service";
import { listProperties } from "../styles/property-data";
import { contRow } from "../styles/utils";
import { useAuth } from "../context/auth-context";

const HomeseekerPropertiesPage = ()=> {
    const {user} = useAuth();

    const [properties, setProperties] = useState([])

    useEffect(()=>{
      getListedProperties().then(response => {           
            setProperties(response)
        })
    },[])
   
    return (
        <>
        {user?.user_type === "homeseeker" ? (
            <ListProperties properties = {properties} />
        ) : "You must be logged as a landlord in order to save properties"}
        </>)
}
export default HomeseekerPropertiesPage;