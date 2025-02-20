/* eslint-disable react/prop-types */
import { useState } from "react";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import axios from "axios";
import { toast } from "react-hot-toast";
import TaskModal from "./TaskModal";

const API_URL = import.meta.env.VITE_API_URL || "http://localhost:4000";

const TaskCard = ({ task, columns, setColumns }) => {
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id: task._id });

  const [showModal, setShowModal] = useState(false);

  const isOverdue = task.dueDate && new Date(task.dueDate) < new Date();

  const handleDelete = (e) => {
    e.stopPropagation(); // Prevent drag event
    axios
      .delete(`${API_URL}/task/${task._id}`)
      .then(() => {
        const updatedColumns = { ...columns };
        updatedColumns[task.category] = updatedColumns[task.category].filter(
          (t) => t._id !== task._id
        );
        setColumns(updatedColumns);
        toast.success("Task deleted");
      })
      .catch(() => {
        toast.error("Failed to delete task");
      });
  };

  return (
    <>
      <div
        ref={setNodeRef}
        style={{
          transform: CSS.Transform.toString(transform),
          transition,
        }}
        {...attributes}
        {...listeners}
        className="bg-[#f8fdfd] border border-gray-200 rounded p-3 shadow cursor-pointer"
        onClick={() => setShowModal(true)}
      >
        <div className="flex justify-between items-center">
          <h3 className="font-bold text-[#040d0d]">{task.title}</h3>
          <div className="flex space-x-2">
            <button
              onClick={(e) => {
                e.stopPropagation(); // Prevent drag event
                setShowModal(true);
              }}
              className="text-sm text-[#43cbc3] hover:underline"
            >
              Edit
            </button>
            <button
              onClick={handleDelete}
              className="text-sm text-red-500 hover:underline"
            >
              Delete
            </button>
          </div>
        </div>
        <p className="text-sm text-[#040d0d]">{task.description}</p>
        {task.dueDate && (
          <p
            className={`text-sm ${
              isOverdue ? "text-red-500" : "text-[#9aade3]"
            }`}
          >
            Due: {new Date(task.dueDate).toLocaleDateString()}
          </p>
        )}
      </div>
      {showModal && (
        <TaskModal
          task={task}
          onClose={() => setShowModal(false)}
          columns={columns}
          setColumns={setColumns}
        />
      )}
    </>
  );
};

export default TaskCard;
