import React from "react";
import data from "../data1";
import { Star } from "lucide-react";
const TestimonialsSec = () => {
  return (
    <div className="bg-[#56B280]/10">
      <div className="flex flex-col py-32 mx-80">
        <div className="flex flex-col items-center mb-4">
          <h1 className="font-medium text-4xl text-[#0B254B]">Testimonials</h1>
          <p className="text-[#5E6E89] font-medium">
            Some quotes from our happy customers
          </p>
        </div>

        <div className="grid grid-cols-3 grid-rows-1">
          {data.map((testimonial) => (
            <div className="flex flex-col items-center p-6 text-center space-y-1">
              <img src={testimonial.avatar} alt="" />
              <span className="flex text-[#5BC08A]">
                {Array.from({ length: testimonial.stars }).map((_, i) => (
                  <Star key={i} size={24} />
                ))}
              </span>
              <span className="text-[#1D293F] font-medium text-2xl max-w-[250px]">{testimonial.description}</span>
              <span className="text-[#7C8087]">{testimonial.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TestimonialsSec;
