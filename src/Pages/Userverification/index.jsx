import React, { useState } from 'react'
import Layout from '../../Components/Layout'
import { Link } from 'react-router-dom'
import CompleteAccount from '../../Components/Logs/CompleteAcount';
import VerifyEmail from '../../Components/Logs/VerifyEmail';
import SignInn2 from '../../Components/Logs/SignInn2';
import SignUp2 from '../../Components/Logs/SignUp2';
import ForgotPassword2 from '../../Components/Logs/ForgotPassword2';

const UserVerification = () => {
    // const [fname, setfName]= useState("");
    // const [lname, setlName]= useState("");
    // const [error,  setError] = useState(false);

    // const handleNameChange =(e)=>{
    //     const fname = e.target.value;
    //     setfName(fname);
    //     if(fname === ""){
    //         setError(true);
    //     } 
    // }


    const handleForm =(e)=>{

        e.preventDefault();
    };

  return (
    <>
    <Layout>
    <div className="user-verification top-gap">
        <div className="wrapper padding">
            <div className="user-verification-content">
                <h4 className='text-2xl capitalize'>verify your name</h4>
                <p>Enter your real name. This is the name that will appear on your certificates. We may contact you to verify your identity, so please make sure this matches the name on your government-issued ID.</p>
                <form action="" className='verification-form my-10' onSubmit={handleForm}>
                    <div className="input-items flex flex-wrap md:flex-nowrap gap-x-5 lg:gap-x-10 gap-y-5 ">
                      <div className="input-item w-full">
                        <label className='label' htmlFor="fname">first name</label> <br />
                        <input className='input' type="text" name="name" id="fname" />
                        <p className={`error `}>enter first name</p>
                      </div>
                      <div className="input-item w-full">
                        <label className='label' htmlFor="lname">last name</label> <br />
                        <input className='input' type="text" name="name" id="lname" />
                      </div>
                      <div className="input-item w-full">
                        <label className='label cursor-default' htmlFor="document">upload document</label> <br />
                        <input className='input file:bg-primaryColor file:border-transparent file:rounded-full file:text-white file:me-5  file:py-[5px] file:px-4 
                          file:cursor-pointer' type="file" name="" id="" />
                      </div>
                    </div>
                    <div className="confirmation flex items-start gap-3 my-10">
                        <input className='input-checkbox' type="checkbox" />
                        <span>By checking this box, I acknowledge that I provided my legal name and am 13 years of age or older. I also certify that I am not a specially designated national or otherwise subject to export controls preventing Coursera from issuing me a certificate.</span>
                    </div>
                    <div className="input-item  flex w-full justify-center md:justify-end">
                    <input className='btn-white-transparent opacity-60' type="submit" value="send" />
                    </div>
                </form>
            </div>
        </div>
    </div>

    {/* <CompleteAccount />
    <VerifyEmail /> */}

    <SignInn2 />
    <SignUp2 />

    <ForgotPassword2 />

    </Layout>
    </>
  )
}

export default UserVerification