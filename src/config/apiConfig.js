import axios from "axios"

// export const API_BASE_URL = "https://independent-solace-production.up.railway.app"
export const API_BASE_URL = "http://localhost:8181"

const jwt = localStorage.getItem("jwt")

export const api = axios.create({
    baseURL :API_BASE_URL,
    headers:{
        "Authorization": `Bearer ${jwt}`,
        'Content-Type': "application/json"
    }
})
export const publicApi = axios.create({
    baseURL: API_BASE_URL,
    headers: {
        "Content-Type": "application/json"
    }
});