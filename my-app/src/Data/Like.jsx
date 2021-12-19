// Made by Roderick Wells
import React from "react";
import { useState } from "react";
// import { FaRegThumbsUp } from "react-icons/fa";

export default function Like() {
  var [count, setCount] = useState(0);

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>
        <i class="fas fa-thumbs-up"></i>
        {count}
      </button>
    </div>
  );
}
