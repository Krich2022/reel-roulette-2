import { useEffect, useState } from "react";
import { Button, Form, Row, Col } from "react-bootstrap";
import StreamingChecklist from "./ui/serviceChecklist";
import { useMutation } from "@apollo/client";
import { ADD_USER_MUTATION } from "../../utils/mutations";
import Auth from "../../utils/auth";

function Signup(props) {
  const [FormState, setFormState] = useState({ email: "", password: "" });
  const [ServicesState, setServicesState] = useState([]);
  const [addUser] = useMutation(ADD_USER_MUTATION);
  const list = [
    { id: "apple", title: "Apple TV+" },
    { id: "prime", title: "Prime" },
    { id: "disney", title: "Disney+" },
    { id: "hbo", title: "HBO Max" },
    { id: "hulu", title: "Hulu" },
    { id: "netflix", title: "Netflix" },
    { id: "paramount", title: "Paramount+" },
    { id: "peacock", title: "Peacock" },
    { id: "starz", title: "Starz" },
  ];

  const handleServiceChange = (option, checked) => {
    setServicesState((prevState) => {
      if (checked && option) {
        return [...prevState, option];
      } else if (!checked) {
        return prevState.filter((item) => item !== option);
      }
      return prevState;
    });
  };

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

  useEffect(() => {
    console.log(ServicesState);
  }, [ServicesState]);
  return (
    <div className="d-flex align-items-center flex-column">
      <Form className="custom-form text-white background">
        <h2 className="p-3">Set Up Your Account</h2>
        <div className="d-flex flex-column align-items-center">
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
          <Row>
            <h2 className="pb-3">Select Your Streaming Choices</h2>
          </Row>
          <StreamingChecklist list={list} click={handleServiceChange} />
          <Button className="mb-3 button-container" onClick={handleSubmit}>
            Create Account
          </Button>
        </div>
        <p className="text-lg">Already have an account?</p>
        <Button href="/" className="mb-3 button-container">
          Login
        </Button>
      </Form>
    </div>
  );
}

export default Signup;
