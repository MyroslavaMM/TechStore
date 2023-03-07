import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getAllClients } from "../../reducers/clientsReducer/index.js";
import LogInForm from "../LogInForm/index.js";
import "./index.css";

function UserRoom() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllClients());
  }, []);

  const handleLogOut = () => {
    window.localStorage.removeItem("user");
    document.location.reload();
  };

  if (window.localStorage.getItem("user")) {
    return (
      <div className="user-page-block">
        <p className="user-page-title">Моя сторінка</p>
        <button className="submit" onClick={handleLogOut}>
          Вийти
        </button>
      </div>
    );
  } else {
    return (
      <div className="user-room">
        <LogInForm />
      </div>
    );
  }
}

export default UserRoom;
