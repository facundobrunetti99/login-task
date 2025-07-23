import React from "react";
import { BrowserRouter, Route, Routes } from "react-router";
import RegisterPage from "./page/RegisterPage";
import LoginPage from "./page/LoginPage";
import { AuthProvider } from "../src/components/context/AuthContext";
import { TaskProvider } from "../src/components/context/TaskContext"; // ✅ IMPORTAR
import TaskPage from "../src/page/TaskPage";
import TaskFormPage from "../src/page/TaskFormPage";
import ProfilePage from "./page/ProfilePage";
import HomePage from "./page/HomePage";
import ProtectedRoute from "./ProtectedRoute";

const App = () => {
  return (
    <AuthProvider>
      <TaskProvider> {/* ✅ ENVOLVER CON TaskProvider */}
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route element={<ProtectedRoute />}>
              <Route path="/tasks/new" element={<TaskFormPage />} />
              <Route path="/tasks" element={<TaskPage />} />
              <Route path="/tasks/:id" element={<TaskFormPage />} />
              <Route path="/profile" element={<ProfilePage />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </TaskProvider>
    </AuthProvider>
  );
};

export default App;
