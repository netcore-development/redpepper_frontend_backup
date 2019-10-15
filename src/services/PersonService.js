import http from "./httpServices";

const apiEndpoint = "/Personas";

class PersonService {

  async getPersons() {
    const response = await http.get(apiEndpoint);
    console.log("Desde Persona Service", response.data);
    return response.data;
  }

  async createPerson(persona) {
    await http.post(apiEndpoint, persona).then(response => {
      console.log(response);
      this.getPersons();
    });
  }
}

export default new PersonService();
