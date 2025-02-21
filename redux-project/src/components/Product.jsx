import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { add } from "../store/cartSlice";
import { getProducts } from "../store/productSlice";
import statusCode from "../utils/statusCode";
const Product = () => {
  const dispatch = useDispatch();
  const { data: products, status } = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(getProducts());
  }, []);
  if (status === statusCode.LOADING) {
    return <h1 className="text-3xl font-bold text-center mt-8">Loading...</h1>;
  }
  if (status === statusCode.ERROR) {
    return (
      <h1 className="text-3xl font-bold text-center mt-8">
        Something went wrong. Try Again Later!!
      </h1>
    );
  }

  const addToCart = (product) => {
    //dispatch buy action
    dispatch(add(product));
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold text-center mb-8">Product Dashboard</h1>
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
              onClick={() => addToCart(product)}
              className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition"
            >
              Add To Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Product;
