import React from "react";

export default function Input(props) {
  return (
    <div>
      {props.signupStep === 1 && (
        <input
          type="email"
          placeholder="Enter Email Address"
          className="input-box"
          required
        />
      )}
      {props.signupStep === 2 && (
        <div className="form-group">
          <input
            type="text"
            placeholder="First Name"
            className="input-box first-name"
          />

          <input
            type="text"
            placeholder="Last Name"
            className="input-box last-name"
            required
          />
        </div>
      )}
    </div>
  );
}
