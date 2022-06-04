import axios from "axios";

const add = (param1, param2) => {
  return axios.get(`/api/calculator/add?param1=${param1}&param2=${param2}`);
}

const subtract = (param1, param2) => {
  return axios.get(`/api/calculator/subtract?param1=${param1}&param2=${param2}`);
}

const multiply = (param1, param2) => {
  return axios.get(`/api/calculator/multiply?param1=${param1}&param2=${param2}`);
}

const divide = (param1, param2) => {
  return axios.get(`/api/calculator/divide?param1=${param1}&param2=${param2}`);
}

const sqrt = (param1, param2) => {
  return axios.get(`/api/calculator/squareRoot?param1=${param1}&param2=${param2}`);
}

const power = (param1, param2) => {
  return axios.get(`/api/calculator/power?param1=${param1}&param2=${param2}`);
}

const endpoint = {
  add, subtract, multiply, divide, sqrt, power
};
export default endpoint;