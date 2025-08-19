import React, { useState } from 'react'
import Layout from '../../Components/Layout'
import { FaRegUser } from "react-icons/fa6";
import { MdOutlineMail } from "react-icons/md";
import { SlCalender } from "react-icons/sl";
import { Link } from 'react-router-dom';


function AccountSetting() {

    const [activeTab, setActiveTab] = useState (0);
    const handleActiveTab = (index) =>{
        setActiveTab(index);
    }
  return (
    <>
    <Layout>
        <section className='account-setting top-gap'>
            <div className="wrapper padding">
                <div className="account-setting-content">
                    <div className="account-setting-tabs flex flex-wrap md:flex-nowrap gap-x-5 gap-y-10">
                        <div className="tabs-heading w-full md:w-[20%]">
                        <ul className="tabs-heading-content capitalize flex flex-wrap md:flex-col gap-y-3 gap-x-5 ">
                            <li className={`flex items-center gap-2 cursor-pointer ${activeTab === 0 ? "text-primaryColor font-semibold" : ""}`} onClick={()=> handleActiveTab(0)}> <span><FaRegUser /></span> <span>account</span></li>
                            <li className={`flex items-center gap-2 cursor-pointer ${activeTab === 1 ? "text-primaryColor font-semibold" : ""}`} onClick={()=> handleActiveTab(1)}> <span><MdOutlineMail /></span> <span>communication  preferences</span></li>
                            <li className={`flex items-center gap-2 cursor-pointer ${activeTab === 2 ? "text-primaryColor font-semibold" : ""}`} onClick={()=> handleActiveTab(2)}> <span><SlCalender /></span> <span>calendar sync</span></li>
                        </ul>
                        </div>
                       
                        <div className="tabs-data w-full md:w-[80%]">
                            {
                                activeTab === 0 && (
                                    <div className="account p-9 shadow-[2.48px_2.48px_18.58px_0px_#A6ABBD80] rounded-lg">
                               <div className="account-content">
                                 <h5 className='capitalize mb-10'>account</h5>
                                 <form action="" className='account-details-form grid sm:grid-cols-2 gap-x-8 gap-y-4'>
                                    <div className="input-item">
                                      <label className='label' htmlFor="name">full name</label> <br />
                                      <input className='input' type="text" name="name" id="name" />
                                    </div>
                                    <div className="input-item">
                                      <label className='label' htmlFor="email">email address</label> <br />
                                      <input className='input' type="email" name="email" id="email" />
                                    </div>
                                    <div className="input-item">
                                    <label className='label cursor-default' htmlFor="timezone">timezone</label> <br />
                                        <select className='input capitalize' name="timezone" id="timezone">
                                            <option value="">time 1</option>
                                            <option value="">time 2</option>
                                            <option value="">time 3</option>
                                            <option value="">time 4</option>
                                        </select>
                                    </div>
                                    <div className="input-item">
                                    <label className='label' htmlFor="language">language</label> <br />
                                        <select className='input capitalize' name="language" id="language">
                                            <option value="">language 1</option>
                                            <option value="">language 2</option>
                                            <option value="">language 3</option>
                                            <option value="">language 4</option>
                                        </select>
                                    </div>
                                    <Link to="/" className='btn-white-transparent sm:w-max mt-3'>Save</Link>
                                 </form>
                                 <hr className='mt-10' />

                                <div className="more-settings text-textColor">
                                <div className="name-veri border-b py-10">
                                    <h6 className='text-lg capitalize text-textColor font-medium mb-1'>name verification</h6>
                                    <p>Verify your real name to make sure you’re able to receive a certificate when you complete a course or Specialization.</p>
                                    <Link to="/" className='btn-blue-transparent sm:w-max mt-6'>verify my name</Link>
                                 </div>
                                 <div className="two-factor border-b py-10">
                                    <h6 className='text-lg capitalize text-textColor font-medium mb-1'>Two Factor Authentication (BETA)</h6>
                                    <p>Two-Factor Authentication adds an additional layer of security to your Coursera account. Each time you log in to Coursera, you will be asked to enter a unique code that is only available on your mobile phone. This extra protection ensures that you are the only one who will have access to your Coursera account and courses.</p>
                                    <Link to="/" className='btn-blue-transparent sm:w-max mt-6'>Enable Two-Factor Authentication</Link>
                                 </div>
                                 <div className="connected-devices border-b py-10">
                                    <h6 className='text-lg capitalize text-textColor font-medium mb-1'>Connected devices</h6>
                                    <p>If your account has been logged into on multiple devices, you can log out from here.</p>
                                    <Link to="/" className='btn-blue-transparent sm:w-max mt-6'>log out from all devices</Link>
                                 </div>
                                 <div className="linked-fb border-b py-10">
                                    <h6 className='text-lg capitalize text-textColor font-medium mb-1'>linked accounts</h6>
                                    <p className='flex items-center gap-1 my-2'>
                                        <span><img className='w-5' src="/images/log-fb.webp" alt="image" /></span> <span className='capitalize font-medium'>facebook</span>
                                    </p>
                                    <p>Enable one-click login and receive more personalized course recommendations.</p>
                                    <div className="linked-btn flex flex-wrap gap-3 items-center  mt-3">
                                    <Link to="/" className='btn btn-linked'>Link my Facebook Account</Link>
                                    <span>Unlink your Google account to log in with Facebook.</span>
                                    </div>
                                 </div>
                                 <div className="linked-apl border-b py-10">
                                    <p className='flex items-center gap-1'>
                                        <span><img className='w-6' src="/images/log-apl-2.webp" alt="image" /></span> <span className='capitalize font-medium'>Apple</span>
                                    </p>
                                    <p>Enable one-click login and receive more personalized course recommendations.</p>
                                    <div className="linked-btn flex flex-wrap gap-3 items-center  mt-3">
                                    <Link to="/" className='btn btn-linked'>Link my Facebook Account</Link>
                                    <span>Unlink your Google account to log in with Facebook.</span>
                                    </div>
                                 </div>
                                 <div className="linked-ggl border-b py-10">
                                    <p className='flex items-center gap-1'>
                                        <span><img className='w-5' src="/images/log-gogl.webp" alt="image" /></span> <span className='capitalize font-medium'>google</span>
                                    </p>
                                    <p>Your Coursera account is currently linked to your Google account.</p>
                                    <div className="linked-btn flex flex-wrap gap-3 items-center  mt-3">
                                    <Link to="/" className='btn-blue-transparent'>Link my Google Account</Link>
                                    {/* <span>Unlink your Google account to log in with Facebook.</span> */}
                                    </div>
                                 </div>
                                 <div className="delete-acnt border-b py-10">
                                    <p className='flex items-center gap-1 capitalize font-medium'> delete account </p>
                                    <p>If you delete your account, your personal information will be wiped from Coursera's servers, all of your course activity will be anonymized and any certificates earned will be deleted.</p>
                                    <Link to="/" className='btn-blue-transparent mt-5'>delete account</Link>
                                 </div>
                                 <div className="data-report border-b py-10">
                                    <p className='flex items-center gap-1 capitalize font-medium'> Learner Data Report </p>
                                    <p>Request a report of all learner data stored by Coursera about your account. This report will be sent to the e-mail address below.</p>
                                    <div className="report-data flex flex-wrap gap-4 py-5">
                                        <input className='input sm:w-3/6 placeholder:font-light bg-[#e7e7e7]' type="email" placeholder='hello123@gmail.com' />
                                        <input className='btn-blue-transparent' type="submit" value="send report" />
                                    </div>
                                    <p>To change email, please adjust the email settings at the top of this page.</p>
                                 </div>
                                </div>
                               </div>
                            </div>
                                )
                            }

                            {
                                activeTab === 1 && (
                                    <div className='communication-preference '>
                                <div className="communication-preference-content p-9 shadow-[2.48px_2.48px_18.58px_0px_#A6ABBD80] rounded-lg">
                                   <h5 className='capitalize mb-10'>Communication Preferences</h5>
                                   <div className="email-notifications text-textColor">
                                     <p className='font-semibold'>Email notifications</p>
                                     <p>You can select the type of email notifications you want to opt in and out of sent by Coursera.</p>
                                    <div className="input-item mt-4 mb-6 flex items-center gap-2">
                                      <input className='size-4' type="checkbox" name="" id="opt-out" />
                                      <label className='label mb-0' htmlFor="opt-out">Opt-out of all Coursera emails (Optional)</label>
                                    </div>
                                   </div>
                                   <div className="comm-inexa text-textColor">
                                    <p className='font-semibold mb-6'>Communication from Inexa</p>
                                    <ul>
                                       <li className="input-item mt-4 mb-6 flex items-center gap-2">
                                          <input className='size-4' type="checkbox" name="" id="weekly-course" />
                                          <label className='label mb-0' htmlFor="weekly-course">Weekly personalized course recommendations</label>
                                       </li>
                                       <li className="input-item mt-4 mb-6 flex items-center gap-2">
                                           <input className='size-4' type="checkbox" name="" id="weekly-notification" />
                                            <label className='label mb-0' htmlFor="weekly-notification">Weekly notifications about promotions, new courses and programs, and special events</label>
                                     </li>
                                     <li className="input-item mt-4 mb-6 flex items-center gap-2">
                                      <input className='size-4' type="checkbox" name="" id="online-info" />
                                      <label className='label mb-0' htmlFor="online-info">Information on online Master’s and Bachelor’s Degree programs</label>
                                     </li>
                                     <li className="input-item mt-4 mb-6 flex items-center gap-2">
                                      <input className='size-4' type="checkbox" name="" id="invitations" />
                                      <label className='label mb-0' htmlFor="invitations">urveys and invitations to help us improve Coursera content and your experience</label>
                                     </li>
                                  </ul>
                                  <hr  className='mt-9'/>
                                  <Link className='btn-white-transparent  mt-7'>save</Link>
                                   </div>
                                </div>
                            </div>
                                )
                            }

                            {
                                activeTab === 2 &&(
                                    <div className="celendar-sync">
                             <div className="calender-sync-content p-9 shadow-[2.48px_2.48px_18.58px_0px_#A6ABBD80] rounded-lg">
                                 <h5 className='capitalize mb-5'>celendar sync</h5>
                                 <p >Automatically sync all the deadlines and other related items from all active courses to your calendar.</p>
                                 <p className='font-semibold capitalize pt-5 pb-4'>calender sync</p>
                                 <div className="calender-btns flex flex-wrap items-center gap-3">
                                    <Link className='btn-white-transparent'>google calendar</Link>
                                    <Link className='btn-white-transparent'>apple calendar</Link>
                                    <Link className='btn-white-transparent'>other calendar</Link>
                                 </div>
                             </div>
                            </div>
                                )
                            }


                        </div>
                    </div>
                </div>
            </div>
        </section>
    </Layout>
    </>
  )
}

export default AccountSetting