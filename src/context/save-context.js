import { createContext, useContext, useEffect, useState } from "react";
import { getSavedProperties, saveProperty } from "../services/property-service";

const SaveContext = createContext();
export const SaveProvider = (props) => {
    const [savedProperties, setSavedProperties] = useState(null);
    useEffect(() => {
        getSavedProperties()
        .then((response)=> {
            // console.log(response)
            setSavedProperties(response)
    })
    .catch((e)=> {
        ; console.log(e)})
    }, [])
    const getPropertyContext = (body) => {
        return getSavedProperties().then((response)=> {
            // console.log(response)
            setSavedProperties(response)
        })}
    const savePropertyContext = (body) => {
        return saveProperty(body).then(response => {
            setSavedProperties(savedProperties.push(response))
            console.log(savedProperties)
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