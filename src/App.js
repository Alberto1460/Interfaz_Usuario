import React, { useState } from "react";
import "./index.css";
import SubmitForm from "./SubmitForm";

function App() {
  const [gridBackground, setGridBackground] = useState("#3fc992");
  const [showReferences, setShowReferences] = useState(false);
  const [showSubmitForm, setShowSubmitForm] = useState(false); // Nuevo estado
  const [showMainForm, setShowMainForm] = useState(true); // Nuevo estado para el formulario principal

  const handleShowButtonClick = () => {
    setGridBackground("#fff68f");
    setShowReferences(true);
  };

  const handleSendButtonClick = (event) => {
    event.preventDefault(); // Prevenir el comportamiento por defecto del formulario
    setGridBackground("#8cff7a");
    setShowReferences(false);
    setShowMainForm(false); // Oculta el formulario principal
    setShowSubmitForm(true); // Muestra el formulario de envío
  };

  const handleBackClick = () => {
    setShowMainForm(true); // Oculta el formulario principal
    setShowSubmitForm(false); // Oculta el formulario de envío
  };

  return (
    <div className="grid-container">
      <div className="left">
        <h1>Sistema para la generación de Referencias Bancarias</h1>
        <div className="dropdowns-container">
          <label htmlFor="mes">Mes:</label>
          <select name="mes" id="mes">
            <option value="enero">Enero</option>
            <option value="febrero">Febrero</option>
            <option value="marzo">Marzo</option>
            {/* Agrega más opciones aquí */}
          </select>
          <label htmlFor="año">Año:</label>
          <select name="año" id="año">
            <option value="2021">2021</option>
            <option value="2022">2022</option>
            <option value="2023">2023</option>
            {/* Agrega más opciones aquí */}
          </select>
          <label htmlFor="grupo">Grupo de Destinatarios:</label>
          <select name="grupo" id="grupo">
            <option value="grupo1">Grupo 1</option>
            <option value="grupo2">Grupo 2</option>
            <option value="grupo3">Grupo 3</option>
            {/* Agrega más opciones aquí */}
          </select>
          <label htmlFor="tipo">Tipo de Referencia:</label>
          <select name="tipo" id="tipo">
            <option value="tipo1">Tipo 1</option>
            <option value="tipo2">Tipo 2</option>
            <option value="tipo3">Tipo 3</option>
            {/* Agrega más opciones aquí */}
          </select>
        </div>
        <form onSubmit={handleSendButtonClick}>
        <div className="button-container">
            <button
              className="show-button"
              onClick={handleShowButtonClick}
              style={{ backgroundColor: showReferences ? "#ffd54f" : "#fff68f" }}
            >
              Mostrar
            </button>
            <button
              className="send-button"
              onClick={handleSendButtonClick}
              style={{ backgroundColor: showReferences ? "#8cff7a" : "#9accc3" }}
            >
              Enviar
            </button>
          </div>
          </form>
      </div>
      <div className="right" style={{ backgroundColor: gridBackground }}>
         {showMainForm && <h1>Referencias encontradas</h1>}
      </div>
      {showSubmitForm && (
        <div className="submit-form-container">
          <SubmitForm onBackClick={handleBackClick} />
        </div>
      )}
    </div>
  );
}

export default App;