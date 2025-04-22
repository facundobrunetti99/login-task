import React from "react";
import { BrowserRouter, Route, Routes } from "react-router";
import RegisterPage from "./page/RegisterPage";
import LoginPage from "./page/LoginPage";
import { AuthProvider } from "./context/AuthContext";

const App = () => {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<h1>Home Page</h1>}></Route>
          <Route path="/login" element={<LoginPage />}></Route>
          <Route path="/register" element={<RegisterPage />}></Route>
          <Route path="/tasks" element={<h1>Tasks pages</h1>}></Route>
          <Route path="/add-task" element={<h1>new tasks</h1>}></Route>
          <Route path="/tasks/:id" element={<h1>update tasks</h1>}></Route>
          <Route path="/profile" element={<h1>profile</h1>}></Route>
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
};

export default App;
