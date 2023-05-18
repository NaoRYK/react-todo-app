import React from "react";
import './TodoLoading.css'

function TodoLoading() {
  return (
    <div id="contenedor">
      <div className="contenedor-loader">
        <div className="rueda"></div>
      </div>
      <div className="cargando">Cargando...</div>
    </div>
  );
}

export { TodoLoading };
