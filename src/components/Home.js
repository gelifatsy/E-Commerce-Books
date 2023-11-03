import React from "react";
import { CartState } from "../context/Context";
import SingleProduct from "./SingleProduct";
import "./styles.css";
import Filters from "./Filters";
import SlideBar from "./SlideBar";
import Genre from "./Genre";

const Home = () => {
  const {
    state: { books }, // distracturing state from cart state and destructring products from state it self
    bookState: {
      byStock,
      byFastDelivery,
      sort,
      byRating,
      byPrice,
      byLang,
      searchQuery,
    },
  } = CartState();

  const displayBooks = () => {
    let sortedBooks = books;
    if (sort) {
      sortedBooks = sortedBooks.sort((a, b) =>
        sort === "lowToHigh" ? a.price - b.price : b.price - a.price
      );
    }
    if (!byStock) {
      sortedBooks = sortedBooks.filter((book) => book.numberInStock);
    }
    // if (byFastDelivery) {
    //   sortedBooks = sortedBooks.filter((book) => book.fastDelivery);
    // }
    if (byRating) {
      sortedBooks = sortedBooks.filter((book) => book.rating >= byRating);
    }
    if (byPrice) {
      sortedBooks = sortedBooks.filter((book) => book.price <= 200);
    }
    if (byLang) {
      sortedBooks = sortedBooks.filter((book) => {
        return book.lang === "english";
      });
    }
    if (searchQuery) {
      sortedBooks = sortedBooks.filter((book) =>
        book.title.toLowerCase().includes(searchQuery)
      );
    }

    return sortedBooks;
  };

  return (
    <div>
      <SlideBar />
      <div className="home">
        {/* <div>
          <Filters />
        </div> */}
        <div className="home-container">
          <div>
            <Genre />
          </div>
          <div className="productContainer">
            {displayBooks().map((book) => {
              return <SingleProduct book={book} key={book._id} />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
