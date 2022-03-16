import axios from "axios";

// settar informações que são iguais em todas as requests
export const api = axios.create({
  // endereço que se repete em todas as requests
  baseURL: 'http://localhost:3000/api',
})