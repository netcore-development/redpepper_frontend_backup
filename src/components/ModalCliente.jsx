import React, { useState } from "react";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Label,
  Input,
  FormGroup,
  Col
} from "reactstrap";

import InputMask from "react-input-mask";

const ModalCliente = props => {
  const { buttonLabel, className } = props;

  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  return (
    <div>
      <Button color="primary" onClick={toggle}>
        {buttonLabel}
      </Button>
      <Modal isOpen={modal} toggle={toggle} className={className} size="lg">
        <ModalHeader toggle={toggle}>Registro Personas</ModalHeader>
        <ModalBody>
          <FormGroup row>
            <Label for="personName" sm={2} style={{ textAlign: "right" }}>
              Nombres:
            </Label>
            <Col sm={10}>
              <Input
                type="text"
                name="personName"
                id="personName"
                placeholder="Ingrese nombre de la persona"
              />
            </Col>
          </FormGroup>
          {/*  .Nombre */}
          <FormGroup row>
            <Label for="personLastName" sm={2} style={{ textAlign: "right" }}>
              Apellidos:
            </Label>
            <Col sm={10}>
              <Input
                type="text"
                name="personLastName"
                id="personLastName"
                placeholder="Ingrese apellidos de la persona"
              />
            </Col>
          </FormGroup>
          {/*  .Apellidos */}
          <FormGroup row>
            <Label for="selectSex" sm={2} style={{ textAlign: "right" }}>
              Sexo:
            </Label>
            <Col sm={10}>
              <Input type="select" name="selectSex" id="selectSex">
                <option value="" selected disabled hidden>
                  -- Seleccione una opción --
                </option>
                <option value="M">Masculino</option>
                <option value="F">Femenino</option>
              </Input>
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label for="personBirthDate" sm={2} style={{ textAlign: "right" }}>
              Fecha Nacimiento:
            </Label>
            <Col sm={10}>
              <Input type="date" name="personBirthDate" id="personBirthDate" />
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label for="personDUI" sm={2} style={{ textAlign: "right" }}>
              DUI:
            </Label>
            <Col sm={10}>
              <Input
                type="text"
                name="personDUI"
                id="personDUI"
                placeholder="Ingrese el DUI de la persona"
                mask="99999999-9"
                tag={InputMask}
              />
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label for="personNIT" sm={2} style={{ textAlign: "right" }}>
              NIT:
            </Label>
            <Col sm={10}>
              <Input
                type="text"
                name="personNIT"
                id="personNIT"
                placeholder="Ingrese el NIT de la persona"
                mask="9999-999999-999-9"
                tag={InputMask}
              />
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label for="personDireccion" sm={2} style={{ textAlign: "right" }}>
              Dirección:
            </Label>
            <Col sm={10}>
              <Input
                type="textarea"
                name="personDireccion"
                id="personDireccion"
              />
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label for="personTel" sm={2} style={{ textAlign: "right" }}>
              Teléfono:
            </Label>
            <Col sm={10}>
              <Input
                type="tel"
                name="personTel"
                id="personTel"
                mask="+503 9999-9999"
                tag={InputMask}
                placeholder="Ingrese el teléfono de la persona"
              />
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label for="personEmail" sm={2} style={{ textAlign: "right" }}>
              Correo electrónico:
            </Label>
            <Col sm={10}>
              <Input
                type="email"
                name="personEmail"
                id="personEmail"
                placeholder="Ingrese el correo electrónico de la persona"
              />
            </Col>
          </FormGroup>
        </ModalBody>
        <ModalFooter className="text-center!important">
          <Button color="primary" onClick={toggle}>
            Do Something
          </Button>{" "}
          <Button color="secondary" onClick={toggle}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
};

export default ModalCliente;
