import axios from "axios";
import localService from "./localService";

const fetcher = axios.create({
   baseURL: process.env.API_URL || "https://jiranew.cybersoft.edu.vn/api/",
   headers: {
      TokenCybersoft:
         "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJCb290Y2FtcCAzMiIsIkhldEhhblN0cmluZyI6IjE3LzA0LzIwMjMiLCJIZXRIYW5UaW1lIjoiMTY4MTY4OTYwMDAwMCIsIm5iZiI6MTY1MzkzMDAwMCwiZXhwIjoxNjgxODM3MjAwfQ.Yk1H5QCjda1n9Cd5-k2yU_DLnRqRvaB7FIkn1hIuPE0",
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
