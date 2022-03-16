import axios from "axios";
const API_URL = "http://localhost:8000/api/v1";

const fgetAllActors = () => {
  return fetch(`${API_URL}/actors`).then((res) => res.json());
};

const axiosgetAllActors = () => {
  return axios.get(`${API_URL}/actors`).then((res) => res.data);
};

const addActor = (actor) => {
  return axios.post(`${API_URL}/actor`, actor);
};

const editActor = (id, actor) => {
  return axios.put(`${API_URL}/actor/${id}`, actor);
};

const deleteActor = (id) => {
  return axios.delete(`${API_URL}/actor/${id}`);
};

export { fgetAllActors, axiosgetAllActors, addActor, editActor, deleteActor };
