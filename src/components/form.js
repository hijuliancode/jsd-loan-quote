import React, { Fragment } from 'react';

const Form = ({cantidad, setCantidad}) => {

  return (
    <Fragment>
      <form>
<p>{cantidad}</p>
        <div className="row">
          <div>
            <label>Cantidad Prestamo</label>
            <input
              className="u-full-width"
              type="number"
              placeholder="Ejemplo: 3000"
              onChange={ e => setCantidad( parseInt(e.target.value) ) }
            />
          </div>
          <div>
            <label>Plazo para Pagar</label>
            <select
              className="u-full-width"
            >
              <option value="">Seleccionar</option>
              <option value="3">3 meses</option>
              <option value="6">6 meses</option>
              <option value="12">12 meses</option>
              <option value="24">24 meses</option>
            </select>
          </div>
          <div>
            <input
              type="submit"
              value="Calcular"
              className="button-primary u-full-width"
            />
          </div>
        </div>
      </form>
    </Fragment>
   );
}

export default Form;
