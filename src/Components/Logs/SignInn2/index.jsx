
import * as React from 'react';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import axios from '../../../api/axiosInstance';
import { toast } from 'react-toastify';
import './signIn2.css';
import { FiEye, FiEyeOff } from 'react-icons/fi';
import { Link } from 'react-router-dom';

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2),
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1),
  },
}));

const SignInSchema = Yup.object().shape({
  email: Yup.string()
    .trim()
    .lowercase()
    .email('Invalid email address')
    .required('Email is required')
    .test('not-only-whitespace', 'Email cannot be only whitespace', 
      value => value && value.trim().length > 0),
  password: Yup.string()
    .required('Password is required')
    .test('not-only-whitespace', 'Password cannot be only whitespace', 
      value => value && value.trim().length > 0),
});

export default function SignInn2({ open, onClose, switchToSignUp, switchToForgotPasword,setLogin }) { 
  const [showPassword, setShowPassword] = React.useState(false);
  const [loginError, setLoginError] = React.useState('');

  const handleSubmit = async (values, { setSubmitting, setFieldError }) => {
    try {
      const trimmedValues = {
        email: values.email.trim().toLowerCase(),
        password: values.password.trim(),
      };

      const response = await axios.post('/auth/signin', trimmedValues);
      if (response.status === 200) {
        localStorage.setItem('token', response.data.data.token);
        localStorage.setItem("user", JSON.stringify(response.data.data.user));
        setLogin(true);
        toast.success(response.data.message || 'Login successful!');
        onClose();
      } else {
        toast.error(response.data.message || 'Login failed');
      }
    } catch (error) {
      console.error('Login error:', error);
      const errorMessage = error.response?.data?.message || 'Login failed. Check credentials.';
      setLoginError(errorMessage);
      toast.error(errorMessage);
      if (error.response?.data?.emailVerificationRequired) {
        setLoginError('Please verify your email first. A new verification link has been sent to your email.');
      }
      
      setFieldError('email', ' ');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <BootstrapDialog 
      onClose={onClose}  // Use the passed onClose handler
      open={open}       // Use the passed open state
      PaperProps={{
        style: {
          backgroundColor: 'transparent',
          boxShadow: 'none',
          overflow: 'visible',
        },
      }}
    >
      <IconButton className='close'
        aria-label="close"
        onClick={onClose}  // Use the passed onClose handler
        sx={{
          position: 'absolute',
          right: 8,
          top: 8,
          color: (theme) => theme.palette.grey[500],
        }}
      >
        <CloseIcon />
      </IconButton>

       <DialogContent className="sign-in">
          <div className="signin-content">
            <div className="signin-heading text-center pb-[50px]">
              <h4 className="text-2xl xs:text-3xl font-semibold leading-10 text-white mb-5">
                Welcome back
              </h4>
              <p className="max-w-[350px] mx-auto leading-[30px]">
                Start your learning journey with Inexa from top universities and businesses.
              </p>
            </div>

            {loginError && (
              <div className="error-message text-red-500 text-center mb-4">
                {loginError}
              </div>
            )}

            <Formik
              initialValues={{ email: '', password: '' }}
              validationSchema={SignInSchema}
              onSubmit={handleSubmit}
            >
              {({ isSubmitting }) => (
                <Form className="sign-up-fields flex flex-col gap-4 sm:w-[329px] mx-auto">
                  <div className="input-item">
                    <label className="log-label-white" htmlFor="email">
                      Email address <span className="text-red-500">*</span>
                    </label>
                    <Field
                      id="email"
                      name="email"
                      type="email"
                      placeholder="Enter your email address"
                      className="log-input-item"
                    />
                    <ErrorMessage name="email" component="div" className="text-red-500 text-sm mt-1" />
                  </div>

                  <div className="input-item">
                    <label className="log-label-white" htmlFor="password">
                      Password <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <Field
                        id="password"
                        name="password"
                        type={showPassword ? 'text' : 'password'} // 👈 Toggle type
                        placeholder="Enter your password"
                        className="log-input-item pr-10"
                      />
                      <div
                        className="absolute text-white right-4 top-1/2 -translate-y-1/2 cursor-pointer"
                        onClick={() => setShowPassword(!showPassword)} // 👈 Toggle handler
                      >
                        {showPassword ? <FiEyeOff size={20} /> : <FiEye size={20} />}
                      </div>
                    </div>
                    <ErrorMessage name="password" component="div" className="text-red-500 text-sm mt-1" />
                  </div>

                  <Link className="capitalize underline flex justify-center xs:justify-end" to="" 
                  onClick={switchToForgotPasword}>
                    forgot password?
                  </Link>

                  <div className="input-item">
                    <button
                      type="submit"
                      className="btn-blue w-full mt-6 cursor-pointer font-Montserrat font-semibold text-[20px]"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? 'Logging in...' : 'Log in'}
                    </button>
                  </div>
                </Form>
              )}
            </Formik>

            {/* Social Login Section */}
            <div className="other-log-opts">
              <div className="divider mx-auto flex items-center justify-center gap-4 my-7 w-full sm:w-[360px]">
                <div className="line w-full h-[1px] bg-[#cbcad7]" />
                <span className="font-medium text-lg">or</span>
                <div className="line w-full h-[1px] bg-[#cbcad7]" />
              </div>

              <div className="log-opts grid postXs:grid-cols-2 gap-4 w-full sm:w-[360px] mx-auto">
                {[
                  ['Google', 'Google_1.svg'],
                  ['Apple', 'Apple_1.svg'],
                  ['Microsoft', 'MICROSOFT-1.svg'],
                  ['Facebook', 'facebook_1.svg'],
                ].map(([provider, icon]) => (
                  <a key={provider} className="log-btn-white flex items-center lg:justify-between" href="https://www.google.com">
                    <img className="w-[18px]" alt={provider} src={`/images/${icon}`} />
                    Continue with {provider}
                  </a>
                ))}
              </div>

              <div className="exist-accnt text-center mt-10">
                <p> New on Inexa?
                  <Link className="font-medium underline" to="" onClick={switchToSignUp}> Sign up</Link>
                </p>
              </div>
            </div>
          </div>
        </DialogContent>
    </BootstrapDialog>
  );
}