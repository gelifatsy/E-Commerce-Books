import { useEffect, useState } from "react";
import { Button, Col, Form, Image, ListGroup, Row } from "react-bootstrap";
import { AiFillDelete } from "react-icons/ai";
import { CartState } from "../context/Context";
import Rating from "./Rating";
import { Link } from "react-router-dom";
import Login from "./Login";

const Cart = () => {
  const {
    state: { cart },
    dispatch,
  } = CartState();
  const [total, setTotal] = useState();
  const [openModal, setOpenModal] = useState(false);

  useEffect(() => {
    setTotal(
      cart.reduce((acc, curr) => acc + Number(curr.price) * curr.qty, 0)
    );
  }, [cart]);

  return (
    <div className="cartbody">
      <div className="cartContainer">
        <ListGroup>
          {cart.map((book) => (
            <ListGroup.Item key={book.id}>
              <Row>
                <Col md={2}>
                  <Image src={book.image} alt={book.title} fluid rounded />
                </Col>
                <Col md={2}>
                  <span>{book.title}</span>
                </Col>
                <Col md={2}>Br. {book.price}</Col>
                <Col md={2}>
                  <Rating rating={book.rating} />
                </Col>
                <Col md={2}>
                  <Form.Control
                    as="select"
                    value={book.qty}
                    onChange={(e) =>
                      dispatch({
                        type: "CHANGE_CART_QTY",
                        payload: {
                          id: book._id,
                          qty: e.target.value,
                        },
                      })
                    }
                  >
                    {[...Array(book.numberInStock).keys()].map((x) => (
                      <option key={x + 1}>{x + 1}</option>
                    ))}
                  </Form.Control>
                </Col>
                <Col md={2}>
                  <Button
                    type="button"
                    variant="light"
                    onClick={() =>
                      dispatch({
                        type: "REMOVE_FROM_CART",
                        payload: book,
                      })
                    }
                  >
                    <AiFillDelete fontSize="20px" />
                  </Button>
                </Col>
              </Row>
            </ListGroup.Item>
          ))}
        </ListGroup>
      </div>
      <div className="cart-filterss summary">
        <span className="title">Subtotal ({cart.length}) items</span>
        <span className="hr" style={{ fontWeight: 700, fontSize: 20 }}>
          Total: Br. {total}
        </span>
        <Link>
          <Button
            className="openModalBtn hr"
            type="button"
            disabled={cart.length === 0}
            onClick={() => {
              setOpenModal(true);
            }}
          >
            Checkout
          </Button>
        </Link>
        {openModal && <Login closeModal={setOpenModal} />}
      </div>
    </div>
  );
};

export default Cart;
