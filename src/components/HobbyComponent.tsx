import React, { useState } from "react";
import { useAppDispatch, useAppSelector } from "./../hooks/hooks";
import { addHobby } from "./../features/hobbySlice";

type HobbyDataType = {
  id: string;
  name: string;
  preference: string;
};

const HobbyComponent = () => {
  const dispatch = useAppDispatch();
  const hobbyList = useAppSelector((state: any) => state.task.tasks);

  const [hobbyData, setHobbyData] = useState<HobbyDataType>({
    id: "",
    name: "",
    preference: "",
  });

  const handleChange = (e: any) => {
    const { name, value } = e.target;

    setHobbyData((prevData: HobbyDataType) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleAddHobby = (e: any) => {
    e.preventDefault();

    dispatch(addHobby(hobbyData));

    // write your logic  to add data in the store
  };

  return (
    <div className="px-4 lg:px-6 py-2 max-w-lg  mx-auto">
      <div>
        <div className=" p-2 my-4 font-semibold text-lg">Hobby</div>
        <form className="w-full mb-4" onSubmit={handleAddHobby}>
          <div className="flex flex-col w-fullmb-2">
            <label htmlFor="" className="mb-1">
              Hobby Title
            </label>
            <input
              type="text"
              name="name"
              className="bg-white border border-1 border-black px-2 py-2 rounded-md"
              value={hobbyData?.name}
              onChange={handleChange}
            />
          </div>

          <div className="flex flex-col w-full  mb-2">
            <label htmlFor="" className="mb-1">
              Hobby Preference
            </label>
            <select
              name="status"
              className="px-2 py-2 border border-1 border-black rounded-md"
              value={hobbyData.preference}
              onChange={handleChange}
            >
              <option value="">Select Preference</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="4">3</option>
            </select>
          </div>
          <div className="flex items-center gap-6">
            <button
              type="submit"
              className="px-2 py-2 bg-blue-400 text-white rounded-md cursor-pointer"
            >
              Add Hobby
            </button>
          </div>
        </form>
        <div>
          <div className=" ">
            <div className="mb-2 w-full  font-semibold text-center ">
              Hobby List
            </div>
            <div className="w-full flex flex-row items-center flex-wrap gap-3">
              {hobbyList && hobbyList?.length
                ? hobbyList.map((hobby: any) => (
                    <div className=" mx-auto p-2 rounded-md shadow-md border border-1 border-gray-200 w-full">
                      <div className="flex item-center justify-between">
                        <div className=" text-lg font-medium">
                          {hobby.title || ""}
                        </div>
                        <div className="flex items-center justify-end gap-2 mb-1">
                          <button className="px-2 py-1 bg-blue-400 text-white rounded-md cursor-pointer">
                            Edit
                          </button>
                          <button className="px-2 py-1 bg-red-400 text-white rounded-md cursor-pointer">
                            Delete
                          </button>
                        </div>
                      </div>

                      <div className="text-justify">
                        {hobby.preference || ""}
                      </div>
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

export default HobbyComponent;
