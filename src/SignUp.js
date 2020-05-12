import React, { useState } from "react";
import "./scss/SignUp.scss";
import Button from "./atoms/Button";
import Label from "./atoms/Label";
import Input from "./atoms/Input";

export default function SignUp() {
  // const [btnTxt, setBtn] = useState({
  //   text: "Next",
  //   active: true,
  //   msg: "Sign Up For The IN-Dex Newsletter.",
  //   placeHolder: "Enter Email Address",
  // });

  const [signupStep, setStep] = useState(1);
  // const [error, setError] = useState({
  //   errors: {
  //     email: "",
  //     firstName: "",
  //     lastName: "",
  //   },
  // });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (signupStep <= 2) {
      setStep(signupStep + 1);
    }
  };

  return (
    <section id="SignUp">
      <div className="signup-container">
        <h2>join the list</h2>
        <div className="form-container">
          <form>
            {signupStep === 1 && (
              <div>
                <Label msg={"Sign Up For The IN-Dex Newsletter"} />
                <div className="form-group">
                  <Input signupStep={signupStep} setStep={setStep} />

                  <Button
                    value={"next"}
                    signupStep={signupStep}
                    setStep={setStep}
                  />
                </div>
                <div className="privacy-container">
                  <input type="checkbox" className="checkbox" />
                  <span className="policy">
                    I agree to receive information from Interactive Nerd in
                    accordance with the following <a href="#">Privacy Policy</a>
                  </span>
                </div>
              </div>
            )}{" "}
            {signupStep === 2 && (
              <div>
                <Label msg={"Almost Done! Enter your First and Last Name"} />

                <div className="form-group">
                  <Input signupStep={signupStep} setStep={setStep} />
                  <Button
                    value={"Sign Up"}
                    signupStep={signupStep}
                    setStep={setStep}
                    handleSubmit={handleSubmit}
                  />
                </div>
              </div>
            )}
            {signupStep === 3 && (
              <div>
                <Label msg={"Thank you for Signing Up!!"} />
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
