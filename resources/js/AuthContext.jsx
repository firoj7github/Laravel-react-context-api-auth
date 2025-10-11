import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { toast } from "react-toastify";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [errors, setError] = useState(null);

  // ✅ refresh-এর পর localStorage থেকে user লোড করো
  
  useEffect(()=>{
      const userStored = JSON.parse(localStorage.getItem("user"));
      if(userStored){
        setUser(userStored);
      }
  },[])

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
    
    <AuthContext.Provider value={{ user, login, errors}}>
      {children}
    </AuthContext.Provider>
    
  );
};

export const useAuth = () => useContext(AuthContext);
