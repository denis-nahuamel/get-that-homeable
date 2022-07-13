/** @jsxImportSource @emotion/react */
import { css, ThemeProvider } from "@emotion/react";
import { listProperties } from "../../styles/property-data";
import PropertyCard from "./property-card";

const ListProperties = ({properties}) =>  {
    return (
        <div css={css`${listProperties}`}>
            {properties.length===0?null:
            properties.map((property)=>(<PropertyCard property={property} />))}
        </div>)
}
export default ListProperties;