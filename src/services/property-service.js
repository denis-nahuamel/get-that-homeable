import apiFetch from "./api-fetch"

export const addProperty = (property) => {
    return apiFetch("/add-property", {body: property}).then(response => {return response})
 }