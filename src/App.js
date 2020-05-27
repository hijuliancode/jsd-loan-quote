import React, { Fragment, useState } from 'react';
import Header from './components/header';
import Form from './components/form';

function App() {

  // definir el State
  const [cantidad, setCantidad] = useState(0) // valor inicial en 0
  const [plazo, setPlazo] = useState('')
  const [total, setTotal] = useState(0)

  return (
    <Fragment>
      <Header title="Cotizador de prestamos" />
      <div className="container">
        <Form
          cantidad={cantidad} setCantidad={setCantidad}
          plazo={plazo} setPlazo={setPlazo}
          total={total} setTotal={setTotal}
        />
        <p>Total a pagar: {total}</p>
      </div>
    </Fragment>
  );
}

export default App;
