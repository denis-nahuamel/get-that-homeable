/** @jsxImportSource @emotion/react */
import { css, ThemeProvider } from "@emotion/react";
import { useEffect, useState } from "react";
import ButtonFilter from "../components/property-components/button-filter";
import FilterProperties from "../components/property-components/filter-properties";
import ListProperties from "../components/property-components/list-properties";
import ReturnContent from "../components/property-components/options-content";
import PropertyCard from "../components/property-components/property-card";
import { getSavedProperties } from "../services/property-service";
import { listProperties } from "../styles/property-data";
import { contRow } from "../styles/utils";
import { useAuth } from "../context/auth-context";
import { useSave } from "../context/save-context";

const HomeseekerPropertiesPage = ()=> {
    const {user} = useAuth();
    const [properties, setProperties] = useState(null)
    const {savedProperties, getPropertyContext} = useSave();

    // useEffect(()=>{
    //     getSavedProperties().then(response => {           
    //         setProperties(response.map(item=>item.property))
    //     })
    //     // console.log(savedProperties)

    // },[])
    useEffect(()=>{
        if (savedProperties === null) {
            getPropertyContext()            
        } 
        setProperties(savedProperties?.map(item=>item.property))

    },[user, savedProperties])
   
    return (
        <>
        {user?.user_type === "homeseeker" ? (
            (properties ? <ListProperties properties = {properties} /> :
            "You don't have any saved properties")
        ) : "You must be logged in as a homeseeker in order to save properties"
        }
        </>)
}
export default HomeseekerPropertiesPage;