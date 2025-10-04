import axios from "axios";
import { createContext, useContext, useState } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);

  const login = async (email, password) => {
    try {
      setError(null);
      const res = await axios.post("/user/login", { email, password });
      setUser(res.data.user);
      localStorage.setItem("token", res.data.token);
    } catch (err) {
      setError(err.response?.data || { message: "Login Failed" });
    }
  };

  return (
    <AuthContext.Provider value={{ user, error, login }}> 
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
