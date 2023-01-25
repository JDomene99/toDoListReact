import { useState } from "react";
import { Routes, Route } from "react-router";
import Task from "./components/Task/Task";
import TaskForm from "./components/TaskForm/TaskForm";
import NotFound from "./components/NotFound.jsx";
import Nav from './components/Nav/Nav'

function App() {
  return (
    <>
    <Nav/>
      <Routes>
        <Route path="/" element={<Task />} />
        <Route path="/new" element={<TaskForm />} />
        <Route path="/edit/:id" element={<TaskForm />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
