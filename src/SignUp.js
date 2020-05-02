import React from "react";
import "./scss/SignUp.scss";

export default function SignUp() {
  return (
    <section id="SignUp">
      <div className="signup-container">
        <h2>join the list</h2>
        <div className="form-container">
          <form>
            <label for="init-input">Sign Up For The IN-Dex Newsletter.</label>
            <div className="form-group">
              <input
                type="email"
                placeholder="Enter Email Address"
                className="input-box"
              />
              <input type="submit" value="Next" className="submit-btn" />
            </div>

            <div className="privacy-container">
              <input type="checkbox" className="checkbox" />
              <span className="policy">
                I agree to receive information from Interactive Nerd in
                accordance with the following <a>Privacy Policy</a>
              </span>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
