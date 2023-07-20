import axios from "axios";
import localService from "./localService";

const fetcher = axios.create({
   baseURL: process.env.API_URL || "https://jiranew.cybersoft.edu.vn/api/",
   headers: {
      TokenCybersoft:
         "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJCb290Y2FtcCA1MiIsIkhldEhhblN0cmluZyI6IjIxLzAyLzIwMjQiLCJIZXRIYW5UaW1lIjoiMTcwODQ3MzYwMDAwMCIsIm5iZiI6MTY4MTE0NjAwMCwiZXhwIjoxNzA4NjIxMjAwfQ.2JFd_iMYjvwU4SaKsLmL_x-kEZcKonddkHVR7z3Gxbc",
   },
});

fetcher.interceptors.request.use(
   (config) => {
      // Autho Token
      const { accessToken } = localService.user.get() || {};

      if (accessToken) {
         config.headers.Authorization = `Bearer ${accessToken}`;
      }
      return config;
   },
   (error) => {
      return Promise.reject(error);
   }
);

fetcher.interceptors.response.use(
   // Success
   (response) => {
      return response.data.content;
   },

   (error) => {
      return Promise.reject(error.response.data.message);
   }
);

export default fetcher;
