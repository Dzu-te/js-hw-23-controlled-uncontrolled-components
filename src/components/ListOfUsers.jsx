import { useEffect, useState } from "react";
import "../styles/GetData.css";

const URL = `https://jsonplaceholder.typicode.com/users`;

export default function ListOfUsers({ onUserClick }) {
  const [usersData, setUsersData] = useState([]);

  const getUsersData = async () => {
    const result = await fetch(URL).then((response) => response.json());
    console.log(result);
    setUsersData(result);
  };

  useEffect(() => {
    getUsersData();
  }, []);

  return (
    <>
      Users:
      {usersData.map((userData) => (
        <button onClick={() => onUserClick(userData.id)}>
          <div key={userData.id} className="userDataContainer">
            <h2>name: {userData.name}</h2>
            <p>username: {userData.username}</p>
            <p>email: {userData.email}</p>
            <p>phone: {userData.phone}</p>
            <p>website: {userData.website}</p>
          </div>
        </button>
      ))}
    </>
  );
}
