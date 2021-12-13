import React from "react";

import PropTypes from "prop-types";
import { FaTimes, FaEdit } from "react-icons/fa";

function Task({ task, onToggle, onDelete, onEdit }) {
  const containerClasses = "task " + (task.reminder ? "reminder" : "");

  return (
    <div onDoubleClick={() => onToggle(task.id)} className={containerClasses}>
      <h3>
        {task.text}
        <span>
          <FaEdit onClick={() => onEdit(task.id)} style={{ marginRight: 4 }} />
          <FaTimes
            onClick={() => onDelete(task.id)}
            style={{ color: "darkred", cursor: "pointer" }}
          />
        </span>
      </h3>
      <p>{task.day}</p>
    </div>
  );
}

Task.propTypes = {
  onEdit: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
  onToggle: PropTypes.func.isRequired,
  task: PropTypes.shape({
    id: PropTypes.number.isRequired,
    text: PropTypes.string.isRequired,
    reminder: PropTypes.bool.isRequired,
    day: PropTypes.string.isRequired,
  }).isRequired,
};

export default Task;
