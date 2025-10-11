import { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import { Users, Home as HomeIcon, BookOpen, IndianRupee, TrendingUp, CheckCircle, XCircle, Plus, Edit, Trash2 } from 'lucide-react';
import api from '../services/api';
import PGForm from '../components/PGForm';
import { formatPrice } from '../utils/currency';

const AdminDashboard = () => {
  const [stats, setStats] = useState({
    totalUsers: 0,
    totalPGs: 0,
    totalBookings: 0,
    totalRevenue: 0,
  });
  const [users, setUsers] = useState([]);
  const [pgs, setPGs] = useState([]);
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState('overview');
  const [showPGForm, setShowPGForm] = useState(false);
  const [editingPG, setEditingPG] = useState(null);

  useEffect(() => {
    fetchAdminData();
  }, []);

  const fetchAdminData = async () => {
    try {
      const [usersRes, pgsRes, bookingsRes] = await Promise.all([
        api.get('/admin/users'),
        api.get('/pgs?limit=1000'),
        api.get('/admin/bookings'),
      ]);

      setUsers(usersRes.data.users || []);
      setPGs(pgsRes.data || []);
      setBookings(bookingsRes.data.bookings || []);

      // Calculate stats
      const totalRevenue = (bookingsRes.data.bookings || [])
        .filter(b => b.status === 'confirmed')
        .reduce((sum, b) => sum + parseFloat(b.total_price || 0), 0);

      setStats({
        totalUsers: usersRes.data.users?.length || 0,
        totalPGs: (pgsRes.data || []).length,
        totalBookings: bookingsRes.data.bookings?.length || 0,
        totalRevenue,
      });
    } catch (error) {
      console.error('Error fetching admin data:', error);
      toast.error(error.response?.data?.message || 'Failed to load admin data');
    } finally {
      setLoading(false);
    }
  };

  const handleDeleteUser = async (userId) => {
    if (window.confirm('Are you sure you want to delete this user?')) {
      try {
        await api.delete(`/admin/users/${userId}`);
        toast.success('User deleted successfully');
        fetchAdminData();
      } catch (error) {
        toast.error(error.response?.data?.message || 'Failed to delete user');
      }
    }
  };

  const handleCreatePG = async (pgData) => {
    try {
      await api.post('/pgs', pgData);
      toast.success('PG created successfully');
      setShowPGForm(false);
      fetchAdminData();
    } catch (error) {
      toast.error(error.response?.data?.message || 'Failed to create PG');
    }
  };

  const handleUpdatePG = async (pgData) => {
    try {
      await api.put(`/pgs/${editingPG.id}`, pgData);
      toast.success('PG updated successfully');
      setShowPGForm(false);
      setEditingPG(null);
      fetchAdminData();
    } catch (error) {
      toast.error(error.response?.data?.message || 'Failed to update PG');
    }
  };

  const handleDeletePG = async (pgId) => {
    if (window.confirm('Are you sure you want to delete this PG?')) {
      try {
        await api.delete(`/pgs/${pgId}`);
        toast.success('PG deleted successfully');
        fetchAdminData();
      } catch (error) {
        toast.error(error.response?.data?.message || 'Failed to delete PG');
      }
    }
  };

  const handleEditPG = (pg) => {
    setEditingPG(pg);
    setShowPGForm(true);
  };

  const handleUpdateBookingStatus = async (bookingId, status) => {
    try {
      await api.put(`/admin/bookings/${bookingId}`, { status });
      toast.success('Booking status updated');
      fetchAdminData();
    } catch (error) {
      toast.error(error.response?.data?.message || 'Failed to update booking');
    }
  };

  const handleClosePGForm = () => {
    setShowPGForm(false);
    setEditingPG(null);
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
      <h1 className="text-3xl font-bold mb-8 gradient-text">Admin Dashboard</h1>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <div className="card bg-gradient-to-br from-blue-50 to-blue-100 border-blue-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-blue-600 font-medium mb-1">Total Users</p>
              <p className="text-3xl font-bold text-blue-900">{stats.totalUsers}</p>
            </div>
            <div className="p-3 bg-blue-500 rounded-xl">
              <Users className="h-8 w-8 text-white" />
            </div>
          </div>
        </div>

        <div className="card bg-gradient-to-br from-green-50 to-green-100 border-green-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-green-600 font-medium mb-1">Total PGs</p>
              <p className="text-3xl font-bold text-green-900">{stats.totalPGs}</p>
            </div>
            <div className="p-3 bg-green-500 rounded-xl">
              <HomeIcon className="h-8 w-8 text-white" />
            </div>
          </div>
        </div>

        <div className="card bg-gradient-to-br from-purple-50 to-purple-100 border-purple-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-purple-600 font-medium mb-1">Total Bookings</p>
              <p className="text-3xl font-bold text-purple-900">{stats.totalBookings}</p>
            </div>
            <div className="p-3 bg-purple-500 rounded-xl">
              <BookOpen className="h-8 w-8 text-white" />
            </div>
          </div>
        </div>

        <div className="card bg-gradient-to-br from-amber-50 to-amber-100 border-amber-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-amber-600 font-medium mb-1">Total Revenue</p>
              <p className="text-3xl font-bold text-amber-900">{formatPrice(stats.totalRevenue, true)}</p>
            </div>
            <div className="p-3 bg-amber-500 rounded-xl">
              <TrendingUp className="h-8 w-8 text-white" />
            </div>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="mb-6">
        <div className="border-b border-gray-200">
          <nav className="-mb-px flex space-x-8">
            {['overview', 'users', 'pgs', 'bookings'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`py-4 px-1 border-b-2 font-medium text-sm transition-colors ${
                  activeTab === tab
                    ? 'border-primary-500 text-primary-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </button>
            ))}
          </nav>
        </div>
      </div>

      {/* Tab Content */}
      {activeTab === 'overview' && (
        <div className="space-y-6">
          <div className="card">
            <h2 className="text-xl font-bold mb-4">Recent Activity</h2>
            <p className="text-gray-600">
              Welcome to the admin dashboard. Use the tabs above to manage users, PGs, and bookings.
            </p>
          </div>
        </div>
      )}

      {activeTab === 'users' && (
        <div className="card">
          <h2 className="text-xl font-bold mb-4">All Users</h2>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Email</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Role</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Phone</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {users.map((user) => (
                  <tr key={user.id}>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{user.name}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{user.email}</td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${
                        user.role === 'admin' ? 'bg-red-100 text-red-800' :
                        user.role === 'owner' ? 'bg-blue-100 text-blue-800' :
                        'bg-green-100 text-green-800'
                      }`}>
                        {user.role}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{user.phone}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                      {user.role !== 'admin' && (
                        <button
                          onClick={() => handleDeleteUser(user.id)}
                          className="text-red-600 hover:text-red-900"
                        >
                          <Trash2 className="h-4 w-4 inline" />
                        </button>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {activeTab === 'pgs' && (
        <div className="card">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-bold">All PGs ({pgs.length})</h2>
            <button
              onClick={() => setShowPGForm(true)}
              className="btn-primary flex items-center gap-2"
            >
              <Plus className="h-4 w-4" />
              Add New PG
            </button>
          </div>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">City</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">State</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Price</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Amenities</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {pgs.map((pg) => (
                  <tr key={pg.id}>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{pg.name}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{pg.city}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{pg.state}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{formatPrice(pg.price)}</td>
                    <td className="px-6 py-4 text-sm text-gray-500">
                      <div className="flex flex-wrap gap-1">
                        {(pg.amenities || []).slice(0, 3).map((amenity, idx) => (
                          <span key={idx} className="px-2 py-1 bg-gray-100 rounded text-xs">
                            {amenity}
                          </span>
                        ))}
                        {pg.amenities && pg.amenities.length > 3 && (
                          <span className="px-2 py-1 bg-gray-100 rounded text-xs">
                            +{pg.amenities.length - 3}
                          </span>
                        )}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium space-x-2">
                      <button
                        onClick={() => handleEditPG(pg)}
                        className="text-blue-600 hover:text-blue-900"
                        title="Edit"
                      >
                        <Edit className="h-4 w-4 inline" />
                      </button>
                      <button
                        onClick={() => handleDeletePG(pg.id)}
                        className="text-red-600 hover:text-red-900"
                        title="Delete"
                      >
                        <Trash2 className="h-4 w-4 inline" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {activeTab === 'bookings' && (
        <div className="card">
          <h2 className="text-xl font-bold mb-4">All Bookings</h2>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">User</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">PG</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Dates</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Price</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {bookings.map((booking) => (
                  <tr key={booking.id}>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{booking.user_name}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{booking.pg_name}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {new Date(booking.check_in_date).toLocaleDateString()} - {new Date(booking.check_out_date).toLocaleDateString()}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{formatPrice(booking.total_price)}</td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${
                        booking.status === 'confirmed' ? 'bg-green-100 text-green-800' :
                        booking.status === 'pending' ? 'bg-yellow-100 text-yellow-800' :
                        'bg-red-100 text-red-800'
                      }`}>
                        {booking.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium space-x-2">
                      {booking.status === 'pending' && (
                        <>
                          <button
                            onClick={() => handleUpdateBookingStatus(booking.id, 'confirmed')}
                            className="text-green-600 hover:text-green-900"
                            title="Approve"
                          >
                            <CheckCircle className="h-5 w-5 inline" />
                          </button>
                          <button
                            onClick={() => handleUpdateBookingStatus(booking.id, 'cancelled')}
                            className="text-red-600 hover:text-red-900"
                            title="Cancel"
                          >
                            <XCircle className="h-5 w-5 inline" />
                          </button>
                        </>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* PG Form Modal */}
      {showPGForm && (
        <PGForm
          initialData={editingPG}
          onClose={handleClosePGForm}
          onSuccess={editingPG ? handleUpdatePG : handleCreatePG}
        />
      )}
    </div>
  );
};

export default AdminDashboard;
