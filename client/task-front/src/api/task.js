import axios from "./axios";
export const getTasksRequest = () => axios.get("/tasks"); // ✅ lista
export const getTaskRequest = (id) => axios.get(`/tasks/${id}`); // ✅ una sola
export const createTaskRequest = (task) => axios.post("/tasks/new", task);
export const updateTaskRequest = (id,task) => axios.put(`/tasks/${id}`, task);
export const deleteTaskRequest = (id) => axios.delete(`/tasks/${id}`);
