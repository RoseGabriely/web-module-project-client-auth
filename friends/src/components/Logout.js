import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import axiosWithAuth from "../utils/axiosWithAuth";

const Logout = () => {
  const history = useHistory();
  useEffect(() => {
    axiosWithAuth()
      .post("http://localhost:5000/api/logout")
      .then((res) => {
        localStorage.removeItem("token");
        history.push("./home");
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return <div className="logout">Logout</div>;
};

export default Logout;
