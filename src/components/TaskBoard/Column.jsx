/* eslint-disable react/prop-types */
// src/components/Column.jsx

import {
  SortableContext,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import TaskCard from "./TaskCard";

const Column = ({ title, tasks, setColumns, columns }) => {
  return (
    <div className="bg-white rounded-lg shadow p-4 flex-1">
      <h2 className="text-xl font-semibold text-[#040d0d] mb-2">{title}</h2>
      <SortableContext
        items={tasks.map((task) => task._id)}
        strategy={verticalListSortingStrategy}
      >
        <div className="space-y-2">
          {tasks.map((task) => (
            <TaskCard
              key={task._id}
              task={task}
              columns={columns}
              setColumns={setColumns}
            />
          ))}
        </div>
      </SortableContext>
    </div>
  );
};

export default Column;
