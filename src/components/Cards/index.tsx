import React from "react";
import "./index.css";
import { Card } from "../Card";
type SortType = {
  type: string;
};
type Item = {
  id: number;
  name: string;
  price: number;
  image: string;
};
type CardsProps = {
  data: Item[];
  typeSorting: SortType;
};
export const Cards: React.FC<CardsProps> = (props) => {
  const sortingWithFilter = [...(props.data || [])].sort((a, b) => {
    return props.typeSorting.type === "min"
      ? a.price - b.price
      : b.price - a.price;
  });

  return (
    <ul className="Cards">
      {sortingWithFilter.length > 0 ? (
        sortingWithFilter.map((item) => (
          <Card
            key={item.id}
            id={item.id}
            image={item.image}
            name={item.name}
            price={item.price}
          />
        ))
      ) : (
        <h1>Тут нічого немає</h1>
      )}
    </ul>
  );
};
