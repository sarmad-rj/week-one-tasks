import React from "react";

const CartModal = ({ isOpen, onClose, cart = [] }) => {
  if (!isOpen) return null;

  const totalPrice = cart.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0,
  );

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-[rgba(0,0,0,0.5)] p-4">
      <div className="bg-white rounded-2xl shadow-xl max-w-lg w-full overflow-hidden flex flex-col max-h-[80vh]">
        <div className="p-5 border-b border-gray-100 flex justify-between items-center">
          <h2 className="text-xl font-bold text-gray-800">
            Your Shopping Cart
          </h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 text-2xl font-semibold leading-none focus:outline-none"
          >
            &times;
          </button>
        </div>

        <div className="p-5 overflow-y-auto flex-1 space-y-4">
          {cart.length === 0 ? (
            <div className="text-center py-8">
              <p className="text-gray-500">Your cart is empty.</p>
            </div>
          ) : (
            cart.map((item) => (
              <div
                key={item.id}
                className="flex items-center justify-between gap-4 py-2 border-b border-gray-50 last:border-0"
              >
                <div className="flex items-center gap-3">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-12 h-12 object-cover rounded-lg bg-gray-100"
                  />
                  <div>
                    <h4 className="font-bold text-gray-800 text-sm">
                      {item.name}
                    </h4>
                    <p className="text-xs text-gray-500">
                      Qty: {item.quantity} &times; {item.price}
                    </p>
                  </div>
                </div>
                <span className="font-extrabold text-gray-900 text-sm">
                  {item.price * item.quantity}
                </span>
              </div>
            ))
          )}
        </div>

        {cart.length > 0 && (
          <div className="p-5 bg-gray-50 border-t border-gray-100">
            <div className="flex justify-between items-center mb-4">
              <span className="text-sm font-semibold text-gray-600">
                Total Price:
              </span>
              <span className="text-xl font-extrabold text-gray-900">
                {totalPrice}
              </span>
            </div>
            <button
              onClick={() => alert("Proceeding to checkout...")}
              className="w-full py-3 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl transition-colors shadow-sm"
            >
              Checkout
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default CartModal;
