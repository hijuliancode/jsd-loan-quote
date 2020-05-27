import React, { Fragment, useState } from 'react';
import Header from './components/header';
import Form from './components/form';

function App() {

  // definir el State
  const [cantidad, setCantidad] = useState(0) // valor inicial en 0 

  return (
    <Fragment>
      <Header title="Cotizador de prestamos" />
      <div className="container">
        <Form
          cantidad={cantidad}
          setCantidad={setCantidad}
        />
      </div>
    </Fragment>
  );
}

export default App;
