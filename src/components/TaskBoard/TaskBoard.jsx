// src/components/TaskBoard.jsx
import { useState, useEffect, useContext } from "react";
import axios from "axios";

import { DndContext, closestCenter } from "@dnd-kit/core";
import {
  //   SortableContext,
  //   verticalListSortingStrategy,
  arrayMove,
} from "@dnd-kit/sortable";
import Column from "./Column";
import AddTaskModal from "./AddTaskModal";
import { toast, Toaster } from "react-hot-toast";
import { AuthContext } from "../../providers/AuthProvider";

const API_URL = import.meta.env.VITE_API_URL || "http://localhost:4000";

const initialColumns = {
  "To-Do": [],
  "In Progress": [],
  Done: [],
};

const TaskBoard = () => {
  const { user } = useContext(AuthContext);
  const [columns, setColumns] = useState(initialColumns);
  const [showAddTaskModal, setShowAddTaskModal] = useState(false);

  useEffect(() => {
    if (user) {
      axios
        .get(`${API_URL}/tasks`, { params: { userId: user.email } })
        .then((res) => {
          const tasks = res.data;
          const grouped = { ...initialColumns };
          tasks.forEach((task) => {
            if (!grouped[task.category]) {
              grouped[task.category] = [];
            }
            grouped[task.category].push(task);
          });
          Object.keys(grouped).forEach((col) => {
            grouped[col].sort((a, b) => a.order - b.order);
          });
          setColumns(grouped);
        })
        .catch((err) => {
          console.error(err);
          toast.error("Failed to fetch tasks");
        });
    }
  }, [user]);

  const handleDragEnd = (event) => {
    const { active, over } = event;
    if (!over) return;

    let sourceColumn, targetColumn;
    for (const key in columns) {
      if (columns[key].find((item) => item._id === active.id)) {
        sourceColumn = key;
      }
      if (columns[key].find((item) => item._id === over.id)) {
        targetColumn = key;
      }
    }
    if (sourceColumn && targetColumn) {
      if (sourceColumn === targetColumn) {
        const items = columns[sourceColumn];
        const oldIndex = items.findIndex((item) => item._id === active.id);
        const newIndex = items.findIndex((item) => item._id === over.id);
        const newItems = arrayMove(items, oldIndex, newIndex);
        newItems.forEach((task, index) => {
          task.order = index;
          axios.patch(`${API_URL}/task/${task._id}`, { order: task.order });
        });
        setColumns({ ...columns, [sourceColumn]: newItems });
        toast.success("Task reordered");
      } else {
        // Moving task between columns
        const sourceItems = columns[sourceColumn];
        const targetItems = columns[targetColumn];
        const task = sourceItems.find((item) => item._id === active.id);
        if (!task) return;
        const newSourceItems = sourceItems.filter(
          (item) => item._id !== active.id
        );
        task.category = targetColumn;
        task.order = targetItems.length;
        const newTargetItems = [...targetItems, task];
        axios.patch(`${API_URL}/task/${task._id}`, {
          category: targetColumn,
          order: task.order,
          activity: `Task moved to ${targetColumn}`,
        });
        setColumns({
          ...columns,
          [sourceColumn]: newSourceItems,
          [targetColumn]: newTargetItems,
        });
        toast.success("Task moved");
      }
    }
  };

  if (!user) {
    return (
      <div className="text-[#040d0d] bg-[#f8fdfd] p-4">
        Please log in to manage your tasks.
      </div>
    );
  }

  return (
    <div className="min-h-[calc(100vh-68px)] bg-[#f8fdfd] p-4">
      <Toaster />
      <header className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold text-[#040d0d]">Task Management</h1>
        <button
          onClick={() => setShowAddTaskModal(true)}
          className="bg-[#43cbc3] text-white px-4 py-2 rounded hover:bg-[#36a39a] transition"
        >
          Add Task
        </button>
      </header>
      <DndContext collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
        <div className="flex flex-col md:flex-row gap-4">
          {Object.keys(columns).map((colKey) => (
            <Column
              key={colKey}
              title={colKey}
              tasks={columns[colKey]}
              setColumns={setColumns}
              columns={columns}
            />
          ))}
        </div>
      </DndContext>
      {showAddTaskModal && (
        <AddTaskModal
          user={user}
          onClose={() => setShowAddTaskModal(false)}
          setColumns={setColumns}
          columns={columns}
        />
      )}
    </div>
  );
};

export default TaskBoard;
