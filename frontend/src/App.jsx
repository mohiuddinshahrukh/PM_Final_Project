import { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [users, setUsers] = useState([]);

  const fetchUsers = async () => {
    const response = await axios.get("http://localhost:8080/api/users");
    console.log(response);
    if (response?.data?.users) {
      setUsers(response?.data?.users);
    }
  };
  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div>
      {users?.length > 0
        ? users.map((user, index) => {
            return <h1 key={index}>{user}</h1>;
          })
        : "Couldn't fetch users"}
    </div>
  );
}

export default App;
