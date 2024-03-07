import React, { useEffect, useState } from 'react';
import "./WashPage.css";
import axios from 'axios';
import { useParams } from 'react-router-dom';

const WashPage = () => {
    const [shortTrouser, setClothName] = useState([]);
    const [quantity, setQuantity] = useState([]);
    const [grandTotal, setGranTotal] = useState("0");
    const [allUserOrder, setAllUserOrder] = useState([]);

    const [item, setCollectCart] = useState([])
    const [pickupAddress, setPickUpAddress] = useState("")
    const [deliveryAddress, setDeliveryAddress] = useState("")
    const [pickupDateTime, setPickDate] = useState("")
    const [deliveryDateTime, setDeliveryDate] = useState("")

    console.log(pickupAddress)
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
                console.log(error);
            }
        }

        const fetchData1 = async () => {
            try {
                const response = await axios.get("https://swift-laundry.vercel.app/get-cart-items", {
                    headers: {
                        'Authorization': `Bearer ${token}`
                    }
                });
                setCollectCart(response.data.data);
                console.log(response.data)
                setGranTotal(response.data.grandTotal);
            } catch (error) {
                console.log(error);
            }
        }

        fetchData1();
        fetchData();
    }, [item]);

    const handleOrder = async (qq, index, id) => {
        console.log({ quantity: qq, index, id });
        try {
            const token = localStorage.getItem("userToken");
            const response = await axios.post("https://swift-laundry.vercel.app/add-to-cart", {
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

    // const handlePost = async (qq, index, id) => {
    //     console.log({ quantity: qq, index, id });
    //     try {
    //         const token = localStorage.getItem("userToken");
    //         const response = await axios.post(`https://swift-laundry.vercel.app/create-user-order/${id}`, {
    //             quantity: qq,
    //             itemId: id
    //         }, {
    //             headers: {
    //                 'Authorization': `Bearer ${token}`
    //             }
    //         });
    //         setAllUserOrder(response.data);
    //         console.log("Order created:", response.data);
    //         // Handle success or further operations here
    //     } catch (error) {
    //         console.log("Error creating order:", error);
    //         // Handle error here
    //     }
    // };
    const { id } = useParams()
    const newId = id.substring(1)
    const data = { pickupDateTime, pickupAddress, deliveryAddress, deliveryDateTime, item, grandTotal }

    const token = localStorage.getItem("userToken");

    const fetchUserOrder = async () => {
        try {
            const response = await axios.post(`https://swift-laundry.vercel.app/create-user-order/${newId}`, data, {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            });
            if (response.data && response.data.data) {
                console.log(response.data.data);
                // Update state or perform any further operations here
            } else {
                console.log("Response data is not in the expected format:", response.data);
            }
        } catch (error) {
            console.log("Error fetching user order:", error);
        }
    }


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
                        <input type="text" placeholder='Enter your pick up address' className='pickupAdd' onChange={(e) => setPickUpAddress(e.target.value)} />
                        <input type="datetime-local" className='dateTimess' onChange={(e) => setPickDate(e.target.value)} />
                    </div>

                    <div className='inp2'>
                        <input type="text" placeholder='Enter your delivery address' className='pickupAdd2' onChange={(e) => setDeliveryAddress(e.target.value)} />
                        <input type="datetime-local" className='dateTimess2' onChange={(e) => setDeliveryDate(e.target.value)} />
                    </div>

                    <div className='totalDiv'>
                        <p>Total: {grandTotal}</p>
                        <article className='viewButton' onClick={fetchUserOrder}>Pay</article>
                    </div>
                </section>
            </article>

            <section className='secondMainDiv'>
                <article className='addShowDiv'>
                    {item && item.map((order, index) => (
                        <div className='addShowCard' key={index}>
                            <article className='ImgADD'>
                                <img src={order.item?.imagee} alt="" />
                            </article>
                            <article className='write-up-Add'>
                                <p>{order.item?.item}</p>
                                <p>Qty: {order.quantity}</p>
                                <p>Amount: {order.item.Price}</p>
                                <p style={{ fontWeight: "bold" }}>Sub-Total: {order.total}</p>
                            </article>
                        </div>
                    ))}
                </article>
            </section>
        </div>
    )
}

export default WashPage;
