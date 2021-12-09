import PropTypes from "prop-types";
import { FaTimes } from "react-icons/fa"


function Task ({task}) {

    const containerClasses = "task " + (task.reminder ? "reminder" : "");

    return (
        <div className={containerClasses}>
            <h3>
                {task.text}
                <FaTimes style={{color: "darkred", cursor: "pointer"}}  />
            </h3>
            <p>{task.day}</p>
        </div>
    );
}

Task.propTypes = {
    task: PropTypes.shape({
        id: PropTypes.number.isRequired,
        text: PropTypes.string.isRequired,
        reminder: PropTypes.bool.isRequired,
        day: PropTypes.string.isRequired,
    }).isRequired,
}

export default Task;