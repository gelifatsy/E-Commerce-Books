import React from "react";
import { Card, Button } from "react-bootstrap";
import Rating from "./Rating";
import { CartState } from "../context/Context";

function SingleProduct({ book }) {
  const {
    state: { cart },
    dispatch,
  } = CartState();
  return (
    <div className="products">
      <Card className="container-items">
        <Card.Img
          variant="top"
          src={book.image}
          alt={book.title}
          className="container-img"
        />
        <Card.Body className="container-body">
          <Card.Title className="book-title">{book.title}</Card.Title>
          <Card.Subtitle>
            {<span>Br.{book.price} </span>}

            {/* {prod.fastDelivery ? (
              <div>Fast Delivery</div>
            ) : (
              <div>4 days Delivery</div>
            )} */}
            <Rating rating={book.rating} />
          </Card.Subtitle>
          {cart.some((p) => p._id === book._id) ? (
            <Button
              className="cart-btn"
              onClick={() => {
                dispatch({
                  type: "REMOVE_FROM_CART",
                  payload: book,
                });
              }}
              variant="danger"
            >
              Remove From Cart
            </Button>
          ) : (
            <Button
              className="cart-btn"
              onClick={() => {
                dispatch({
                  type: "ADD_TO_CART",
                  payload: book,
                });
              }}
              disabled={!book.numberInStock}
            >
              {book.numberInStock ? " Add to Cart " : "Out of Stock"}
            </Button>
          )}
        </Card.Body>
      </Card>
    </div>
  );
}

export default SingleProduct;
