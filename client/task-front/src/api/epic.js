import axios from "./axios";
export const getEpicsRequest=()=>axios.get('/epics')
export const getEpicRequest=(id)=>axios.get(`/epic/${id}`)
export const createEpicRequest=(epic)=>axios.post(`/epic`,epic)
export const updateEpicRequest=(id,epic)=>axios.post(`/epic/${id}`,epic)
export const deleteEpicRequest=(id)=>axios.delete(`/epic/${id}`)