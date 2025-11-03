import React, { useContext, useEffect, useState } from "react";
import Login from "./components/Auth/Login";
import EmployeeDashboard from "./components/Dashboard/EmployeeDashboard";
import AdminDashboard from "./components/Dashboard/AdminDashboard";
import { AuthContext } from "./context/AuthProvider.jsx";

const App = () => {
  const [user, setUser] = useState(null);
  const [loggedInUser, setLoggedInUser] = useState(null);
  const authData = useContext(AuthContext);

  // ✅ Keep user logged in after refresh
  useEffect(() => {
  const storedUser = localStorage.getItem("loggedInUser");
  if (storedUser) {
    const userData = JSON.parse(storedUser);
    setUser(userData.role);
    setLoggedInUser(userData.data || null);
  }
}, []);


  const handleLogin = (email, password) => {
    if (email === "admin@me.com" && password === "123") {
      setUser("admin");
      localStorage.setItem("loggedInUser", JSON.stringify({ role: "admin" }));
    } else if (authData?.employees) {
      const employee = authData.employees.find(
        (e) => e.email === email && e.password === password
      );

      if (employee) {
        setUser("employee");
        setLoggedInUser(employee);
        localStorage.setItem(
          "loggedInUser",
          JSON.stringify({ role: "employee", data: employee })
        );
      } else {
        alert("Invalid Credentials");
      }
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("loggedInUser");
    setUser(null);
    setLoggedInUser(null);
  };

  return (
    <>
      {!user && <Login handleLogin={handleLogin} />}

      {user === "admin" && <AdminDashboard handleLogout={handleLogout} />}

      {user === "employee" && (
        <EmployeeDashboard data={loggedInUser} handleLogout={handleLogout} />
      )}
    </>
  );
};

export default App;
