import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { register } from "../redux/apiCalls";
import styled from "styled-components";

const Error = styled.span`
color: red;
`

function Register() {

  const history = useHistory();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [fName, setFName] = useState("");
  const [lName, setLName] = useState("");
  const [email, setEmail] = useState("");
  const [confirmPass, setConfirmPass] = useState("");
  const dispatch = useDispatch();
  const {isFetching, error} = useSelector((state) => state.user);

  const handleClick = async(e) =>  {
    e.preventDefault();
    const user = { username, password, email}

    try {
      await register(dispatch, user);
      setPassword("");
      setUsername("");
      setEmail("");
      history.push("/");
    } catch(err) {
      console.log(err.response)
    }
  }


    return (
    <div className="register-container">
    <div className="register-wrapper">
      <h1 className="register-title">CREATE AN ACCOUNT</h1>
      <form className="register-form">
      <input className="register-input" placeholder="first name" value={fName} autoComplete="off" onChange={(e) =>setFName(e.target.value)} />
      <input className="register-input" placeholder="last name" autoComplete="off" value={lName} onChange={(e) =>setLName(e.target.value)}/>
      <input className="register-input" placeholder="username" autoComplete="off" onChange={(e) => setUsername(e.target.value)}/>
      <input className="register-input" placeholder="email" autoComplete="off" onChange={(e) => setEmail(e.target.value)}/>
      <input className="register-input" placeholder="password" autoComplete="off" onChange={(e) =>setPassword(e.target.value)}/>
      <input className="register-input" placeholder="confirm password" autoComplete="off" value={confirmPass} onChange={(e) =>setConfirmPass(e.target.value)}/>
      <span className="agreement">
   By creating an account, i consent to the process of my personal data in accordance with <b>PRIVACY POLICY</b>
      </span>
      <button className="register-button" onClick={handleClick} disabled={isFetching}>CREATE</button>
      {error && <Error>Something went wrong...</Error>}
      </form>
    </div>
    </div>
    )
}

export default Register;