import PropTypes from "prop-types";



function Tasks ({tasks}) {
    return tasks.map((task) => (
        <p ke={task.id}>{task.text}</p>
    ));
}


Tasks.defaultProps = {
    tasks: [],
};

Tasks.propTypes = {
    tasks: PropTypes.array,

};

export default Tasks;