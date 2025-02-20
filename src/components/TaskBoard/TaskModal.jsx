/* eslint-disable react/prop-types */
// src/components/TaskModal.jsx
import { useState } from "react";
import axios from "axios";
import { toast } from "react-hot-toast";

const API_URL = import.meta.env.VITE_API_URL || "http://localhost:4000";

const TaskModal = ({ task, onClose, columns, setColumns }) => {
  const [title, setTitle] = useState(task.title);
  const [description, setDescription] = useState(task.description || "");
  const [dueDate, setDueDate] = useState(
    task.dueDate ? task.dueDate.split("T")[0] : ""
  );

  const handleSave = () => {
    if (!title || title.length > 50) {
      toast.error("Title is required and must be under 50 characters.");
      return;
    }
    if (description.length > 200) {
      toast.error("Description must be under 200 characters.");
      return;
    }
    const updatedTask = {
      title,
      description,
      dueDate: dueDate ? new Date(dueDate).toISOString() : null,
    };

    axios
      .patch(`${API_URL}/task/${task._id}`, updatedTask)
      .then(() => {
        toast.success("Task updated");
        const updatedColumns = { ...columns };
        updatedColumns[task.category] = updatedColumns[task.category].map((t) =>
          t._id === task._id ? { ...t, ...updatedTask } : t
        );
        setColumns(updatedColumns);
        onClose();
      })
      .catch(() => {
        toast.error("Failed to update task");
      });
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-30">
      <div className="bg-[#f8fdfd] text-[#040d0d] p-6 rounded-lg w-11/12 max-w-md">
        <h2 className="text-xl font-bold mb-4">Edit Task</h2>
        <div className="mb-4">
          <label className="block text-sm font-medium">Title</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            maxLength={50}
            className="w-full px-3 py-2 border rounded"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium">Description</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            maxLength={200}
            className="w-full px-3 py-2 border rounded"
          ></textarea>
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium">Due Date</label>
          <input
            type="date"
            value={dueDate}
            onChange={(e) => setDueDate(e.target.value)}
            className="w-full px-3 py-2 border rounded"
          />
        </div>
        <div className="flex justify-end space-x-3">
          <button onClick={onClose} className="px-4 py-2 border rounded">
            Cancel
          </button>
          <button
            onClick={handleSave}
            className="px-4 py-2 bg-[#43cbc3] text-white rounded"
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default TaskModal;
