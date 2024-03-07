// import React, { useEffect, useState } from 'react'
// import "./DashBoad.css"
// import { RiDeleteBin6Line } from 'react-icons/ri'
// import axios from 'axios'

// const DashBoard = () => {
//   const [allOrders, setAllOrders] = useState([])
//   const [totalOrder, setTotalOrders] = useState(true)
//   const [pendingOrder, setPendingOrder] = useState(false)
//   const [completeOrders, setCompleteOrders] = useState(false)
//   console.log(allOrders);

//   useEffect(() => {

//     const token = localStorage.getItem("userToken");

//     const fetchAllOrder = async () => {
//       try {
//         const response = await axios.get("https://swift-laundry.vercel.app/get-all-orders", {
//           headers: {
//             'Authorization': "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NWU5MjQ3MGUyNTQyMmUyNzZmMTVkYjEiLCJlbWFpbCI6IndhbGVAZ21haWwuY29tIiwiaWF0IjoxNzA5Nzc4NTM3LCJleHAiOjE3MDk4NjQ5Mzd9.5OBS8b9cWo4qBRsVgw9VJCVeT8n7bRkCJ90-r8OoGEU"
//           }
//         });
//         if (response.data && response.data.data) {
//           // console.log(response.data.data.length);
//           setAllOrders(response.data.data);
//           // Update state or perform any further operations here
//         } else {
//           console.log("Response data is not in the expected format:", response.data);
//         }
//       } catch (error) {
//         console.log("Error fetching user order:", error);
//       }
//     }
//     fetchAllOrder()
//   }, [])

//   const handleTotalOrders = () => {
//     setAllOrders(true)
//     setTotalOrders(false)
//     setPendingOrder(false)
//   }

//   const handlePendingOrders = () => {
//     setAllOrders(false)
//     setTotalOrders(false)
//     setPendingOrder(true)
//   }

//   const handleCompletedOrders = () => {
//     setAllOrders(false)
//     setTotalOrders(true)
//     setPendingOrder(false)
//   }

//   return (
//     <div className='mainDashboardDivs'>
//       <article className='taskNumberDiv'>
//         <section className='cardNumbers1'onClick={handleTotalOrders}>
//           <p >TOTAL ORDERS</p>
//           <h1>44</h1>

//         </section>

//         <section className='cardNumbers2' onClick={handlePendingOrders}>
//           <p>PENDING ORDERS</p>
//           <h1>29</h1>

//         </section>

//         <section className='cardNumbers3' onClick={handleCompletedOrders}>
//           <p>COMPLETED ORDERS</p>
//           <h1>20</h1>

//         </section>
//       </article>

//       <article className='itemOrderDiv'>
//         <div className='companyDiv'>
//           <p>COMPANY</p>
//           <p>DATE</p>
//           <p>STATUS</p>
//         </div>

//         <div className='companyDiv2'>

//           {
//             // allOrders.map((e) =>  totalOrder? e.status=="pending"
//            allOrders.map((e)=>  totalOrder? (
//               <section className='orderOtems' key={e._id}>
//                 <img src={e.shop?.profileImage} alt="" className='commmImage'/>
//               <p>{e.shop?.businessName}</p>
//                 <p>{e.phoneNumber}</p>
//                 <p>{e.date}</p>
//                 <p>{e.status}</p>
//                 <p><RiDeleteBin6Line style={{ width: "30px", height: "20px" }} /></p>
//               </section>
//             ):pendingOrder && e.status=="pending"? (
//               <section className='orderOtems' key={e._id}>
//                 <img src={e.shop?.profileImage} alt="" className='commmImage'/>
//               <p>{e.shop?.businessName}</p>
//                 <p>{e.phoneNumber}</p>
//                 <p>{e.date}</p>
//                 <p>{e.status}</p>
//                 <p><RiDeleteBin6Line style={{ width: "30px", height: "20px" }} /></p>
//               </section>
//             ):completeOrders && e.status=="completed"? (
//               <section className='orderOtems' key={e._id}>
//                 <img src={e.shop?.profileImage} alt="" className='commmImage'/>
//               <p>{e.shop?.businessName}</p>
//                 <p>{e.phoneNumber}</p>
//                 <p>{e.date}</p>
//                 <p>{e.status}</p>
//                 <p><RiDeleteBin6Line style={{ width: "30px", height: "20px" }} /></p>
//               </section>
//             ):null)
//           }

//         </div>
//       </article>

//     </div>
//   )
// }

// export default DashBoard





import React, { useEffect, useState } from 'react';
import "./DashBoad.css";
import { RiDeleteBin6Line } from 'react-icons/ri';
import axios from 'axios';

const DashBoard = () => {
  const [orders, setOrders] = useState([]);
  const [filterType, setFilterType] = useState('total');
  const [isLoading, setIsLoading] = useState(false);

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
          <h1>44</h1>
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
          )}
        </div>
      </article>
    </div>
  );
};

export default DashBoard;
