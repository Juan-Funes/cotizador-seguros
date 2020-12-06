import React, { useState } from "react";
import styled from "@emotion/styled";
import Header from "./components/Header";
import Formulario from "./components/Formulario";
import Resumen from "./components/Resumen";
import Resultado from "./components/Resultado";
import Spiner from "./components/Spiner";
const Contenedor = styled.div`
  max-width: 600px;
  margin: 0 auto;
`;
const ContenedorFormulario = styled.div`
  background-color: #fff;
  padding: 3rem;
`;
function App() {
  const [resumen, guardarResumen] = useState({
    cotizacion: 0,
    datos: {
      marca: "",
      year: "",
      plan: "",
    },
  });
  const [cargando, guardarCargando] = useState(false);
  const { cotizacion, datos } = resumen;
  return (
    <Contenedor>
      <Header titulo="Cotizador de seguros" />
      <ContenedorFormulario>
        <Formulario guardarResumen={guardarResumen} 
        guardarCargando={guardarCargando}/>
        {cargando ? <Spiner /> : null}

        
        {!cargando ?<Resumen datos={datos} /> :null}
        {!cargando ?<Resultado cotizacion={cotizacion} /> :null}
        
      </ContenedorFormulario>
    </Contenedor>
  );
}

export default App;