import { useState } from 'react';


const ITEMS = [
  { id: 1, name: 'Pepperoni Pizza', price: 1200 },
  { id: 2, name: 'Cheesy Onion Pizza', price: 1000 }
];

function PlaceOrder() {
  const [order, setOrder] = useState({});
  const [orderPlaced, setOrderPlaced] = useState(false);
  const [refId, setRefId] = useState('');

  const handleQuantityChange = (id, qty) => {
    setOrder(prev => ({ ...prev, [id]: Number(qty) }));
  };

  const placeOrder = () => {
    const selectedItems = Object.entries(order)
      .filter(([_, qty]) => qty > 0)
      .map(([id, qty]) => {
        const item = ITEMS.find(i => i.id === Number(id));
        return { ...item, quantity: qty };
      });

    if (selectedItems.length === 0) {
      alert('Please select at least one item.');
      return;
    }

    // Generate mock reference ID
    const mockRef = 'ORD-' + Math.floor(100000 + Math.random() * 900000);
    setRefId(mockRef);
    setOrderPlaced(true);

    console.log('Order Placed:', selectedItems);
  };

  return (
    <div className="min-h-screen bg-gray-100 py-8 px-4 flex flex-col items-center">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-xl">
        <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">Place Your Order</h2>

        {ITEMS.map(item => (
          <div key={item.id} className="flex justify-between items-center mb-4">
            <div>
              <p className="font-semibold">{item.name}</p>
              <p className="text-sm text-gray-500">Rs. {item.price}</p>
            </div>
            <input
              type="number"
              min="0"
              value={order[item.id] || ''}
              onChange={(e) => handleQuantityChange(item.id, e.target.value)}
              className="w-20 px-2 py-1 border rounded-lg text-center"
              placeholder="Qty"
            />
          </div>
        ))}

        <button
          onClick={placeOrder}
          className="w-full mt-4 bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition"
        >
          Place Order
        </button>

        {orderPlaced && (
          <div className="mt-6 text-center">
            <p className="text-green-600 font-semibold">Order placed successfully!</p>
            <p>Your Reference ID: <span className="font-mono text-gray-700">{refId}</span></p>
          </div>
        )}
      </div>
    </div>
  );
}

export default PlaceOrder;


// const [ingredientStock, setIngredientStock]({
//   cheese: 10,
//   onion: 8,
//   pepperoni: 5,
//   chicken: 4,
// });


// const ITEMS = [
//   {
//     id: 1,
//     name: 'Pepperoni Pizza',
//     ingredients: { cheese: 1, dough: 1, pepperoni: 1 },
//   },
//   {
//     id: 2,
//     name: 'Cheesy Onion Pizza',
//     ingredients: { cheese: 1, dough: 1, onion: 1 },
//   },
//   {
//     id: 3,
//     name: 'Chicken BBQ Pizza',
//     ingredients: { cheese: 1, dough: 1, chicken: 2 },
//   },
// ];