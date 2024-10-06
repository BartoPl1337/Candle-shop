import React, { useState } from "react";
import { ShoppingCart, Truck } from "lucide-react";
import { Label } from "@radix-ui/react-label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import data from "../data";
import { useParams } from "react-router-dom";
import { useAtom } from "jotai";
import { cartStore } from "@/atom";

const ItemSec = () => {
  const [count, setCount] = useState(1);
  const [cart, setCart] = useAtom(cartStore);
  const params = useParams();
  const found = data.find((item) => item.id === parseInt(params.id));
  function addToCart(item) {
    const exist = cart.find((x) => x.description === item.description);
    if (exist) {
      setCart(
        cart.map((x) =>
          x.description === item.description
            ? { ...exist, quantity: count + exist.quantity }
            : x
        )
      );
    } else {
      setCart([...cart, { ...item, quantity: count }]);
    }
    console.log(exist)
  }

  console.log(cart?.quantity);
  return (
    <div className="flex mx-32 my-24">
      <div className="flex-1 flex flex-col items-center space-y-6">
        <img
          src={"/" + found.image}
          alt=""
          className="object-cover bg-[#F7F8FA] h-full w-full"
        />
        <span className="font-semibold text-[#1D252C] text-xl max-w-[450px] text-center">
          All hand-made with natural soy wax, Candleaf is made for your pleasure
          moments.
        </span>
        <h1 className="font-semibold text-xl text-[#56B280] flex items-center gap-1">
          <Truck className="text-black" /> FREE SHIPPING
        </h1>
      </div>

      <div className="flex-1 ml-20">
        <h1 className="font-medium text-4xl mb-3">{found.description}</h1>
        <div className="flex justify-between mt-6">
          <div className="space-y-6">
            <span className="font-semibold text-2xl text-[#56B280]">
              {found.price}
            </span>
            <div className="flex flex-col space-y-1">
              <span className="font-semibold">Quantity</span>
              <div className="flex font-bold gap-2 text-xl border-2 border-[#56B280] px-2">
                <button onClick={() => setCount((prev) => prev + 1)}>+</button>
                <span>{count}</span>
                <button
                  onClick={() => setCount((prev) => prev - 1)}
                  disabled={count === 1}
                >
                  -
                </button>
              </div>
            </div>
          </div>

          <div className="flex flex-col space-y-6">
            <div className="flex gap-2 items-center px-4">
              <input type="radio" name="value1" />
              <Label htmlFor="">One time purchase</Label>
            </div>
            <div className="border-2 max-w-[370px] p-4">
              <div className="flex gap-2 items-center">
                <input type="radio" name="value1" />
                <Label htmlFor="">Subscribe and delivery every</Label>
                <Select>
                  <SelectTrigger className="w-[100px]">
                    <SelectValue placeholder="2 weeks" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="never">Never</SelectItem>
                    <SelectItem value="TwoWeeks">2 weeks</SelectItem>
                    <SelectItem value="fourWeeks">4 weeks</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <span className="text-[#818181]">
                Subscribe now and get the 10% of discount on every recurring
                order. The discount will be applied at checkout.{" "}
                <span className="text-[#56B280]">See details</span>
              </span>
            </div>
            <div className="pt-16">
              <button
                onClick={() => addToCart(found)}
                className="bg-[#56B280] text-white border-2 px-8 py-3 rounded-lg flex gap-4 w-full justify-center font-bold text-xl hover:bg-white hover:border-[#56B280] hover:text-[#56B280]"
              >
                <ShoppingCart /> Add to cart
              </button>
            </div>
          </div>
        </div>

        <div className="text-[#1D252C] flex flex-col mt-12 p-4 space-y-2 font-semibold border-2 border-[#E6E6E6] rounded-md tracking-wider">
          <span>
            Wax:{" "}
            <span className="text-[#849A8E]">
              Top grade Soy wax that delivers a smoke less, consistent burn
            </span>
          </span>
          <span>
            Fragrance:{" "}
            <span className="text-[#849A8E]">
              Premium quality ingredients with natural essential oils
            </span>
          </span>
          <span>
            Burning Time: <span className="text-[#849A8E]">70-75 hours</span>
            Dimension: <span className="text-[#849A8E]">10cm x 5cm</span>{" "}
            Weight: <span className="text-[#849A8E]">400g</span>
          </span>
        </div>
      </div>
    </div>
  );
};

export default ItemSec;
