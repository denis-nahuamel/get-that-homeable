import apiFetch from "./api-fetch"

export const addProperty = (property) => {
    return apiFetch("/properties", {body: property}).then(response => {return response})
 }
export const getProperties = () => {
    return apiFetch("/properties").then(response => {return response})
}