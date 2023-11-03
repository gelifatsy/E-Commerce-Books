import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { CartState } from "../context/Context";
import Rating from "./Rating";

function Genre() {
  const {
    bookState: {
      byStock,
      byFastDelivery,
      sort,
      byPrice,
      byRating,
      byLang,
      searchQuery,
    },
    bookDispatch,
  } = CartState();

  return (
    <div className="filterss">
      <span className="title">Filter By:</span>
      <span>
        <Form.Check
          inline
          label="Ascending"
          name="group1"
          type="radio"
          id={`inline-1`}
          onChange={() =>
            bookDispatch({
              type: "SORT_BY_PRICE",
              payload: "lowToHigh",
            })
          }
          checked={sort === "lowToHigh" ? true : false}
        />
      </span>
      <span>
        <Form.Check
          inline
          label="Descending"
          name="group1"
          type="radio"
          id={`inline-2`}
          onChange={() =>
            bookDispatch({
              type: "SORT_BY_PRICE",
              payload: "highToLow",
            })
          }
          checked={sort === "highToLow" ? true : false}
        />
      </span>
      <span>
        <Form.Check
          inline
          label="Include Out of Stock"
          name="group1"
          type="checkbox"
          id={`inline-3`}
          onChange={() =>
            bookDispatch({
              type: "FILTER_BY_STOCK",
            })
          }
          checked={byStock}
        />
      </span>
      <span>
        <Form.Check
          inline
          label="Fast Delivery Only"
          name="group1"
          type="checkbox"
          id={`inline-4`}
          onChange={() =>
            bookDispatch({
              type: "FILTER_BY_DELIVERY",
            })
          }
          checked={byFastDelivery}
        />
      </span>
      <span>
        <Form.Check
          inline
          label="Below 200Br."
          name="group1"
          type="checkbox"
          id={`inline-5`}
          onChange={() =>
            bookDispatch({
              type: "FILTER_BY_PRICEE",
              payload: 200,
            })
          }
          checked={byPrice}
        />
      </span>
      <span>
        <Form.Check
          inline
          label="English books"
          name="group1"
          type="checkbox"
          id={`inline-6`}
          onChange={() =>
            bookDispatch({
              type: "FILTER_BY_LANGUAGE",
              payload: "english",
            })
          }
          checked={byLang}
        />
      </span>
      <span>
        <label style={{ paddingRight: 10 }}>Rating: </label>
        <Rating
          rating={byRating}
          style={{ cursor: "pointer" }}
          onClick={(i) =>
            bookDispatch({
              type: "FILTER_BY_RATING",
              payload: i + 1,
            })
          }
        />
      </span>
      <Button
        variant="light"
        onClick={() =>
          bookDispatch({
            type: "CLEAR_FILTERS",
          })
        }
      >
        Clear Filters
      </Button>
    </div>
  );
}

export default Genre;
