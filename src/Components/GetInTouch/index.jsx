import React from 'react'
import Title from '../Title'
import btnIcon from '../../assets/images/btn-icon.png';
import { AiFillYoutube } from "react-icons/ai";
import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { AiOutlineTikTok } from "react-icons/ai";





const socialIcns = [
    {
        icon: <FaFacebookF />,
        link: "https://www.facebook.com/"
    },
    {
        icon: <FaXTwitter />,
        link: "https://www.twitter.com/"
    },
    {
        icon: <AiFillYoutube />,
        link: "https://www.youyube.com/"
    },
    {
        icon: <FaInstagram />,
        link: "https://www.instagram.com/",
    },
    {
        icon: <AiOutlineTikTok />,
        link: "https://www.tiktok.com/",

    },
];

const GetInTouch = () => {
  return (
    <>
    <section className='get-in-touch mx-4'>
        <div className="wrapper  rounded-3xl mb-12 padding px-0 grid md:grid-cols-2 gap-y-16 gap-x-10">
            <div className="text-content text-white flex flex-col justify-between">
            {/* <div><Title subheading='get in touch' heading='We are always ready to help you and answer your questions' /></div> */}
            <div className='title'>
                <div className="subheading subheading-white">get in touch</div>
                <h2 className='heading-white'>We are always ready to help you and answer your questions</h2>
            </div>
            <div className='contacts'>
                <div className='mb-8'>
                <h6>Email</h6>
                <a href="mailto:help@inexa.co.za">help@inexa.co.za</a>
                </div>
                <div>
                <h6>Social network</h6>
                <ul className='flex gap-4'>
                    {
                        socialIcns.map((item,index)=>(<li key={index} className=' bg-white text-blackColor rounded-full p-1' ><a className='text-2xl' href={item.link} target='_blank'>{item.icon}</a></li>))
                    }
                </ul>
                </div>
            </div>
            </div>
            <div className='contact-form bg-white rounded-3xl text-bgColor p-5 lg:p-10'>
                <h4 className='text-2xl'>Get in Touch</h4>
                <p>Define your goals and identify areas where we can add value to your business</p>
                <form className='flex flex-col gap-y-9 mt-10' action="">
                    <div><input className='input-field' type="text" placeholder='Full name *' required /></div>
                    <div><input className='input-field' type="email" placeholder='Email *' required /></div>
                    <div><input className='input-field' type="number" placeholder='Mobile phone *' required /></div>
                    <div><input className='input-field' type="number" placeholder='Whatsapp Call *' required /></div>
                    <div>
                        <textarea className='input-field resize-none' name="message" id="message" rows={5} placeholder='Message *'></textarea>
                    </div>
                    <div className='relative'>
                        <input className='btn-secondary w-[200px]  ps-6 pe-1' type="submit" value="Send a message" />
                        <img className='absolute top-1/2 transform -translate-y-1/2 left-5' src={btnIcon} alt="button icon" />
                    </div>
                </form>
            </div>
        </div>
    </section>
    </>
  )
}

export default GetInTouch
