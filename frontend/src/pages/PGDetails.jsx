import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { pgService } from '../services/pgService';
import { reviewService } from '../services/reviewService';
import { toast } from 'react-toastify';
import { MapPin, Star, IndianRupee, Wifi, Car, Utensils } from 'lucide-react';
import { formatPrice } from '../utils/currency';

const PGDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [pg, setPg] = useState(null);
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchPGDetails();
    fetchReviews();
  }, [id]);

  const fetchPGDetails = async () => {
    try {
      const data = await pgService.getPGById(id);
      setPg(data);
    } catch (error) {
      toast.error('Failed to load PG details');
    } finally {
      setLoading(false);
    }
  };

  const fetchReviews = async () => {
    try {
      const data = await reviewService.getPGReviews(id);
      setReviews(data);
    } catch (error) {
      console.error('Failed to load reviews');
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-600"></div>
      </div>
    );
  }

  if (!pg) {
    return (
      <div className="container mx-auto px-4 py-8">
        <p className="text-center text-xl text-gray-600">PG not found</p>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Image Gallery */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
        {pg.images?.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`${pg.name} ${index + 1}`}
            className="w-full h-64 object-cover rounded-lg"
          />
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Content */}
        <div className="lg:col-span-2">
          <h1 className="text-3xl font-bold mb-4">{pg.name}</h1>
          <div className="flex items-center text-gray-600 mb-4">
            <MapPin className="h-5 w-5 mr-2" />
            <span>{pg.address}, {pg.city}, {pg.state}</span>
          </div>

          <div className="flex items-center mb-6">
            <Star className="h-5 w-5 text-yellow-500 fill-current mr-1" />
            <span className="font-semibold">{pg.rating || 'N/A'}</span>
            <span className="text-gray-600 ml-2">({reviews.length} reviews)</span>
          </div>

          <div className="mb-6">
            <h2 className="text-2xl font-semibold mb-3">Description</h2>
            <p className="text-gray-700">{pg.description}</p>
          </div>

          <div className="mb-6">
            <h2 className="text-2xl font-semibold mb-3">Amenities</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {pg.amenities?.map((amenity, index) => (
                <div key={index} className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-primary-600 rounded-full"></div>
                  <span>{amenity}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Reviews */}
          <div>
            <h2 className="text-2xl font-semibold mb-4">Reviews</h2>
            {reviews.length === 0 ? (
              <p className="text-gray-600">No reviews yet</p>
            ) : (
              <div className="space-y-4">
                {reviews.map((review) => (
                  <div key={review.id} className="card">
                    <div className="flex items-center mb-2">
                      <Star className="h-4 w-4 text-yellow-500 fill-current mr-1" />
                      <span className="font-semibold">{review.rating}/5</span>
                    </div>
                    <p className="text-gray-700">{review.comment}</p>
                    <p className="text-sm text-gray-500 mt-2">
                      - {review.user_name} ({new Date(review.review_date).toLocaleDateString()})
                    </p>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Booking Card */}
        <div className="lg:col-span-1">
          <div className="card sticky top-20">
            <div className="mb-6">
              <div className="flex items-center text-3xl font-bold text-primary-600 mb-1">
                <IndianRupee className="h-7 w-7" />
                <span>{formatPrice(pg.price)}</span>
              </div>
              <span className="text-gray-600 text-sm">/month</span>
            </div>
            <button
              onClick={() => navigate(`/booking/${pg.id}`)}
              className="w-full btn-primary"
            >
              Book Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PGDetails;
