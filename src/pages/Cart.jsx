import React, { useContext, useState } from 'react';
import { CartContext } from '../context/CartContext';

const Cart = () => {
  const { cart, removeFromCart, clearCart } = useContext(CartContext);
  const [isOrderModalOpen, setIsOrderModalOpen] = useState(false); // State for order modal
  const [name, setName] = useState(''); // State for name input
  const [address, setAddress] = useState(''); // State for address input
  const [isOrderConfirmed, setIsOrderConfirmed] = useState(false); // State for order confirmation

  const totalPrice = cart.reduce((total, item) => total + item.price * item.quantity, 0);

  const handleOrder = () => {
    setIsOrderModalOpen(true); // Open the order modal
  };

  const handleConfirmOrder = () => {
    // Validate inputs
    if (!name || !address) {
      alert('Please enter your name and address.');
      return;
    }

    // Simulate order confirmation
    setIsOrderConfirmed(true);
    setIsOrderModalOpen(false); // Close the modal
    clearCart(); // Clear the cart after order confirmation
  };

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <div className="container mx-auto">
        <h1 className="text-3xl font-bold mb-6">Cart</h1>
        <div className="bg-white p-6 rounded-lg shadow-lg">
          {cart.length === 0 ? (
            <p className="text-center text-gray-600">Your cart is empty.</p>
          ) : (
            <>
              {cart.map((item) => (
                <div key={item.id} className="flex justify-between items-center mb-4">
                  <div>
                    <h2 className="text-xl font-bold">{item.name}</h2>
                    <p className="text-gray-600">${item.price} x {item.quantity}</p>
                  </div>
                  <button
                    className="p-2 bg-red-600 text-white rounded hover:bg-red-700"
                    onClick={() => removeFromCart(item.id)}
                  >
                    Remove
                  </button>
                </div>
              ))}
              <div className="flex justify-between items-center mt-6 pt-4 border-t">
                <h2 className="text-xl font-bold">Total</h2>
                <p className="text-xl font-bold">${totalPrice}</p>
              </div>
              <div className="flex gap-4 mt-6">
                <button
                  className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700"
                  onClick={clearCart}
                >
                  Clear Cart
                </button>
                <button
                  className="w-full bg-green-600 text-white p-2 rounded hover:bg-green-700"
                  onClick={handleOrder}
                >
                  Place Order
                </button>
              </div>
            </>
          )}
        </div>
      </div>

      {/* Order Modal */}
      {isOrderModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
          <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
            <h2 className="text-2xl font-bold mb-4">Confirm Order</h2>
            <div className="space-y-4">
              <div>
                <label className="block text-gray-700">Name</label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full p-2 border border-gray-300 rounded-lg"
                  placeholder="Enter your name"
                  required
                />
              </div>
              <div>
                <label className="block text-gray-700">Address</label>
                <input
                  type="text"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  className="w-full p-2 border border-gray-300 rounded-lg"
                  placeholder="Enter your address"
                  required
                />
              </div>
              <div className="flex gap-4">
                <button
                  className="w-full bg-gray-600 text-white p-2 rounded hover:bg-gray-700"
                  onClick={() => setIsOrderModalOpen(false)}
                >
                  Cancel
                </button>
                <button
                  className="w-full bg-green-600 text-white p-2 rounded hover:bg-green-700"
                  onClick={handleConfirmOrder}
                >
                  Confirm Order
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Order Confirmation Notification */}
      {isOrderConfirmed && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
          <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md text-center">
            <h2 className="text-2xl font-bold mb-4">Order Confirmed!</h2>
            <p className="text-gray-600 mb-4">Thank you for your order, {name}!</p>
            <button
              className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700"
              onClick={() => setIsOrderConfirmed(false)}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;