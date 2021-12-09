import PropTypes from "prop-types";
import Task from "./Task";


function Tasks ({tasks, onToggle, onDelete}) {
    if (!tasks || tasks.length === 0) {
        return (
            <p>No Tasks to display</p>
        );
    }
    return tasks.map((task) => (
        <Task
        onDelete={onDelete} 
        onToggle={onToggle} 
        key={task.id} 
        task={task} />
    ));
}


Tasks.defaultProps = {
    tasks: [],
};

Tasks.propTypes = {
    tasks: PropTypes.array,
    onToggle: PropTypes.func.isRequired,
    onDelete: PropTypes.func.isRequired,
};

export default Tasks;