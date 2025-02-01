import React from "react";
import Details from "./Details";
import Tablize from "./Tablize";
import Tablizef from "./Tablizef";
import ReactToPrint from "react-to-print";

import "bootstrap/dist/css/bootstrap.min.css";
import { Table, Button, Row, Col, Form } from "react-bootstrap";

function Filling() {
  let [time_table, sett] = React.useState(
    Array.from({ length: 50 }, (v) =>
      Array.from({ length: 50 }, (v) =>
        Array.from({ length: 50 }, (v) => parseInt(0))
      )
    )
  );
  let [time_table_checker, settc] = React.useState(
    Array.from({ length: 50 }, (v) =>
      Array.from({ length: 50 }, (v) =>
        Array.from({ length: 50 }, (v) => false)
      )
    )
  );

  const opt = [];
  const opt1 = [];
  const opt2 = [];
  for (let i = 0; i <= 50; i++) opt.push(<option key={i}> {i} </option>);
  for (let i = 0; i <= 6; i++) opt2.push(<option key={i}> {i} </option>);

  const class_data = [];
  const faculty_data = [];
  const regexp = /^[0-9\b]+$/;

  const [allow, setAllow] = React.useState(true);
  const [algo, setAlgo] = React.useState(false);
  const [algo2, setAlgo2] = React.useState(false);
  const [modalShow1, setModalShow1] = React.useState(false);
  const [modalShow2, setModalShow2] = React.useState(false);
  const [no_of_Lectures, setLect] = React.useState(6);
  const [no_of_days, setdays] = React.useState(6);
  const [no_of_faculties, setthem] = React.useState(0);
  const [no_of_classes, setthem2] = React.useState(0);
  const [faculty_names, setfn] = React.useState([]);
  const [classroomNames, setClassroomNames] = React.useState(0);
  let head = [];

  let [dayinput, setdi] = React.useState(
    Array.from({ length: 50 }, (v) =>
      Array.from({ length: 50 }, () => <div></div>)
    )
  );

  for (let i = 0; i <= no_of_days; i++) opt1.push(<option key={i}> {i} </option>);

  const [week_hours, setwh] = React.useState(
    Array.from({ length: 50 }, (v) => Array.from({ length: 50 }, (v) => 0))
  );
  const [week_hours_all, setwha] = React.useState(
    Array.from({ length: 50 }, (v) => 0)
  );
  const [off_days_fac, setoff] = React.useState(
    Array.from({ length: 50 }, (v) => 0)
  );

  const col_data = [];
  for (let i = 1; i <= no_of_Lectures; i++) {
    col_data.push(<th key={`lec-${i}`}>Lecture {i}</th>);
    if (i === Math.floor(no_of_Lectures / 2)) {
      col_data.push(<th key="recess" rowSpan="6">Reccess</th>);
    }
  }

  function fill_Faculties() {
    if (no_of_faculties === 0) return;

    for (let k = 1; k <= no_of_faculties; k++) {
      faculty_data.push(
        <div key={`faculty-${k}`}>
          <Row>
            <Col>
              <Form.Label>Name of Faculty {k}</Form.Label>
            </Col>
            <Col>
              <Form.Control
                required
                onChange={(e) => {
                  faculty_names[k - 1] = e.target.value;
                  console.log(faculty_names[k - 1], k);
                }}
              />
            </Col>
          </Row>
        </div>
      );
    }
  }

  function fill_classes() {
    if (no_of_classes === 0) return;

    dayinput = Array.from({ length: 50 }, () =>
      Array.from({ length: 50 }, () => <div></div>)
    );

    head = [];
    for (let j = 1; j <= no_of_faculties; j++) {
      let facultyName = faculty_names[j - 1];
      head.push(
        <td key={`head-${j}`}>
          <center>
            Faculty {j} ({facultyName})
          </center>
        </td>
      );
    }

    for (let i = 1; i <= no_of_classes; i++) {
      dayinput[i - 1] = [
        <td key={`classroom-${i}`}>
          <center>Classroom {i}</center>
        </td>
      ];
      for (let j = 1; j <= no_of_faculties; j++) {
        dayinput[i - 1].push(
          <td key={`input-${i}-${j}`}>
            <center>
              <Form.Control
                onChange={(e) => {
                  week_hours[i - 1][j - 1] = e.target.value;
                }}
              />
            </center>
          </td>
        );
      }
    }
    class_data.push(
      <Table striped bordered hover size="sm" responsive variant="success" key="class-table">
        <thead>
          <tr>
            <th>
              <center>#</center>
            </th>
            {head}
          </tr>
        </thead>
        <tbody>
          <tr>{dayinput[0]}</tr>
          <tr>{dayinput[1]}</tr>
          <tr>{dayinput[2]}</tr>
          <tr>{dayinput[3]}</tr>
          <tr>{dayinput[4]}</tr>
          <tr>{dayinput[5]}</tr>
        </tbody>
      </Table>
    );
  }

  // Rest of the functions remain the same...

  return (
    <div>
      {/* Rest of the JSX remains the same but with classroomNames state value used */}
      <Form.Control
        name="classroomNames"
        as="select"
        defaultValue="0"
        value={classroomNames}
                                    onChange={(e) => {
      setthem2(e.target.value);
      setClassroomNames(e.target.value);

      // Remove the call to resetAllHours() as it's not defined
      setModalShow2(true);
      setAllow(false);
}}      >
        {opt}
      </Form.Control>
      {/* Rest of the JSX remains the same */}
    </div>
  );
}
export default Filling;
