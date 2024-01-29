import axios from 'axios';

const API_BASE_URL = '/api';

const api = {
  getVideos: async () => {
    try {
      const response = await axios.get(`${API_BASE_URL}/videos`);
      return response.data;
    } catch (error) {
      throw error;
    }
  },
  getUserVideos: async (userId: string) => {
    try {
      const response = await axios.get(`${API_BASE_URL}/users/${userId}/videos`);
      return response.data;
    } catch (error) {
      throw error;
    }
  },
  uploadVideo: async (formData: FormData) => {
    try {
      const response = await axios.post(`${API_BASE_URL}/upload`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      return response.data;
    } catch (error) {
      throw error;
    }
  },
};

export default api;
