import axios from "axios";

export const api = axios.create({
  // URL that repeats in all requests
  baseURL: "https://dtmoney-lime.vercel.app/api",
});
