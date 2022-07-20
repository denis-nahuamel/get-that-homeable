import { createContext, useContext, useEffect, useState } from "react";
import { getSavedProperties, saveProperty } from "../services/property-service";

const SaveContext = createContext();
export const SaveProvider = (props) => {
    const [savedProperties, setSavedProperties] = useState(null);
    // useEffect(() => {
    //     getSavedProperties()
    //     .then((response)=> {
    //         setSavedProperties(response)
    // })
    // .catch((e)=> {
    //     ; console.log(e)})
    // }, [])
    const getPropertyContext = () => {
        return getSavedProperties().then((response)=> {
            console.log(response)
            setSavedProperties(response)
        })}
    const savePropertyContext = (body) => {
        let temp = [...savedProperties]
        return saveProperty(body).then(response => {
            let temp = null
            savedProperties ? temp = savedProperties : temp = []
            console.log(savedProperties)
            setSavedProperties(prev=>[...prev, response])
            // console.log("TEMP PRINT" + temp)
            // console.log(savedProperties)
        })}
    
    const value = {
        savedProperties,
        getPropertyContext,
        savePropertyContext
    }
    return <SaveContext.Provider value={value}  {...props} />
}
export const useSave = () => {
    return useContext(SaveContext)
}