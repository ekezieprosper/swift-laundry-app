import React, { useEffect, useState } from 'react';
import "./DashBoad.css";
import { RiDeleteBin6Line } from 'react-icons/ri';
import axios from 'axios';

const DashBoard = () => {
  const [orders, setOrders] = useState([]);
  const [filterType, setFilterType] = useState('total');
  const [isLoading, setIsLoading] = useState(false);
  const [totalOrdersCount, setTotalOrdersCount] = useState(0); // State to store total orders count

  useEffect(() => {
    const fetchOrders = async () => {
      setIsLoading(true);
      try {
        const token = localStorage.getItem("userToken");
        const response = await axios.get("https://swift-laundry.vercel.app/get-all-orders", {
          headers: {
            'Authorization': `Bearer ${token}`
          }
        });
        if (response.data && response.data.data) {
          setOrders(response.data.data);
          setTotalOrdersCount(response.data.data.length); // Set total orders count
        } else {
          console.log("Response data is not in the expected format:", response.data);
        }
      } catch (error) {
        console.log("Error fetching user orders:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchOrders();
  }, []);

  const handleFilterChange = (filter) => {
    setFilterType(filter);
  };

  const filteredOrders = orders.filter(order => {
    if (filterType === 'total') {
      return true;
    } else if (filterType === 'pending') {
      return order.status === 'pending';
    } else if (filterType === 'completed') {
      return order.status === 'completed';
    }
    return false;
  });

  return (
    <div className='mainDashboardDivs'>
      <article className='taskNumberDiv'>
        <section className='cardNumbers1' onClick={() => handleFilterChange('total')}>
          <p>TOTAL ORDERS</p>
          <h1>{totalOrdersCount}</h1> {/* Display total orders count */}
        </section>

        <section className='cardNumbers2' onClick={() => handleFilterChange('pending')}>
          <p>PENDING ORDERS</p>
          <h1>29</h1>
        </section>

        <section className='cardNumbers3' onClick={() => handleFilterChange('completed')}>
          <p>COMPLETED ORDERS</p>
          <h1>20</h1>
        </section>
      </article>

      <article className='itemOrderDiv'>
      <div className='companyDiv'>
        <p>COMPANY</p>
        <p>DATE</p>
        <p>STATUS</p>
      </div>
    
      <div className='companyDiv2'>
        {isLoading ? (
          <p>Loading...</p>
        ) : (
          filteredOrders.length === 0 ? (
            <p>No order completed yet</p>
          ) : (
            filteredOrders.map(order => (
              <section className='orderItems' key={order._id}>
                <img src={order.shop?.profileImage} alt="" className='commmImage'/>
                <p>{order.shop?.businessName}</p>
                <p>{order.phoneNumber}</p>
                <p>{order.date}</p>
                <p>{order.status}</p>
                <p><RiDeleteBin6Line style={{ width: "30px", height: "20px" }} /></p>
              </section>
            ))
          )
        )}
      </div>
    </article>
    
    </div>
  );
};

export default DashBoard;
