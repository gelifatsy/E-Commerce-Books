import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { CartState } from "../context/Context";

function SlideBar() {
  const {
    state: { books },
  } = CartState();
  const bestSeller = books.filter((book) => book.sales >= 100);
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="slide-container">
      <div className="best-seller">
        <h2>Best sellers</h2>
      </div>
      <div className="slide">
        <Slider {...settings} className="sld">
          {bestSeller.map((book) => (
            <div className="card">
              <div className="card-top">
                <img src={book.image} alt={book.title} key={book._id} />
                <h1>{book.title}</h1>
              </div>
              <div className="card-bottom">
                <h3>Br.{book.price}</h3>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default SlideBar;
