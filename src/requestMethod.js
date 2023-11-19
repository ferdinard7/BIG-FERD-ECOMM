import axios from "axios";

const BASE_URL = "https://e-comm-backend-2isk.onrender.com/api/";
const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0OTAyMDI5ODU3N2UyYTBhZjQ1MjcxNyIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY4ODk4NDk1NSwiZXhwIjoxNjg5MjQ0MTU1fQ.0EJRO62xxpyJkfrKOuB3Bzrr-Mxm1Dl5i6gTlkQk4nY";

export const publicRequest = axios.create({
    baseURL: BASE_URL,
});

export const userRequest =axios.create({
    baseURL: BASE_URL,
    header: {token: `Bearer ${TOKEN}`}
})