import React from "react";
import "./Card.css";
interface Props {
  companyName: string;
  ticker: string;
  price: string;
}

const Card = ({ companyName, ticker, price }: Props) => {
  return (
    <div className="card">
      <img src="sillybird.jpeg" alt="Image" />
      <div className="details">
        <h2>
          {companyName} ({ticker})
        </h2>
        <p>${price}</p>
      </div>
      <p className="info">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente odio
        aliquid iste iusto voluptatem. Illo, ad dolores? Ipsum rerum sunt harum
        odio suscipit is te aliquam aliquid voluptates? Reprehenderit, nemo
        quidem.
      </p>
    </div>
  );
};

export default Card;
