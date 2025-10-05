import axios from "axios";
import { createContext, useContext, useState } from "react";
import { toast } from "react-toastify";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);

  const login = async (email, password) => {
    try {
      setError(null);
      const res = await axios.post("/user/login", { email, password });
      console.log(res);
      if (res.data.status) {
      setUser(res.data.user);
      // localStorage.setItem("token", res.data.token);
      localStorage.setItem("user", JSON.stringify(res.data.user));

     // 👇 এখানে toast show করো
      toast.success(res.data.message || "Login successful");
    } else {
      toast.error(res.data.message); // ❌ error message backend theke asbe
    }
    } catch (err) {
      setError(err.response?.data || { message: "Login Failed" });
    }
  };

  return (
    
    <AuthContext.Provider value={{ user, login, error}}>
      {children}
    </AuthContext.Provider>
    
  );
};

export const useAuth = () => useContext(AuthContext);
