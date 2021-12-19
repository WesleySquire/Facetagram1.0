// Made by Roderick Wells
import React from "react";
import { useState } from "react";
// import { FaRegThumbsDown } from "react-icons/fa";

export default function Dislike() {
  var [count, setCount] = useState(0);

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>
        <i class="fas fa-thumbs-down"></i>
        {count}
      </button>
    </div>
  );
}
