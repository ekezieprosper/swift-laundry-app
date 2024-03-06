import { useState } from 'react'
import "./LocationModal.css"
import axios from 'axios'
import { useNavigate } from 'react-router-dom/dist/umd/react-router-dom.development'

const LocationModal = () => {
    const [address, setAddress] = useState("")
const navigate = useNavigate()

    const updateUserInfo = (e) => {
                setAddress(address)
        const token = localStorage.getItem('userToken')
        e.preventDefault()
        axios.put('https://swift-laundry.onrender.com/update-User',{address},
            {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            })
            .then(function (res) {
                console.log(res)
navigate('/order')
            })
            .catch(function (err) {
                console.log(err)
            })
            console.log(address)

    }
    console.log(address)
    return (
        <div className="LocationModalpeofileMai">
            <div className='LocationModalpeofileMainDiv'>

                <article className="addressMain">Add Address to Continue With Your Laundry</article>


                <article className="inputMain">
                    <input type="address" placeholder="Input address" value={address} onChange={(e)=>setAddress(e.target.value)}  />

                    <button onClick={updateUserInfo}>Save</button>
                </article>


            </div>
        </div>
    )
}

export default LocationModal
