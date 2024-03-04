import React from 'react'
import "./BusinessDashBoard.css"

const BusinessDashBoard = () => {
    return (
        <div className='BusinessmainDashboardDivs'>
            <article className='BusinesstaskNumberDiv'>
                <section className='BusinesscardNumbers1'>
                    <p>TOTAL ORDERS</p>
                    <h1>200</h1>

                </section>

                <section className='BusinesscardNumbers2'>
                    <p>PENDING ORDERS</p>
                    <h1>19</h1>

                </section>

                <section className='BusinesscardNumbers3'>
                    <p>COMPLETED ORDERS</p>
                    <h1>90</h1>

                </section>
            </article>

            <article className='BusinessitemOrderDiv'>
                <div className='BusinesscompanyDiv'>
                    <p>NAME</p>
                    <p>ID</p>
                    <p>DATE</p>
                    <p>STATUS</p>
                </div>

                <div className='BusinesscompanyDiv2'>

                    <section className='BusinessorderOtems'>
                        <p>Olawale Ibrahim</p>
                        <p>1736647848848MGFD</p>
                        <p>29/02/2024</p>
                        <p>pending</p>
                        <p>x</p>
                    </section>
                    <section className='BusinessorderOtems'>
                        <p>Tobe David</p>
                        <p>1736647848848MGFD</p>
                        <p>29/02/2024</p>
                        <p>pending</p>
                        <p>x</p>
                    </section>
                    <section className='BusinessorderOtems'>
                        <p>Grace Babafemi</p>
                        <p>1736647848848MGFD</p>
                        <p>29/02/2024</p>
                        <p>pending</p>
                        <p>x</p>
                    </section>
                    <section className='BusinessorderOtems'>
                        <p>Cleaneat Laundry</p>
                        <p>1736647848848MGFD</p>
                        <p>29/02/2024</p>
                        <p>pending</p>
                        <p>x</p>
                    </section>
                    <section className='BusinessorderOtems'>
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

export default BusinessDashBoard
