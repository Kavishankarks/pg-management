import { useState, useEffect } from 'react';
import { bookingService } from '../services/bookingService';
import { toast } from 'react-toastify';
import { Calendar, MapPin, IndianRupee } from 'lucide-react';
import { formatPrice } from '../utils/currency';

const UserDashboard = () => {
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchBookings();
  }, []);

  const fetchBookings = async () => {
    try {
      const data = await bookingService.getUserBookings();
      setBookings(data);
    } catch (error) {
      toast.error('Failed to load bookings');
    } finally {
      setLoading(false);
    }
  };

  const handleCancelBooking = async (id) => {
    if (window.confirm('Are you sure you want to cancel this booking?')) {
      try {
        await bookingService.cancelBooking(id);
        toast.success('Booking cancelled successfully');
        fetchBookings();
      } catch (error) {
        toast.error('Failed to cancel booking');
      }
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-600"></div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">My Bookings</h1>

      {bookings.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-xl text-gray-600">No bookings found</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {bookings.map((booking) => (
            <div key={booking.id} className="card">
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-xl font-semibold">{booking.pg_name}</h3>
                <span
                  className={`px-3 py-1 rounded-full text-sm font-medium ${
                    booking.status === 'confirmed'
                      ? 'bg-green-100 text-green-800'
                      : booking.status === 'pending'
                      ? 'bg-yellow-100 text-yellow-800'
                      : 'bg-red-100 text-red-800'
                  }`}
                >
                  {booking.status}
                </span>
              </div>

              <div className="space-y-2 text-gray-600">
                <div className="flex items-center">
                  <MapPin className="h-4 w-4 mr-2" />
                  <span>{booking.pg_city}, {booking.pg_state}</span>
                </div>
                <div className="flex items-center">
                  <Calendar className="h-4 w-4 mr-2" />
                  <span>
                    {new Date(booking.check_in_date).toLocaleDateString()} - {' '}
                    {new Date(booking.check_out_date).toLocaleDateString()}
                  </span>
                </div>
                <div className="flex items-center">
                  <IndianRupee className="h-4 w-4 mr-2" />
                  <span className="font-semibold">{formatPrice(booking.total_price)}</span>
                </div>
              </div>

              {booking.status === 'pending' && (
                <button
                  onClick={() => handleCancelBooking(booking.id)}
                  className="mt-4 w-full btn-secondary"
                >
                  Cancel Booking
                </button>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default UserDashboard;
