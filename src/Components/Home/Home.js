import React from 'react';
import Header from '../Header/Header';

import AwesomeSlider from 'react-awesome-slider';
import withAutoplay from 'react-awesome-slider/dist/autoplay';
import 'react-awesome-slider/dist/styles.css';
import 'react-awesome-slider/dist/captioned.css';

import slide_image_1 from '../../Assets/Sliders/19362653-900x450.jpg'
import slide_image_2 from '../../Assets/Sliders/1_yYYqabUM_1rLxB07PgSaIg.png'
import slide_image_3 from '../../Assets/Sliders/business-website-design.png'
import slide_image_4 from '../../Assets/Sliders/course_1662791772.jpg'
import slide_image_5 from '../../Assets/Sliders/web3-websites_1.3.jpg'
import Footer from '../../Footer/Footer';


const AutoplaySlider = withAutoplay(AwesomeSlider);

const Home = () => {

    return (
        <div>
            <Header></Header>

            <div className='container mx-auto'>
                <div>
                    <h2 className=' text-justify text-base font-thin font-serif mt-14'>Welcome to Intellect X, your gateway to mastering web development and beyond! Dive into the world of coding with our comprehensive courses designed to take you from beginner to expert. At Intellect X, we offer a wide range of courses covering essential web development technologies such as HTML, CSS, and Tailwind CSS, along with advanced stacks like MERN (MongoDB, Express.js, React.js, Node.js), Laravel, PHP, and much more. Whether you're just starting your coding journey or looking to expand your skills, our platform provides the tools and resources you need to succeed.
                        Unlock the power of web development with Intellect X. Join us today and embark on a learning experience that will enhance your skills and open up new opportunities in the world of technology. Start building your future, one line of code at a time!</h2>
                </div>
                <div className='mt-12 grid grid-cols-4 gap-8'>
                    <div className=' col-span-2'>
                        <AutoplaySlider
                            play={true}
                            cancelOnInteraction={false} // should stop playing on user interaction
                            interval={4000}
                        >
                            <div data-src={slide_image_1} />
                            <div data-src={slide_image_2} />
                            <div data-src={slide_image_3} />
                            <div data-src={slide_image_4} />
                            <div data-src={slide_image_5} />
                        </AutoplaySlider>
                    </div>
                    <div className='col-span-2 text-justify'>
                        <h2 className=' text-xl font-semibold font-serif leading-loose'><span className='text-4xl text-emerald-800'>"Don't worry</span> <br /> if it doesn't work right. <br /> <span className='text-4xl text-emerald-800'>If everything did,</span> <br /> you'd be out of a job." <br /><span className=' font-thin text-2xl text-emerald-800'>- Mosher’s Law of Software Engineering"</span></h2>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Home;