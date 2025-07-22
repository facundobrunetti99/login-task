import {createContext, useContext,useState} from 'react';
import React from 'react';
const TaskContext = createContext();
export const useTask = () => {
  const context = useContext(TaskContext);
  if (!context) {
    throw new Error("useTask debe estar dentro de TaskProvider");
  }
  return context;
}

export function TaskProvider({children}) {

    const [tasks, setTasks] = useState([]);
    return (
        <TaskContext.Provider value={{
            tasks,
          
        }}>
            {children}
        </TaskContext.Provider>
    );
};