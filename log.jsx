import { useState } from "react";
import axios from "axios";

export default function Login() {
  const [form, setForm] = useState({ email: "", password: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:5000/api/auth/login", form);
      alert("Login successful");
      localStorage.setItem("token", res.data.token);
    } catch (err) {
      alert(err.response.data.error);
    }
  };


  return (
    <form onSubmit={handleLogin} className="flex flex-col gap-4 p-6 max-w-sm mx-auto">
      <input name="email" placeholder="Email" onChange={handleChange} className="border p-2" />
      <input name="password" type="password" placeholder="Password" onChange={handleChange} className="border p-2" />
      <button type="submit" className="bg-green-500 text-white p-2">Login</button>
    </form>
  );
}
