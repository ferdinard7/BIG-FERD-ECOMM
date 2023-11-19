import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { register } from "../redux/apiCalls";


function Register() {

  const history = useHistory();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [fName, setFName] = useState("");
  const [lName, setLName] = useState("");
  const [email, setEmail] = useState("");
  const [comfirmPass, setComfirmPass] = useState("");
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
      <input className="register-input" placeholder="first name" onChange={(e) =>setFName(e.target.value)} />
      <input className="register-input" placeholder="last name" onChange={(e) =>setLName(e.target.value)}/>
      <input className="register-input" placeholder="username" onChange={(e) => setUsername(e.target.value)}/>
      <input className="register-input" placeholder="email" onChange={(e) => setEmail(e.target.value)}/>
      <input className="register-input" placeholder="password" onChange={(e) =>setPassword(e.target.value)}/>
      <input className="register-input" placeholder="confirm password" onChange={(e) =>setComfirmPass(e.target.value)}/>
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