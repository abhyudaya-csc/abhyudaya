import axios from "axios";

const AUTH_TOKEN_KEY = "abh_auth_token";

const rawBaseURL =
  import.meta.env.VITE_API_BASE_URL ||
  import.meta.env.VITE_BACKEND_API_URL ||
  "";

const baseURL = rawBaseURL.replace(/\/+$/, "");

if (!baseURL) {
  console.warn(
    "Missing VITE_BACKEND_API_URL (or VITE_API_BASE_URL). API requests may hit relative paths and return 404.",
  );
}

const api = axios.create({
  baseURL,
  withCredentials: true,
});

api.interceptors.request.use((config) => {
  const token = localStorage.getItem(AUTH_TOKEN_KEY);

  if (token) {
    config.headers = config.headers || {};
    if (!config.headers.Authorization) {
      config.headers.Authorization = `Bearer ${token}`;
    }
  }

  return config;
});

export default api;