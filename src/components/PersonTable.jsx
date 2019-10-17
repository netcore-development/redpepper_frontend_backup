import React from "react";

import { Button } from "reactstrap";
import { FaUserEdit, FaTimes } from "react-icons/fa";

// For moment JS
import moment from "moment";
import localization from "moment/locale/es";

// Setting spanish as global local for moment js
moment.updateLocale("es", localization);


function PersonTable({ person, deletePerson }) {



  return (
    <tr key={person.id}>
      <td>{person.id}</td>
      <td>{person.nombres}</td>
      <td>{person.apellidos}</td>
      <td>{person.sexo}</td>
      <td>{moment(person.fechaNacimiento).format("DD/MMM/YYYY")}</td>
      <td>{person.direccion}</td>
      <td>{person.nit}</td>
      <td>
        <Button color="info">
          <FaUserEdit size="15" />
        </Button>
      </td>
      <td>
        <Button color="danger" onClick={() => 
            deletePerson(person.id)}>
          <FaTimes size="15" />
        </Button>
      </td>
    </tr>
  );
}

export default PersonTable;
