import React, { useEffect, useState } from "react";

const MyOrdersPage = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    setTimeout(() => {
      const mockOrders = [
        {
          _id: 1234,
          createdAt: new Date(),
          address: { city: "New Your", country: "USA" },
          ordersItems: [
            {
            name: "product 1",
            image: "https://picsum.photos/200/300?random=1",
          }
        ],
          totalPrice: 200,
          status: true,
        },
        {
          _id: 4563,
          createdAt: new Date(),
          address: { city: "New Your", country: "USA" },
          ordersItems: [
            {
            name: "product 2",
            image: "https://picsum.photos/200/300?random=2",
          }
        ],
          totalPrice: 300,
          status: true,
        },
      ];

      setOrders(mockOrders);
    }, 1000);
  }, []);

  return (
    <div className="max-w-7xl mx-auto p-4 sm:p-6">
      <h1 className="text-2l font-bold mb-6">My Orders</h1>
      <div className="relative shadow-md sm:rounded-lg md:overflow-hidden sm:overflow-x-scroll">
            <table className="min-w-full text-left text-gray-500">
                <thead className="bg-gray-200 text-xs uppercase text-gray-700">
                    <tr>
                        <th className="py-3 px-4 sm:px-3">Image</th>
                        <th className="py-3 px-4 sm:px-3">Order Id</th>
                        <th className="py-3 px-4 sm:px-3">Created</th>
                        <th className="py-3 px-4 sm:px-3">Shipping Address</th>
                        <th className="py-3 px-4 sm:px-3">Items</th>
                        <th className="py-3 px-4 sm:px-3">Price</th>
                        <th className="py-3 px-4 sm:px-3">Status</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        orders.length > 0 ? (
                            orders.map((order) => (
                                <tr key={order._id} className="border-b hover:border-gray-100">
                                    <td className="py-3 px-2 sm:px-4">
                                        <img className="w-12 h-12 rounded" src={order.ordersItems[0].image} alt="" />
                                    </td>
                                    <td className="px-2 py-3 font-medium sm:px-4">
                                        #{order._id}
                                    </td>
                                    <td className="px-2 py-3 sm:px-4">
                                        {
                                            new Date(order.createdAt).toLocaleDateString()
                                        }
                                         {" "}
                                        {
                                            new Date(order.createdAt).toLocaleTimeString()
                                        }
                                    </td>
                                    <td className="px-2 py-3 sm:px-4">
                                        {
                                            order.address.city 
                                        },{" "}
                                        {
                                            order.address.country
                                        }
                                    </td>
                                    <td className="px-2 py-3 sm:px-4">
                                        1
                                    </td>
                                    <td className="px-2 py-3 sm:px-4">
                                        ${
                                            order.totalPrice
                                        }
                                    </td>
                                    <td className="px-2 py-3 sm:px-4">
                                        <span className="bg-sky-800 text-amber-100 px-2 py-1 tex-sm rounded">
                                            {order.status === true ? "Paid" : "Unpaid"}
                                        </span>
                                    </td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td 
                                colSpan={7}
                                className="px-4 py-3 text-[16px] uppercase text-right">You have no order</td>
                            </tr>
                        )
                    }
                </tbody>
            </table>
      </div>
    </div>
  );
};

export default MyOrdersPage;
