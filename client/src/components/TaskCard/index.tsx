import { Task } from "@/state/api";
import { format } from "date-fns";
import Image from "next/image";
import React from "react";

type Props = {
  task: Task;
};

const TaskCard = ({ task }: Props) => {
  return (
    <div className="mb-3 rounded-xl bg-gradient-to-r from-gray-100 to-gray-200 p-6 shadow-lg dark:from-gray-800 dark:to-gray-900 dark:text-gray-200">
      {/* Attachments Section */}
      {task.attachments && task.attachments.length > 0 && (
        <div className="mb-4">
          <h4 className="mb-2 text-lg font-semibold text-gray-700 dark:text-gray-300">
            Attachments:
          </h4>
          <div className="flex flex-wrap gap-3">
            <Image
              src={`https://promanage-s3-images.s3.eu-north-1.amazonaws.com/${task.attachments[0].fileURL}`}
              alt={task.attachments[0].fileName}
              width={400}
              height={200}
              className="rounded-lg border border-gray-300 shadow-md"
            />
          </div>
        </div>
      )}

      {/* Task Details */}
      <div className="space-y-2">
        <p className="text-sm text-gray-600 dark:text-gray-400">
          <strong className="text-gray-800 dark:text-white">ID:</strong>{" "}
          {task.id}
        </p>
        <p className="text-sm text-gray-600 dark:text-gray-400">
          <strong className="text-gray-800 dark:text-white">Title:</strong>{" "}
          {task.title}
        </p>
        <p className="text-sm text-gray-600 dark:text-gray-400">
          <strong className="text-gray-800 dark:text-white">
            Description:
          </strong>{" "}
          {task.description || "No description provided"}
        </p>
        <p className="text-sm text-gray-600 dark:text-gray-400">
          <strong className="text-gray-800 dark:text-white">Status:</strong>{" "}
          {task.status}
        </p>
        <p className="text-sm text-gray-600 dark:text-gray-400">
          <strong className="text-gray-800 dark:text-white">Priority:</strong>{" "}
          {task.priority}
        </p>
        <p className="text-sm text-gray-600 dark:text-gray-400">
          <strong className="text-gray-800 dark:text-white">Tags:</strong>{" "}
          {task.tags || "No tags"}
        </p>
        <p className="text-sm text-gray-600 dark:text-gray-400">
          <strong className="text-gray-800 dark:text-white">Start Date:</strong>{" "}
          {task.startDate ? format(new Date(task.startDate), "P") : "Not set"}
        </p>
        <p className="text-sm text-gray-600 dark:text-gray-400">
          <strong className="text-gray-800 dark:text-white">Due Date:</strong>{" "}
          {task.dueDate ? format(new Date(task.dueDate), "P") : "Not set"}
        </p>
        <p className="text-sm text-gray-600 dark:text-gray-400">
          <strong className="text-gray-800 dark:text-white">Author:</strong>{" "}
          {task.author ? task.author.username : "Unknown"}
        </p>
        <p className="text-sm text-gray-600 dark:text-gray-400">
          <strong className="text-gray-800 dark:text-white">Assignee:</strong>{" "}
          {task.assignee ? task.assignee.username : "Unassigned"}
        </p>
      </div>
    </div>
  );
};

export default TaskCard;
