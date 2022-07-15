/** @jsxImportSource @emotion/react */
import { css, ThemeProvider } from "@emotion/react";
import { alpha, styled } from '@mui/material/styles';
import { anotherInput, checkbox, inputBasic, 
    labelForm, labelInputCont, labelOptions, sendButton, textArea, thumbImage, thumbImages, toggle } from "../../styles/form";
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import {  contColumn, contColumnStart, contRowCenter, } from "../../styles/utils";
import { useState } from "react";
import { theme } from "../themes";
import { PetAllowed, RentSale } from "../rent-sale.component";
import {InputComponent, SelectComponent} from "../input-component";
import { addProperty } from "../../services/property-service";
import SearchLocationInput from "../location/search-location-input";
import { montW500S20 } from "../../styles/typography";
import { ConstructionOutlined } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";

function PropertyForm() {
    const navigate = useNavigate();

    const [rentSale, setRentSale] = useState('rent');

    const [photos, setPhotos] = useState(null);
	const [error, setError] = useState(false)
    const handleRentSale= (_event,value)=>{
        setRentSale(value)
        console.log("renst", value)
    }
    function handleFileChange(event) {
		setPhotos(event.target.files)
	}
   
    function ImgPreview({photos}) {
		return (
			photos? Array.from(photos).map(function (photo, idx) {
        return <img css={css`${thumbImage}`} key={idx} src={URL.createObjectURL(photo)} alt={photo.name} />;
    	}) : ""
		)
	}
    const stylesdiv = css`
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 1rem;
    `;

    const [checked, setChecked] = useState({
        apartment: false, 
        house: false
    });

    function handleChecked(event, property_type)  {
        if (property_type === "apartment") {
            setChecked({
                apartment: true, 
                house: false
            })
        } else if (property_type === "house") {
            setChecked({
                apartment: false, 
                house: true
            })
        }
        // console.log(checked)
   
    };
    const handleSubmit =(event)=>{
        let values = event.target.elements;
        event.preventDefault();
        
        const params = {
            operation: rentSale==="rent"?"rent": "sale",
            address: values.address.value,//
            // montly: rentSale==="rent"? values.montlyRent.value: null,
            maintenance:rentSale==="rent"? parseInt(values.maintenance.value):null, 
            pets:rentSale==="rent"? values.pets.checked:null,
            price: parseInt(values.price.value),
            property_type: checked.apartment===true?"apartment": "house",
            bedrooms: parseInt(values.bedrooms.value),
            bathrooms:parseInt(values.bathrooms.value),
            area: parseFloat(values.area.value),
            about: values.about.value,//

        }
        const formData = new FormData()
        formData.append("property[about]", params.about)
		formData.append("property[address]", params.address)
		formData.append("property[price]", params.price)
		formData.append("property[operation]", params.operation)
        formData.append("property[maintenance]", params.maintenance)
		formData.append("property[property_type]", params.property_type)
		formData.append("property[area]", params.area)
		formData.append("property[bedrooms]", params.bedrooms)
		formData.append("property[bathrooms]", params.bathrooms)

        console.log(params)
        setError(false)
        if (photos) {
            console.log(photos.length)
            if (photos.length > 3 ) {
                setError(true)
            } else {
                for (let i = 0; i < photos.length; i++) {
                    formData.append("property[photo][]", photos[i])
                    console.log(photos[i].size)
                    if (Math.round((photos[i].size / 1e6)) > 5) {
                        setError(true)
                    }
                }
            }
        }   
        console.log(error)
        if (error === false) {
            console.log("api")
            addProperty(formData).then((response) => {
                console.log(response)
                navigate("/list-properties")
            })
            .catch(error=>console.log(error));
        } 
    }
    return (
        <div css={stylesdiv}>
            <div css={css`${contColumnStart}`}>
            <form onSubmit={handleSubmit}>
                <div css={css`${labelInputCont}`}>
                    <label css={css`${labelForm}`}>OPERATION TYPE</label>
                    <ThemeProvider theme={theme}>
                        <ToggleButtonGroup
                            color="pink"
                            value={rentSale}
                            exclusive
                            onChange={handleRentSale}
                            aria-label="text alignment"
                            >
                            <ToggleButton
                            css={css`${toggle}`} value="rent" aria-label="left aligned">
                                Rent
                            </ToggleButton>
                            <ToggleButton css={css`${toggle}`} value="sale" aria-label="centered">
                                Sale
                            </ToggleButton>
                        </ToggleButtonGroup>
                    </ThemeProvider>
                </div>
                <SearchLocationInput onChange={() => null} />
                {/* <InputComponent labelText={"ADDRESS"} 
                        idInput={"address"} 
                        placeholder={"start typing to autocomplete"} width={"600px"}/> */}
                
                <RentSale value={rentSale}/>
                <div css={css`${labelInputCont}`}>
                    <label css={css`${labelForm}`}>PROPERTY TYPE</label>
                    <div css={css`${contRowCenter}`}>
                        <div css={css`${contRowCenter}`}>
                        <input
                            css={css`${checkbox}`}
                            name="apartment"
                            checked={checked.apartment}
                            onChange={event=>{handleChecked(event,"apartment")}}
                            type="checkbox"
                        />
                            <label css={css`${labelForm}`}>Apartment</label>
                        </div>
                        <div css={css`${contRowCenter}`}>
                            <input 
                            css={css`${checkbox}`} 
                            type="checkbox" 
                            name="house" 
                            id="house"
                            checked={checked.house}
                            onChange={event=>{handleChecked(event,"house")}}/>
                            <label css={css`${labelForm}`}>House</label>
                        </div>
                    </div>
                </div>
                {/* BEDROOMS AND BATHROOMS */}
                <div css={css`${labelOptions}`}>
                <SelectComponent labelText={"BEDROOMS"} id={"bedrooms"}/>
                <SelectComponent labelText={"BATHROOMS"} id={"bathrooms"} />
                    <div css={css`${contColumn}`}>
                        <label css={css`${labelForm}`}>AREA IN M2</label>
                        <input css={css`${anotherInput}`} id="area" name="area" type="text"/>
                    </div>
                </div>
                {/* pets allowd */}
                <PetAllowed value={rentSale} id={"pets"} />
                <div>
                    <label css={css`${labelForm}`}>
                        Allowing pets increases the likehood of renters  liking the property by 9001%.
                        It also makes you a better person.
                    </label>
                </div>
                <div css={css`${labelInputCont}`}>
                    <label css={css`${labelForm}`}>ABOUT THIS PROPERTY</label>
                    <textarea css={css`${textArea}`} 
                        id="about"
                        name="about"
                        placeholder="My apartment is great because..."
                        />
                </div>
                <div css={css`${labelInputCont}`}>
                    <label css={css`${montW500S20}`} >Photos</label>
                </div>
                <div css={css`${labelInputCont}`}>
                    <label css={css`${labelForm}`}>Upload as many photos as you wish</label>
                    <input css={css`${inputBasic}`} name="photo" multiple type="file" accept="image/*" onChange={handleFileChange}/>
                    {/* <input css={css`${inputBasic}`} type="file"/> */}
                </div>
                {/* <div>
                    <input name="photo" multiple type="file" accept="image/*" onChange={handleFileChange}/>
                </div> */}
                <div>
                    <button css={css`${sendButton}`} type="submit">PUBLISH PROPERTY LISTING</button>
                </div>
            </form>
            
            <div css={css`${thumbImages}`}>
                    <ImgPreview photos={photos}/>
            </div>
		    <p>{error === true ? "Only 3 files of up to 5MB are allowed" : ""}</p>
            </div>
        </div>
    )
}
export default PropertyForm;