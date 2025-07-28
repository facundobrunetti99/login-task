import {createContext, useContext,useState} from 'react';
import React from 'react';
import { getProjectRequest,
    getProjectsRequest,
    deleteProjectRequest,
    updateProjectRequest,
    createProjectRequest
} from '../../api/project.js';

const ProjectContext = createContext();
export const useTask = () => {
  const context = useContext(ProjectContext);
  if (!context) {
    throw new Error("useTask debe estar dentro de TaskProvider");
  }
  return context;
}



export function ProjectProvider({children}) {

    const [projects, setProject] = useState([]);


    
const  createProject = async (task) => {
 const res=await createProjectRequest(task);
  setProject([...projects, res.data]);
  console.log(res.data);
}


const getProjects = async () => {
try {
  const res = await getProjectsRequest();  
  setProject(res.data);
} catch (error) { 

if (error.response && error.response.status === 401) {
    console.error(error.response.data.message);
  } else if (error.response && error.response.status === 404) {
    console.error("No se encontraron tareas."); 
  }



}


};

const deleteProject = async (id) => {
try {
  await deleteProjectRequest(id);
  setProject(projects.filter(project => project._id !== id));
  console.log(error)
}
catch (error) {
  if (error.response && error.response.status === 404) {
    console.error("Tarea no encontrada para eliminar.");
  } 
}
};

const getProject = async (id) => {
  try {
    const res = await getProjectRequest(id);
    return res.data;
  } catch (error) {
    if (error.response && error.response.status === 404) {
      console.error("Tarea no encontrada.");
    }
    }}


const updateProject = async (id, project) => {
  try {
    const res = await updateProjectRequest(id, project); // ✅ ahora correcto
    setProject(projects.map(p => (p._id === id ? res.data : p)));
    return res.data;
  } catch (error) {
    console.error(error);
    if (error.response && error.response.status === 404) {
      console.error("Tarea no encontrada para actualizar.");
    }
  }
}


    return (
        <ProjectContext.Provider value={{
            projects,
            createProject,
            getProject,
            deleteProject,
            getProject,updateProject
          
        }}>
            {children}
        </ProjectContext.Provider>
    );
};

