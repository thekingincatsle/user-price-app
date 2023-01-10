import AXIOS from "./axios";
const rootEndPoint = "/api/student";

function getStudentById(id) {
  return AXIOS.get(`${rootEndPoint}?id=${id}`);
}

function getStudentByIdShk(idShk) {
  return AXIOS.get(`${rootEndPoint}/get-by-id-shk?id_shk=${idShk}`);
}

export { getStudentById, getStudentByIdShk };
