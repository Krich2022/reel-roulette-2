import { useState } from "react";
import { Button, Form, Row, Col } from "react-bootstrap";
import { useMutation } from "@apollo/client";
import { ADD_USER_MUTATION } from "../../utils/mutations";
import Auth from "../../utils/auth";

function Signup(props) {
  const [FormState, setFormState] = useState({ email: "", password: "" });
  const [addUser] = useMutation(ADD_USER_MUTATION);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const mutationResponse = await addUser({
      variables: {
        email: FormState.email,
        password: FormState.password,
        username: FormState.username,
      },
    });
    const token = mutationResponse.data.addUser.token;
    Auth.login(token);
  };

  const handleChange = (event) => {
    const { id, value } = event.target;
    setFormState({
      ...FormState,
      [id]: value,
    });
  };

  return (
    <div className="d-flex justify-content-center">
      <h2 className="pb-3">Set Up Your Account</h2>
      <Form>
        <div>
          <Row>
            <Form.Control
              type="input"
              id="email"
              name="email"
              placeholder="Email"
              className="mb-4 input-container"
              onChange={handleChange}
            />
          </Row>
          <Row>
            <Form.Control
              type="password"
              id="password"
              name="password"
              placeholder="Password"
              className="mb-3 input-container"
              onChange={handleChange}
            />
          </Row>
          <Button className="mb-3 button-container" onClick={handleSubmit}>
            Create Account
          </Button>
        </div>
      </Form>
      <p className="text-lg">Already have an account?</p>
      <Button href="/login" className="mb-3 button-container">
        Login
      </Button>
    </div>
  );
}

export default Signup;
