import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { Home, User, LogOut, Menu, X } from 'lucide-react';
import { useState } from 'react';

const Navbar = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleLogout = () => {
    logout();
    navigate('/');
    setIsMenuOpen(false);
  };

  return (
    <nav className="bg-white/80 backdrop-blur-xl shadow-soft sticky top-0 z-50 border-b border-gray-100/50 animate-slide-down">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="p-2 bg-gradient-to-br from-primary-500 to-primary-700 rounded-xl shadow-lg group-hover:shadow-glow transition-all duration-300 transform group-hover:scale-110">
              <Home className="h-6 w-6 text-white" />
            </div>
            <span className="text-2xl font-bold gradient-text">BookPG</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/pgs" className="text-gray-700 hover:text-primary-600 transition-all duration-300 font-medium relative group">
              <span>Browse PGs</span>
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-primary-600 to-accent-500 group-hover:w-full transition-all duration-300"></span>
            </Link>
            {user ? (
              <>
                {user.role === 'admin' && (
                  <Link to="/admin" className="text-gray-700 hover:text-primary-600 transition-all duration-300 font-medium relative group">
                    <span>Admin Panel</span>
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-primary-600 to-accent-500 group-hover:w-full transition-all duration-300"></span>
                  </Link>
                )}
                <Link to="/dashboard" className="text-gray-700 hover:text-primary-600 transition-all duration-300 font-medium relative group">
                  <span>My Bookings</span>
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-primary-600 to-accent-500 group-hover:w-full transition-all duration-300"></span>
                </Link>
                <Link to="/profile" className="text-gray-700 hover:text-primary-600 transition-all duration-300 font-medium relative group">
                  <span>Profile</span>
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-primary-600 to-accent-500 group-hover:w-full transition-all duration-300"></span>
                </Link>
                <button
                  onClick={handleLogout}
                  className="flex items-center space-x-1 text-gray-700 hover:text-red-600 transition-all duration-300 font-medium"
                >
                  <LogOut className="h-4 w-4" />
                  <span>Logout</span>
                </button>
                <div className="flex items-center space-x-3 pl-6 border-l-2 border-gray-200">
                  <div className="p-2 bg-gradient-to-br from-primary-100 to-primary-200 rounded-full">
                    <User className="h-5 w-5 text-primary-700" />
                  </div>
                  <span className="text-gray-800 font-semibold">{user.name}</span>
                </div>
              </>
            ) : (
              <>
                <Link to="/login" className="text-gray-700 hover:text-primary-600 transition-all duration-300 font-medium relative group">
                  <span>Login</span>
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-primary-600 to-accent-500 group-hover:w-full transition-all duration-300"></span>
                </Link>
                <Link to="/register" className="btn-primary text-sm">
                  Sign Up
                </Link>
              </>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="h-6 w-6 text-gray-700" />
            ) : (
              <Menu className="h-6 w-6 text-gray-700" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t">
            <div className="flex flex-col space-y-4">
              <Link
                to="/pgs"
                className="text-gray-700 hover:text-primary-600 transition"
                onClick={() => setIsMenuOpen(false)}
              >
                Browse PGs
              </Link>
              {user ? (
                <>
                  <div className="flex items-center space-x-2 py-2 border-y">
                    <User className="h-5 w-5 text-primary-600" />
                    <span className="text-gray-700 font-medium">{user.name}</span>
                  </div>
                  {user.role === 'admin' && (
                    <Link
                      to="/admin"
                      className="text-gray-700 hover:text-primary-600 transition"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Admin Panel
                    </Link>
                  )}
                  <Link
                    to="/dashboard"
                    className="text-gray-700 hover:text-primary-600 transition"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    My Bookings
                  </Link>
                  <Link
                    to="/profile"
                    className="text-gray-700 hover:text-primary-600 transition"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Profile
                  </Link>
                  <button
                    onClick={handleLogout}
                    className="flex items-center space-x-1 text-gray-700 hover:text-primary-600 transition"
                  >
                    <LogOut className="h-4 w-4" />
                    <span>Logout</span>
                  </button>
                </>
              ) : (
                <>
                  <Link
                    to="/login"
                    className="text-gray-700 hover:text-primary-600 transition"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Login
                  </Link>
                  <Link
                    to="/register"
                    className="btn-primary text-center"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Sign Up
                  </Link>
                </>
              )}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
