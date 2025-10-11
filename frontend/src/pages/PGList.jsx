import { useState, useEffect } from 'react';
import { Link, useSearchParams, useNavigate } from 'react-router-dom';
import { pgService } from '../services/pgService';
import { toast } from 'react-toastify';
import { MapPin, Star, IndianRupee, Search } from 'lucide-react';
import { formatPrice } from '../utils/currency';

const PGList = () => {
  const [pgs, setPgs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();

  const [filters, setFilters] = useState({
    search: searchParams.get('search') || '',
    city: searchParams.get('city') || '',
    minPrice: searchParams.get('minPrice') || '',
    maxPrice: searchParams.get('maxPrice') || '',
  });

  useEffect(() => {
    fetchPGs();
  }, [searchParams]);

  const fetchPGs = async () => {
    try {
      setLoading(true);
      const params = Object.fromEntries(searchParams);
      const data = await pgService.getAllPGs(params);
      setPgs(data);
    } catch (error) {
      toast.error('Failed to load PGs');
    } finally {
      setLoading(false);
    }
  };

  const handleSearch = (e) => {
    e.preventDefault();
    const params = new URLSearchParams();
    if (filters.search) params.append('search', filters.search);
    if (filters.city) params.append('city', filters.city);
    if (filters.minPrice) params.append('minPrice', filters.minPrice);
    if (filters.maxPrice) params.append('maxPrice', filters.maxPrice);
    setSearchParams(params);
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
      <h1 className="text-3xl font-bold mb-6">Available PGs</h1>

      {/* Search and Filter Bar */}
      <div className="card mb-8 p-6">
        <form onSubmit={handleSearch}>
          <div className="mb-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <input
                type="text"
                placeholder="Search by name, location, amenities, description..."
                value={filters.search}
                onChange={(e) => setFilters({ ...filters, search: e.target.value })}
                className="input-field pl-10 w-full"
              />
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <input
              type="text"
              placeholder="City"
              value={filters.city}
              onChange={(e) => setFilters({ ...filters, city: e.target.value })}
              className="input-field"
            />
            <input
              type="number"
              placeholder="Min Price"
              value={filters.minPrice}
              onChange={(e) => setFilters({ ...filters, minPrice: e.target.value })}
              className="input-field"
            />
            <input
              type="number"
              placeholder="Max Price"
              value={filters.maxPrice}
              onChange={(e) => setFilters({ ...filters, maxPrice: e.target.value })}
              className="input-field"
            />
            <button
              type="submit"
              className="btn-primary flex items-center justify-center space-x-2"
            >
              <Search className="h-4 w-4" />
              <span>Search</span>
            </button>
          </div>
        </form>
      </div>

      {pgs.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-xl text-gray-600">No PGs found. Try adjusting your search.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {pgs.map((pg) => (
            <Link key={pg.id} to={`/pgs/${pg.id}`} className="card hover:shadow-xl transition">
              <img
                src={pg.images?.[0] || '/placeholder.jpg'}
                alt={pg.name}
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h3 className="text-xl font-semibold mb-2">{pg.name}</h3>
              <div className="flex items-center text-gray-600 mb-2">
                <MapPin className="h-4 w-4 mr-1" />
                <span className="text-sm">{pg.city}, {pg.state}</span>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center text-yellow-500">
                  <Star className="h-4 w-4 mr-1 fill-current" />
                  <span className="text-sm font-medium">{pg.rating || 'N/A'}</span>
                </div>
                <div className="flex items-center text-primary-600 font-semibold">
                  <IndianRupee className="h-5 w-5" />
                  <span>{formatPrice(pg.price)}/month</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default PGList;
