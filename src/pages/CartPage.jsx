import React from "react";
import MovieCard from "../components/MovieCard";
import { useSelector } from "react-redux";

const CartPage = () => {
  const cart = useSelector((state) => state.cart);
  return (
    <div className="container mx-auto mt-8">
      <h2 className="text-2xl font-semibold mb-4">Your Cart</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {cart.map((item) => (
          <MovieCard key={item.id} movie={item} />
        ))}
      </div>
    </div>
  );
};

export default CartPage;
