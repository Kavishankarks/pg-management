import api from './api';

export const reviewService = {
  async getPGReviews(pgId) {
    const response = await api.get(`/reviews/${pgId}`);
    return response.data;
  },

  async createReview(reviewData) {
    const response = await api.post('/reviews', reviewData);
    return response.data;
  },

  async updateReview(id, reviewData) {
    const response = await api.put(`/reviews/${id}`, reviewData);
    return response.data;
  },

  async deleteReview(id) {
    const response = await api.delete(`/reviews/${id}`);
    return response.data;
  },
};
