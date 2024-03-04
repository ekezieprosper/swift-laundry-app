import React, { useState } from 'react'
import "./DashBoad.css"
import { RiDeleteBin6Line } from 'react-icons/ri'

const DashBoard = () => {


  return (
    <div className='mainDashboardDivs'>
      <article className='taskNumberDiv'>
        <section className='cardNumbers1'>
          <p>TOTAL ORDERS</p>
          <h1>20</h1>

        </section>

        <section className='cardNumbers2'>
          <p>PENDING ORDERS</p>
          <h1>29</h1>

        </section>

        <section className='cardNumbers3'>
          <p>COMPLETED ORDERS</p>
          <h1>20</h1>

        </section>
      </article>

      <article className='itemOrderDiv'>
        <div className='companyDiv'>
          <p>COMPANY</p>
          <p>ID</p>
          <p>DATE</p>
          <p>STATUS</p>
        </div>

        <div className='companyDiv2'>

          <section className='orderOtems'>
            <p>Cleaneat Laundry</p>
            <p>1736647848848MGFD</p>
            <p>29/02/2024</p>
            <p>pending</p>
            <p><RiDeleteBin6Line style={{width:"30px", height:"20px"}}/></p>
          </section>
          <section className='orderOtems'>
            <p>Cleaneat Laundry</p>
            <p>1736647848848MGFD</p>
            <p>29/02/2024</p>
            <p>pending</p>
            <p><RiDeleteBin6Line style={{width:"30px", height:"20px"}}/></p>
          </section>
          <section className='orderOtems'>
            <p>Cleaneat Laundry</p>
            <p>1736647848848MGFD</p>
            <p>29/02/2024</p>
            <p>pending</p>
            <p><RiDeleteBin6Line style={{width:"30px", height:"20px"}}/></p>
          </section>
          <section className='orderOtems'>
            <p>Cleaneat Laundry</p>
            <p>1736647848848MGFD</p>
            <p>29/02/2024</p>
            <p>pending</p>
            <p><RiDeleteBin6Line style={{width:"30px", height:"20px"}}/></p>
          </section>
          <section className='orderOtems'>
            <p>Cleaneat Laundry</p>
            <p>1736647848848MGFD</p>
            <p>29/02/2024</p>
            <p>pending</p>
            <p><RiDeleteBin6Line style={{width:"30px", height:"20px"}}/></p>
          </section>
          <section className='orderOtems'>
            <p>Cleaneat Laundry</p>
            <p>1736647848848MGFD</p>
            <p>29/02/2024</p>
            <p>pending</p>
            <p><RiDeleteBin6Line style={{width:"30px", height:"20px"}}/></p>
          </section>
          <section className='orderOtems'>
            <p>Cleaneat Laundry</p>
            <p>1736647848848MGFD</p>
            <p>29/02/2024</p>
            <p>pending</p>
            <p><RiDeleteBin6Line style={{width:"30px", height:"20px"}}/></p>
          </section>
          <section className='orderOtems'>
            <p>Cleaneat Laundry</p>
            <p>1736647848848MGFD</p>
            <p>29/02/2024</p>
            <p>pending</p>
            <p><RiDeleteBin6Line style={{width:"30px", height:"20px"}}/></p>
          </section>
          <section className='orderOtems'>
            <p>Cleaneat Laundry</p>
            <p>1736647848848MGFD</p>
            <p>29/02/2024</p>
            <p>pending</p>
            <p><RiDeleteBin6Line style={{width:"30px", height:"20px"}}/></p>
          </section>
          <section className='orderOtems'>
            <p>Cleaneat Laundry</p>
            <p>1736647848848MGFD</p>
            <p>29/02/2024</p>
            <p>pending</p>
            <p><RiDeleteBin6Line style={{width:"30px", height:"20px"}}/></p>
          </section>
          <section className='orderOtems'>
            <p>Cleaneat Laundry</p>
            <p>1736647848848MGFD</p>
            <p>29/02/2024</p>
            <p>pending</p>
            <p><RiDeleteBin6Line style={{width:"30px", height:"20px"}}/></p>
          </section>
          <section className='orderOtems'>
            <p>Cleaneat Laundry</p>
            <p>1736647848848MGFD</p>
            <p>29/02/2024</p>
            <p>pending</p>
            <p><RiDeleteBin6Line style={{width:"30px", height:"20px"}}/></p>
          </section>
          <section className='orderOtems'>
            <p>Cleaneat Laundry</p>
            <p>1736647848848MGFD</p>
            <p>29/02/2024</p>
            <p>pending</p>
            <p><RiDeleteBin6Line style={{width:"30px", height:"20px"}}/></p>
          </section>
          <section className='orderOtems'>
            <p>Cleaneat Laundry</p>
            <p>1736647848848MGFD</p>
            <p>29/02/2024</p>
            <p>pending</p>
            <p><RiDeleteBin6Line style={{width:"30px", height:"20px"}}/></p>
          </section>

        </div>
      </article>

    </div>
  )
}

export default DashBoard
