import { createContext, useContext, useEffect, useState } from "react";
import { getSavedProperties, saveProperty, updateProperty } from "../services/property-service";

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
        return saveProperty(body).then(response => {
            setSavedProperties(prev=>[...prev, response])
        })}
    const updatePropertyContext = (body, id) => {
        let temp = [...savedProperties]
        temp = temp.filter(item => item.id !== id)
        return updateProperty(body, id).then(response => {
            console.log(response)
            setSavedProperties([...temp, response])
        })}

    const value = {
        savedProperties,
        getPropertyContext,
        savePropertyContext,
        updatePropertyContext
    }
    return <SaveContext.Provider value={value}  {...props} />
}
export const useSave = () => {
    return useContext(SaveContext)
}