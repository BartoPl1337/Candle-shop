import { cartStore, getTotal, userInformation } from "@/atom";
import { Checkbox } from "@/components/ui/checkbox";
import { useAtom } from "jotai";
import React from "react";
import { Link } from "react-router-dom";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { ScrollArea } from "@radix-ui/react-scroll-area";

const ShippingSec = () => {
  const [cart, setCart] = useAtom(cartStore);
  const [userInfo, setUserInfo] = useAtom(userInformation);
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
              <Link to="/Authentication">
                <BreadcrumbLink className="text-[#56B280]">
                  Details
                </BreadcrumbLink>
              </Link>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage href="">Shipping</BreadcrumbPage>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink href="">Payment</BreadcrumbLink>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>

        <div className="my-11 border">
          <div className="py-4 px-6 flex flex-col gap-6">
            <div className="flex justify-between">
              <div className="flex gap-4">
                <span className="text-[#818181]">Contact</span>
                <span>{userInfo?.email}</span>
              </div>
              <span className="text-[#56B280]">Edit</span>
            </div>
            <hr className="border-[#56B280]/20" />
            <div className="flex justify-between">
            <div className="flex gap-4">
                <span className="text-[#818181]">Ship to</span>
                <span>{userInfo?.Address}, {userInfo?.PostalCode}, {userInfo?.City}, {userInfo?.Country}</span>
              </div>
              <span className="text-[#56B280]">Edit</span>
            </div>
          </div>
        </div>

        <div className="mt-10 mb-64">
          <span className="font-medium text-xl">Shipping method</span>
          <div className="flex justify-between px-4 border rounded-md border-[#E5E5E5] py-4 mt-6 items-center">
            <div className="flex gap-6 items-center">
              <Checkbox id="method" required/>
              <label htmlFor="method">Standard Shipping</label>
            </div>
            <span className="font-bold text-sm">Free</span>
          </div>
        </div>

        <div className="flex justify-between items-center">
          <Link to="/Authentication">
            <button className="underline text-[#56B280] text-lg mt-4">
              Back to cart
            </button>
          </Link>

          <Link
            to="/Payment"
            className="w-1/2 items-center py-2 px-11 bg-[#56B280] text-white border-2 rounded-lg flex justify-center font-semibold text-xl hover:bg-white hover:border-[#56B280] hover:text-[#56B280]"
          >
            <button>Go to shipping</button>
          </Link>
        </div>
      </div>

      <div className="flex-1 bg-[#F2F2F2] px-32 h-screen pt-20">
        <div className="flex flex-col space-y-6">
        <ScrollArea className="p-4 h-[450px]">
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
        </ScrollArea>
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

export default ShippingSec;
