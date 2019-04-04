import React, { useState } from "react";
import { Row, Col, Input } from "reactstrap";
import ToDoList from "./ListItem";

export default props => {
  const [activity, setActivity] = useState("");
  const [activities, setActivities] = useState([]);
  const changeAct = e => {
    setActivity(e.target.value);
  };
  const submit = e => {
    e.preventDefault();
    setActivity("");
    setActivities([...activities, activity]);
  };
  return (
    <div className="container">
      <h1>To Do Page</h1>
      <p>Halaman untuk melihat tugas yang harus dikerjakan (dynamic array)</p>
      <Row>
        <Col md="3">
          <form onSubmit={submit}>
            <Input
              type="text"
              placeholder="Tulis Aktifitas >> enter"
              value={activity}
              onChange={changeAct}
            />
          </form>
        </Col>
        <Col>
          <ToDoList data={activities} />
        </Col>
      </Row>
    </div>
  );
};
