import { ConfigContext } from "@/pages/_app";
import React, { useContext, useState } from "react";

const SignMeUp = ({ signupCallback }) => {
  const [email, setEmail] = useState("");

  const context = useContext(ConfigContext);

  const handleChange = (e) => {
    e.preventDefault;
    setEmail(e.target.value);
  };

  return context.showSignUp === false ? null : (
    <div className="container">
      <div>
        <div className="content">
          <input
            placeholder="Enter Email"
            type="email"
            name="email"
            value={email}
            onChange={handleChange}
          />
          &nbsp;
          <button
            disabled={!email.includes("@")}
            onClick={() => {
              signupCallback(email);
              setEmail("");
              alert("signup confirmed");
            }}
            className="btn"
            type="submit"
          >
            Get Updates
          </button>
        </div>
      </div>
    </div>
  );
};

export default SignMeUp;
