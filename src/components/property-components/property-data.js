/** @jsxImportSource @emotion/react */
import { css, ThemeProvider } from "@emotion/react";
import { sendButton } from "../../styles/form";
import { contactCard } from "../../styles/property-data";
import { card } from "../../styles/select-profile";
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import MonetizationOnOutlinedIcon from '@mui/icons-material/MonetizationOnOutlined';
import { contColumn, contRow, contRowBetween, contRowCenter, contRowCenterGap, contStart } from "../../styles/utils";
import Slider from "../slider";
import { montW400S15, montW400S24, montW400S36 } from "../../styles/typography";
import DataContainer from "./data-container";
import {useLocation} from "react-router-dom";
import { useParams } from "react-router-dom"
import { getProperty, saveProperty } from "../../services/property-service";
import { useEffect, useState } from "react";
import { useAuth } from "../../context/auth-context";
import { useSave } from "../../context/save-context";

import Map from '../../components/location/map' // import the map here


export const PropertyData = () => {
    const {user} = useAuth();
    const {savedProperties, savePropertyContext, getPropertyContext, updatePropertyContext} = useSave()

    const [state, setState] = useState({
        loading: true,
        data: {},
        error: null
      });
    const { loading, data: property, error } = state;
    const {id, price, operation, property_type, photos, 
        address, bedrooms, bathrooms, area, pets, about, 
        latitude, longitude, maintenance, landlord,
     } = property;
    console.log(savedProperties)

    const [properties, setProperties] = useState(null)
    console.log(property)
    const [isFavorite, setIsfavorite] = useState(false)
    const [isContacted, setIsContacted] = useState(false)

    // console.log(savedProperties)
    let params = useParams()
    let idParam = params["*"]
    const location = useLocation();
    
    useEffect(()=> {
        console.log("effect")
        console.log(savedProperties)

        if (location.state !== null) {
            setState({
                loading: false,
                data: location.state.propertyData,
                error: null
            })
        } else {
            getProperty(idParam).then(response=>{
                setState({
                    loading: false,
                    data: response,
                    error: null
                })
            }).catch(error => {
                console.log(error)
                setState({
                    loading: false,
                    data: {},
                    error: "The porperty you are looking for does not exist"
                })
            })
        }   
        if (user?.user_type === "homeseeker") {
            if (savedProperties === null) {
                getPropertyContext()            
            } else if (Number.isInteger(savedProperties)) {
                console.log("number")
                getPropertyContext()            
            }
            // getPropertyContext()            
            console.log(savedProperties)
            let temp = savedProperties?.map(item=>item.property)
            setProperties(temp)
            
            let foo = savedProperties?.filter(item=>item.property.id===property.id)
            if (foo?.length>0) {
                if (foo[0].favorite === true) {
                    setIsfavorite(true)
                } 
                if (foo[0].contacted === true) {
                    setIsContacted(true)
                }
            }        
        } 
        
    }, [user, savedProperties, property, isContacted, isFavorite])

    function getSavedPropertyId(id) {
        let foo = savedProperties?.filter(item=>item.property.id===id)
        return foo[0]?.id
    }
    function handleContact(event, id) {
        const savedId = getSavedPropertyId(id)
        if (!isContacted && !isFavorite) {
            console.log("one")      
            const body = {
                contacted: true,
                property_id: id
            }
            savePropertyContext(body)
        } else if (!isContacted) {
            console.log("two")   
            const body = {
                contacted: true,
            }     
            updatePropertyContext(body, savedId)
        }
    }
    function handleFavorite(event, id) {
        const savedId = getSavedPropertyId(id)
        if (!isContacted && !isFavorite) {
            const body = {
                favorite: true,
                property_id: id
            }
            savePropertyContext(body)
        } else if (!isFavorite) {         
            const body = {
                favorite: true,
            }
            updatePropertyContext(body, savedId)
        }
    }
    const stylesdiv = css`
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        justify-content: center;
        gap: 0.5rem;
        margin: 0.2rem;
        padding: 0.2rem;
        margin-top: 20px;
        margin-bottom: 20px;

        @media (max-width: 800px) {
            display: flex;
            flex-wrap: wrap;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            gap: 1rem;
            margin: 0.2rem;
            padding: 0.2rem;

            }
        `;
    const stylesdivSecond = css`
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        gap: 1rem;
        margin: 0.2rem;
        padding: 0.2rem;
        `;

    const styledButton = css`
        background-color: transparent;
        background-repeat: no-repeat;
        border: none;
        cursor: pointer;
        `;
    return (
        <div css={stylesdiv}>
            {loading === true ? "Loading..." : 
            (error ? <p>{error}</p> : <div  >
            {/* info part */}
            <div >
                <Slider photos={photos}/>
                <div css={stylesdivSecond}>
                    <div css={css`${contRowBetween}`} >
                        <p css={css`${montW400S24}`}> {address}</p>
                    </div>
                    <div css={css`${contRowCenter};`}>
                        <MonetizationOnOutlinedIcon />
                        <p css={css`${montW400S24}`}>{price}</p>
                    </div>
                </div>
                {/* <div css={css`${contRowBetween}`} >
                    <p css={css`${montW400S15}`}> {direction2}</p>
                    <p css={css`${montW400S15}`}>{price2}</p>    
                </div> */}
                <DataContainer bedrooms={bedrooms} bathrooms={bathrooms} area={area} pets={pets} />
                <div css={css`${contStart}`}>{about}</div>
                <div css={css`${contStart}`}>{address}</div>
                <div css={css`${contStart}`}>{property_type}</div>
                <div css={css`${contStart}`}>{operation}</div>
                <div css={css`${contStart}`}>{operation === "rent" ? "+" + maintenance : ""}</div>
            </div>
            {/* contact advertiser */}
            <div css={stylesdiv}>
            { user?.user_type === "homeseeker" ?
                ( 
                    <div css={css`${contactCard}`}>
                        {!isContacted ? 
                        (<button css={css`${sendButton}`} onClick={event=>{handleContact(event,id)}} >
                            CONTACT ADVERTISER
                        </button>) : 
                        (<div>
                            <p>{landlord.email}</p>
                            <p>{landlord.phone}</p>
                        </div>)
                        }
                        {!isFavorite ?
                        (<button css={styledButton} onClick={event=>{handleFavorite(event,id)}}>
                            <FavoriteBorderOutlinedIcon fontSize="large"/>
                            <p>Add to favorites</p>
                        </button>) : "" }    
                    </div>
                ) : 
                (
                    <div css={css`${contactCard}`}>
                        Join as homeseeker to contact the advertiser    
                    </div>
                )
            }
            <div>
                <Map address={address} latitude={latitude} longitude={longitude}/>
            </div>
            </div>
            </div>)}
        </div>
    )
}
export default PropertyData;