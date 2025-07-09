import { useNavigate } from 'react-router-dom';

function Dashboard() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-lg">
        <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">Shop Owner Dashboard</h2>

        <div className="space-y-4">
          <button
            onClick={() => navigate('/owner/orders')}
            className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
          >
             Update Orders
          </button>

          <button
            onClick={() => navigate('/owner/inventory')}
            className="w-full bg-green-500 text-white py-2 rounded hover:bg-green-600"
          >
            Update Inventory
          </button>

          <button
            onClick={() => navigate('/owner/items')}
            className="w-full bg-yellow-500 text-white py-2 rounded hover:bg-yellow-600"
          >
            Add/Remove Orders
          </button>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
