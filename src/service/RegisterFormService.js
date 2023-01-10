import AXIOS from "./axios";
const rootEndPoint = "api/register-form";

function addRegisterForm(registerForm) {
  return AXIOS.post(`${rootEndPoint}/add`, registerForm);
}
export { addRegisterForm };
