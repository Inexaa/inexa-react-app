import React from 'react'
import { Link } from "react-router-dom";

const SentEmail = ({email}) => {
  return (
    <>
      <div className="sent-email fixed top-1/2 -translate-y-1/2">
        <div className="sent-email-content bg-white p-10 max-w-[713px] rounded-[12px] text-center">
          <h3 className='text-3xl mb-4'>We Sent You an Email</h3>
          <p className='text-lg max-w-[384px] mx-auto text-headingColor leading-normal mb-4'>You must verify your account to continue. <br /> An email has been sent to <br /> <Link to="https://www.gmail.com"><strong>{email}</strong></Link> </p>
          <h4 className='text-[24px] max-w-[500px] mx-auto mb-4'>Click the link in the email to finish creating your account.</h4>
          <p className="text-headingColor mb-4">Dont see an email from us? Check your junk folder.</p>
          <Link className='tet-[#5f5f5f] text-lg inline-block mb-4'>Click here to resend email.</Link>
          <p className='text-lg'>Need help? Contact Support (will send an email to
            <a className=' underline inli' href="mailto:mailto:help@inexa.co.za"> help@inexa.co.za)</a>
            </p>
            
        </div>
      </div>
    </>
  )
}

export default SentEmail