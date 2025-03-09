import React, { useState } from "react";
import "./index.css";
import { Modal } from "../Modal";
import { Link } from "react-router-dom";
type CardProps = {
  id: number;
  name: string;
  price: number;
  image: string;
};

export const Card: React.FC<CardProps> = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="Card">
        <img className="Card_img" src={props.image} alt="coolImage" />
        <p className="Card_name">{props.name}</p>
        <p className="Card_price">{props.price}</p>
        <Link to={`/catalog/${props.id}`} state={{ data: props }}>
          <button>CheckItem</button>
        </Link>
      </div>
      {isOpen && (
        <Modal isOpen={isOpen} onClose={() => setIsOpen(false)} data={props} />
      )}
    </>
  );
};
