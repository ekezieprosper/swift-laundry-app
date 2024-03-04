import React, { useState } from 'react'
import "./DoLaundryModal.css"
import WashModal from './WashModal'

const DoLaundryModal = () => {

    const [showWash, setShowWash] = useState(false)

    return (
        <div className='doLaundryMainDivs'>
            <article className='imageBorders'></article>

            <article className='writeWraps'>
                <p>Cleaneat Laundry</p>
                <p style={{ color: "red", fontWeight: "400", fontSize: "12px" }}>7km Away</p>
                <p style={{ fontWeight: "400", fontSize: "16px" }}>23 Badagry Road Oke oja Lagos</p>
                <p style={{ fontWeight: "400", fontSize: "16px" }}>09060408723</p>

            </article>

            <section className='MainBTNDiv'>
                <button className='requestButton' onClick={()=> setShowWash(!showWash)}>Request wash</button>
                <button className='subscriptionButton'>Subscribe</button>
            </section>

            {showWash ? <WashModal /> : ""}

        </div>
    )
}

export default DoLaundryModal
