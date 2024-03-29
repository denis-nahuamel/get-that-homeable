import apiFetch from "./api-fetch"

export const addProperty = (property, queryParams) => {
    return apiFetch("/properties",  {body: property, property_creator: true}).then(response => {return response})
 }
 export const getProperty = (id) => {
    return apiFetch("/properties/"+id).then(response => {
        console.log(response)
        return response
    })
 }
export const getPropertiesHome = ( )=> {
    return apiFetch("/front_properties").then(response => {return response})
}
export const getProperties = ({ address, min_price, max_price, min_area, max_area, pets, page,
    bedrooms, bathrooms, operation_rent, operation_sale, property_type_apartment, property_type_house, limit}) => {
    const endpoint = `/properties?` + 
    `address${address ? "="+address : ""}` + 
    `&min_price${min_price ? "="+min_price : ""}` +
    `&max_price${max_price ? "="+max_price : ""}` +
    `&min_area${min_area ? "="+min_area : ""}` +
    `&max_area${max_area ? "="+max_area : ""}` +
    `&pets${pets ? "="+pets : ""}` +
    `&page${page ? "="+page : ""}` +
    `&limit${limit ? "="+limit : ""}` +
    `&bedrooms${bedrooms ? "="+bedrooms : ""}` +
    `&bathrooms${bathrooms ? "="+bathrooms : ""}` +
    `&operation%5B%5D${operation_rent ? "="+operation_rent : ""}` +
    `&operation%5B%5D${operation_sale ? "="+operation_sale : ""}` +
    `&property_type%5B%5D${property_type_apartment ? "="+property_type_apartment : ""}` +
    `&property_type%5B%5D${property_type_house ? "="+property_type_house : ""}`

    return apiFetch(endpoint).then(response => {
        console.log(endpoint)
        return response
    })
}

export const getAddresses = ({ address }) => {
    const endpoint = `/addresses?` + 
    `address${address ? "="+address : ""}`

    return apiFetch(endpoint).then(response => {
        return response
    })
}

export const getListedProperties = (id) => {
    const endpoint = `/listed_properties`

    return apiFetch(endpoint).then(response => {
        return response
    })
}
export const editProperty = (body, id) => {
    return apiFetch("/properties/"+id, {method:"PUT", body: body}).then((response)=>{ return response})
}
export const getSavedProperties = (id) => {
    const endpoint = `/saveds`

    return apiFetch(endpoint).then(response => {
        return response
    })
}

export const saveProperty = (body) => {
    const endpoint = `/saveds`

    return apiFetch(endpoint, {body: body}).then(response => {
        return response
    })
}

export const updateProperty = (body, id) => {
    const endpoint = `/saveds/${id}`

    return apiFetch(endpoint, {body: body, method: "PUT"}).then(response => {
        return response
    })
}