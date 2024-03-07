import React, { useEffect, useState } from 'react'
import "./Order.css"
import DoLaundryModal from '../components/DoLaundryModal'
import WashModal from '../components/WashModal'
import axios from 'axios'
import LocationModal from '../components/LocationModal'
import { Link } from 'react-router-dom'


const CardDiv = ({ onClick }) => {
const holdid = (id) =>{
  localStorage.setItem("shopId",id)
  console.log(id)
}

  const [shopsCard, setShopsCard] = useState([])
  useEffect(() => {
    const token = localStorage.getItem("userToken")
    const fetchData = async () => {
      try {
        const response = await axios.get("https://swift-laundry.vercel.app/get-All-Shops", {
          headers: {
            'Authorization': `Bearer ${token}`
          }
        })
        console.log(response.data.data.data);
        // console.log(response)
        localStorage.setItem("lundaryshops", JSON.stringify(response.data.data))
        setShopsCard(response.data.data)
      } catch (error) {
        console.log(error.response.data?.error);

      }
    }
    fetchData()
  }, ["token"])
  const [showAddressInput, setShowAddressInput] = useState(false)

  const [userInfo, setUSerInfo] = useState({})
  const token = localStorage.getItem('userToken')
  // })
  const getUser = async () => {
    // const res = await axios.get(' https://swift-laundry.onrender.com/get-user', {
    const res = await axios.get(' https://swift-laundry.vercel.app/get-user', {

      headers: {
        'Authorization': `Bearer ${token}`
      }
    }
    )
    // console.log(res.data.data)
    setUSerInfo(res.data.data)
  }
  //  const userInfo = res.data.data
  useEffect(() => {
    getUser()
  }, [])

  return (
    <>
    {
      shopsCard.map((i)=>(
         <Link to={`/orderDetail/${i._id}`} className='cardItems' onClick={()=>{holdid(i._id), onClick}}>
        <article className='imageBorder'>
          <img src={i.profileImage} alt="" />
        </article>

        <article className='writeWrap'>
          <p>{i.businessName}</p>
          {/* <p style={{ color: "red", fontWeight: "400", fontSize: "12px" }}>7km Away</p> */}
          <p style={{ fontWeight: "400", fontSize: "14px" }}>{i.address}</p>
          <p style={{ fontWeight: "400", fontSize: "14px" }}>{i.phoneNumber}</p>
        </article>

      </Link>
      ))
    }
     
    </>
  )
}

const Order = () => {
  const [showDoLaundry, setShowDoLaundry] = useState(false)
  const [userInfo, setUSerInfo] = useState({})

  const toggleDolaundry = () => {
    setShowDoLaundry(!showDoLaundry)
  }



  const getUser = async () => {
    const token = localStorage.getItem("userToken")
    const res = await axios.get(' https://swift-laundry.onrender.com/get-user', {

      headers: {
        'Authorization': `Bearer ${token}`
      }
    }
    )
    // console.log(res.data?.data?.address)
    setUSerInfo(res.data.data.address)
  }
  //  const userInfo = res.data.data
  useEffect(() => {
    getUser()
  }, [])

  return (
    <div className='orderMainDiv'>
      <input type="text" placeholder='Search for shop' />

      <section className='doLaundryMainDiv'>
        <article className='doLaundryCardDiv'>
              <CardDiv onClick={toggleDolaundry} />
        </article>
      </section>

      {/* {showDoLaundry ? <DoLaundryModal showDoLaundry={showDoLaundry} setShowDoLaundry={setShowDoLaundry} /> : ""} */}

      {/* {
        userInfo == "" ?
          <LocationModal /> : !userInfo == "" ? null : null && !userInfo == "" ? false :false
      } */}
    </div>
  )
}

export default Order
