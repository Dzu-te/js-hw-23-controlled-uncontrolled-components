import { useEffect, useState } from "react";
import "../styles/GetData.css";

const URL = `https://jsonplaceholder.typicode.com/users`;

export default function ListOfUsers({ onUserClick }) {
  const [usersData, setUsersData] = useState([]);
  const [error, setError] = useState(null);

  const getUsersData = async () => {
    try {
      const result = await fetch(URL);
      if (!result.ok) throw new Error("Network response was not ok");
      const data = await result.json();
      setUsersData(data);
    } catch (err) {
      console.error("Failed to fetch users:", err);
      setError("Failed to load users. Please try again later.");
    }
  };

  useEffect(() => {
    getUsersData();
  }, []);

  if (error) return <div className="error">{error}</div>;

  return (
    <>
      Users:
      {usersData.map((userData) => (
        <button key={userData.id} onClick={() => onUserClick(userData.id)}>
          <div className="userDataContainer">
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
