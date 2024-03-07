import React, { useEffect, useState } from 'react'
import "./SubscribeModal.css"

const SubscribeModal = () => {

    const [shopsCards, setShopsCards] = useState([])
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
                setShopsCards(response.data.data)
            } catch (error) {
                console.log(error.response.data?.error);

            }
        }
        fetchData()
    }, ["token"])

    return (
        <div className='subscribereMainDivs'>
            <input type="text" placeholder='search for shops' />

            <article className='subscribeShopsDiv'>
                <section className='subscribedsItems'>
                    <div className='subscribedsItemsCard'>
                        <article className='subscribeImageMainDiv'></article>

                        {
                            shopsCards.map((e) => (
                                <article className='writeSubscribe'>
                                    <p>{e.businessName}</p>
                                    <p style={{ color: "red", fontWeight: "400", fontSize: "12px" }}>7km Away</p>
                                    <p style={{ fontWeight: "400", fontSize: "14px" }}>23 Badagry Road Oke oja Lagos</p>
                                </article>
                            ))
                        }

                    </div>

                </section>
            </article>

        </div>
    )
}

export default SubscribeModal
