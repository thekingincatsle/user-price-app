import AXIOS from "./axios";
const rootEndPoint = "api/family";

function getMessage(familyId) {
  return AXIOS.get(`${rootEndPoint}/get-message?id=${familyId}`);
}
export { getMessage };
