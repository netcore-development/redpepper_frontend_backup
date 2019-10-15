import http from "./HttpServices";

const apiEndpoint = "/Clientes";

class CustomerService {

  async getCustomers() {
    const response = await http.get(apiEndpoint);
    console.log(response.data);
    return response.data;
  }

  async createCustomer(customer) {
    await http.post(apiEndpoint, customer).then(response => {
      console.log(response);
      this.getCustomers();
    });
  }
}

export default new CustomerService();
