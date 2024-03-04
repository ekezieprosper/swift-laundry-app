import React from 'react'
import "./AboutPage.css"
import Footer from '../footerComponent/Footer'

const AboutPage = () => {
  return (
    <>
    <div className='aboutbody'>
      <div className='aboutmainbody'>
        <div className='aboutusimage'>
          <div className='aboutusimagee'>
          <div className='abouttext'>
          <h1>ABOUT US</h1>
          <p>Connecting You to Cleanliness.</p>
          </div>
          </div>
        </div>
        <div className='whowearediv'>
          <div className='whoweareimage'>
            <div className='lefttext'>
              <div className='mission'>
                <h1>Our Mission</h1>
                <p>At Swift Laundry, our mission is to revolutionize the way people handle their laundry needs. We strive to provide a seamless and convenient platform that connects users with trusted laundry businesses, making the process of getting clean clothes effortless and stress-free. Our goal is to save our users valuable time and energy by offering reliable and efficient laundry services at their fingertips.
</p>
              </div>
              <div className='vision'>
                <h1>Our Vision</h1>
                <p>We envision a world where laundry day is no longer a chore but a moment of convenience and relaxation. By leveraging technology and innovation, we aim to create a future where everyone can easily access top-notch laundry services with just a few taps on their smartphones. Our vision is to become the go-to platform for all laundry-related needs, empowering both users 
                  and laundry businesses to thrive in a digitally connected world.</p>
              </div>
            </div>
            <div className='rightimage'>
              <img src="./public/person1.png" alt="" />
            </div>
          </div>
        </div>
        <div className='imagechooseus'>
          <div className='whychooseusimage'>
            <img src="./public/laundry.jpg" alt="" />
            <div className='outerimage'>
              <img src="./public/blackman.jpg" alt="" />
            </div>
          </div>
          <div className='whychooseustext'>
            <div className='ourstory'>
              <h1>Our Story</h1>
            </div>
            <div className='firststoryline'>
              <div className='firststory1'>
                <p>The journey of Swift Laundry began with a simple idea to simplify the laundry experience for busy individuals and families.Frustrated by the time-consuming and often tedious task of doing laundry, our founders set out to develop a solution that would streamline the process and bring convenience to people's lives.

</p>
              </div>
              <div className='firststory2'>
                <p>Driven by a passion for innovation and a commitment to customer satisfaction, our team worked tirelessly to create an intuitive and user-friendly app that would connect users to a network of trusted laundry service providers. Through countless hours of research, development, and collaboration, Swift Laundry was born.
</p>
              </div>
            </div>
            <div className='secondstoryline'>
              <div className='secondstory1'>
                <p>Since our inception,we have been dedicated to delivering unparalleled convenience and quality to our users. With a focus on reliability, efficiency, and customer care, we have quickly become a trusted partner for both users seeking convenient laundry solutions and businesses looking to expand their reach in the digital marketplace.
</p>
              </div>
              <div className='secondstory2'>
                <p>As we continue to grow and evolve, our commitment to innovation and excellence remains steadfast. We are proud to be at the forefront of transforming the laundry industry and look forward to continuing our journey of connecting you to cleanliness, one load at a time.</p>
              </div>
            </div>
          </div>

        </div>
        <div className='ourteamdiv'>
          <div className='meetourteam'>
            <h1>MEET OUR TEAM</h1>
            <p>We're The Best Team</p>
          </div>
          <div className='meetourteamimage'>
            <div className='tobe'>
              <img src="./public/tobe.jpg" alt="" />
              <p>Tobe David (Team Lead)</p>
              <h2>Back-End</h2>
            </div>
            <div className='ibrahim'>
              <img src="./public/ibrahim.jpg" alt="" />
              <p>Ibrahim Olawale</p>
              <h2>Front-End</h2>
            </div>
            <div className='grace'>
              <img src="./public/grace.jpg" alt="" />
              <p>Grace Babafemi</p>
              <h2>Front-End</h2>
            </div>
            <div className='ekene'>
              <img src="./public/ekene.jpg" alt="" />
              <p>Ekene Daniel</p>
              <h2>Front-End</h2>
            </div>
            <div className='prosper'>
              <img src="./public/prosper.jpg" alt="" />
              <p>Prosper Chukwunenye</p>
              <h2>Back-End</h2>

            </div>
            

          </div>


        </div>
        <Footer/>
      </div>

      
    </div>
    
    </>
  )
}

export default AboutPage
