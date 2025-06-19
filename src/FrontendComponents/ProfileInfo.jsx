import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { FaUserEdit, FaSignOutAlt } from 'react-icons/fa';

const ProfileInfo = () => {
  const userId = localStorage.getItem("userId");
    const token = localStorage.getItem("token");

  const [user, setUser] = useState({
    name: '',
    email: '',
    phone: '',
    address: ''
  });

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await axios.get(`http://localhost:5000/api/users/${userId}`,{
          headers: {
            Authorization: `Bearer ${token}` // only if using JWT token auth
          }
      });
        setUser(res.data);
      } catch (err) {
        console.error("Error loading user data:", err);
      }
    };

    if (userId) {
      fetchUser();
    }
  }, [userId]);

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSave = async () => {
    // Save user data logic
    // console.log('Saved:', user);
    try {
      const res = await axios.put(`http://localhost:5000/api/users/update/${userId}`, user);
      alert("Profile updated successfully!");
      setUser(res.data); // updated user info
    } catch (err) {
      alert("Failed to update profile.");
      console.error(err);
    }
  };

  const handleLogout = () => {
    // Logout logic
    localStorage.clear();
    console.log('User logged out');
  };

  return (
    <div className="max-w-2xl mx-auto p-6 mt-10 bg-white rounded-2xl shadow-md">
      <div className="flex flex-col items-center">
        <img
          src="https://i.pravatar.cc/150?img=3"
          alt="avatar"
          className="w-24 h-24 rounded-full shadow-lg mb-4"
        />
        <h2 className="text-2xl font-semibold">{user.name}</h2>
        <p className="text-gray-500">{user.email}</p>
      </div>

      <form className="mt-6 space-y-4">
        <div>
          <label className="block text-sm font-medium">Full Name</label>
          <input
            type="text"
            name="name"
            value={user.name}
            onChange={handleChange}
            className="w-full mt-1 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium">Email Address</label>
          <input
            type="email"
            name="email"
            value={user.email}
            onChange={handleChange}
            className="w-full mt-1 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium">Phone Number</label>
          <input
            type="tel"
            name="phone"
            value={user.phone}
            onChange={handleChange}
            className="w-full mt-1 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium">Address</label>
          <input
            type="text"
            name="address"
            value={user.address}
            onChange={handleChange}
            className="w-full mt-1 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="flex justify-between mt-6">
          <button
            type="button"
            onClick={handleSave}
            className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 flex items-center gap-2"
          >
            <FaUserEdit /> Save Changes
          </button>
          <button
            type="button"
            onClick={handleLogout}
            className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 flex items-center gap-2"
          >
            <FaSignOutAlt /> Logout
          </button>
        </div>
      </form>
    </div>
  );
};

export default ProfileInfo;
