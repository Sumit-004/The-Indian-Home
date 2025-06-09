import React, { useState } from 'react';

const Details = () => {
  const [form, setForm] = useState({
    name: '',
    phone: '',
    email: '',
    flat: '',
    area: '',
    city: '',
    state: '',
    pincode: ''
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Saved Address:', form);
    alert('Address saved successfully!');
    // You can also dispatch to Redux or call an API here
  };

  return (
    <div className="max-w-xl mx-auto bg-white shadow-lg rounded-xl p-6 mt-8">
      <h2 className="text-2xl font-semibold mb-4 text-center">Save Delivery Address</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={form.name}
            onChange={handleChange}
            className="border p-2 rounded w-full"
            required
          />
          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            value={form.phone}
            onChange={handleChange}
            className="border p-2 rounded w-full"
            required
          />
        </div>

        <input
          type="email"
          name="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
          className="border p-2 rounded w-full"
          required
        />

        <input
          type="text"
          name="flat"
          placeholder="Flat, House no., Building"
          value={form.flat}
          onChange={handleChange}
          className="border p-2 rounded w-full"
          required
        />

        <input
          type="text"
          name="area"
          placeholder="Area, Street, Sector"
          value={form.area}
          onChange={handleChange}
          className="border p-2 rounded w-full"
          required
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <input
            type="text"
            name="city"
            placeholder="City"
            value={form.city}
            onChange={handleChange}
            className="border p-2 rounded w-full"
            required
          />
          <input
            type="text"
            name="state"
            placeholder="State"
            value={form.state}
            onChange={handleChange}
            className="border p-2 rounded w-full"
            required
          />
        </div>

        <input
          type="text"
          name="pincode"
          placeholder="Pincode"
          value={form.pincode}
          onChange={handleChange}
          className="border p-2 rounded w-full"
          required
        />

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
        >
          Save Address
        </button>
      </form>
    </div>
  );
};

export default Details;
