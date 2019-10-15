import http from "./httpServices";

const apiEndpoint = "/Personas";

class PersonService {

  async getPersons() {
    const response = await http.get(apiEndpoint);
    console.log("Desde Persona Service", response.data);
    return response.data;
  }

  async createPerson(person) {
    await http.post(apiEndpoint, person).then(response => {
      console.log(response);
      this.getPersons();
    });
  }

  async deletePerson(id) {
    await http.delete(`${apiEndpoint}/${id}`).then(response => {
      console.log("Eliminado",  response);
      this.getPersons();
    });
  }
}
export default new PersonService();
