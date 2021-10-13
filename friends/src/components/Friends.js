import React, { useState, useEffect } from "react";
import axiosWithAuth from "../utils/axiosWithAuth";
import Friend from "./Friend";
import "../Friends.css";

const Friends = () => {
  const [friendsData, setFriendsData] = useState([]);

  useEffect(() => {
    axiosWithAuth()
      .get("http://localhost:5000/api/friends")
      .then((res) => {
        setFriendsData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="friends">
      <h1>Friends</h1>
      <div className="map">
        {friendsData &&
          friendsData.map((friend) => {
            return <Friend key={friend.id} friend={friend} />;
          })}
      </div>
    </div>
  );
};

export default Friends;
