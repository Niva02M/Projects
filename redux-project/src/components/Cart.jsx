import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { remove } from "../store/cartSlice";

const Cart = () => {
  const products = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const removeFromCart = (id) => {
    dispatch(remove(id));
  };
  return (
    <div>
      <h1 className="text-3xl font-bold text-center mb-8">Cart</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white shadow-md rounded-lg p-4 hover:shadow-lg transition-shadow"
          >
            <img
              src={product.image}
              alt={product.title}
              className="w-full h-48 object-contain mb-4"
            />
            <h2 className="text-lg font-semibold mb-2">{product.title}</h2>
            <p className="text-gray-500 text-sm mb-4 truncate">
              {product.description}
            </p>
            <p className="text-xl font-bold text-green-600 mb-4">
              ${product.price}
            </p>
            <button
              onClick={() => removeFromCart(product.id)}
              className="w-full bg-red-500 text-white py-2 rounded-lg hover:bg-red-600 transition"
            >
              Remove Item
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cart;
