import data from "../data";
import React from "react";
import { Link } from "react-router-dom";
const PopularSec = () => {
  return (
    <div className="mx-80 my-28">
      <div className="flex flex-col justify-center items-center">
        <h1 className="text-[#0B254B] font-medium text-4xl">Popular</h1>
        <h2 className="text-[#5E6E89] font-medium text-lg">
          Our top selling product that you may like
        </h2>
      </div>

      <div className="grid grid-cols-4 grid-rows-1 gap-4 my-12">
        {data.slice(0, 4).map((product) => (
          <Link to={`/products/${product.id}`} key={product.id}>
            <button className="bg-[#F7F8FA] shadow-md">
              <img src={product.image} alt="" className="object-cover" />
              <div className="bg-[#FFFFFF] p-3">
                <h1 className="font-medium text-[#1D293F] text-start">
                  {product.description}
                </h1>
                <span className="text-[#56B280] flex justify-end font-medium text-xl">
                  {product.price}$
                </span>
              </div>
            </button>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default PopularSec;
