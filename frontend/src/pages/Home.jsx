import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, MapPin, DollarSign, Star, Wifi, Car, Utensils } from 'lucide-react';

const Home = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState({
    search: '',
    city: '',
    minPrice: '',
    maxPrice: '',
  });
  const [showFilters, setShowFilters] = useState(false);

  const handleSearch = (e) => {
    e.preventDefault();
    const params = new URLSearchParams();
    if (searchQuery.search) params.append('search', searchQuery.search);
    if (searchQuery.city) params.append('city', searchQuery.city);
    if (searchQuery.minPrice) params.append('minPrice', searchQuery.minPrice);
    if (searchQuery.maxPrice) params.append('maxPrice', searchQuery.maxPrice);
    navigate(`/pgs?${params.toString()}`);
  };

  const features = [
    {
      icon: <MapPin className="h-8 w-8 text-primary-600" />,
      title: 'Prime Locations',
      description: 'Find PGs in the best locations close to your workplace or university',
    },
    {
      icon: <DollarSign className="h-8 w-8 text-primary-600" />,
      title: 'Affordable Pricing',
      description: 'Compare prices and find accommodations that fit your budget',
    },
    {
      icon: <Star className="h-8 w-8 text-primary-600" />,
      title: 'Verified Listings',
      description: 'All PGs are verified and reviewed by our community',
    },
  ];

  const amenities = [
    { icon: <Wifi className="h-6 w-6" />, name: 'WiFi' },
    { icon: <Car className="h-6 w-6" />, name: 'Parking' },
    { icon: <Utensils className="h-6 w-6" />, name: 'Food' },
  ];

  const popularCities = [
    { name: 'Bangalore', image: '🏙️', count: '250+' },
    { name: 'Mumbai', image: '🌆', count: '180+' },
    { name: 'Delhi', image: '🏛️', count: '200+' },
    { name: 'Hyderabad', image: '💎', count: '150+' },
    { name: 'Chennai', image: '🏖️', count: '120+' },
    { name: 'Pune', image: '🎓', count: '140+' },
  ];

  const handleCityClick = (cityName) => {
    navigate(`/pgs?city=${cityName}`);
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="relative overflow-hidden animated-gradient text-white py-24 md:py-32">
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent-500/20 rounded-full blur-3xl"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <div className="inline-block mb-6">
              <span className="inline-flex items-center px-4 py-2 rounded-full bg-white/20 backdrop-blur-md border border-white/30 text-sm font-medium animate-bounce-slow">
                🏠 India's #1 PG Booking Platform
              </span>
            </div>
            <h1 className="text-5xl md:text-7xl font-extrabold mb-6 leading-tight animate-slide-up">
              Find Your Perfect
              <span className="block bg-gradient-to-r from-white via-primary-100 to-accent-200 bg-clip-text text-transparent">
                PG Accommodation
              </span>
            </h1>
            <p className="text-xl md:text-2xl mb-12 text-primary-50 max-w-2xl mx-auto animate-slide-up" style={{animationDelay: '0.1s'}}>
              Discover comfortable, safe, and affordable paying guest accommodations in prime locations
            </p>

            {/* Search Form */}
            <form onSubmit={handleSearch} className="glass-card p-8 animate-scale-in" style={{animationDelay: '0.2s'}}>
              <div className="mb-6">
                <input
                  type="text"
                  placeholder="Search by PG name, location, amenities, or description..."
                  value={searchQuery.search}
                  onChange={(e) =>
                    setSearchQuery({ ...searchQuery, search: e.target.value })
                  }
                  onFocus={() => setShowFilters(true)}
                  className="input-field text-gray-800 text-lg"
                />
              </div>
              {showFilters && (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6 animate-fade-in">
                <div>
                  <input
                    type="text"
                    placeholder="City or Location"
                    value={searchQuery.city}
                    onChange={(e) =>
                      setSearchQuery({ ...searchQuery, city: e.target.value })
                    }
                    className="input-field text-gray-800"
                  />
                </div>
                <div>
                  <input
                    type="number"
                    placeholder="Min Price"
                    value={searchQuery.minPrice}
                    onChange={(e) =>
                      setSearchQuery({ ...searchQuery, minPrice: e.target.value })
                    }
                    className="input-field text-gray-800"
                  />
                </div>
                <div>
                  <input
                    type="number"
                    placeholder="Max Price"
                    value={searchQuery.maxPrice}
                    onChange={(e) =>
                      setSearchQuery({ ...searchQuery, maxPrice: e.target.value })
                    }
                    className="input-field text-gray-800"
                  />
                </div>
              </div>
              )}
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-primary-600 via-primary-700 to-accent-600 text-white py-4 rounded-xl hover:from-primary-700 hover:via-primary-800 hover:to-accent-700 transition-all duration-300 flex items-center justify-center space-x-2 font-semibold shadow-lg hover:shadow-glow transform hover:scale-[1.02] active:scale-95"
              >
                <Search className="h-5 w-5" />
                <span>Search PGs</span>
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Popular Cities Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-extrabold mb-4">
              <span className="gradient-text">Explore PGs in Top Cities</span>
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Find the perfect accommodation in India's major metropolitan cities
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6">
            {popularCities.map((city, index) => (
              <button
                key={index}
                onClick={() => handleCityClick(city.name)}
                className="card-gradient text-center group cursor-pointer transform hover:scale-105 transition-all duration-300"
                style={{animationDelay: `${index * 0.05}s`}}
              >
                <div className="text-5xl mb-3 group-hover:scale-110 transition-transform duration-300">
                  {city.image}
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-1">{city.name}</h3>
                <p className="text-sm text-primary-600 font-semibold">{city.count} PGs</p>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-gray-50/50 to-white"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-extrabold mb-4">
              <span className="gradient-text">Why Choose BookPG?</span>
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              We make finding your perfect accommodation simple, safe, and stress-free
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="card-gradient text-center group"
                style={{animationDelay: `${index * 0.1}s`}}
              >
                <div className="flex justify-center mb-6">
                  <div className="p-4 bg-gradient-to-br from-primary-100 to-primary-200 rounded-2xl group-hover:shadow-glow transition-all duration-300 transform group-hover:scale-110 group-hover:rotate-3">
                    {feature.icon}
                  </div>
                </div>
                <h3 className="text-2xl font-bold mb-3 text-gray-900">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Amenities */}
      <section className="py-20 bg-gradient-to-b from-white to-gray-50/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-extrabold mb-4">
              <span className="gradient-text">Popular Amenities</span>
            </h2>
            <p className="text-gray-600 text-lg">Everything you need for comfortable living</p>
          </div>
          <div className="flex justify-center flex-wrap gap-6 md:gap-8">
            {amenities.map((amenity, index) => (
              <div
                key={index}
                className="flex flex-col items-center p-8 bg-gradient-to-br from-white to-primary-50/30 rounded-2xl shadow-soft hover:shadow-glow transition-all duration-300 transform hover:-translate-y-2 border border-primary-100/50 group min-w-[140px]"
              >
                <div className="p-4 bg-gradient-to-br from-primary-500 to-primary-700 rounded-xl text-white mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  {amenity.icon}
                </div>
                <span className="text-gray-900 font-semibold text-lg">{amenity.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative overflow-hidden py-24">
        <div className="absolute inset-0 animated-gradient"></div>
        <div className="absolute top-0 left-0 w-72 h-72 bg-white/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent-500/20 rounded-full blur-3xl"></div>

        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6 text-white">
            Ready to Find Your New Home?
          </h2>
          <p className="text-xl md:text-2xl mb-10 text-primary-50 max-w-2xl mx-auto">
            Browse through hundreds of verified PG accommodations and find your perfect match today
          </p>
          <button
            onClick={() => navigate('/pgs')}
            className="bg-white text-primary-700 px-10 py-4 rounded-xl font-bold text-lg hover:bg-gray-50 transition-all duration-300 shadow-2xl hover:shadow-glow-lg transform hover:scale-105 active:scale-95"
          >
            Browse All PGs →
          </button>
        </div>
      </section>
    </div>
  );
};

export default Home;
