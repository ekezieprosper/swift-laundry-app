import React, { useState } from 'react'
import "./ShopPage.css"
import Footer from '../footerComponent/Footer'

const CardComponent = () => {
  const [shopsPage, setShopsPage] = useState("")


  // const handleShops = (e) => {
  //   const yourShops = e.target.value
  //   setShopsPage(yourShops)
  // }
  const url = "https://swift-laundry.vercel.app/get-my-shops"
  const data = { shops: shopsPage }

  const handleShops = async () => {
    try {
      const response = await axios.get(url);
      console.log("clicked");
      console.log("r", response);
    } catch {

    }
  }


  return (
    <>
      <div className='cardsForShopping'>
        <div className='pickUpLogos'>
          <img src="./wash1.png" alt="" className='wash1' />
        </div>
        <h2>Cleaneat Laundry</h2>
        <p>161,muyibi,olodi Apapa.</p>
        <h5>34km Away</h5>
        <button className='BTN1' onClick={handleShops}>View</button>
      </div>
    </>
  )
}

const ShopPage = () => {
  return (
    <div className='shopMainDiv'>
      <div className='shopsContainer'>
        <div className='searchBarContainer'>
          <div className='searchBarContainerWrapper'>
            <input type="text" placeholder='search for shops' className='shopsInput' />
            <img src="./search bar.png" alt="" className='searchIcon' />
          </div>
          <h1>Laundry Shops Around You</h1>
        </div>
        <div className='shopsWrapperContainer'>
          <CardComponent />
          <CardComponent />
          <CardComponent />
          <CardComponent />
          <CardComponent />
          <CardComponent />
          <CardComponent />
          <CardComponent />
          <CardComponent />
        </div>
      </div>

    </div>
  )
}

export default ShopPage
