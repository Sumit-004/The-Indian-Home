// // src/pages/AdminDashboard.jsx
// import React, { useEffect, useState } from 'react';
// import axios from 'axios';

// const AdminDashboard = () => {
//   const [orders, setOrders] = useState([]);

//   useEffect(() => {
//     const fetchOrders = async () => {
//       try {
//         const res = await axios.get('http://localhost:5000/api/orders/all');
//         setOrders(res.data);
//       } catch (err) {
//         console.error("Failed to fetch orders", err);
//       }
//     };

//     fetchOrders();
//   }, []);

//   return (
//     <div className="p-6">
//       <h1 className="text-2xl font-bold mb-4">Admin Dashboard - Orders</h1>
//       {orders.length === 0 ? (
//         <p>No orders found.</p>
//       ) : (
//         <div className="space-y-6">
//           {orders.map((order) => (
//             <div key={order._id} className="p-4 border rounded-lg shadow-md bg-white">
//               <h2 className="text-xl font-semibold">User: {order.userId?.name || 'N/A'} ({order.userId?.email})</h2>
//               <p className="text-sm text-gray-600">Order Date: {new Date(order.orderDate).toLocaleString()}</p>
//               <div className="mt-2">
//                 <h3 className="font-medium">Items:</h3>
//                 <ul className="list-disc list-inside">
//                   {order.items.map((item, index) => (
//                     <li key={index}>
//                       {item.name} - ₹{item.price} × {item.quantity}
//                     </li>
//                   ))}
//                 </ul>
//               </div>
//             </div>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// };

// export default AdminDashboard;
