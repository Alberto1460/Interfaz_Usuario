import React from "react";
import "./index.css";

function SubmitForm(props) {
  const handleBackClick = () => {
    props.onBackClick(); // Llama a la función onBackClick pasada como prop
  };

  return (
    <div className="submit-form-container">
      <div className="left">
      <h1>Sistema para la generación de Referencias Bancarias</h1>
      </div>
      <div className="right">
      <h1>Sistema para la generación de Referencias Bancarias</h1>
      </div>
      <button className="back-button" onClick={handleBackClick}>
        Regresar
      </button>
    </div>
  );
}

export default SubmitForm;