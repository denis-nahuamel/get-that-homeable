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
import { getProperty } from "../../services/property-service";
import { useEffect, useState } from "react";
import { useAuth } from "../../context/auth-context";

import Map from '../../components/location/map' // import the map here


export const PropertyData = () => {
    const [state, setState] = useState({
        loading: true,
        data: {},
        error: null
      });
    const { loading, data: property, error } = state;

    let {price, operation, property_type, photos, address, bedrooms, bathrooms, area, pets, about, latitude, longitude, maintenance } = property;
    const {user} = useAuth();

    let params = useParams()
    let id = params["*"]
    const location = useLocation();
    console.log(user)
    useEffect(()=> {
        if (location.state !== null) {
            setState({
                loading: false,
                data: location.state.propertyData,
                error: null
            })
        } else {
            getProperty(id).then(response=>{
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
        }, [])
    
    function handleContact(event) {
        
    }
    function handleFavorite(event) {
        
    }
    const stylesdiv = css`
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 0.5rem;
        margin: 0.2rem;
        padding: 0.2rem;
        margin-top: 20px;
        margin-bottom: 20px;

        @media (max-width: 800px) {
            display: flex;
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
                        <button css={css`${sendButton}`} onClick={handleContact} >
                            CONTACT ADVERTISER
                        </button>
                        <button css={styledButton} onClick={handleFavorite}>
                            <FavoriteBorderOutlinedIcon fontSize="large"/>
                            <p>Add to favorites</p>
                        </button>     
                    </div>
                ) : 
                (
                    <div css={css`${contactCard}`}>
                        Join as homeseeker to contact the advertiser    
                    </div>
                )
            }
            <div>
                <Map address={null}/>
            </div>
            </div>
            </div>)}
        </div>
    )
}
export default PropertyData;