import React from 'react'
import axios from 'axios'
import { useState, useEffect } from "react"

import "./OrderDetail.css"
// import { useParams } from 'react-router-dom/dist/umd/react-router-dom.development'
import { Link, useParams } from 'react-router-dom'
import { IoMdArrowRoundBack } from 'react-icons/io'
import { useNavigate } from 'react-router-dom/dist/umd/react-router-dom.development'

const OrderDetail = () => {
    const navigate =useNavigate()
    const [detail, setDetail] = useState()

    const { id } = useParams()
    console.log(id)

    const [shopDetail, setShopDetail] = useState([])
    useEffect(() => {
        const token = localStorage.getItem("userToken")
        const fetchData = async () => {
            try {
                // const response = await axios.get(`https://swift-laundry.onrender.com/get-One-Shop/${id}`, {
                const response = await axios.get(`https://swift-laundry.vercel.app/get-One-Shop/${id}`, {
                    headers: {
                        'Authorization': `Bearer ${token}`
                    }
                })
                setDetail(response.data.data);
                console.log("data", response.data.data);
                // console.log(shopDetail.data.data)
                // setShop(response.data.data)
            } catch (error) {
                console.log(error.data);
            }
        }
        fetchData()
    }, ["token"])

    console.log(detail)
const requestWashButton = ()=>{
    // setShowWash(!showWash)
    navigate(`/washPage/:${id}`)
}
    return (
        <main className="orderDetails">
            <div className='doLaundryMainDivsa' >
                <article className='imageBordersa'>
                    <img src={detail?.profileImage} alt="" />
                </article>

                <article className='writeWrapsa'>
                    <Link to={"/order"} className="caAbsolutea">

                    <IoMdArrowRoundBack />
                    </Link>

                    <p>{detail?.businessName}</p>
                    {/* <p style={{ color: "red", fontWeight: "400", fontSize: "12px" }}>7km A</p> */}
                    <p style={{ fontWeight: "400", fontSize: "16px" }}>{detail?.address}</p>
                    <p style={{ fontWeight: "400", fontSize: "16px" }}>{detail?.phoneNumber}</p>

                </article>

                <section className='MainBTNDiva'>
                    <button className='requestButtona' onClick={requestWashButton}>Request wash</button>
                    <Link to={"/subscribe"} className='subscriptionButtona'>Subscribe</Link>
                </section>


            </div>
        </main>
    )
}

export default OrderDetail
