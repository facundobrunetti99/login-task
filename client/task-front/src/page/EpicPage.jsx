import React, { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useEpic } from '../components/context/EpicContext';
import EpicCard from '../components/EpicCard';

const EpicPage = () => {
  const { getEpics, epics } = useEpic();
  const { projectId } = useParams();

  useEffect(() => {
    if (projectId) {
      getEpics(projectId);
    }
  }, [projectId]);

  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-gray-900 py-8">
    
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-white mb-4">Épicas del Proyecto</h1>
        <Link 
          to="/projects" 
          className="text-blue-300 hover:underline mr-4"
        >
          ← Volver a Proyectos
        </Link>
      </div>

    
      {epics.length <= 0 ? (
        <div className='flex flex-col justify-center items-center'>
          <p className="text-white mb-6 text-lg">No hay Épicas disponibles para este proyecto</p>
          <div className="flex gap-4">
            <Link 
              className='bg-green-500 text-white px-6 py-3 rounded-lg hover:bg-green-600 transition-colors' 
              to={`/projects/${projectId}/epics/new`}
            >
              + Crear Primera Épica
            </Link>
            <Link 
              className='bg-gray-500 text-white px-6 py-3 rounded-lg hover:bg-gray-600 transition-colors' 
              to="/projects"
            >
              Volver a Proyectos
            </Link>
          </div>
        </div>
      ) : (
        <>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {epics.map(epic => (
              <EpicCard epic={epic} key={epic._id} />
            ))}
          </div>
    
          <div className="flex gap-4">
            <Link 
              to={`/projects/${projectId}/epics/new`} 
              className='bg-green-500 text-white px-6 py-3 rounded-lg hover:bg-green-600 transition-colors'
            >
              + Crear Nueva Épica
            </Link>
            <Link 
              to="/projects" 
              className='bg-gray-500 text-white px-6 py-3 rounded-lg hover:bg-gray-600 transition-colors'
            >
              Volver a Proyectos
            </Link>
          </div>
        </>
      )}
    </div>
  );
};

export default EpicPage;