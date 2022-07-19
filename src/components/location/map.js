import { GoogleMap, LoadScript } from '@react-google-maps/api';
import { useEffect, useState } from "react";

const containerStyle = {
  width: '400px',
  height: '400px'
};

function Map({address, latitude, longitude}) {
  let defaultCoordinates = { lat: -12.079250, lng: -77.026710}

  const [coordinates , setCoordinates] = useState(defaultCoordinates);
  // const [coordinates , setCoordinates] = useState(
  //   {lat: parseFloat(latitude),
  //   lng: parseFloat(longitude)});

  useEffect(() => {
    setCoordinates({
      lat: parseFloat(latitude),
      lng: parseFloat(longitude)
    })
    console.log("address", parseFloat(latitude), parseFloat(longitude))
   
    if (address === null) {
      // fetch(`https://maps.googleapis.com/maps/api/js?key=AIzaSyAOnJfG7WLaEiGitMAAINtWpMUT04tHE5o&libraries=places&address=${address}`).
      // then(response => {
      //   console.log(response)
      //   setCoordinates(response)
      // });
    }
    
  }, [])

  
  return (
    <LoadScript
      googleMapsApiKey="AIzaSyAOnJfG7WLaEiGitMAAINtWpMUT04tHE5o"
    >
      <GoogleMap
        mapContainerStyle={containerStyle}
        // center={coordinates}
        zoom={20}
        center={coordinates}
      >
        { /* Child components, such as markers, info windows, etc. */ }
        <></>
      </GoogleMap>
    </LoadScript>
  )
}

export default Map