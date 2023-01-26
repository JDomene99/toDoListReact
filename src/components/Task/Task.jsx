import React, { useEffect, useState } from "react";
import { getAllTasks, getAllTasksByName } from "../../api/taskFecth";
import TaskCard from "../TaskCard/TaskCard";
import FilterByName from "../Filters/FilterByName";

function Task() {
  const [tasks, setTasks] = useState([]);

  const fetchData = async () => {
    try {
      const response = await getAllTasks();
      setTasks(response);
    } catch (error) {
      console.log(error);
    }
  };

  const toFind = async (text) => {
    try {
      const response = await getAllTasksByName(text);
      if (response != null) {
        setTasks([response]);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <main>
      <nav className="w-12/12 sm:px-4 md:px-12 xs:px-5 pb-10">
        <FilterByName toFind={toFind} />
        <button
          className="bg-black text-white hover:bg-slate-800 text p-3 rounded-lg"
          onClick={() => {
            fetchData();
          }}
        >
          clear Filter
        </button>
      </nav>
      <section className="bg-slate-700  flex flex-row flex-wrap xs:gap-10 justify-between w-12/12 sm:px-4 md:px-12 xs:px-5 pb-10">
        {}
        {tasks.length === 0 ? (
          <div>
            <h1>No hay tareas para mostrar</h1>
          </div>
        ) : (
          tasks.map((tasks) => {
            return <TaskCard task={tasks} key={tasks._id} />;
          })
        )}
      </section>
    </main>
  );
}

export default Task;
