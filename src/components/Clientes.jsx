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
              <div className="card py-5 px-5">
                <h2 style={{ textDecoration: "underline" }}>
                  Lista de Clientes
                </h2>
                <br />
                <table
                  id="example"
                  className="table table-striped table-bordered"
                  // style={{ width: "100%" }}
                >
                  <thead>
                    <tr>
                      <th>Nombre</th>
                      <th>Apellidos</th>
                      <th>Sexo</th>
                      <th>Fecha Nacimiento</th>
                      <th>Dirección</th>
                      <th>NIT</th>
                    </tr>
                  </thead>
                  <tbody>
                    {values.map(cliente => (
                      <tr keys={cliente.id}>
                        <td>{cliente.persona.nombres}</td>
                        <td>{cliente.persona.apellidos}</td>
                        <td>{cliente.persona.sexo}</td>
                        <td>{cliente.persona.fechaNacimiento}</td>
                        <td>{cliente.persona.direccion}</td>
                        <td>{cliente.persona.nit}</td>
                      </tr>
                    ))}
                  </tbody>
                  <tfoot>
                    <tr>
                      <th>Nombres</th>
                      <th>Apellidos</th>
                      <th>Sexo</th>
                      <th>Fecha Nacimiento</th>
                      <th>Dirección</th>
                      <th>NIT</th>
                    </tr>
                  </tfoot>
                </table>
              </div>{/* .card */}
            </div>{/* /col-md-12  donde va  contenido card */}
          </div>{/* .row */}
        </div>{/*  .container */}
      </Fragment>
    );
  }
}

export default Clientes;
