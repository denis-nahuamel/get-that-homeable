/** @jsxImportSource @emotion/react */
import { css, ThemeProvider } from "@emotion/react";
import React, { useState, useEffect, useRef } from "react";
import { inputForm, labelForm, labelInputCont } from "../../styles/form";

let autoComplete;

const loadScript = (url, callback) => {
  let script = document.createElement("script");
  script.type = "text/javascript";

  if (script.readyState) {
    script.onreadystatechange = function() {
      if (script.readyState === "loaded" || script.readyState === "complete") {
        script.onreadystatechange = null;
        callback();
      }
    };
  } else {
    script.onload = () => callback();
  }

  script.src = url;
  document.getElementsByTagName("head")[0].appendChild(script);
};

function handleScriptLoad(updateQuery, autoCompleteRef, onLocation) {
  autoComplete = new window.google.maps.places.Autocomplete(
    autoCompleteRef.current,
    // { types: ["(cities)"] }
  );
  autoComplete.setFields(["address_components", "formatted_address", "geometry"]);
  autoComplete.addListener("place_changed", () =>
    handlePlaceSelect(updateQuery, onLocation)
  );
}

async function handlePlaceSelect(updateQuery, onLocation) {
  const addressObject = autoComplete.getPlace();
  console.log("adsf", addressObject.geometry.location.lat())
  onLocation({
    lat: addressObject.geometry.location.lat(),
    long: addressObject.geometry.location.lng()
  })
  const query = addressObject.formatted_address;
  updateQuery(query);
  console.log(addressObject)
}

function SearchLocationInput({onLocation}) {
  const [query, setQuery] = useState("");
  const autoCompleteRef = useRef(null);

  useEffect(() => {
    loadScript(
      `https://maps.googleapis.com/maps/api/js?key=[key]&libraries=places`,
      () => handleScriptLoad(setQuery, autoCompleteRef, onLocation)
    );
  }, []);

  return (
    <div css={css`${labelInputCont}`}>
                <label css={css`${labelForm}`}>ADDRESS</label>
                <input css={css`${inputForm}; width: 90%`}
                    type="text" 
                    id="address" 
                    name = "address"
                    ref={autoCompleteRef}
                    onChange={event => setQuery(event.target.value)}
                    value={query}
                    placeholder="start typing to autocomplete"/>
        </div>
    
  );
}


export default SearchLocationInput;
