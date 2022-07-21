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
    const [section, setSection] = useState("favorites")


    // useEffect(()=>{
    //     getSavedProperties().then(response => {           
    //         setProperties(response.map(item=>item.property))
    //     })
    //     // console.log(savedProperties)

    // },[])
    useEffect(()=>{
        let filteresSavedProperties = null        
        if (savedProperties === null) {
            getPropertyContext()    
        } else {
            filteresSavedProperties = [...savedProperties]
        }
        if (section === "favorites") {
            filteresSavedProperties = savedProperties?.filter(savedProperty => savedProperty.favorite === true)
        } else {
            filteresSavedProperties = savedProperties?.filter(savedProperty => savedProperty.contacted === true)
        }
        setProperties(filteresSavedProperties?.map(item=>item.property))

    },[user, savedProperties, section])
    
    const StyledButton = css`
        background: none;
        color: inherit;
        border: none;
        disabled: true;
        padding: 0;
        font: inherit;
        cursor: pointer;
        outline: inherit;
        padding: 0.3rem;
        &:hover {
            opacity: 70%;
          };
        &:disabled {
            cursor: not-allowed;
            pointer-events: none;
            border-bottom: 3px solid #F48FB1;
        }
    `;
    
    const styledDiv = css`
        gap: 1rem;
        display: flex;
        margin-left: 5rem;
    `;

    function onFavorites(event) {
        setSection("favorites")
    }
    function onContacted(event) {
        setSection("contacted")
    }
    return (
        <>
        {user?.user_type === "homeseeker" ? (
            (properties ? 
            (<>
            <div css={styledDiv}>
                <button 
                    css={StyledButton} 
                    disabled={section === "favorites" ? true : false}
                    onClick={onFavorites}>
                        Favorites
                </button>
                <button 
                    css={StyledButton} 
                    disabled={section === "contacted" ? true : false}
                    onClick={onContacted}>
                        Contacted
                </button>
            </div>
                <ListProperties properties = {properties} section={section} />
            </>
            ) :
            "You don't have any saved properties")
        ) : "You must be logged in as a homeseeker in order to save properties"
        }
        </>)
}
export default HomeseekerPropertiesPage;