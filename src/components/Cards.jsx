import React from "react";

const Cards = ({ cards }) => {
  return (
    <div>
      {cards?.map((c) => {
        return (
          <div key={c.code}>
            <img src={c.image} alt="" />
          </div>
        );
      })}
    </div>
  );
};

export default Cards;
