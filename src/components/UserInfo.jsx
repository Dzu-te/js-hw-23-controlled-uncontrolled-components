import { useEffect, useState } from "react";

export default function UserInfo({ id, onBackClick }) {
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    setError(null);

    const userUrl = `https://jsonplaceholder.typicode.com/users/${id}`;
    const fetchUserData = async () => {
      try {
        const response = await fetch(userUrl);
        if (!response.ok) throw new Error("Failed to fetch user");
        const data = await response.json();
        setUserData(data);
      } catch (err) {
        console.error("Error fetching user:", err);
        setError("Failed to load user data.");
      } finally {
        setLoading(false);
      }
    };

    fetchUserData();
  }, [id]);

  if (loading) return <h2>Loading...</h2>;
  if (error) return <h2 className="error">{error}</h2>;
  if (!userData) return <h2>No user data available</h2>;

  return (
    <div>
      <h2>User Info</h2>
      <p>id: {userData.id}</p>
      <p>name: {userData.name}</p>
      <p>username: {userData.username}</p>
      <p>email: {userData.email}</p>
      <p>phone: {userData.phone}</p>
      <p>website: {userData.website}</p>
      <p>
        Address:{" "}
        {[
          userData.address.street,
          userData.address.city,
          userData.address.suite,
          `Geo: ${userData.address.geo.lat}, ${userData.address.geo.lng}`,
        ].join(", ")}
      </p>
      <p>
        Company:{" "}
        {[
          userData.company.name,
          userData.company.catchPhrase,
          userData.company.bs,
        ].join(", ")}
      </p>
      <button onClick={onBackClick}>Back to users</button>
    </div>
  );
}
