import React, {useState} from "react";
import { deleteTask, editTask } from "../../api/taskFecth";
import { useNavigate } from "react-router-dom";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import TaskModal from "./Modal/TaskModal";
function TaskCard({ task }) {

    const [taskModal, setTasktModal] = useState(false);
    const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();

  const handleDelete = async (id) => {
    try {
      const response = await deleteTask(id);
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  function closeModal() {
    setShowModal(!showModal);
  }

  const handleClick = (task) => {
    console.log(task);
    setTasktModal(task);
    setShowModal(true);
  };

  return (
    <div
      key={task._id}
      className="flex flex-col flex-wrap bg-slate-400 border-black rounded-md p-3 xs:w-10/12 sm:w-5/12 lg:w-3/12 2xl:w-2/12  justify-between xs:mx-auto sm:mx-0"
    >
      

      <div className="p-2 flex-col justify-between">
        <h2 className="text-3xl font-bold pb-5">{task.title}</h2>

        <p className="text-xl pb-5 overflow-hidden h-[130px]">{task.description}</p>

        <h2 className="font-bold"><CalendarMonthIcon className="mr-1 "/>{ new Date(task.createdAt).toLocaleDateString()}</h2>
      </div>

      <div className="flex flex-row justify-between border-t-2 border-black">

        <span className={`border-2 rounded-xl px-2 mt-3 border-black ${task.done ? "bg-green-400" : "bg-red-500"}`}>{task.done ? "Completed" : "Uncompleted"}</span>
        

        <div className="mt-3">
        <button onClick={() => navigate(`/edit/${task._id}`)}>
          <EditIcon />
        </button>

        <button onClick={() => handleDelete(task._id)}>
          <DeleteIcon />
        </button>

        <button
              type="button"
              onClick={ () => handleClick(task)}
            >
              info
            </button>
        </div>
       
      </div>

      {showModal ? (
        <TaskModal
          setShowModal={showModal}
          taskInfo={taskModal}
          closeModal={closeModal}
        />
      ) : null}
    </div>
    
  );
}

export default TaskCard;
