import React, { useState } from "react";
import {
  Badge,
  Button,
  Container,
  Dropdown,
  FormControl,
  Navbar,
} from "react-bootstrap";
import { AiFillDelete } from "react-icons/ai";
import { HiUser } from "react-icons/hi";
import { FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";
import { CartState } from "../context/Context";

const Header = () => {
  const {
    state: { cart },
    dispatch,
    bookDispatch,
  } = CartState();
  return (
    <div>
      <div className="header">
        <Navbar variant="dark" style={{ height: 80 }}>
          <Container className="stiky">
            <Navbar.Brand>
              <Link to="/">Abol Books</Link>
            </Navbar.Brand>
            <Navbar.Text className="search">
              <FormControl
                style={{ width: 500 }}
                placeholder="Search your favorite book"
                className="m-auto"
                onChange={(e) => {
                  bookDispatch({
                    type: "FILTER_BY_SEARCH",
                    payload: e.target.value,
                  });
                }}
              />
            </Navbar.Text>
            <Dropdown alignRight>
              <div className="log-in">
                <div className="loged-in">
                  <Link to="/login">
                    <HiUser color="white" fontSize="25px" />
                  </Link>
                </div>
                <div>
                  <Dropdown.Toggle variant="success">
                    <Link to="/cart">
                      <FaShoppingCart color="white" fontSize="25px" />
                    </Link>
                    <Badge>{cart.length}</Badge>
                  </Dropdown.Toggle>
                </div>
              </div>
              <Dropdown.Menu style={{ minWidth: 270 }}>
                {cart.length > 0 ? (
                  <>
                    {cart.map((book) => (
                      <span
                        className="cartitem"
                        // style={{ width: "25%" }}
                        key={book._id}
                      >
                        <img
                          src={book.image}
                          className="cartItemImg"
                          alt={book.name}
                        />
                        <div className="cartItemDetail">
                          <span>{book.title}</span>
                          <span>Br. {book.price}</span>
                        </div>
                        <AiFillDelete
                          fontSize="20px"
                          style={{ cursor: "pointer" }}
                          onClick={() =>
                            dispatch({
                              type: "REMOVE_FROM_CART",
                              payload: book,
                            })
                          }
                        />
                      </span>
                    ))}
                    <Link to="/cart">
                      <Button style={{ width: "95%", margin: "0 10px " }}>
                        Go to Cart
                      </Button>
                    </Link>
                  </>
                ) : (
                  <span style={{ padding: 10 }}>Cart is Empty </span>
                )}
              </Dropdown.Menu>
            </Dropdown>
          </Container>
        </Navbar>
      </div>
    </div>
  );
};

export default Header;
