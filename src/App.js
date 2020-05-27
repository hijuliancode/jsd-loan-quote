import React, { Fragment, useState } from 'react';
import Header from './components/header';
import Form from './components/form';
import Mensaje from './components/mensaje';
import Resultado from './components/resultado';

function App() {

  // definir el State
  const [cantidad, setCantidad] = useState(0) // valor inicial en 0
  const [plazo, setPlazo] = useState('')
  const [total, setTotal] = useState(0)

  let componente;
  if(total === 0) {
    componente = <Mensaje/>
  } else {
    componente = <Resultado/>
  }

  return (
    <Fragment>
      <Header title="Cotizador de prestamos" />
      <div className="container">
        <Form
          cantidad={cantidad} setCantidad={setCantidad}
          plazo={plazo} setPlazo={setPlazo}
          total={total} setTotal={setTotal}
        />
        <div className="mensajes">
          { componente }
        </div>
      </div>
    </Fragment>
  );
}

export default App;
