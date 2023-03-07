import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createClient, selectAllClients } from "../../reducers/clientsReducer/index.js";
import "./index.css";

function RegistrationForm() {
  const dispatch = useDispatch();
  const clients = useSelector(selectAllClients);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [error, setError] = useState(false);

  const handleChangeName = (event) => {
    const nameValue = event.target.value;
    if (nameValue) {
      setName(nameValue);
    } else {
      setName("");
    }
  };

  const handleChangeEmail = (event) => {
    const emailValue = event.target.value;
    if (emailValue) {
      setEmail(emailValue);
    } else {
      setEmail("");
    }
  };

  const handleChangePassword = (event) => {
    const passwordValue = event.target.value;
    if (passwordValue) {
      setPassword(passwordValue);
    } else {
      setPassword("");
    }
  };

  const handleSave = (event) => {
    const regExp = /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/;
    event.preventDefault();

    if (!regExp.test(email)) {
      return;
    }

    if (email && password && name) {
      const checkClient = clients.find((client) => client.email === email);
      if (checkClient) {
        setError(true);
        console.log("error");
      } else {
        dispatch(createClient({ name, email, password }));
        setName("");
        setEmail("");
        setPassword("");
      }
    }
  };

  return (
    <form className="form">
      <input className="input" type={"text"} value={name} onChange={handleChangeName} placeholder={"Введіть своєю ім'я/нік"} />
      <input className="input" type={"text"} value={email} onChange={handleChangeEmail} placeholder={"Введіть свій email"} />
      <input className="input" type={"password"} value={password} onChange={handleChangePassword} placeholder={"Введіть свій пароль"}></input>
      <button className="submit" type="submit" onClick={handleSave}>
        Зареєструватися
      </button>
    </form>
  );
}

export default RegistrationForm;
