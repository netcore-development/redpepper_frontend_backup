import React, { Component, Fragment } from "react";
import clienteService from "../services/clienteService";

class Clientes extends Component {
  state = {
    values: []
  };

  async componentDidMount() {
    const { data: values } = await clienteService.getClientes();
    this.setState({ values });
    console.log("State", this.state);
  }

  render() {
    const { values } = this.state;
    return (
      <Fragment>
        <div id="contenedorClientes" className="container">
          <div className="row">
            <div className="col-md-12 center-block text-center py-5">
              <div className="card py-5">
                <p>Lista de Clientes</p>
                {values.map(cliente => (
                  <Fragment>
                    <div className="row">
                        <div className="col-md-4"/>
                      <div className="col-md-2">
                        <p key={cliente.id}>Id: {cliente.id}</p>
                      </div>
                      <div className="col-md-3">
                        <p key={cliente.id}>
                          Nombres: {cliente.persona.nombres}
                        </p>
                      </div>
                      <div className="col-md-3"/>
                    </div>
                  </Fragment>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default Clientes;
