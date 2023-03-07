import React from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { selectAllClients } from "../../reducers/clientsReducer/index.js";

function LogInForm() {
  const clients = useSelector(selectAllClients);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);

  const handleChangeEmail = (event) => {
    const emailValue = event.target.value;
    setEmail(emailValue);
  };

  const handleChangePassword = (event) => {
    const passwordValue = event.target.value;
    setPassword(passwordValue);
  };

  const handleSave = () => {
    const regExp = /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/;

    if (!regExp.test(email)) {
      return;
    }

    if (email && password) {
      const checkClient = clients.find((client) => client.email === email && client.password === password);
      if (checkClient) {
        window.localStorage.setItem("user", email);
        setEmail("");
        setPassword("");
      } else {
        setError(true);
        console.log("error");
      }
    }
  };

  return (
    <form className="form">
      <p className="registration-title">Увійти</p>
      <input className="input" type={"text"} value={email} onChange={handleChangeEmail} placeholder={"Введіть свій email"} />
      <input className="input" type={"password"} value={password} onChange={handleChangePassword} placeholder={"Введіть свій пароль"}></input>
      <button className="submit" type="submit" onClick={handleSave}>
        Увійти
      </button>
      <Link to={"/registration"} className="submit">
        Зареєструватися
      </Link>
    </form>
  );
}

export default LogInForm;
