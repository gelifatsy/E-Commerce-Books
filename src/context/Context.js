import React, { createContext, useContext, useReducer } from "react";
//import { faker } from "@faker-js/faker";
import { bookReducer, cartReducer } from "./Reducer";
import { getBooks } from "./../server/fakeBookServer";

const Cart = createContext();
//faker.seed(99);

const Context = ({ children }) => {
  const books = getBooks();

  books.map((book) => ({
    id: book._id,
    name: book.title,
    image: book.image,
    instock: book.numberInStock,
    ratings: book.rating,
    price: book.price,
    lang: book.lang,
    sales: book.sales,
  }));

  const [state, dispatch] = useReducer(cartReducer, {
    books: books, //intial states
    cart: [],
  });
  const [bookState, bookDispatch] = useReducer(bookReducer, {
    byStock: false,
    byFastDelivery: false,
    byRating: 0,
    byPrice: false,
    searchQuery: "",
    byLang: false,
  });

  return (
    <Cart.Provider value={{ state, dispatch, bookState, bookDispatch }}>
      {children}
    </Cart.Provider>
  );
};

export default Context;
export const CartState = () => {
  // this will return Cart context with name CartState
  return useContext(Cart);
};
