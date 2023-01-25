import React, { useEffect, useState } from "react";
import { Form, Formik } from "formik";
import { useParams } from "react-router-dom";
import { createTask, getTask, editTask } from "../../api/taskFecth";
import { useNavigate } from "react-router-dom";
import Switch from '@mui/material/Switch';
import { ClassNames } from "@emotion/react";

function TaskForm() {
  const navigate = useNavigate();

  //parametros de la url
  const params = useParams();
  const [task, setTask] = useState({
    title: "",
    description: "",
  });

  const label = { inputProps: { 'aria-label': 'Switch demo' } };

  
  useEffect(() => {
    if (params.id) {
      const fetchData = async () => {
        const response = await getTask(params.id);
        setTask({
          title: response.title,
          description: response.description,
          done: response.done
        });
      };
      fetchData();
    }
  }, []);

  return (
    <div className="bg-slate-700 ">
      
      <Formik
        initialValues={task}
        enableReinitialize={true}
        onSubmit={async (values) => {
          try {
            let response;
            if (params.id) {
              response = await editTask(params.id, values);
            } else {
              response = await createTask(values);
            }

  
            navigate("/");
          } catch (error) {
            console.log(error);
          }
        }}
      >
        {({ values, handleChange, handleSubmit }) => (
          <Form onSubmit={handleSubmit} className="flex flex-col flex-wrap 2xl:w-3/12 mx-auto pt-16 sm:w-5/12 xs:w-9/12">
            <label className="text-white">Title</label>
            <input
            className="mb-7"
              type="text"
              name="title"
              placeholder="Title"
              onChange={handleChange}
              value={values.title}
            />

            <label className="text-white">Description</label>
            <textarea
              className="mb-7"
              rows="3"
              name="description"
              placeholder="Write a description"
              onChange={handleChange}
              value={values.description}
            ></textarea>
            
            <label className="text-white">Condition</label>
               <Switch name="done" checked={values.done ? true : false} inputProps={{ 'aria-label': 'Switch demo'}} onChange={handleChange}/> 

            <button 
            className="bg-black text-white hover:bg-slate-800 text py-3 rounded-lg"
            type="submit">{params.id ? "Edit" : "New"}
             </button>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default TaskForm;
