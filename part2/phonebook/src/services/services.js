import axios from "axios";

const baseUrl = "http://localhost:3002/contact/";

const getAll = () => {
  const request = axios.get(`${baseUrl}read-contact`);
  return request.then((response) => response.data);
};

const create = (newObject) => {
  console.log(`new object ${newObject.id}`);
  const request = axios.post(`${baseUrl}create-contact`, newObject);
  return request.then((response) => response.data);
};

/*
const update = (newObject) => {
  const request = axios.put(`${baseUrl}/${newObject.id}`, newObject);
  console.log(request);
  return request.then((response) => response);
};
*/

const remove = (id) => {
  console.log(id);
  const request = axios.delete(`${baseUrl}delete-contact/${id}`);
  return request
    .then((response) => response.data)
    .catch((err) => console.log(err));
};

export default { getAll, create, remove };
