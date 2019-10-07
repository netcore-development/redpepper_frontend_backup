import http from "./httpService";

const apiEndpoint = "/clientes";

export function getClientes() {
  return http.get(apiEndpoint);
}

export default { getClientes };
