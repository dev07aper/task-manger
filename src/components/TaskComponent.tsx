import React, { useState } from "react";
import { useAppDispatch, useAppSelector } from "./../hooks/hooks";
import { addTask, removeTask } from "./../features/taskSlice";

// import { useDispatch, useSelector } from "react-redux";

type TaskDataType = {
  id: string;
  name: string;
  description: string;
  status: string;
};
const TaskComponent = () => {
  const dispatch = useAppDispatch();
  const taskList = useAppSelector((state: any) => state.task.tasks);
  console.log(taskList);
  const [taskData, setTaskData] = useState<TaskDataType>({
    id: "",
    name: "",
    description: "",
    status: "",
  });

  const handleChange = (e: any) => {
    const { name, value } = e.target;

    setTaskData((prevData: TaskDataType) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleAddTask = (e: any) => {
    e.preventDefault();
    const payloadData = { ...taskData, id: Date.now().toString() };
    dispatch(addTask(payloadData));
    setTaskData({
      id: "",
      name: "",
      description: "",
      status: "",
    });
  };
  return (
    <div className="px-4 lg:px-6 py-2 max-w-lg mx-auto">
      <div>
        <div className=" p-2 my-4 font-semibold text-lg">
          Task Mangagement App
        </div>
        <form className="w-full mb-4" onSubmit={handleAddTask}>
          <div className="flex flex-col w-fullmb-2">
            <label htmlFor="" className="mb-1">
              Title
            </label>
            <input
              type="text"
              name="name"
              className="bg-white border border-1 border-black px-2 py-2 rounded-md"
              value={taskData?.name}
              onChange={handleChange}
            />
          </div>
          <div className="flex flex-col w-fullmb-2">
            <label htmlFor="" className="mb-1">
              Description
            </label>
            <textarea
              name="description"
              className="bg-white border border-1 border-black px-2 py-2 rounded-md"
              value={taskData.description}
              onChange={handleChange}
            />
          </div>
          <div className="flex flex-col w-full  mb-2">
            <label htmlFor="" className="mb-1">
              Status
            </label>
            <select
              name="status"
              className="px-2 py-2 border border-1 border-black rounded-md"
              value={taskData.status}
              onChange={handleChange}
            >
              <option value="">Select Status</option>
              <option value="TODO">ToDo</option>
              <option value="IN_PROGRESS">In Progress</option>
              <option value="COMPLETED">Completed</option>
            </select>
          </div>
          <div className="flex items-center gap-6">
            <button
              type="submit"
              className="px-2 py-2 bg-blue-400 text-white rounded-md cursor-pointer"
            >
              Add Task
            </button>
          </div>
        </form>
        <div>
          <div className=" ">
            <div className="mb-2 w-full  font-semibold text-center ">
              Task List
            </div>
            <div className="w-full flex flex-row items-center flex-wrap gap-3">
              {taskList && taskList?.length
                ? taskList.map((task: any) => (
                    <div
                      key={task.id}
                      className=" mx-auto p-2 rounded-md shadow-md border border-1 border-gray-200 w-full"
                    >
                      <div className="flex item-center justify-between">
                        <div className=" text-lg font-medium">
                          {task.name || ""}
                        </div>
                        <div className="flex items-center justify-end gap-2 mb-1">
                          {/* <button className="px-2 py-1 bg-blue-400 text-white rounded-md cursor-pointer">
                            Edit
                          </button> */}
                          <button
                            className="px-2 py-1 bg-red-400 text-white rounded-md cursor-pointer"
                            onClick={() => dispatch(removeTask(task))}
                          >
                            Delete
                          </button>
                        </div>
                      </div>
                      <div>
                        <span
                          className={` text-white text-sm font-medium px-2 py-1 bg-yellow-400 rounded-md`}
                        >
                          {task.status}
                        </span>
                      </div>

                      <div className="text-justify">{task.description}</div>
                    </div>
                  ))
                : "No data found"}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TaskComponent;
