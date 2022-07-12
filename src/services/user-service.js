import apiFetch from "./api-fetch"

export const getUser = () => {
   return apiFetch("/profile").then(response => {return response})
}
export const signupUser = (user) => {
   return apiFetch("/signup", {body: user}).then(response => {return response})
}