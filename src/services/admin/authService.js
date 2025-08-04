import axios from "axios";
const API_URL = "http://localhost:5050/api";

export const registerUser = (data) => axios.post(`${API_URL}/auth/register`, data);
export const loginUser = (data) => axios.post(`${API_URL}/auth/login`, data);

export const fetchPets = (token) =>
  axios.get(`${API_URL}/pets`, { headers: { Authorization: `Bearer ${token}` } });

export const addPet = (data, token) =>
  axios.post(`${API_URL}/pets`, data, { headers: { Authorization: `Bearer ${token}` } });

export const updatePet = (id, data, token) =>
  axios.put(`${API_URL}/pets/${id}`, data, { headers: { Authorization: `Bearer ${token}` } });

export const deletePet = (id, token) =>
  axios.delete(`${API_URL}/pets/${id}`, { headers: { Authorization: `Bearer ${token}` } });
