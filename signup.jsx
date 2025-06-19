import { useState } from "react";
import axios from "axios";

export default function SignUp() {
  const [form, setForm] = useState({ name: "", email: "", password: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/api/auth/signup", form);
      alert("Sign up successful");
    } catch (err) {
      alert(err.response.data.error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4 p-6 max-w-sm mx-auto">
      <input name="name" placeholder="Name" onChange={handleChange} className="border p-2" />
      <input name="email" placeholder="Email" onChange={handleChange} className="border p-2" />
      <input name="password" type="password" placeholder="Password" onChange={handleChange} className="border p-2" />
      <button type="submit" className="bg-blue-500 text-white p-2">Sign Up</button>
    </form>
  );
}
