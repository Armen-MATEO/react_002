import React, { PureComponent } from "react";
import Task from "../../task/Task";
import { Container, Row, Col, Button } from "react-bootstrap";
import AddTask from "../../AddTask/AddTask";
import Confirm from "../../Confirm";
import EditTaskModal from "../../EditTaskModal/EditTaskModal";
import styles from "./todo.module.css";
import { connect } from "react-redux";
import { getTasks, removeSelected } from "../../../store/action";
import Search from "../../Search/Search";
import Footer from "./Footer";

class ToDo extends PureComponent {
  state = {
    selectedTasks: new Set(),
    showConfirm: false,
    editTask: null,
    openNewTaskModal: false,
  };

  componentDidMount() {
    this.props.getTasks();
  }

  componentDidUpdate(prevProps) {
    if (!prevProps.addTaskSuccess && this.props.addTaskSuccess) {
      this.toggleNewTaskModal();
    }
    if (!prevProps.removeTasksSuccess && this.props.removeTasksSuccess) {
      this.setState({
        selectedTasks: new Set(),
        showConfirm: false,
      });
    }

    if (!prevProps.editTaskSuccess && this.props.editTaskSuccess) {
      this.setState({
        editTask: null,
      });
    }
  }

  handleCheck = (taskId) => {
    const selectedTasks = new Set(this.state.selectedTasks);
    if (selectedTasks.has(taskId)) {
      selectedTasks.delete(taskId);
    } else {
      selectedTasks.add(taskId);
    }

    this.setState({
      selectedTasks,
    });
  };

  removeSelected = () => {
    const taskIds = [...this.state.selectedTasks];
    this.props.removeSelected(taskIds);
  };

  toggleConfirm = () => {
    this.setState({
      showConfirm: !this.state.showConfirm,
    });
  };

  toogleEditModal = (task) => {
    this.setState({
      editTask: task,
    });
  };

  toggleNewTaskModal = () => {
    this.setState({
      openNewTaskModal: !this.state.openNewTaskModal,
    });
  };

  render() {
    const {
      selectedTasks,
      showConfirm,
      editTask,
      openNewTaskModal,
    } = this.state;

    const tasksArray = this.props.tasks.map((task) => {
      return (
        <Col key={task._id} xs={12} sm={6} md={4} lg={3} xl={2}>
          <Task
            data={task}
            // onRemove={this.removeTask}
            onCheck={this.handleCheck}
            disabled={!!selectedTasks.size}
            onEdit={this.toogleEditModal}
          />
        </Col>
      );
    });

    return (
      <div className={styles.toDo}>
        <Container>
          <Search />
          <Row className="justify-content-center text-center">
            <Col sm={10} xs={12} md={8} lg={6}>
              <Button
                className={styles.addButton}
                variant="primary"
                onClick={this.toggleNewTaskModal}
                disabled={!!selectedTasks.size}
              >
                Add new task
              </Button>
            </Col>
          </Row>

          <Row>{tasksArray}</Row>
          <Row className="justify-content-center text-center position: center">
            <Col xs={4}>
              <Button
                variant="outline-danger"
                onClick={this.toggleConfirm}
                disabled={!selectedTasks.size}
              >
                Remove selected
              </Button>
            </Col>
          </Row>
        </Container>

        {showConfirm && (
          <Confirm
            onSubmit={this.removeSelected}
            onClose={this.toggleConfirm}
            count={selectedTasks.size}
          />
        )}
        {!!editTask && (
          <EditTaskModal
            data={editTask}
            from="tasks"
            onClose={() => this.toogleEditModal(null)}
          />
        )}

        {openNewTaskModal && <AddTask onClose={this.toggleNewTaskModal} />}
        <Footer />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    tasks: state.tasks,
    addTaskSuccess: state.addTaskSuccess,
    removeTasksSuccess: state.removeTasksSuccess,
    editTaskSuccess: state.editTaskSuccess,
  };
};

const mapDispatchToProps = {
  getTasks: getTasks,
  removeSelected,
};

export default connect(mapStateToProps, mapDispatchToProps)(ToDo);
