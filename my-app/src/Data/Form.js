import React, { useState } from "react";
import FormSignup from "./FormSignup";
import FormSuccess from "./FormSuccess";
import Profile from "./Profile";

import { Link } from "react-router-dom";
const Form = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  function submitForm() {
    setIsSubmitted(true);
  }
  return (
    <div>
      {!isSubmitted ? <FormSignup submitForm={submitForm} /> : <Profile />}
    </div>
  );
};
export default Form;
