import { Link } from 'react-router-dom';
import { Home, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white mt-auto relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNiIgc3Ryb2tlPSIjZmZmIiBzdHJva2Utb3BhY2l0eT0iLjA1IiBzdHJva2Utd2lkdGg9IjIiLz48L2c+PC9zdmc+')] opacity-10"></div>
      <div className="container mx-auto px-4 py-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About */}
          <div>
            <div className="flex items-center space-x-3 mb-6 group">
              <div className="p-2 bg-gradient-to-br from-primary-500 to-primary-700 rounded-xl shadow-lg group-hover:shadow-glow transition-all duration-300">
                <Home className="h-6 w-6 text-white" />
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-white to-primary-200 bg-clip-text text-transparent">BookPG</span>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              Find and book the perfect paying guest accommodation for your needs.
              Safe, verified, and affordable options across India.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-6 text-white">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/pgs" className="text-gray-300 hover:text-primary-400 transition-all duration-300 inline-flex items-center group">
                  <span className="w-0 h-0.5 bg-primary-400 group-hover:w-4 transition-all duration-300 mr-0 group-hover:mr-2"></span>
                  Browse PGs
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 hover:text-primary-400 transition-all duration-300 inline-flex items-center group">
                  <span className="w-0 h-0.5 bg-primary-400 group-hover:w-4 transition-all duration-300 mr-0 group-hover:mr-2"></span>
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-primary-400 transition-all duration-300 inline-flex items-center group">
                  <span className="w-0 h-0.5 bg-primary-400 group-hover:w-4 transition-all duration-300 mr-0 group-hover:mr-2"></span>
                  Contact
                </Link>
              </li>
              <li>
                <Link to="/faq" className="text-gray-300 hover:text-primary-400 transition-all duration-300 inline-flex items-center group">
                  <span className="w-0 h-0.5 bg-primary-400 group-hover:w-4 transition-all duration-300 mr-0 group-hover:mr-2"></span>
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-lg font-bold mb-6 text-white">Support</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/help" className="text-gray-300 hover:text-primary-400 transition-all duration-300 inline-flex items-center group">
                  <span className="w-0 h-0.5 bg-primary-400 group-hover:w-4 transition-all duration-300 mr-0 group-hover:mr-2"></span>
                  Help Center
                </Link>
              </li>
              <li>
                <Link to="/terms" className="text-gray-300 hover:text-primary-400 transition-all duration-300 inline-flex items-center group">
                  <span className="w-0 h-0.5 bg-primary-400 group-hover:w-4 transition-all duration-300 mr-0 group-hover:mr-2"></span>
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="text-gray-300 hover:text-primary-400 transition-all duration-300 inline-flex items-center group">
                  <span className="w-0 h-0.5 bg-primary-400 group-hover:w-4 transition-all duration-300 mr-0 group-hover:mr-2"></span>
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/refund" className="text-gray-300 hover:text-primary-400 transition-all duration-300 inline-flex items-center group">
                  <span className="w-0 h-0.5 bg-primary-400 group-hover:w-4 transition-all duration-300 mr-0 group-hover:mr-2"></span>
                  Refund Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold mb-6 text-white">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3 group">
                <div className="p-2 bg-primary-900/50 rounded-lg group-hover:bg-primary-800/50 transition-colors duration-300">
                  <MapPin className="h-5 w-5 text-primary-400" />
                </div>
                <span className="text-gray-300 text-sm leading-relaxed">
                  Rajajinagar Bangalore, Karnataka
                </span>
              </li>
              <li className="flex items-center space-x-3 group">
                <div className="p-2 bg-primary-900/50 rounded-lg group-hover:bg-primary-800/50 transition-colors duration-300">
                  <Phone className="h-5 w-5 text-primary-400" />
                </div>
                <span className="text-gray-300 text-sm">+91 9841234567</span>
              </li>
              <li className="flex items-center space-x-3 group">
                <div className="p-2 bg-primary-900/50 rounded-lg group-hover:bg-primary-800/50 transition-colors duration-300">
                  <Mail className="h-5 w-5 text-primary-400" />
                </div>
                <span className="text-gray-300 text-sm">support@bookpg.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700/50 mt-12 pt-8 text-center space-y-2">
          <p className="text-gray-400 text-sm">
            &copy; {new Date().getFullYear()} <span className="font-semibold text-white">BookPG</span>. All rights reserved.
          </p>
          <p className="text-gray-500 text-xs">
            Built by <span className="font-semibold text-primary-400">Recnos Inc</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
