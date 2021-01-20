import React, { useState } from "react";
import { LoggedOutNavbar } from "./LoggedOutNavbar";
import { Form } from "../styles/Form";

export function SignUp({ history }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function onFormSubmit(event) {
    event.preventDefault();
    const body = { user: { email, password } };
    try {
      const response = await fetch(
        `${process.env.REACT_APP_BACKEND_URL}/sign-up`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(body),
        }
      );
      if (response.status >= 400) {
        throw new Error("incorrect credentials");
      } else {
        const response = await fetch(
          `${process.env.REACT_APP_BACKEND_URL}/login`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ auth: { email, password } }),
          }
        );
        const { jwt } = await response.json();
        localStorage.setItem("token", jwt);
        history.push("/subscriptions");
      }
    } catch (err) {
      console.log(err.message);
    }
  }

  return (
    <>
      <LoggedOutNavbar />
      <h1>Sign Up</h1>
      <Form onSubmit={onFormSubmit}>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <input id="submit" type="submit" value="Submit" />
      </Form>
    </>
  );
}
