import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { toast } from "react-toastify";
import { setAuthToken } from "./api/api";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [errors, setError] = useState(null);
  const [token, setToken] = useState(localStorage.getItem("token" || null));

  useEffect(()=>{
   setAuthToken(token);
  }, [token]);

  // ✅ refresh-এর পর localStorage থেকে user লোড করো
  
  useEffect(()=>{
    const userstored = JSON.parse(localStorage.getItem("user"));
    if(userstored){
      setUser(userstored);
    }
  },[]);

  const login = async (email, password) => {
    try {
      setError(null);
      const res = await axios.post("/user/login", { email, password });
      console.log(res);
      if (res.data.status) {
      setUser(res.data.user);
      localStorage.setItem("token", res.data.token);
      
      localStorage.setItem("user", JSON.stringify(res.data.user));
      

     // 👇 এখানে toast show করো
      toast.success(res.data.message || "Login successful");
      navigate("/profile");
    } else {
      toast.error(res.data.message); // ❌ error message backend theke asbe
    }
    } catch (err) {
      console.log(err);
      if(err.response?.data?.errors){
        setError(err.response.data.errors);
      }
    }
  };

  return (
    
    <AuthContext.Provider value={{ user, login, errors, setUser}}>
      {children}
    </AuthContext.Provider>
    
  );
};

export const useAuth = () => useContext(AuthContext);
