import React from 'react'
import "./BusinessOrder.css"

const BusinessOrder = () => {
  return (
    <div className='BusinessmainDashboardDivsq'>
      <article className='BusinesstaskNumberDivq'>
        <section className='BusinesscardNumbers1q'>
          <p>DIRECT USER</p>
          <h1>200</h1>

        </section>

        <section className='BusinesscardNumbers2q'>
          <p>SUBSCRIPTION USER</p>
          <h1>19</h1>

        </section>

        <section className='BusinesscardNumbers3q'>
          <p>UNSUBSCRIPTION USER</p>
          <h1>90</h1>

        </section>
      </article>

      <article className='BusinessitemOrderDivq'>
        <div className='BusinesscompanyDivq'>
          <p>NAME</p>
          <p>ID</p>
          <p>DATE</p>
          <p>STATUS</p>
        </div>

        <div className='BusinesscompanyDiv2q'>

          <section className='BusinessorderOtemsq'>
            <p>Olawale Ibrahim</p>
            <p>1736647848848MGFD</p>
            <p>29/02/2024</p>
            <p>pending</p>
            <p>x</p>
          </section>
          <section className='BusinessorderOtemsq'>
            <p>Tobe David</p>
            <p>1736647848848MGFD</p>
            <p>29/02/2024</p>
            <p>pending</p>
            <p>x</p>
          </section>
          <section className='BusinessorderOtemsq'>
            <p>Grace Babafemi</p>
            <p>1736647848848MGFD</p>
            <p>29/02/2024</p>
            <p>pending</p>
            <p>x</p>
          </section>
          <section className='BusinessorderOtemsq'>
            <p>Cleaneat Laundry</p>
            <p>1736647848848MGFD</p>
            <p>29/02/2024</p>
            <p>pending</p>
            <p>x</p>
          </section>
          <section className='BusinessorderOtemsq'>
            <p>Cleaneat Laundry</p>
            <p>1736647848848MGFD</p>
            <p>29/02/2024</p>
            <p>pending</p>
            <p>x</p>
          </section>


        </div>
      </article>

    </div>
  )
}

export default BusinessOrder
