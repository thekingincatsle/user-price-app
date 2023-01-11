import AXIOS from "./axios";
const rootEndPoint = "api/family";

function LoginForFamily(payload) {
  return AXIOS.post(`${rootEndPoint}/login`, payload);
}

export { LoginForFamily };
