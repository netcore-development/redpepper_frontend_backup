import React, { Component, Fragment } from "react";

import ModalCliente from "./ModalPerson";
import PersonService from "../services/PersonService";
import { Button } from "reactstrap";

// For moment JS
import moment from "moment";
import localization from './../../node_modules/moment/locale/es';

// Setting spanish as global local for moment js
moment.locale('es', localization);

class Person extends Component {
  state = {
    values: []
  };

  async componentDidMount() {
    const values = await PersonService.getPersons();
    this.setState({ values });
    console.log("State", this.state);
  }

  // async componentDidUpdate() {
  //   const values = await PersonService.getPersons();
  //   this.setState({ values });
  // }

  render() {
    const { values } = this.state;
    return (
      <Fragment>
        <div id="contenedorClientes" className="container">
          <div className="row">
            <div className="col-md-12 center-block text-center py-5">
              <div className="card py-5 px-5 table-responsive">
                {/* Modal */}
                <ModalCliente />
                {/* End modal */}
                <br />

                <h2 style={{ textDecoration: "underline" }}>
                  Lista de Clientes
                </h2>
                <br />
                <table
                  id="dtPersonas"
                  className="table table-striped table-bordered"
                  style={{ width: "100%" }}
                >
                  <thead>
                    <tr>
                      <th>Nombre</th>
                      <th>Apellidos</th>
                      <th>Sexo</th>
                      <th>Fecha Nacimiento</th>
                      <th>Dirección</th>
                      <th>NIT</th>
                      <th>Modificar</th>
                      <th>Eliminar</th>
                    </tr>
                  </thead>
                  <tbody>
                    {values.map(person => (
                      <tr key={person.id}>
                        <td>{person.nombres}</td>
                        <td>{person.apellidos}</td>
                        <td>{person.sexo}</td>
                        <td>
                          {moment(person.fechaNacimiento).format(
                            "DD/MMM/YYYY"
                          )}
                        </td>
                        <td>{person.direccion}</td>
                        <td>{person.nit}</td>
                        <td>
                          <Button color="info">Actualizar</Button>
                        </td>
                        <td>
                          <Button color="danger">Eliminar</Button>
                        </td>
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
                      <th>Modificar</th>
                      <th>Eliminar</th>
                    </tr>
                  </tfoot>
                </table>
              </div>
              {/* .card */}
            </div>
            {/* /col-md-12  donde va  contenido card */}

            {/* .row */}
          </div>
          {/*  .container */}
        </div>
      </Fragment>
    );
  }
}

export default Person;
