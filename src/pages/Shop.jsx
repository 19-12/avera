import React from "react";
import ProductCard from "../components/ProductCard";
import products from "../data/products";
import PageHero from "../components/PageHero";

const Shop = () => {
  return (
    <div className="w-full">
      <PageHero title="Shop" />
    <div className="container mx-auto py-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {products.map((p) => (
        <ProductCard key={p.id} product={p} />
      ))}
    </div> </div>
  );
};

export default Shop;
