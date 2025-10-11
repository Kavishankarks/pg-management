import api from './api';

export const pgService = {
  async getAllPGs(params = {}) {
    const response = await api.get('/pgs', { params });
    return response.data;
  },

  async getPGById(id) {
    const response = await api.get(`/pgs/${id}`);
    return response.data;
  },

  async searchPGs(searchParams) {
    const response = await api.get('/pgs/search', { params: searchParams });
    return response.data;
  },

  async createPG(pgData) {
    const response = await api.post('/pgs', pgData);
    return response.data;
  },

  async updatePG(id, pgData) {
    const response = await api.put(`/pgs/${id}`, pgData);
    return response.data;
  },

  async deletePG(id) {
    const response = await api.delete(`/pgs/${id}`);
    return response.data;
  },

  async uploadImages(id, formData) {
    const response = await api.post(`/pgs/${id}/images`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    return response.data;
  },
};
