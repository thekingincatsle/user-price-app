import AXIOS from "./axios";
const rootEndPoint = "api/member";

function getMembersByIdShk(idShk) {
  return AXIOS.get(`${rootEndPoint}/get-by-id-shk?id_shk=${idShk}`);
}

export { getMembersByIdShk };
