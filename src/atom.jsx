import { atom } from "jotai";

export const cartStore = atom([]);
export const getTotal = (cart) => { 
  return cart.reduce((prev, current) => prev + current.price * current.quantity, 0);
}
export const userInformation = atom();