import React, { useState } from "react";
import {
  Button,
  Col,
  Container,
  Form,
  FormControl,
  InputGroup,
  Row,
} from "react-bootstrap";
import { Link } from "react-router-dom";

const Register = () => {
  const initialValues = {
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  };
  const [inp, setInp] = useState(initialValues);
  const handleChange = (e) => {
    setInp({ ...inp, [e.target.name]: e.target.value });
  };
  const validation = () => {
    if (
      inp.username === "" &&
      inp.email === "" &&
      inp.password === "" &&
      inp.confirmPassword === ""
    ) {
      alert("All Fields are Required");
    }
  };
  const register = () => {
    validation();
  };
  console.log(inp);
  return (
    <>
      <Container className="mt-5">
        <Row>
          <Col lg={5} className="m-auto border p-3 shadow rounded">
            <Form>
              <InputGroup className="mb-3">
                <FormControl
                  placeholder="Username"
                  name="username"
                  value={inp.username}
                  type="text"
                  onChange={handleChange}
                />
              </InputGroup>
              <InputGroup className="mb-3">
                <FormControl
                  placeholder="Email"
                  name="email"
                  type="email"
                  value={inp.email}
                  onChange={handleChange}
                />
              </InputGroup>
              <InputGroup className="mb-3">
                <FormControl
                  placeholder="Password"
                  name="password"
                  type="password"
                  value={inp.password}
                  onChange={handleChange}
                />
              </InputGroup>
              <InputGroup className="mb-3">
                <FormControl
                  placeholder="Confirm Password"
                  name="confirmPassword"
                  value={inp.confirmPassword}
                  type="password"
                  onChange={handleChange}
                />
              </InputGroup>
              <div className="d-flex align-items-center justify-content-between">
                <Button
                  className="shadow-none btn btn-dark mx-1 mb-lg-0 mb-1 text-white"
                  onClick={register}
                >
                  Register
                </Button>
                <small>
                  <span>
                    Already have an account?{" "}
                    <Link to="/login" className="bg-dark text-white">
                      Login here
                    </Link>
                  </span>
                </small>
              </div>
            </Form>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Register;
