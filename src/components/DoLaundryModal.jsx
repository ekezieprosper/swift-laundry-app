import React, { useState, useEffect } from 'react'
import "./DoLaundryModal.css"
import WashModal from './WashModal'
import { useParams } from 'react-router-dom'

const DoLaundryModal = ({ setShowDoLaundry }) => {

    // const shopData = JSON.parse(localStorage.getItem("lundaryshops"))
            // const id2 = shopData[0]._id
            // console.log("id",id2)

    const [oneShop, setShop] = useState([])
    const [cardDetails, setCardDetails] = useState()
    console.log("card",cardDetails?._id)

    const { id } = useParams()

    // const [shopsCard, setShopsCard] = useState([])
    useEffect(() => {
        const token = localStorage.getItem("userToken")
        const fetchData = async () => {
            const shopData = JSON.parse(localStorage.getItem("lundaryshops"))
            const id = shopData[0]._id
            try {
                const response = await axios.get(`https://swift-laundry.onrender.com/get-One-Shop/${id}`, {
                    headers: {
                        'Authorization': `Bearer ${token}`
                    }
                })
                console.log(response.data.data);
                console.log(response)
                setShop(response.data.data)
            } catch (error) {
                console.log(error.response.data?.data?.error);

            }
        }
        fetchData()
    }, ["token"])

    const [showWash, setShowWash] = useState(false)
    // const [showSub, setShowSub] = useContext(Context)

    return (
        <main className="doLaundBlur">
            {
         oneShop.map((e,id)=>(
            <div className='doLaundryMainDivs' onClick={()=>setCardDetails(e)} key={id}>
                <article className='imageBorders'>
                    <img src={e.profileImage} alt="" />
                </article>

                <article className='writeWraps'>
                    <samp className="caAbsolute" onClick={() => setShowDoLaundry(false)}>x</samp>
                    <p>Cleaneat Laundry</p>
                    <p style={{ color: "red", fontWeight: "400", fontSize: "12px" }}>7km Away</p>
                    <p style={{ fontWeight: "400", fontSize: "16px" }}>{e.address}</p>
                    <p style={{ fontWeight: "400", fontSize: "16px" }}>09060408723</p>

                </article>

                <section className='MainBTNDiv'>
                    <button className='requestButton' onClick={() => setShowWash(!showWash)}>Request wash</button>
                    <button className='subscriptionButton'>Subscribe</button>
                </section>


            </div>
            ))
            }

            {showWash ? <WashModal /> : ""}


        </main>
    )
}

export default DoLaundryModal
