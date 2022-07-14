import { tokenKey } from "../config";
import apiFetch from "./api-fetch"

export const getUser = () => {
   return apiFetch("/profile")
   .then(response => {
      return response;
     })
}
export const signupUser = (user) => {
   return apiFetch("/signup", {body: user}).then(response => {
      const {token, ...user} = response;
        sessionStorage.setItem(tokenKey,token )
        return user;
      })
}