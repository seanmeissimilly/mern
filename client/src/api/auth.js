import axios from "axios";
const BASE_URL = "http://localhost:3000/api";

export const loginRequest = async (data) => {
  const response = await axios.post(`${BASE_URL}/login/`, data);
  return response.data;
};

export const registerRequest = async (data) => {
  const response = await axios.post(`${BASE_URL}/register/`, data);
  return response.data;
};

export const logoutRequest = async () => {
  const response = await axios.post(`${BASE_URL}/logout/`);
  return response.data;
};
