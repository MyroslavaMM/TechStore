import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import RegistrationForm from "../RegistrationForm/index.js";
import { getAllClients } from "../../reducers/clientsReducer/index.js";

import "./index.css";

function RegistrationPage() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllClients());
  }, []);

  return (
    <div className="registration">
      <p className="registration-title">РЕЄСТРАЦІЯ</p>
      {RegistrationForm()}
    </div>
  );
}

export default RegistrationPage;
