import React from 'react'

const VerifyEmail = () => {
  return (
    <>
    <div className='verify-email'>
        <div className="verify-email-content border-2 max-w-[640px] p-7 rounded-[12px]">
          <div className="image flex justify-center mb-7">
            <img className='w-[150px]' src="images/inexa_innovative.svg" alt="image" />
          </div>
          <div className="verify-email-text border border-[#d0d0d0] rounded-[12px] p-5">
            <p className='pb-[35px]'><span className='text-[24px] font-medium'>Hello</span> <br />
              <span className='font-[20px]'>Please click the button below to verify your email address:</span></p>
            <div className='text-center'>
              <button className='btn-smpl btn-white-transparent w-[362px] mx-auto mb-[45px]'>Verify your email</button>
            </div>
            <p className='text-center mb-[167px]'>You can also copy and paste this link in your web browser: <a className='underline' href="#"> link</a></p>
            <p className='text-center'>To ensure that you receive future emails from us, please add  inexa  to your emails contacts.</p>
          </div>
          <p className='mt-[15px] text-xs text-center'>Need help? Contact Support – direct the learner to our contact us form.</p>
        </div>
      </div>
    </>
  )
}

export default VerifyEmail