import { useState } from "react";

const SimpleInput = () => {
  const [enteredName, setEnteredName] = useState("");
  const [touchInput, setTouchInput] = useState(false);
  const nameValidity = enteredName.trim() !== "";
  const nameInputInvalid = !nameValidity && touchInput;

  let formValdity = false;

  if (nameValidity) {
    // will reevaluate everytime nameValidity changes
    formValdity = true;
  }

  const nameInputChangeHandler = (event) => {
    setEnteredName(event.target.value);
    if (event.target.value.trim() !== "") {
    }
  };

  const inputBlurHandler = () => {
    setTouchInput(true); // if the user opens and leave it should be tested
  };

  const formSubmissionHandler = (event) => {
    event.preventDefault();
    setTouchInput(true);
    if (!nameValidity) {
      return;
    }

    console.log(enteredName);
    setEnteredName(""); // Cleaning the input
    setTouchInput(false); // Reseting touch to remove the error
  };

  // Changing classes based on validity
  const formClasses = nameInputInvalid
    ? "form-control invalid"
    : "form-control";

  return (
    <form onSubmit={formSubmissionHandler}>
      <div className={formClasses}>
        <label htmlFor='name'>Your Name</label>
        <input
          type='text'
          id='name'
          onChange={nameInputChangeHandler}
          onBlur={inputBlurHandler}
          value={enteredName}
        />
        {nameInputInvalid && ( // this text on shows when input is invalid
          <p className='error-text'>Name must not be empty!</p>
        )}
      </div>
      <div className='form-actions'>
        <button disabled={!formValdity}>Submit</button> 
        {/* this button will change if the form is invalid */}
      </div>
    </form>
  );
};

export default SimpleInput;
