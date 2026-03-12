import React, { useState, useEffect } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import axios from '../../api/axiosInstance';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import ErrorIcon from '@mui/icons-material/Error';
import CircularProgress from '@mui/material/CircularProgress';
import Layout from '../../Components/Layout';
import "../../Components/Logs/SignInn2/signIn2.css";

function VerifyEmail() {
  const [searchParams] = useSearchParams();
  const [verificationStatus, setVerificationStatus] = useState('loading'); // loading, success, error
  const [message, setMessage] = useState('');

  const token = searchParams.get('token');

  useEffect(() => {
    const verifyEmail = async () => {
      if (!token) {
        setVerificationStatus('error');
        setMessage('No verification token provided. Please request a new verification link.');
        return;
      }

      try {
        const response = await axios.post('/auth/verify-email', { token });
        
        if (response.data.status) {
          setVerificationStatus('success');
          setMessage(response.data.message || 'Your email has been verified successfully!');
        } else {
          setVerificationStatus('error');
          setMessage(response.data.message || 'Email verification failed. Please try again.');
        }
      } catch (error) {
        console.error('Verification error:', error);
        setVerificationStatus('error');
        setMessage(error.response?.data?.message || 'Email verification failed. The link may be invalid or expired.');
      }
    };

    verifyEmail();
  }, [token]);

  return (
    <Layout>
      <section className="verify-email top-gap min-h-[60vh] flex items-center justify-center py-12">
        <div className="wrapper padding w-full flex justify-center">
          <div className="sign-in rounded-[20px] p-8 w-full max-w-[450px]">
            {verificationStatus === 'loading' ? (
              <div className="text-center">
                <div className="mb-6">
                  <CircularProgress sx={{ color: '#3322FF' }} size={64} />
                </div>
                <h4 className="text-2xl xs:text-3xl font-semibold leading-10 text-white mb-5">
                  Verifying Your Email
                </h4>
                <p className="text-gray-300 leading-[30px]">
                  Please wait while we verify your email address...
                </p>
              </div>
            ) : verificationStatus === 'success' ? (
              <div className="text-center">
                <div className="mb-6">
                  <CheckCircleIcon sx={{ fontSize: 64, color: '#4ade80' }} />
                </div>
                <h4 className="text-2xl xs:text-3xl font-semibold leading-10 text-white mb-5">
                  Email Verified!
                </h4>
                <p className="text-gray-300 mb-6 leading-[30px]">
                  {message}
                </p>
                <p className="text-gray-300 mb-6 leading-[30px]">
                  You can now log in to your account.
                </p>
                <Link 
                  to="/" 
                  className="btn-blue inline-block px-8 py-3 w-full"
                >
                  Go to Home & Log In
                </Link>
              </div>
            ) : (
              <div className="text-center">
                <div className="mb-6">
                  <ErrorIcon sx={{ fontSize: 64, color: '#f87171' }} />
                </div>
                <h4 className="text-2xl xs:text-3xl font-semibold leading-10 text-white mb-5">
                  Verification Failed
                </h4>
                <p className="text-gray-300 mb-6 leading-[30px]">
                  {message}
                </p>
                <Link 
                  to="/" 
                  className="btn-blue inline-block px-8 py-3 w-full"
                >
                  Go to Home
                </Link>
              </div>
            )}
          </div>
        </div>
      </section>
    </Layout>
  );
}

export default VerifyEmail;
