import React, { PureComponent } from "react";
import { formatDate } from "../../../Helpers/utils";
import { Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faEdit } from "@fortawesome/free-solid-svg-icons";
import EditTaskModal from "../../EditTaskModal/EditTaskModal";
import styles from "./singleTask.module.css";
import { connect } from "react-redux";
import { getSingleTask, removeTask } from "../../../store/action";

import singletask from "../../../assets/singletask.jpg";

class SingleTask extends PureComponent {
  state = {
    openEditModal: false,
  };

  componentDidMount() {
    const taskId = this.props.match.params.id;
    this.props.getSingleTask(taskId);
  }

  componentDidUpdate(prevProps) {
    if (!prevProps.editTaskSuccess && this.props.editTaskSuccess) {
      this.setState({
        openEditModal: false,
      });
    }

    if (!prevProps.removeTaskSuccess && this.props.removeTaskSuccess) {
      this.props.history.push("/");
    }
  }

  toogleEditModal = () => {
    this.setState({
      openEditModal: !this.state.openEditModal,
    });
  };

  render() {
    const { openEditModal } = this.state;
    const { task } = this.props;

    return (
      <>
        <div className={styles.wraper}>
          <div>
            {!!task ? (
              <div
                className={styles.card}
                style={{ backgroundImage: `url(${singletask})` }}
              >
                <h2 className={styles.title}>{task.title}</h2>
                <p className={styles.description}>
                  Description: {task.description}
                </p>
                <p className={styles.date}>Date: {formatDate(task.date)}</p>
                <p className={styles.at}>
                  Created at: {formatDate(task.created_at)}
                </p>

                <Button
                  className={styles.interval}
                  variant="warning"
                  // className={styles.actionButton}
                  onClick={this.toogleEditModal}
                >
                  <FontAwesomeIcon icon={faEdit} />
                </Button>

                <Button
                  variant="danger"
                  // className={styles.actionButton}
                  onClick={() => {
                    this.props.removeTask(task._id, "single");
                  }}
                >
                  <FontAwesomeIcon icon={faTrash} />
                </Button>
              </div>
            ) : (
              <h3>Sorry, No task found !!!</h3>
            )}

            {openEditModal && (
              <EditTaskModal
                data={task}
                from="single"
                onSave={this.saveTask}
                onClose={this.toogleEditModal}
              />
            )}
          </div>
          <div>
            <img src={singletask} alt="singletask" width="100%" z-index={-1} />
          </div>
        </div>
      </>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    task: state.task,
    editTaskSuccess: state.editTaskSuccess,
    removeTaskSuccess: state.removeTaskSuccess,
  };
};

const mapDispatchToProps = {
  getSingleTask,
  removeTask,
};

export default connect(mapStateToProps, mapDispatchToProps)(SingleTask);
