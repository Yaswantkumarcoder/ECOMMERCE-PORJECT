import React from 'react';
import Title from '../components/Title';
import { assets } from '../assets/assets';
import Newsletter from '../components/Newsletter';
const About = () => {
    return (
        <div>
     <div className='text-2xl text-center pt-8 border-t'>
            <Title text1={'ABOUT'} text2={'US'}/>
      </div>
           <div className='my-10 flex flex-col md:flex-row gap-16'>
            <img className='w-full md:max-w-[450px]' src={assets.about_img}alt=""/>
            <div className='flex flex-col justify-center gap-6 md:max-w-2/4 text-gray-600'>
                <p>Forever was born out of a passiong for innovation a desire ot revolutionize the way people shop online, Our journey began with a simple idea:to provide a platform where custormer can easily discover,explore,and purchase a wide range of products from the comfort of their homes</p>
                <p>Since inception ,we've wroked tirelessly to curate a diverse selection of high-quality products that cater to every taste and preference.</p>
                <b className='text-gray-800'>Our Mission</b>
                <p>Our mission at Forever is to empower custormers with choice,convenience,and confidence.we're dedicated to providing a seamless shopping experiences that exceeds experiences,from browsing and ordering to delivery and beyond</p>
            </div>
           </div>
        <div className='text-xl py-4'>
              <Title text1={'WHY'} text2={'CHOOSE US'}/>
        </div>

        <div className='flex flex-col md:flex-row text-sm mb-20'>
                <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
                      <b>Quality Assurance</b>
                      <p className='text-gray-600'>we meticulously select and Vet each product to ensure it meets our stringent quality standards.</p>
                </div>

            <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
                      <b>Convenience</b>
                      <p className='text-gray-600'>With  our user-friendly interface and hassle-free ordering process,shopping has never been easier</p>
                </div>

                <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
                      <b>Exceptional customer service</b>
                      <p className='text-gray-600'>Our team of dedicated professsionals is here ot asists you the way,ensuring your satisfaction is our top priority</p>
                </div>
        </div>

         <Newsletter/>

        </div>
    );
};

export default About;