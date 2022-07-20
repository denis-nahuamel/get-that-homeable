/** @jsxImportSource @emotion/react */
import { css, ThemeProvider } from "@emotion/react";
import { listProperties } from "../../styles/property-data";
import SavedPropertyCard from "./saved-property-card";

const stylesdiv = css`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    margin: 3rem;
    padding: 1rem;
    gap: 2rem;
`;
const ListSavedProperties = ({properties}) =>  {
    
    return (
        <div css={stylesdiv}>
            {properties.length===0?null:
            properties.map((property, index)=>(<SavedPropertyCard key={index} property={property} />))}
        </div>)
}
export default ListSavedProperties;