import axios from "./axios";
export const getStoriesRequest = () => axios.get('/stories')
export const getStoryRequest = (id) => axios.get(`/story/${id}`)
export const createStoryRequest = (story) => axios.post(`/story`, story)
export const updateStoryRequest = (id, story) => axios.post(`/story/${id}`, story)
export const deleteStoryRequest = (id) => axios.delete(`/story/${id}`)


