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

function handleScriptLoad(updateQuery, autoCompleteRef) {
  autoComplete = new window.google.maps.places.Autocomplete(
    autoCompleteRef.current,
    // { types: ["(cities)"] }
  );
  autoComplete.setFields(["address_components", "formatted_address"]);
  autoComplete.addListener("place_changed", () =>
    handlePlaceSelect(updateQuery)
  );
}

async function handlePlaceSelect(updateQuery) {
  const addressObject = autoComplete.getPlace();
  const query = addressObject.formatted_address;
  updateQuery(query);
  console.log(addressObject);
}

function SearchLocationInput() {
  const [query, setQuery] = useState("");
  const autoCompleteRef = useRef(null);

  useEffect(() => {
    loadScript(
      `https://maps.googleapis.com/maps/api/js?key=AIzaSyAOnJfG7WLaEiGitMAAINtWpMUT04tHE5o&libraries=places`,
      () => handleScriptLoad(setQuery, autoCompleteRef)
    );
    // loadScript(
    //    https://maps.googleapis.com/maps/api/js?key=AIzaSyAOnJfG7WLaEiGitMAAINtWpMUT04tHE5o&libraries=places&callback=initMap
    //   `https://maps.googleapis.com/maps/api/js?key=${process.env.REACT_APP_GOOGLE_API_KEY}&libraries=places`,
    //   () => handleScriptLoad(setQuery, autoCompleteRef)
    // );
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
{/* <div className="search-location-input">
      <input
        ref={autoCompleteRef}
        onChange={event => setQuery(event.target.value)}
        placeholder="Enter a City"
        value={query}
      />
    </div> */}

export default SearchLocationInput;