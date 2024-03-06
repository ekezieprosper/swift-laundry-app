import React, { useEffect, useState } from 'react';
import "./WashPage.css";
import axios from 'axios';

const WashPage = () => {
    const [shortTrouser, setClothName] = useState([]);
    const [quantity, setQuantity] = useState([]);
    const [allOrder, setAllOrder] = useState([]);
    const [allUserOrder, setAllUserOrder] = useState([]);
    useEffect(() => {
        const token = localStorage.getItem("userToken");
        const fetchData = async () => {
            try {
                const response = await axios.get("https://swift-laundry.vercel.app/get-all-items", {
                    headers: {
                        'Authorization': `Bearer ${token}`
                    }
                });
                setClothName(response.data.data);
            } catch (error) {
                console.log(error.data);
            }
        }
        const fetchData1 = async () => {
            try {
                const response = await axios.get("https://swift-laundry.vercel.app/get-all-order", {
                    headers: {
                        'Authorization': `Bearer ${token}`
                    }
                });
                setAllOrder(response.data.data);
            } catch (error) {
                console.log(error.data);
            }
        }
        fetchData();
        fetchData1()
    }, [allOrder]);

    const handleOrder = async (qq, index, id) => {
        console.log({ quantity: qq, index, id });
        try {
            const token = localStorage.getItem("userToken");
            const response = await axios.post("https://swift-laundry.vercel.app/create-order", {
                quantity: qq,
                itemId: id
            }, {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            });
            console.log("Order created:", response.data);
            // Handle success or further operations here
        } catch (error) {
            console.log("Error creating order:", error);
            // Handle error here
        }
    };

    const handleQuantityChange = (value, index, id) => {
        const updatedQuantity = [...quantity];
        updatedQuantity[index] = value;
        setQuantity(updatedQuantity);
    };

    useEffect(()=>{
        const handlePost = async (qq, index, id) => {
            console.log({ quantity: qq, index, id });
            try {
                const token = localStorage.getItem("userToken");
                const response = await axios.post("https://swift-laundry.vercel.app/create-user-order", {
                    quantity: qq,
                    itemId: id
                }, {
                    headers: {
                        'Authorization': `Bearer ${token}`
                    }
                });
                setAllUserOrder(response.data)
                console.log("Order created:", response.data);
                // Handle success or further operations here
            } catch (error) {
                console.log("Error creating order:", error);
                // Handle error here
            }
        };
        handlePost()
    },["userToken"])


    return (
        <div className='washMain'>
            <article className='washMainBorder'>
                <section className='clothDiv'>
                    {shortTrouser.map((e, i) => (
                        <div className='trouserDiv' key={i}>
                            <article className='trouser'>
                                <img src={e.imagee} alt="" />
                                <p style={{ fontWeight: "700" }}>{e.item}</p>
                                <p>N{e.Price}</p>
                            </article>
                            <input
                                type="number"
                                min="0"
                                placeholder="Qty"
                                value={quantity[i] || ''}
                                onChange={(e) => handleQuantityChange(e.target.value, i, e._id)}
                            />
                            <button className='BTNTrouser' onClick={() => handleOrder(quantity[i], i, e._id)}>Add</button>
                        </div>
                    ))}
                </section>


                <section className='inputMainDiv'>
                    <div className='inp1'>
                        <input type="text" placeholder='Enter your pick up address' className='pickupAdd' />
                        <input type="datetime-local" className='dateTimess' />
                    </div>

                    <div className='inp2'>
                        <input type="text" placeholder='Enter your delivery address' className='pickupAdd2' />
                        <input type="datetime-local" className='dateTimess2' />
                    </div>

                    <div className='totalDiv'>
                        <p>Total: N1000</p>
                        <p></p>
                        <article className='viewButton'>Pay</article>
                    </div>
                </section>
            </article>

            <section className='secondMainDiv'>
                <article className='addShowDiv'>
                    {
                        allOrder.map((e) => (
                            <div className='addShowCard'>
                                <article className='ImgADD'>
                                    <img src={e.item?.imagee} alt="" />
                                </article>
                                <article className='write-up-Add'>
                                    <p>{e.item?.item}</p>
                                    <p>Qty: {e.quantity}</p>
                                    <p>Amount: {e.item?.Price}</p>
                                    <p style={{ fontWeight: "bold" }}>Sub-Total: {e.total}</p>
                                </article>
                            </div>
                        ))
                    }
                </article>
            </section>
        </div>
    )
}

export default WashPage;
