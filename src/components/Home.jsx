import React from 'react'
import vg from '../assets/2.webp'
import { AiFillGoogleCircle, AiFillAmazonCircle, AiFillYoutube, AiFillInstagram} from 'react-icons/ai'

const Home = () => {
  return (
    <>
        <div className='home' id='home'>
            <main>
                <h1>TechEZ.</h1>
                <p>Turning your problems into solutions.</p>
            </main>
        </div>

        <div className="home2">
            <img src={vg} alt="Graphics" />
            <div>
                <p>
                    We are your one and only solution to the tech problems you face
                    every day. We are leading tech company whose aim is to increase the
                    problem solving ability in children.
                </p>
            </div>
        </div>

        <div className="home3" id='about'>
            <div>
                <h1>Who we are?</h1>
                <p>Welcome to TechEZ, where we're dedicated to simplifying the world of technology for students. 
                    Navigating the digital landscape can be challenging, but we're here to provide expert guidance, comprehensive 
                    resources, and a supportive community to help you conquer your tech-related questions and enhance your academic 
                    journey. Whether you need help troubleshooting issues or staying up-to-date with the latest tech trends, 
                    TechEZ is your trusted partner in student tech success.</p>
            </div>
        </div>

        <div className="home4" id='brands'>
            <div>
                <h1>Brands</h1>
                <article>
                    <div style={{animationDelay: "0.3s"}}>
                        <AiFillGoogleCircle /> 
                        <p>Google</p>
                    </div>

                    <div style={{animationDelay: "0.5s"}}>
                        <AiFillAmazonCircle /> 
                        <p>Amazon</p>
                    </div>

                    <div style={{animationDelay: "0.7s"}}>
                        <AiFillYoutube /> 
                        <p>Youtube</p>
                    </div>

                    <div style={{animationDelay: "0.9s"}}>
                        <AiFillInstagram /> 
                        <p>Instagram</p>
                    </div>
                </article>
            </div>
        </div>
    </>
  )
}

export default Home