import React, { useState } from 'react';

function Quiz({ preguntas }) {
  const [respuestasUsuario, setRespuestasUsuario] = useState({});
  
  const handleSeleccionRespuesta = (indexPregunta, indexRespuesta) => {
    setRespuestasUsuario({
      ...respuestasUsuario,
      [indexPregunta]: indexRespuesta
    });
  };

  return (
    <div>
      <h1>Quiz</h1>
      {preguntas.map((pregunta, index) => (
        <div key={index}>
          <h3>{pregunta.p}</h3>
          <ul>
            {pregunta.o.map((opcion, indexOpcion) => (
              <li key={indexOpcion}>
                <label>
                  <input
                    type="radio"
                    name={`pregunta-${index}`}
                    value={indexOpcion}
                    checked={respuestasUsuario[index] === indexOpcion}
                    onChange={() => handleSeleccionRespuesta(index, indexOpcion)}
                  />
                  {opcion}
                </label>
              </li>
            ))}
          </ul>
        </div>
      ))}
      <button onClick={() => console.log(respuestasUsuario)}>Enviar respuestas</button>
    </div>
  );
}

export default Quiz;
