import axios from "axios";

export const instance = axios.create({
    baseURL: 'https://kuda-to-tam/',
})
