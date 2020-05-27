import React, { Fragment } from 'react';
import Header from './components/header';
import Form from './components/form';

function App() {
  return (
    <Fragment>
      <Header title="Cotizador de prestamos" />
      <div className="container">
        <Form />
      </div>
    </Fragment>
  );
}

export default App;
