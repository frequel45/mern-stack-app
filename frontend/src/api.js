import axios from 'axios';

const API_BASE_URL = 'http://localhost:5000/api';

export const fetchHomepage = async () => {
  const response = await axios.get(`${API_BASE_URL}/homepage`);
  return response.data;
};

export const fetchProductDetails = async (id) => {
  const response = await axios.get(`${API_BASE_URL}/products/${id}`);
  return response.data;
};

export const addToCart = async (productId, quantity) => {
  await axios.post(`${API_BASE_URL}/cart`, { productId, quantity });
};

export const fetchCart = async () => {
  const response = await axios.get(`${API_BASE_URL}/cart`);
  return response.data;
};

export const removeFromCart = async (productId) => {
  await axios.delete(`${API_BASE_URL}/cart/${productId}`);
};

export const updateCart = async (productId, quantity) => {
  await axios.put(`${API_BASE_URL}/cart/${productId}`, { quantity });
};
