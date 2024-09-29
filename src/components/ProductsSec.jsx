import React from "react";
import data from "../data";
const ProductsSec = () => {
  return (
    <div className="mx-80 my-28">
      <div className="flex flex-col justify-center items-center">
        <h1 className="text-[#0B254B] font-medium text-4xl">Products</h1>
        <span className="text-[#5E6E89] font-medium text-lg">
          Order it for you or for your beloved ones
        </span>
      </div>

      <div className="grid grid-cols-4 grid-rows-2 gap-4 my-12">
        {data.map((product) => (
          <button className="bg-[#F7F8FA] shadow-md">
            <img src={product.image} alt="" className="object-cover"/>
            <div className="bg-[#FFFFFF] p-3">
              <h1 className="font-medium text-[#1D293F] text-start">{product.description}</h1>
              <span className="text-[#56B280] flex justify-end font-medium text-xl">{product.price}$</span>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
};

export default ProductsSec;
