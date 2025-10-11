import { useAuth } from '../contexts/AuthContext';
import { User, Mail, Phone } from 'lucide-react';

const Profile = () => {
  const { user } = useAuth();

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold mb-8">My Profile</h1>

        <div className="card">
          <div className="flex items-center justify-center mb-6">
            <div className="w-24 h-24 bg-primary-100 rounded-full flex items-center justify-center">
              <User className="h-12 w-12 text-primary-600" />
            </div>
          </div>

          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-500 mb-1">Name</label>
              <div className="flex items-center space-x-2 text-lg">
                <User className="h-5 w-5 text-gray-400" />
                <span>{user?.name}</span>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-500 mb-1">Email</label>
              <div className="flex items-center space-x-2 text-lg">
                <Mail className="h-5 w-5 text-gray-400" />
                <span>{user?.email}</span>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-500 mb-1">Phone</label>
              <div className="flex items-center space-x-2 text-lg">
                <Phone className="h-5 w-5 text-gray-400" />
                <span>{user?.phone || 'Not provided'}</span>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-500 mb-1">Role</label>
              <span className="inline-block px-3 py-1 bg-primary-100 text-primary-800 rounded-full text-sm font-medium">
                {user?.role}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
