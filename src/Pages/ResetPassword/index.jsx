import React, { useState, useEffect } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import axios from '../../api/axiosInstance';
import { FiEye, FiEyeOff } from 'react-icons/fi';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import ErrorIcon from '@mui/icons-material/Error';
import WarningIcon from '@mui/icons-material/Warning';
import Layout from '../../Components/Layout';
import "../../Components/Logs/SignInn2/signIn2.css";

const ResetPasswordSchema = Yup.object().shape({
  password: Yup.string()
    .required('Password is required')
    .min(10, 'Password must be at least 10 characters')
    .matches(/[A-Z]/, 'Password must contain at least one uppercase letter')
    .matches(/[a-z]/, 'Password must contain at least one lowercase letter')
    .matches(/[0-9]/, 'Password must contain at least one number')
    .test('not-only-whitespace', 'Password cannot be only whitespace', 
      value => value && value.trim().length > 0),
  confirmPassword: Yup.string()
    .required('Please confirm your password')
    .oneOf([Yup.ref('password'), null], 'Passwords must match'),
});

function ResetPassword() {
  const [searchParams] = useSearchParams();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [tokenValid, setTokenValid] = useState(true);
  const [resetSuccess, setResetSuccess] = useState(false);
  const [tokenError, setTokenError] = useState('');

  const token = searchParams.get('token');

  useEffect(() => {
    if (!token) {
      setTokenValid(false);
      setTokenError('No reset token provided. Please request a new password reset link.');
    }
  }, [token]);

  const handleSubmit = async (values, { setSubmitting, setStatus }) => {
    setStatus({ error: null });
    
    try {
      const response = await axios.post('/auth/reset-password', {
        token: token,
        password: values.password.trim()
      });

      if (response.data.status) {
        setResetSuccess(true);
      } else {
        setStatus({ error: response.data.message || 'Failed to reset password' });
      }
    } catch (error) {
      console.error('Reset password error:', error);
      const errorMessage = error.response?.data?.message || 'Failed to reset password. Please try again.';
      
      if (error.response?.status === 400 && 
          (errorMessage.includes('expired') || errorMessage.includes('invalid') || errorMessage.includes('no longer valid'))) {
        setTokenValid(false);
        setTokenError(errorMessage);
      } else {
        setStatus({ error: errorMessage });
      }
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <Layout>
      <section className="reset-password top-gap min-h-[60vh] flex items-center justify-center py-12">
        <div className="wrapper padding w-full flex justify-center">
          <div className="sign-in rounded-[20px] p-8 w-full max-w-[450px]">
            {resetSuccess ? (
              <div className="text-center">
                <div className="mb-6">
                  <CheckCircleIcon sx={{ fontSize: 64, color: '#4ade80' }} />
                </div>
                <h4 className="text-2xl xs:text-3xl font-semibold leading-10 text-white mb-5">
                  Password Reset Successful!
                </h4>
                <p className="text-gray-300 mb-6 leading-[30px]">
                  Your password has been reset successfully. You can now log in with your new password.
                </p>
                <Link 
                  to="/" 
                  className="btn-blue inline-block px-8 py-3 w-full"
                >
                  Go to Home & Log In
                </Link>
              </div>
            ) : !tokenValid ? (
              <div className="text-center">
                <div className="mb-6">
                  <ErrorIcon sx={{ fontSize: 64, color: '#f87171' }} />
                </div>
                <h4 className="text-2xl xs:text-3xl font-semibold leading-10 text-white mb-5">
                  Invalid or Expired Link
                </h4>
                <p className="text-gray-300 mb-6 leading-[30px]">
                  {tokenError || 'This password reset link is invalid or has expired. Please request a new one.'}
                </p>
                <Link 
                  to="/" 
                  className="btn-blue inline-block px-8 py-3 w-full"
                >
                  Go to Home
                </Link>
              </div>
            ) : (
              <div className="reset-password-content">
                <h4 className="text-2xl xs:text-3xl font-semibold leading-10 text-white mb-5 text-center">
                  Reset Your Password
                </h4>
                <p className="max-w-[350px] mx-auto leading-[30px] text-gray-300 mb-7 text-center">
                  Enter your new password below.
                </p>

                <Formik
                  initialValues={{ password: '', confirmPassword: '' }}
                  validationSchema={ResetPasswordSchema}
                  onSubmit={handleSubmit}
                  validateOnBlur={true}
                  validateOnChange={true}
                >
                  {({ isSubmitting, errors, touched, status, values }) => (
                    <Form className="flex flex-col gap-4 sm:w-[329px] mx-auto">
                      <div className="input-item">
                        <label className="log-label-white" htmlFor="password">
                          New Password <span className="text-red-500">*</span>
                        </label>
                        <div className="relative">
                          <Field
                            id="password"
                            name="password"
                            type={showPassword ? 'text' : 'password'}
                            placeholder="Enter new password"
                            className={`log-input-item pr-10 ${errors.password && touched.password ? 'border-red-500' : ''}`}
                          />
                          <div
                            className="absolute text-white right-4 top-1/2 -translate-y-1/2 cursor-pointer"
                            onClick={() => setShowPassword(!showPassword)}
                          >
                            {showPassword ? <FiEyeOff size={20} /> : <FiEye size={20} />}
                          </div>
                        </div>
                        <ErrorMessage name="password" component="div" className="text-red-500 text-sm mt-1" />
                        
                        <div className="password-requirements mt-3 p-3 bg-[rgba(255,255,255,0.1)] rounded-lg">
                          <p className="text-white text-sm font-medium mb-2">Your Password Must Have:</p>
                          <div className="grid grid-cols-2 gap-2">
                            <div className="flex items-center gap-1">
                              {values.password.length >= 10 ? (
                                <CheckCircleIcon sx={{ color: '#4ade80', fontSize: 16 }} />
                              ) : (
                                <ErrorIcon sx={{ color: '#f87171', fontSize: 16 }} />
                              )}
                              <span className={`text-xs ${values.password.length >= 10 ? 'text-green-400' : 'text-red-400'}`}>
                                At least 10 characters
                              </span>
                            </div>
                            <div className="flex items-center gap-1">
                              {/[A-Z]/.test(values.password) ? (
                                <CheckCircleIcon sx={{ color: '#4ade80', fontSize: 16 }} />
                              ) : (
                                <ErrorIcon sx={{ color: '#f87171', fontSize: 16 }} />
                              )}
                              <span className={`text-xs ${/[A-Z]/.test(values.password) ? 'text-green-400' : 'text-red-400'}`}>
                                1 uppercase letter
                              </span>
                            </div>
                            <div className="flex items-center gap-1">
                              {/[a-z]/.test(values.password) ? (
                                <CheckCircleIcon sx={{ color: '#4ade80', fontSize: 16 }} />
                              ) : (
                                <ErrorIcon sx={{ color: '#f87171', fontSize: 16 }} />
                              )}
                              <span className={`text-xs ${/[a-z]/.test(values.password) ? 'text-green-400' : 'text-red-400'}`}>
                                1 lowercase letter
                              </span>
                            </div>
                            <div className="flex items-center gap-1">
                              {/[0-9]/.test(values.password) ? (
                                <CheckCircleIcon sx={{ color: '#4ade80', fontSize: 16 }} />
                              ) : (
                                <ErrorIcon sx={{ color: '#f87171', fontSize: 16 }} />
                              )}
                              <span className={`text-xs ${/[0-9]/.test(values.password) ? 'text-green-400' : 'text-red-400'}`}>
                                At least 1 number
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="input-item">
                        <label className="log-label-white" htmlFor="confirmPassword">
                          Confirm New Password <span className="text-red-500">*</span>
                        </label>
                        <div className="relative">
                          <Field
                            id="confirmPassword"
                            name="confirmPassword"
                            type={showConfirmPassword ? 'text' : 'password'}
                            placeholder="Confirm new password"
                            className={`log-input-item pr-10 ${errors.confirmPassword && touched.confirmPassword ? 'border-red-500' : ''}`}
                          />
                          <div
                            className="absolute text-white right-4 top-1/2 -translate-y-1/2 cursor-pointer"
                            onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                          >
                            {showConfirmPassword ? <FiEyeOff size={20} /> : <FiEye size={20} />}
                          </div>
                        </div>
                        <ErrorMessage name="confirmPassword" component="div" className="text-red-500 text-sm mt-1" />
                      </div>

                      {status?.error && (
                        <div className="flex items-start gap-3 p-4 bg-[rgba(239,68,68,0.2)] border border-red-500 rounded-lg">
                          <WarningIcon sx={{ color: '#f87171', fontSize: 20, marginTop: '2px', flexShrink: 0 }} />
                          <div>
                            <p className="text-red-400 font-medium text-sm">Error</p>
                            <p className="text-red-300 text-sm mt-1">{status.error}</p>
                          </div>
                        </div>
                      )}

                      <button
                        type="submit"
                        className="btn-blue w-full mt-4 font-Montserrat font-semibold text-[20px]"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? 'Resetting Password...' : 'Reset Password'}
                      </button>

                      <div className="exist-accnt text-center mt-5">
                        <p className="text-white">
                          Back to{' '}
                          <Link to="/" className="font-medium underline">
                            Home
                          </Link>
                        </p>
                      </div>
                    </Form>
                  )}
                </Formik>
              </div>
            )}
          </div>
        </div>
      </section>
    </Layout>
  );
}

export default ResetPassword;
