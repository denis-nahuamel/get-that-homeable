/** @jsxImportSource @emotion/react */
import { css, ThemeProvider } from "@emotion/react";
import { useEffect, useState } from "react";
import ButtonFilter from "../components/property-components/button-filter";
import FilterProperties from "../components/property-components/filter-properties";
import ListProperties from "../components/property-components/list-properties";
import ReturnContent from "../components/property-components/options-content";
import PropertyCard from "../components/property-components/property-card";
import { getProperties } from "../services/property-service";
import { listProperties } from "../styles/property-data";
import { contRow } from "../styles/utils";
import { useAuth } from "../context/auth-context";

const PropertiesPage = ()=> {
    const {user} = useAuth();

    const [properties, setProperties] = useState([])
    const [pagination, setPagination] = useState({})
    const {count, current, pages } = pagination
    const prev = current ? current - 1 : 1
    const next = current ? current + 1 : 1

    // {
	// 	"count": 34,
	// 	"current": 2,
	// 	"previous": "https://homeable-api.herokuapp.com/properties?page=1",
	// 	"next": "https://homeable-api.herokuapp.com/properties?page=3",
	// 	"items_per_page": 5,
	// 	"pages": 7
	// }
    const [filterParams, setFilterParams] = useState({ 
        address : null, 
        min_price: null, 
        max_price: null, 
        min_area: null, 
        max_area: null,
        pets: null, 
        page: 1,
        bedrooms: null, 
        bathrooms: null, 
        operation_rent: null, 
        operation_sale: null, 
        property_type_apartment: null, 
        property_type_house: null
        })
    
    const { 
        address, min_price, max_price, min_area, max_area, pets,
        page, bedrooms, bathrooms, operation_rent, operation_sale, 
        property_type_apartment, property_type_house,
     } = filterParams

    useEffect(()=>{
        console.log("effect")
        console.log(filterParams)
        getProperties(filterParams).then(response => {           
            setProperties(response.properties)
            setPagination(response.meta)
        })

    },[user, filterParams])

    const handleFilterParams = (filters) => {
        console.log(filters)
        setFilterParams(filters)
    }

    const StyledButton = css`
        background: none;
        color: inherit;
        border: 3px solid rgba(244, 143, 177, 0.15);
        padding: 0;
        font: inherit;
        cursor: pointer;
        outline: inherit; 
        padding: 0.3rem;
        &:hover {
            border: 3px solid #F48FB1;
          };
        &:disabled {
            cursor: not-allowed;
            pointer-events: none;
        }
    `;

    const StyledCurrentButton = css`
        background: none;
        color: inherit;
        border: 3px solid rgba(244, 143, 177, 0.15);
        padding: 0;
        font: inherit;
        cursor: pointer;
        outline: inherit; 
        padding: 0.3rem;
        &:hover {
            border: 3px solid #F48FB1;
          };
        &:disabled {
            background: rgba(244, 143, 177, 0.15);
            cursor: not-allowed;
            pointer-events: none;
        }
    `;

    const styledDiv = css`
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        justify-content: center;
        margin-top: 2rem;
        margin-bottom: 2rem;
        // padding: 1rem;
        // gap: 2rem;
    `;

    function handlePrev(event, prev) {
        setFilterParams({...filterParams, page: prev})
    }

    function handleNext(event, next) {
        console.log(next)
        setFilterParams({...filterParams, page: next})   
    }
    return (
        <div >
            <FilterProperties onFilterParams= {handleFilterParams}>
                {/* <ButtonFilter>
                    <ReturnContent onFilterParams= {handleFilterParams} params={filterParams} />
                </ButtonFilter> */}
            </FilterProperties>
            <ListProperties properties = {properties} />
            <div css={styledDiv}>
                <button 
                    css={StyledButton} 
                    disabled={current === 1 ? true : false}
                    onClick={event => {handlePrev(event,prev)}}>
                        PREV
                </button>
                {pages > 3 ? (   
                    <>
                    {current === 1 ? ("") : 
                    (<button css={StyledButton} onClick={event => {handleNext(event,prev)}}>
                        {current-1}</button>)}
                    <button css={StyledCurrentButton} disabled={true}>{current}</button>
                    <button css={StyledButton} onClick={event => {handleNext(event,next)}}>
                        {current+1}</button>
                        {current === 1 ? (<button css={StyledButton} onClick={event => {handleNext(event,current+2)}}>
                        {current+2}</button>) : ("")}
                    </>
                ) : (
                    <button css={StyledCurrentButton} disabled={true}>{current}</button>
                )
                }
                <button 
                    css={StyledButton}
                    disabled={current === pages ? true : false}
                    onClick={event => {handleNext(event,next)}}>
                        NEXT
                </button>

            </div>
        </div>)
}
export default PropertiesPage;