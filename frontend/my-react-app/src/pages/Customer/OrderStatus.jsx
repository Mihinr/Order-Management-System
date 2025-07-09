import { useState } from 'react';

// Mock order data
const MOCK_ORDERS = [
  {
    refId: '1234',
    status: 'Preparing',
    items: [
      { name: 'Pepperoni Pizza', quantity: 1 },
      { name: 'Cheesy Onion Pizza', quantity: 2 },
    ],
  },
  {
    refId: '5678',
    status: 'Dispatched',
    items: [
      { name: 'Chicken BBQ Pizza', quantity: 1 },
    ],
  },
];

function OrderStatus() {
  const [refId, setRefId] = useState('');
  const [order, setOrder] = useState(null);
  const [error, setError] = useState('');

  const checkStatus = () => {
    const found = MOCK_ORDERS.find(o => o.refId === refId.trim());

    if (found) {
      setOrder(found);
      setError('');
    } else {
      setOrder(null);
      setError('Order not found. Please check your reference ID.');
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-lg">
        <h2 className="text-2xl font-bold mb-4 text-center">Track Your Order</h2>

        <input
          type="text"
          placeholder="Enter your Reference ID"
          value={refId}
          onChange={(e) => setRefId(e.target.value)}
          className="w-full mb-4 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
        />

        <button
          onClick={checkStatus}
          className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition"
        >
          Check Status
        </button>

        {error && (
          <p className="mt-4 text-red-600 text-center">{error}</p>
        )}

        {order && (
          <div className="mt-6 bg-gray-50 p-4 rounded-lg border">
            <p><span className="font-semibold">Reference ID:</span> {order.refId}</p>
            <p><span className="font-semibold">Status:</span> {order.status}</p>
            <p className="font-semibold mt-4">Items:</p>
            <ul className="list-disc ml-6">
              {order.items.map((item, index) => (
                <li key={index}>{item.name} × {item.quantity}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}

export default OrderStatus;
