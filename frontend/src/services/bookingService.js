import api from './api';

export const bookingService = {
  async getUserBookings() {
    const response = await api.get('/bookings');
    return response.data;
  },

  async getBookingById(id) {
    const response = await api.get(`/bookings/${id}`);
    return response.data;
  },

  async createBooking(bookingData) {
    const response = await api.post('/bookings', bookingData);
    return response.data;
  },

  async updateBooking(id, bookingData) {
    const response = await api.put(`/bookings/${id}`, bookingData);
    return response.data;
  },

  async cancelBooking(id) {
    const response = await api.delete(`/bookings/${id}`);
    return response.data;
  },

  async checkAvailability(pgId, dates) {
    const response = await api.post(`/bookings/check-availability`, {
      pgId,
      ...dates,
    });
    return response.data;
  },
};
