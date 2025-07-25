import React from "react";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white py-16 px-4">
      <div className="max-w-6xl mx-auto text-center mb-16">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Gestiona tus proyectos, tareas y aplicaciones
        </h1>
        <p className="text-gray-300 text-lg md:text-xl">
          Organiza tu flujo de trabajo con eficiencia y claridad.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
        <Card
          title="Gestionar Proyectos"
          description="Crea, edita y elimina tus proyectos de forma sencilla y rápida."
          color="from-purple-500 to-purple-700"
        />
        <Card
          title="Gestionar Épicas"
          description="Agrupa tus historias en grandes bloques de trabajo (épicas)."
          color="from-pink-500 to-pink-700"
        />
        <Card
          title="Gestionar Historias"
          description="Define historias de usuario para guiar el desarrollo."
          color="from-green-500 to-green-700"
        />
        <Card
          title="Gestionar Tareas"
          description="Organiza tareas específicas dentro de tus historias o épicas."
          color="from-blue-500 to-blue-700"
        />
      </div>

      <div className="text-center mt-16">
        <Link
          to="/tasks"
          className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-all"
        >
          Comenzar ahora
        </Link>
      </div>
    </div>
  );
};

const Card = ({ title, description, color }) => (
  <div
    className={`rounded-xl p-6 shadow-lg bg-gradient-to-br ${color} transition-transform hover:scale-105`}
  >
    <h2 className="text-2xl font-bold mb-2">{title}</h2>
    <p className="text-white text-sm">{description}</p>
  </div>
);

export default HomePage;
