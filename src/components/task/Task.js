import React, { PureComponent } from "react";
import styles from "./task.module.css";
//import classes from "./task.module.css";
import { Button, Card } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faEdit } from "@fortawesome/free-solid-svg-icons";
import PropTypes from "prop-types";
import { formatDate } from "../../Helpers/utils";

class Task extends PureComponent {
  state = {
    checked: false,
  };

  handleCheck = () => {
    this.setState({
      checked: !this.state.checked,
    });

    const { onCheck, data } = this.props;
    onCheck(data._id);
  };

  render() {
    const task = this.props.data;
    const { checked } = this.state;
    const { disabled } = this.props;

    return (
      <Card className={`${styles.task} ${checked ? styles.selected : ""}`}>
        <Card.Body>
          <input type="checkbox" onClick={this.handleCheck} />
          <Card.Title>{task.title}</Card.Title>
          <Card.Text>{task.description}</Card.Text>
          <Card.Text className={styles.date}>
            Date: {formatDate(task.date)}
          </Card.Text>
          <Card.Text className={styles.date}>
            Created at: {formatDate(task.created_at)}
          </Card.Text>
          <Button
            variant="warning"
            className={styles.actionButton}
            disabled={disabled}
            onClick={() => this.props.onEdit(task)}
          >
            <FontAwesomeIcon icon={faEdit} />
          </Button>

          <Button
            variant="danger"
            className={styles.actionButton}
            onClick={() => this.props.onRemove(task._id)}
            disabled={disabled}
          >
            <FontAwesomeIcon icon={faTrash} />
          </Button>
        </Card.Body>
      </Card>
    );
  }
}

Task.propTypes = {
  data: PropTypes.object.isRequired,
  onRemove: PropTypes.func.isRequired,
  onCheck: PropTypes.func.isRequired,
  disabled: PropTypes.bool.isRequired,
};

export default Task;
