import React, { useState } from "react";
import axios from "axios"
const Create = () => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    startDate: "",
    dueDate: "",
    time: "",
    priority: "",
    status: "",
  });

  const priorities = ["Low", "Medium", "High"];
  const statuses = ["Pending", "In Progress", "Completed"];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit =  (e) =>  {
    e.preventDefault();
    let response =  axios.post("/task/Create/" , formData)
    .then((response)=>{
      console.log(response.data)
    }).catch((err)=>{
      console.log(err.message)
    })
    alert("Task Created Successfully!");
    setFormData({
      title: "",
      description: "",
      startDate: "",
      dueDate: "",
      time: "",
      priority: "",
      status: "",
    });
  };

  return (
    <div className=" overflow-y-auto bg-gray-100 flex items-center justify-center p-4 mb-[100px]">
      <form
        onSubmit={handleSubmit}
        className=" bg-white shadow-lg rounded-lg p-6 space-y-4"
      >
        <h1 className="text-2xl font-bold text-gray-800 text-center">
          Create Task
        </h1>

        {/* Title */}
        <div>
          <label htmlFor="title" className="block text-sm font-medium text-gray-700">
            Title
          </label>
          <input
            type="text"
            id="title"
            name="title"
            value={formData.title}
            onChange={handleChange}
            className="w-full mt-1 p-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
            placeholder="Enter task title"
            required
          />
        </div>

        {/* Description */}
        <div>
          <label htmlFor="description" className="block text-sm font-medium text-gray-700">
            Description
          </label>
          <textarea
            id="description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            className="w-full mt-1 p-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
            placeholder="Enter task description"
            rows="3"
            required
          ></textarea>
        </div>

        {/* Start Date */}
        <div>
          <label htmlFor="startDate" className="block text-sm font-medium text-gray-700">
            Start Date
          </label>
          <input
            type="date"
            id="startDate"
            name="startDate"
            value={formData.startDate}
            onChange={handleChange}
            className="w-full mt-1 p-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
            required
          />
        </div>

        {/* Due Date */}
        <div>
          <label htmlFor="dueDate" className="block text-sm font-medium text-gray-700">
            Due Date
          </label>
          <input
            type="date"
            id="dueDate"
            name="dueDate"
            value={formData.dueDate}
            onChange={handleChange}
            className="w-full mt-1 p-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
            required
          />
        </div>

        {/* Time */}
        <div>
          <label htmlFor="time" className="block text-sm font-medium text-gray-700">
            Time
          </label>
          <input
            type="time"
            id="time"
            name="time"
            value={formData.time}
            onChange={handleChange}
            className="w-full mt-1 p-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
            required
          />
        </div>

        {/* Priority */}
        <div>
          <label htmlFor="priority" className="block text-sm font-medium text-gray-700">
            Priority
          </label>
          <select
            id="priority"
            name="priority"
            value={formData.priority}
            onChange={handleChange}
            className="w-full mt-1 p-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
            required
          >
            <option value="" disabled>
              Select priority
            </option>
            {priorities.map((priority, index) => (
              <option key={index} value={priority}>
                {priority}
              </option>
            ))}
          </select>
        </div>

        {/* Status */}
        {/* <div>
          <label htmlFor="status" className="block text-sm font-medium text-gray-700">
            Status
          </label>
          <select
            id="status"
            name="status"
            value={formData.status}
            onChange={handleChange}
            className="w-full mt-1 p-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
            required
          >
            <option value="" disabled>
              Select status
            </option>
            {statuses.map((status, index) => (
              <option key={index} value={status}>
                {status}
              </option>
            ))}
          </select>
        </div> */}

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg shadow-md hover:bg-blue-600"
        >
          Create Task
        </button>
      </form>
    </div>
  );
};

export default Create;
