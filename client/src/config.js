import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "https://resume-builder-api.onrender.com"
  //"http://localhost:5000/"
});
