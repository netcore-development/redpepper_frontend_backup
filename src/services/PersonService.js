import http from "./httpServices";

const apiEndpoint = "/Personas";

class PersonService {

  async getPersons() {
    const response = await http.get(apiEndpoint);
    console.log("Desde Obtener", response.data);
    return response.data;
  }

  async createPerson(person) {
    const response =  await http.post(apiEndpoint, person);
    console.log("Desde crear", response);
      // this.getPersons();
   
  }

  async deletePerson(id) {
    await http.delete(`${apiEndpoint}/${id}`).then(response => {
      console.log("Eliminado",  response);
      this.getPersons();
    });
  }
}
export default new PersonService();
