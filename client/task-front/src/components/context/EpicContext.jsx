import { createContext, useContext, useState } from "react";
import React from "react";
import {
  getEpicRequest,
  getEpicsRequest,
  deleteEpicRequest,
  updateEpicRequest,
  createEpicRequest,
} from "../../api/epic.js";

const EpicContext = createContext();
export const useEpic = () => {
  const context = useContext(EpicContext);
  if (!context) {
    throw new Error("useEpic debe estar dentro de EpicProvider");
  }
  return context;
};

export function EpicProvider({ children }) {
  const [epics, setEpics] = useState([]);

  const createEpic = async (epic) => {
    const res = await createEpicRequest(epic);
    setEpics([...epics, res.data]);
    console.log(res.data);
  };

  const getEpics = async () => {
    try {
      const res = await getEpicsRequest();
      setEpics(res.data);
    } catch (error) {
      if (error.response && error.response.status === 401) {
        console.error(error.response.data.message);
      } else if (error.response && error.response.status === 404) {
        console.error("No se encontraron Epicas.");
      }
    }
  };

  const deleteEpic = async (id) => {
    try {
      await deleteEpicRequest(id);
      setEpics(epics.filter((epic) => epic._id !== id));
      console.log(error);
    } catch (error) {
      if (error.response && error.response.status === 404) {
        console.error("Epica no encontrada para eliminar.");
      }
    }
  };

  const getEpic = async (id) => {
    try {
      const res = await getEpicRequest(id);
      return res.data;
    } catch (error) {
      if (error.response && error.response.status === 404) {
        console.error("Tarea no encontrada.");
      }
    }
  };

  const updateEpic = async (id, epic) => {
    try {
      const res = await updateTaskRequest(id, epic); 
      setEpics(epics.map((t) => (e._id === id ? res.data : e)));
      return res.data;
    } catch (error) {
      console.error(error);
      if (error.response && error.response.status === 404) {
        console.error("Epica no encontrada para actualizar.");
      }
    }
  };

  return (
    <EpicContext.Provider
      value={{
        epics,
        createEpic,
        getEpic,
        deleteEpic,
        getEpics,
        updateEpic,
      }}
    >
      {children}
    </EpicContext.Provider>
  );
}
