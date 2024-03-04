import React from 'react'
import "./ProfileModal.css"

const ProfileModal = () => {
    return (
        <div className='peofileMainDiv'>
            <article className='profileImaged'></article>

            <article className='profileTextWrapDiv'>
                <section className='name1'>
                    <p>First name:</p>
                    <p>David</p>
                    <p>edit</p>
                </section>
                <section className='name2'>
                    <p>Last name:</p>
                    <p>Tobe</p>
                    <p>edit</p>
                </section>
                <section className='name3'>
                    <p>Phone number:</p>
                    <p>09069408723</p>
                    <p>edit</p>
                </section>
                <section className='name4'>
                    <p>Address:</p>
                    <samp>37, imam street amukoko lagos</samp>
                    <p>edit</p>
                </section>
            </article>

            <button>Save</button>

        </div>
    )
}

export default ProfileModal
