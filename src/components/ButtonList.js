import React from "react";
import Button from "./Button";

const ButtonList = () => {
  const list = [
    "All",
    "Live",
    "Gaming",
    "Songs",
    "Soccer",
    "cricket",
    "cooking",
    "valentine",
    "Movie",
    "News",
    "Shorts",
    "Crafts",
    "Tech",
    "Coding",
  ];
  return (
    <div className="flex">
      {list.map((name, index) => (
        <Button key={index} name={name} />
      ))}
    </div>
  );
};

export default ButtonList;
