/** @jsxImportSource @emotion/react */
import { css, ThemeProvider } from "@emotion/react";
import { listProperties } from "../../styles/property-data";
import PropertyCard from "./property-card";

const styledDiv = css`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    margin: 1.5rem;
    // padding: 1rem;
    gap: 2rem;
`;
const ListProperties = ({properties}) =>  {
    
    return (
        <div css={styledDiv}>
            {properties.length===0?null:
            properties.map((property, index)=>(<PropertyCard key={index} property={property} />))}
        </div>)
}
export default ListProperties;