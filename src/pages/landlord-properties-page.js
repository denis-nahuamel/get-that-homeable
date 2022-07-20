/** @jsxImportSource @emotion/react */
import { css, ThemeProvider } from "@emotion/react";
import { useEffect, useState } from "react";
import ListProperties from "../components/property-components/list-properties";
import { getListedProperties } from "../services/property-service";
import { useAuth } from "../context/auth-context";
import { contRow, line } from "../styles/utils";
import { contActiveClosed, lineActiveClosed } from "../styles/property-data";

const LandlordPropertiesPage = ()=> {
    const {user} = useAuth();

    const [properties, setProperties] = useState([])

    useEffect(()=>{
        getListedProperties().then(response => {           
            setProperties(response)
        })
    },[])
   
    return (
        <>
        <div css={contActiveClosed}>
            <div>
                ACTIVE
                <div css={lineActiveClosed}></div>
            </div>
            <div>
                CLOSED
                <div css={lineActiveClosed}></div>
            </div>
        </div>
        {user?.user_type === "landlord" ? (
            <ListProperties properties = {properties} />
        ) : "You must be logged as a landlord in order to list properties"}
        </>)
}
export default LandlordPropertiesPage;