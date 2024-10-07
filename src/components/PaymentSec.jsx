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
import { cartStore, getTotal, userInformation } from "@/atom";
import { useAtom } from "jotai";
import { CreditCard } from "lucide-react";
import { Checkbox } from "@/components/ui/checkbox";
import { useForm } from "react-hook-form";

const PaymentSec = () => {
  const [cart, setCart] = useAtom(cartStore);
  const [userInfo, setUserInfo] = useAtom(userInformation);
  const { register, handleSubmit } = useForm();
  const router = useNavigate();
  const onSubmit = (data) => {
    setUserInfo((prevUserInfo) => ({
      ...prevUserInfo,
      ...data
    }));
    router("/Thanks");
  };
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
              <BreadcrumbLink className="text-[#56B280]">
                Details
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink className="text-[#56B280]">
                Shipping
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>Payment</BreadcrumbPage>
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
                <span>
                  {userInfo?.Address}, {userInfo?.PostalCode}, {userInfo?.City},{" "}
                  {userInfo?.Country}
                </span>
              </div>
              <span className="text-[#56B280]">Edit</span>
            </div>
            <hr className="border-[#56B280]/20" />
            <div className="flex justify-between">
              <div className="flex gap-4">
                <span className="text-[#818181]">Method</span>
                <span>Standard Shipping - Free</span>
              </div>
              <span className="text-[#56B280]">Edit</span>
            </div>
          </div>
        </div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="my-10">
            <h1 className="mb-6 font-medium text-xl">Payment method</h1>
            <div className="border border-[#616161] rounded-md">
              <div className="rounded-md border bg-gradient-to-r from-[#56B280]/20 to-[#56B280]/40">
                <div className="flex gap-4 text-[#56B280] items-center py-3 px-4">
                  <CreditCard size={34} />
                  <span className="font-bold text-lg">Credit card</span>
                </div>
              </div>
              <div className="flex flex-col space-y-3 my-8 px-4">
                <input
                  type="text"
                  placeholder="Card Number"
                  className="border indent-4 w-full py-2 text-[#898989] focus:outline-none"
                  {...register("cardNumber", { required: true })}
                />
                <input
                  type="text"
                  placeholder="Holder Name"
                  className="border indent-4 w-full py-2 text-[#898989] focus:outline-none"
                  {...register("holderName", { required: true })}
                />
                <div className="flex gap-4">
                  <input
                    type="text"
                    placeholder="Expiration (MM/YY)"
                    className="border indent-4 w-full py-2 text-[#898989] focus:outline-none "
                    {...register("expiration", { required: true })}
                  />
                  <input
                    type="text"
                    placeholder="CVV"
                    className="border indent-4 w-full py-2 text-[#898989] focus:outline-none "
                    {...register("cvv", { required: true })}
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="mb-10">
            <h1 className="font-medium text-xl">Tax Informations</h1>
            <div className="flex space-y-2 flex-col my-6">
              <input
                type="text"
                placeholder="VAT number (optional)"
                className="border border-[#898989] indent-4 w-full py-2 text-[#616161] focus:outline-none"
                {...register("vatNumber", { required: false })}
              />
              <input
                type="text"
                placeholder="PEC (optional)"
                className="border border-[#898989] indent-4 w-full py-2 text-[#616161] focus:outline-none"
                {...register("pec", { required: false })}
              />
            </div>
          </div>

          <div>
            <h1 className="font-medium text-xl">Billing address</h1>
            <div className="flex flex-col my-6 border border-[#E5E5E5] rounded-md p-6 space-y-2">
              <span className="flex gap-4 items-center">
                <Checkbox htmlFor="same" />
                <label htmlFor="same">Same as the shipping address</label>
              </span>
              <hr className="border-[#E5E5E5] border" />
              <span className="flex gap-4 items-center">
                <Checkbox htmlFor="different" />
                <label htmlFor="different">
                  Use a different address for billing
                </label>
              </span>
            </div>
          </div>
          <div className="mb-10">
            <div className="flex justify-between mt-16 items-center">
              <Link to="/Shipping">
                <button className="underline text-[#56B280] text-lg mt-4">
                  Back to shipping
                </button>
              </Link>

              <input
                type="submit"
                value="Pay now"
                className="w-1/2 items-center py-2 px-11 bg-[#56B280] text-white border-2 rounded-lg flex justify-center font-semibold text-xl hover:bg-white hover:border-[#56B280] hover:text-[#56B280]"
              />
            </div>
          </div>
        </form>
      </div>

      <div className="flex-1 bg-[#F2F2F2] px-32 max-h pt-20">
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
            className="py-3 indent-4 w-3/4 border-[#A8A8A8] text-[#616161] text-sm"
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

export default PaymentSec;
