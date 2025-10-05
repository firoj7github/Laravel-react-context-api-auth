import { useState } from "react";
import { useAuth } from "../AuthContext";



export default function Login() {
  const { login, error } = useAuth(); // Context API থেকে নিলে
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  
  const handleSubmit = (e)=>{
     e.preventDefault();
     login(email, password);
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100">
  <div className="w-full max-w-md rounded-lg bg-white p-8 shadow-lg">
    <h2 className="mb-6 text-center text-2xl font-bold text-gray-800">
      Login
    </h2>

    {error && (
      <div className="mb-4 rounded bg-red-100 p-2 text-sm text-red-600">
        {error.message || "Invalid credentials"}
      </div>
    )}

    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="mb-1 block text-sm font-medium text-gray-700">
          Email
        </label>
        <input
        
          type="email"
          value={email}
          onChange={(e)=> setEmail(e.target.value)}
          required
          className="w-full rounded border border-gray-300 px-3 py-2 text-sm focus:border-blue-500 focus:outline-none focus:ring focus:ring-blue-200"
          placeholder="Enter your email"
        />
      </div>

      <div>
        <label className="mb-1 block text-sm font-medium text-gray-700">
          Password
        </label>
        <input
          type="password"
          value={password}
          onChange={(e)=> setPassword(e.target.value)}
          required
          className="w-full rounded border border-gray-300 px-3 py-2 text-sm focus:border-blue-500 focus:outline-none focus:ring focus:ring-blue-200"
          placeholder="Enter your password"
        />
      </div>

      <button
        type="submit"
        className="w-full rounded bg-blue-600 py-2 text-white transition hover:bg-blue-700"
      >
        Login
      </button>
    </form>

    <p className="mt-4 text-center text-sm text-gray-600">
      Don’t have an account?{" "}
      <a href="/register" className="text-blue-600 hover:underline">
        Register
      </a>
    </p>
  </div>
</div>

  );
}
