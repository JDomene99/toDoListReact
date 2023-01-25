import React, { useState, useEffect } from "react";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";

function TaskModal({ taskInfo, setShowModal, closeModal }) {
  const [toggleInfo, settoggleInfo] = useState(taskInfo);

  useEffect(() => {
    settoggleInfo(toggleInfo);
  }, []);

  function closeModalFunction() {
    closeModal(!setShowModal);
  }

  return (
    <>
      <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none  xs:mx-3  md:mx-10 max-w-2xl lg:mx-auto">
        <div className="relative w-auto my-6 mx-auto max-w-4xl ">
            <div className="flex flex-col bg-white rounded-lg p-3">

                <header className="flex justify-end">
                    <button className=" text-black w-2/12" onClick={closeModalFunction}>
                    <span className="text-3xl">✖️</span>
                    </button>
                </header>
               

                <div className="p-6  flex-col text-center">

                    <h2 className="text-3xl font-bold pb-5">{toggleInfo.title}</h2>

                    <p className="text-xl pb-5">
                    {toggleInfo.description}
                    </p>

                    <h2 className="font-bold">
                    <CalendarMonthIcon className="mr-1 " />
                    {new Date(toggleInfo.createdAt).toLocaleDateString()}
                    </h2>
                </div>

                <footer className="flex flex-row justify-center border-t-2 border-black">
                    <span
                    className={`border-2 rounded-xl px-2 mt-3 border-black ${
                        toggleInfo.done ? "bg-green-400" : "bg-red-500"
                    }`}
                    >
                    {toggleInfo.done ? "Completed" : "Uncompleted"}
                    </span>
                </footer>

          </div>
        </div>
      </div>
    </>
  );
}

export default TaskModal;
