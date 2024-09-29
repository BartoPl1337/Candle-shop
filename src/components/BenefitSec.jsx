import { BadgeCheck } from "lucide-react";
import React from "react";

const BenefitSec = () => {
  return (
    <div className="bg-[#F7F8FA]">
      <div className="flex mx-80">

        <div className="flex flex-col flex-1 justify-center">
          <div className="mb-12">
            <h1 className="font-medium text-4xl max-w-[300px] mb-4">
              Clean and fragrant soy wax
            </h1>
            <span className="text-[#56B280]">
              Made for your home and for your wellness
            </span>
          </div>
          <div className="flex flex-col space-y-2">
            <span className="flex gap-2 items-center">
              <BadgeCheck size={16} />
              <span className="font-semibold">
                <span className="font-bold">Eco-sustainable: </span>All recyclable materials, 0% CO2
                emissions
              </span>
            </span>
            <span className="flex items-center gap-2">
              <BadgeCheck size={16} />
              <span className="font-semibold">
                <span className="font-bold">Hyphoallergenic: </span>100% natural, human friendly
                ingredients
              </span>
            </span>
            <span className="flex items-center gap-2">
              <BadgeCheck size={16} />
              <span className="font-semibold">
                <span className="font-bold">Handmade: </span>All candles are craftly made with love.
              </span>
            </span>
            <span className="flex items-center gap-2">
              <BadgeCheck size={16} />
              <span className="font-semibold">
                <span className="font-bold">Long burning: </span>No more waste. Created for last long.
              </span>
            </span>
          </div>

          <button className="bg-[#56B280] text-xl font-medium text-white rounded-md w-44 p-1 mt-14">Learn more</button>
        </div>

        <div className="flex-1 mt-24">
          <img src="image.png" alt="" className="object-cover" />
        </div>
      </div>
    </div>
  );
};

export default BenefitSec;
