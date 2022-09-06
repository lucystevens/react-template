import axios from "axios";
import ErrorResponse from "models/ErrorResponse";
import { LoginDto } from "models/LoginDto";

// Set token on all requests
axios.interceptors.request.use((config) => {
    let token = getAuthToken()
    if(token){
        config.headers["Authorization"] = `Bearer ${token}`;
    }
    return config;
});

export const login = (
    dto: LoginDto,
    handleSuccess: () => void,
    handleError: (err: ErrorResponse) => void
    ) => {

    axios.post("/api/admin/login", dto)
        .then(({ data }) => {
            localStorage.setItem("token", data.token)
            handleSuccess()
        })
        .catch(e => handleError(e.response.data))
}

export const logout = () => {
    localStorage.removeItem("token")
}

export const setAuthToken = (token: string) => {
    localStorage.setItem("token", token)
}

export const getAuthToken = (): string | null => {
    return localStorage.getItem("token")
}