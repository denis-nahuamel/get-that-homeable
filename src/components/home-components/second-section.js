/** @jsxImportSource @emotion/react */
import {css} from "@emotion/react";
import { useEffect, useState } from "react";
import { getProperties, getPropertiesHome } from "../../services/property-service";
import { titleSecondSection } from "../../styles/home";
import { contRowCenterCenter } from "../../styles/utils";
import ListProperties from "../property-components/list-properties";

const SecondSection = () => {
    const [properties, setProperties] = useState([])
    useEffect(()=>{
        getPropertiesHome().then(response => {
            setProperties(response)
        })
    },[])
    return (
        <>
        <div>Find an Apartment you Love</div>
        <div css={titleSecondSection}>Homes for rent at the best prices</div>
        <div css={css`${contRowCenterCenter}`}>
            <ListProperties properties = {properties} />
        </div>
        </>
    )
}
export default SecondSection;