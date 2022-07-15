import { tokenKey, BASE_URI } from "../config";

export default async function apiFetch(
  endpoint,
  { method, headers, body, property_creator = false } = {}
) {
   const token = sessionStorage.getItem(tokenKey);
  //const token = "G1xBV2tpHQCCn63y13upccWh";

  if (token) {
    headers = {
      Authorization: `Token token=${token}`,
      ...headers,
    };
  }

  if (body && (property_creator === false)) {
    headers = {
      "Content-Type": "application/json",
      ...headers,
    };

    body = body ? JSON.stringify(body) : null
  } else if (body && (property_creator === true)) {
    headers = {
      ...headers,
    };
  } 

  const config = {
    method: method || (body ? "POST" : "GET"),
    headers,
    body: body
  };

  const response = await fetch(BASE_URI + endpoint, config);
  
  let data;
  if (!response.ok) {
    try {
      data = await response.json();
    } catch (error) {
      throw new Error(response.statusText);
    }
    throw new Error(data.errors);
  }

  try {
    data = await response.json();
  } catch (error) {
    data = response.statusText;
  }
  return data;
}