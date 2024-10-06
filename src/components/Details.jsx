import React from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Checkbox } from "@/components/ui/checkbox";
import { useAtom } from "jotai";
import { cartStore, getTotal, userInformation } from "@/atom";
import { useForm } from "react-hook-form";

const Details = () => {
  const router = useNavigate();
  const { register, handleSubmit } = useForm();
  const [userInfo, setUserInfo] = useAtom(userInformation);
  const onSubmit = (data) => {
    setUserInfo(data);
    router("/Shipping");
  };
  const [cart, setCart] = useAtom(cartStore);
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
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mt-16 mb-20">
            <div className="flex justify-between items-center mb-3">
              <span className="font-medium text-xl">Contact</span>
              <span className="text-[#616161] font-medium text-sm flex items-center gap-1">
                Do you have an account?{" "}
                <Link to="" className="text-[#56B280]">
                  Login
                </Link>
              </span>
            </div>

            <div className="flex flex-col space-y-2">
              <input
              type="email"
                className="border border-[#56B280] placeholder:px-4 w-full py-2 text-[#616161] focus:outline-none "
                placeholder="Email or mobile phone number"
                {...register("email", { required: true })}
              />
              <div className="flex gap-2 items-center">
                <Checkbox id="term" />
                <label htmlFor="term" className="text-sm text-[#272727]">
                  Add me to Candleaf newsletter for a 10% discount
                </label>
              </div>
            </div>
          </div>

          <div className="text-[#616161] flex flex-col space-y-6">
            <h1 className="font-medium text-xl">Shipping Address</h1>
            <div className="flex gap-2">
              <input
                type="text"
                placeholder="Name"
                className="placeholder:px-4 py-2 border flex-1"
                {...register("name", { required: true })}
              />
              <input
                type="text"
                placeholder="Second Name"
                className="placeholder:px-4 py-2 border flex-1"
                {...register("SecondName", { required: true })}
              />
            </div>
            <input
              type="text"
              placeholder="Address and number"
              className="placeholder:px-4 py-2 border"
              {...register("Address", { required: true })}
            />
            <input
              type="text"
              placeholder="Shipping note (optional)"
              className="placeholder:px-4 py-2 border"
              {...register("ShippingNote", { required: true })}
            />
            <div className="flex gap-2">
              <input
                type="text"
                placeholder="City"
                className="py-2 border flex- placeholder:px-4"
                {...register("City", { required: true })}
              />
              <input
                type="text"
                placeholder="Postal Code"
                className="py-2 border flex-1 placeholder:px-4"
                {...register("PostalCode", { required: true })}
              />
              <input
                type="text"
                placeholder="Province"
                className="py-2 border flex-1 placeholder:px-4"
                {...register("Province", { required: true })}
              />
            </div>
            <input
              type="text"
              placeholder="Country/Region"
              className="py-2 border placeholder:px-4"
              {...register("Country", { required: true })}
            />
            <div className="flex gap-2 items-center">
              <Checkbox id="save" />
              <label htmlFor="save" className="text-sm text-[#272727]">
                Save this informations for a future fast checkout
              </label>
            </div>
          </div>

          <div className="flex justify-between mt-16 items-center">
            <Link to="/Cart">
              <button className="underline text-[#56B280] text-lg mt-4">
                Back to cart
              </button>
            </Link>

            <input
            type="submit"
            value="Go to Shipping"
            className="w-1/2 items-center py-2 px-11 bg-[#56B280] text-white border-2 rounded-lg flex justify-center font-semibold text-xl hover:bg-white hover:border-[#56B280] hover:text-[#56B280]"
            />
              {/* <button type="submit"
              className="w-1/2 items-center py-2 px-11 bg-[#56B280] text-white border-2 rounded-lg flex justify-center font-semibold text-xl hover:bg-white hover:border-[#56B280] hover:text-[#56B280]"
              >Go to Shipping</button> */}
          </div>
        </form>
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

export default Details;
