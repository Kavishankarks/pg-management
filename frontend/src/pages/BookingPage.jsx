import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { pgService } from '../services/pgService';
import { bookingService } from '../services/bookingService';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import { formatPrice } from '../utils/currency';

const BookingPage = () => {
  const { pgId } = useParams();
  const navigate = useNavigate();
  const [pg, setPg] = useState(null);
  const [loading, setLoading] = useState(false);
  const [hasCheckout, setHasCheckout] = useState(false);
  const { register, handleSubmit, formState: { errors } } = useForm();

  useEffect(() => {
    fetchPG();
  }, [pgId]);

  const fetchPG = async () => {
    try {
      const data = await pgService.getPGById(pgId);
      setPg(data);
    } catch (error) {
      toast.error('Failed to load PG details');
    }
  };

  const onSubmit = async (data) => {
    setLoading(true);
    try {
      const bookingData = {
        pg_id: pgId,
        ...data,
      };
      await bookingService.createBooking(bookingData);
      toast.success('Booking created successfully!');
      navigate('/dashboard');
    } catch (error) {
      toast.error(error.response?.data?.message || 'Booking failed');
    } finally {
      setLoading(false);
    }
  };

  if (!pg) return null;

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold mb-8">Complete Your Booking</h1>

        <div className="card mb-6">
          <h2 className="text-xl font-semibold mb-2">{pg.name}</h2>
          <p className="text-gray-600">{pg.city}, {pg.state}</p>
          <p className="text-2xl font-bold text-primary-600 mt-4">{formatPrice(pg.price)}/month</p>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="card">
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Move-in Date
              </label>
              <input
                type="date"
                {...register('check_in_date', { required: 'Move-in date is required' })}
                className="input-field"
              />
              {errors.check_in_date && (
                <p className="text-red-600 text-sm mt-1">{errors.check_in_date.message}</p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Number of Guests
              </label>
              <input
                type="number"
                min="1"
                defaultValue="1"
                {...register('num_guests', { required: 'Number of guests is required', min: 1 })}
                className="input-field"
              />
              {errors.num_guests && (
                <p className="text-red-600 text-sm mt-1">{errors.num_guests.message}</p>
              )}
            </div>

            {/* Optional Checkout Date */}
            <div className="border-t pt-4">
              <label className="flex items-center space-x-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={hasCheckout}
                  onChange={(e) => setHasCheckout(e.target.checked)}
                  className="w-4 h-4 text-primary-600 border-gray-300 rounded focus:ring-primary-500"
                />
                <span className="text-sm font-medium text-gray-700">
                  I know my move-out date (optional)
                </span>
              </label>
              <p className="text-xs text-gray-500 mt-1 ml-6">
                Check this if you're planning a temporary stay
              </p>
            </div>

            {hasCheckout && (
              <div className="animate-fade-in">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Move-out Date (Optional)
                </label>
                <input
                  type="date"
                  {...register('check_out_date')}
                  className="input-field"
                />
                <p className="text-xs text-gray-500 mt-1">
                  Leave empty for open-ended stay
                </p>
              </div>
            )}

            <button
              type="submit"
              disabled={loading}
              className="w-full btn-primary disabled:opacity-50"
            >
              {loading ? 'Processing...' : 'Confirm Booking'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default BookingPage;
