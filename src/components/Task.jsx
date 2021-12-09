import PropTypes from "prop-types";
import { FaTimes } from "react-icons/fa"


function Task ({task, onToggle,onDelete}) {

    const containerClasses = "task " + (task.reminder ? "reminder" : "");

    return (
        <div onDoubleClick={() => onToggle(task.id)} className={containerClasses}>
            <h3>
                {task.text}
                <FaTimes onClick={() => onDelete(task.id)} style={{color: "darkred", cursor: "pointer"}}  />
            </h3>
            <p>{task.day}</p>
        </div>
    );
}

Task.propTypes = {
    onDelete: PropTypes.func.isRequired,
    onToggle: PropTypes.func.isRequired,
    task: PropTypes.shape({
        id: PropTypes.number.isRequired,
        text: PropTypes.string.isRequired,
        reminder: PropTypes.bool.isRequired,
        day: PropTypes.string.isRequired,
    }).isRequired,
}

export default Task;