import axios from "axios";

const api = axios.create({
    baseURL: import.meta.env.VITE_BACKEND_URL,
    withCredentials: true,
    timeout: 90000,   // free-tier services can take ~60s to wake up
})

// Retry GET requests a few times if a sleeping service returns 502/503/504
api.interceptors.response.use(undefined, async (error) => {
    const cfg = error.config
    const status = error.response?.status
    const isGet = cfg?.method === "get"

    if (cfg && isGet && [502, 503, 504].includes(status)) {
        cfg._retries = (cfg._retries || 0) + 1
        if (cfg._retries <= 3) {
            await new Promise((r) => setTimeout(r, 5000))
            return api(cfg)
        }
    }
    return Promise.reject(error)
})

export default api