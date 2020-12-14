import React, { useState } from "react";
import styles from "./task.module.css";
import { Button, Card } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faEdit } from "@fortawesome/free-solid-svg-icons";
import PropTypes from "prop-types";
import { formatDate } from "../../Helpers/utils";
import { Link } from "react-router-dom";

function Task1(props) {
  const [checked, setChecked] = useState(false);

  const handleCheck = () => {
    setChecked({
      checked: !checked
    });

    const { onCheck, data } = props;
    onCheck(data._id);
  };

  const task = props.data;
  //const { checked } = this.state;
  const { disabled } = props;

  return (
    <Card className={`${styles.task} ${checked ? styles.selected : ""}`}>
      <Card.Body>
        <input type="checkbox" onClick={handleCheck} />
        <Card.Title>
          <Link to={`/task/${task._id}`}>{task.title}</Link>
        </Card.Title>
        <Card.Text>Description: {task.description}</Card.Text>
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
          onClick={() => props.onEdit(task)}
        >
          <FontAwesomeIcon icon={faEdit} />
        </Button>

        <Button
          variant="danger"
          className={styles.actionButton}
          onClick={() => props.onRemove(task._id)}
          disabled={disabled}
        >
          <FontAwesomeIcon icon={faTrash} />
        </Button>
      </Card.Body>
    </Card>
  );
}

Task1.propTypes = {
  data: PropTypes.object.isRequired,
  onRemove: PropTypes.func.isRequired,
  onCheck: PropTypes.func.isRequired,
  disabled: PropTypes.bool.isRequired,
};

export default Task1;
