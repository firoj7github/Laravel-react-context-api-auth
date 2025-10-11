import React from 'react'
import { useNavigate } from 'react-router-dom';
import { motion } from "framer-motion";

function Profile() {
    const user = JSON.parse(localStorage.getItem("user"));
    const navigate = useNavigate();
    if(!user){
        navigate("/");
        return null;
    }
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 via-indigo-100 to-purple-100 flex items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 30 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="bg-white shadow-xl rounded-3xl w-full max-w-md p-8 text-center border border-gray-100"
      >
        <div className="relative">
          <div className="absolute -top-10 left-1/2 -translate-x-1/2 bg-gradient-to-r from-blue-500 to-indigo-500 w-20 h-20 rounded-full p-1 shadow-lg">
            <img
              src={user.avatar || "https://via.placeholder.com/100"}
              alt="Profile"
              className="rounded-full w-full h-full border-4 border-white"
            />
          </div>
        </div>

        <h2 className="text-2xl font-bold text-gray-800 mt-14">
          {user.name || "Guest User"}
        </h2>
        <p className="text-gray-500">{user.email || "No Email"}</p>

        <div className="mt-6 bg-gray-50 p-4 rounded-xl shadow-inner text-left space-y-2">
          <p>
            <span className="font-semibold text-gray-700">📞 Phone:</span>{" "}
            {user.phone || "Not Provided"}
          </p>
          <p>
            <span className="font-semibold text-gray-700">🎯 Role:</span>{" "}
            {user.role || "User"}
          </p>
          <p>
            <span className="font-semibold text-gray-700">🕓 Joined:</span>{" "}
            {user.created_at
              ? new Date(user.created_at).toLocaleDateString()
              : "N/A"}
          </p>
        </div>

        <div className="flex justify-between items-center mt-8">
          <button
            onClick={() => navigate("/")}
            className="px-5 py-2.5 bg-gradient-to-r from-blue-500 to-indigo-500 text-white font-medium rounded-xl shadow hover:opacity-90 transition"
          >
            🏠 Home
          </button>
          <button
            // onClick={handleLogout}
            className="px-5 py-2.5 bg-gradient-to-r from-red-500 to-pink-500 text-white font-medium rounded-xl shadow hover:opacity-90 transition"
          >
            🚪 Logout
          </button>
        </div>
      </motion.div>
    </div>
  )
}

export default Profile
