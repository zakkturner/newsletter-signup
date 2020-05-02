import React, { useState } from "react";
import "./scss/SignUp.scss";

export default function SignUp() {
  const [btnTxt, setBtn] = useState({
    text: "Next",
    active: true,
  });

  const [labelMsg, setMsg] = useState({
    msg: "Sign Up For The IN-Dex Newsletter.",
  });

  const handleBtn = (e) => {
    e.preventDefault();
    setBtn({ text: "Sign Up" });
    setMsg({ msg: "Almost done! Please Enter Your First and Last Name." });
  };

  return (
    <section id="SignUp">
      <div className="signup-container">
        <h2>join the list</h2>
        <div className="form-container">
          <form>
            <label for="init-input">{labelMsg.msg}</label>
            <div className="form-group">
              <input
                type="email"
                placeholder="Enter Email Address"
                className="input-box"
              />
              <input
                type="submit"
                value={btnTxt.text}
                onClick={handleBtn}
                className="submit-btn"
              />
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
