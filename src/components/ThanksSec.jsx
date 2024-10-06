import React from "react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { cartStore, getTotal } from "@/atom";
import { useAtom } from "jotai";
import { Link } from "react-router-dom";

const ThanksSec = () => {
  const [cart, setCart] = useAtom(cartStore);
  function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }
  return (
    <div className="flex">
      <div className="flex-1 px-32">
        <div className="py-5 mb-3">
          <Link to="/" className="flex gap-1 w-min">
            <img src="icon.png" alt="" className="object-cover" />
            <span className="text-[#56B280] font-bold text-2xl">Candleaf</span>
          </Link>
        </div>

        <Breadcrumb>
          <BreadcrumbList className="w-full">
            <BreadcrumbItem>
              <Link to="/Cart">
                <BreadcrumbLink className="text-[#56B280]">Cart</BreadcrumbLink>
              </Link>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage href="">Details</BreadcrumbPage>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink href="">Shipping</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink href="">Payment</BreadcrumbLink>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>

        <div className="mt-12 flex flex-col items-center">
          <img
            src="CheckCircle.png"
            alt=""
            className="object-cover w-[100px] h-[100px]"
          />
          <h1 className="font-medium text-3xl mt-5">Payment Confirmed</h1>
          <span className="text-[#56B280] mt-2">ORDER #{getRandomInt(50)}</span>
          <span className="text-[#818181] text-balance text-center mt-2">
            Thank you {} for buying Candleaf. The nature is grateful to you. Now
            that your order is confirmed it will be ready to ship in 2 days.
            Please check your inbox in the future for your order updates.
          </span>
          <div className="flex flex-col mt-8 w-full items-center space-y-4">
            <button className="w-1/2 items-center py-2 px-11 bg-[#56B280] text-white border-2 rounded-lg flex justify-center font-semibold text-xl hover:bg-white hover:border-[#56B280] hover:text-[#56B280]">
              Back to shopping
            </button>
            <Link to="/Shipping">
              <button className="underline text-[#56B280] text-lg">
                Print receipt
              </button>
            </Link>
          </div>
        </div>
      </div>

      <div className="flex-1 bg-[#F2F2F2] px-32 h-screen pt-20">
        <div className="flex flex-col space-y-6">
          {cart.map((item) => (
            <div className="flex gap-16">
              <div className="relative">
                <img
                  src={item.image}
                  alt=""
                  className="object-cover bg-[#F7F8FA]"
                />
                <span className="absolute -top-2 -right-2 bg-[#56B280] text-white text-sm font-semibold rounded-full h-6 w-6 flex items-center justify-center">
                  {item.quantity}
                </span>
              </div>
              <div className="flex flex-col align-top text-start">
                <span className="font-medium text-[#272727]">
                  {item.description}
                </span>
                <span className="text-[#56B280] font-semibold text-xl">
                  $ {item.price}
                </span>
              </div>
            </div>
          ))}
          <hr className="border-[#56B280]/20" />
        </div>

        <div className="flex gap-3 my-7 items-center">
          <input
            type="text"
            placeholder="Coupon code"
            className="py-3 placeholder:px-4 w-3/4 border-[#A8A8A8] text-[#616161] text-sm"
          />
          <button className="rounded-lg bg-[#A8A8A8] text-white px-6 py-3">
            Add code
          </button>
        </div>
        <hr className="border-[#56B280]/20" />
        <div className="my-8 flex flex-col space-y-4">
          <div className="flex justify-between">
            <span className="font-medium text-sm text-[#616161]">Subtotal</span>
            <span className="font-medium text-sm text-[#272727]">
              $ {getTotal(cart)}
            </span>
          </div>
          <div className="flex justify-between font-medium text-sm text-[#616161]">
            <span>Shipping</span>
            <span>Calculated at the next step</span>
          </div>
        </div>
        <hr className="border-[#56B280]/20" />
        <div className="flex justify-between mt-8">
          <span className="font-medium text-sm text-[#616161]">Total</span>
          <span className="font-medium text-2xl">$ {getTotal(cart)}</span>
        </div>
      </div>
    </div>
  );
};

export default ThanksSec;
