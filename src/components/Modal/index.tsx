import React from "react";
import "./index.css";

type CardProps = {
  name: string;
  price: number;
  image: string;
};
type ModalProps = {
  isOpen?: boolean;
  onClose?: () => void; // Функція для закриття модалки
  data?: CardProps;
};

export const Modal: React.FC<ModalProps> = ({ isOpen, onClose, data }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button onClick={onClose}>Закрити</button>
        <h2>Це модальне вікно!</h2>
        <img className="modalImage" src={data?.image} alt="coolImage" />
        <p>{data?.price}</p>
        <h1>{data?.name}</h1>
      </div>
    </div>
  );
};
