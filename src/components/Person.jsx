import React, { Component, Fragment } from "react";

import ModalCliente from "./ModalPerson";
import PersonService from "../services/PersonService";

import PersonTable from "./PersonTable";

class Person extends Component {
  constructor(props) {
    super(props);
    this.state = {
      persons: []
    };

    this.crearPersona = this.crearPersona.bind(this);
    this.deletePerson = this.deletePerson.bind(this);
  }

  async componentDidMount() {}

  async UNSAFE_componentWillMount() {
    const persons = await PersonService.getPersons();
    this.setState({ persons });
    console.log("State", this.state);
  }

  // async componentDidUpdate() {
  //   const persons = await PersonService.getPersons();
  //   this.setState({ persons });
  // }

  async crearPersona(persona) {
    console.log("Crear Persona", persona);
    await PersonService.createPerson(persona);
    console.log("This", this);

    const personas = await PersonService.getPersons();
    if (personas) {
      this.setState({
        persons: personas
      });
    }

    // this.forceUpdate();
  }

  deletePerson(id) {
    const r = window.confirm("Desea eliminar el registro seleccionado?");
    if (r) {
      PersonService.deletePerson(id);
      const newPersons = [...this.state.persons];
      const persons = newPersons.filter(person => person.id !== id);
      this.setState({ persons });
    } else {
      return;
    }
  }

  render() {
    const { persons } = this.state;
    return (
      <Fragment>
        <div id="contenedorClientes" className="container">
          <div className="row">
            <div className="col-md-12 center-block text-center py-5">
              <div className="card py-5 px-5 table-responsive">
                <h2 style={{ textDecoration: "underline" }}>
                  Lista de Personas
                </h2>
                <br />
                <ModalCliente crearPersona={this.crearPersona} />
                <table
                  id="dtPersonas"
                  className="table table-striped table-bordered"
                  style={{ width: "100%" }}
                >
                  <thead>
                    <tr>
                      <th>ID</th>
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
                    {persons.map((person) => (
                      <PersonTable
                        key={person.id}
                        person={person}
                        deletePerson={this.deletePerson}
                      />
                    ))}
                  </tbody>
                  <tfoot>
                    <tr>
                      <th>ID</th>
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
