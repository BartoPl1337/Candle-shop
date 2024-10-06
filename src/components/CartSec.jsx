import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useAtom } from "jotai";
import { cartStore, getTotal } from "@/atom";
const CartSec = () => {
  const [cart, setCart] = useAtom(cartStore);
  function deleteFromCart(item) {
    const exist = cart.find((x) => x.description === item.description);
    if (exist) {
      if (exist.quantity === 1) {
        setCart(cart.filter((x) => x.description !== item.description));
      } else {
        setCart(
          cart.map((x) => {
            if (x.quantity === 1) {
              return cart.filter((x) => x.description !== item.description);
            }
            return x.description === item.description
              ? { ...exist, quantity: exist.quantity - 1 }
              : x;
          })
        );
      }
    }
  }
  function addToCart(item) {
    const exist = cart.find((x) => x.description === item.description);
    if (exist) {
      setCart(
        cart.map((x) =>
          x.description === item.description
            ? { ...exist, quantity: exist.quantity + 1 }
            : x
        )
      );
    }
  }

  function RemoveBtn(removeId) {
    setCart(cart.filter((item, index) => item.id !== removeId));
  }
  console.log(cart);
  return (
    <div className="pt-16 px-80 pb-36">
      <div className="flex flex-col items-center">
        <h1 className="text-2xl font-medium">Your cart items</h1>
        <Link to="/" className="mb-12">
          <span className="underline text-[#56B280] text-lg">
            Back to shopping
          </span>
        </Link>

        <Table>
          <TableCaption>All of yours products.</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead className="">Product</TableHead>
              <TableHead className="text-right">Price</TableHead>
              <TableHead className="text-right">Quantity</TableHead>
              <TableHead className="text-right">Total</TableHead>
            </TableRow>
          </TableHeader>
          {cart.map((Item) => (
            <TableBody className="border-b">
              <TableRow>
                <TableCell className="flex">
                  <Link to={`/products/${Item.id}`}>
                    <img src={Item.image} alt="" className="bg-[#F7F8FA]" />
                  </Link>
                  <div className="flex flex-col items-start mx-8">
                    <span className="text-2xl font-medium">
                      {Item.description}
                    </span>
                    <button
                      className="underline text-[#56B280] text-lg mt-4"
                      onClick={() => RemoveBtn(Item.id)}
                    >
                      Remove
                    </button>
                  </div>
                </TableCell>
                <TableCell className="text-right">{Item.price}</TableCell>
                <TableCell className="text-right">
                  <div className="flex flex-col space-y-1">
                    <span className="font-semibold">Quantity</span>
                    <div className="flex font-bold gap-2 text-xl justify-end">
                      <button
                        onClick={() => addToCart(Item)}
                        className="border px-1 items-center"
                      >
                        +
                      </button>
                      <span className="text-base flex items-center">
                        {Item.quantity}
                      </span>
                      <button
                        onClick={() => deleteFromCart(Item)}
                        disabled={cart?.quantity === 1}
                        className="border px-1 items-center"
                      >
                        -
                      </button>
                    </div>
                  </div>
                </TableCell>
                <TableCell className="text-right font-bold">
                  {Item.quantity * Item.price}$
                </TableCell>
              </TableRow>
            </TableBody>
          ))}
        </Table>

        <div className="flex mt-11 w-full justify-end">
          <div className="flex flex-col mr-20">
            <div className="flex">
              <div className="flex-1"></div>
              <span className="flex-1 text-xl font-medium">Sub-total</span>
              <span className="flex-1 text-xl font-medium text-end">
                {getTotal(cart)}$
              </span>
            </div>
            <span className="text-[#9E9E9E] mt-2">
              Tax and shipping cost will be calculated later
            </span>
          </div>
          <Link
            to="/Authentication"
            className="items-center bg-[#56B280] text-white border-2 rounded-lg flex w-48 justify-center font-semibold text-xl hover:bg-white hover:border-[#56B280] hover:text-[#56B280]"
          >
            Check-out
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CartSec;
