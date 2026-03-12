import * as React from 'react';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import ErrorIcon from '@mui/icons-material/Error';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import axios from '../../../api/axiosInstance';
import { toast } from 'react-toastify';
import SentEmail from '../SentEmail';
import { Link } from 'react-router-dom';
import { FiEye, FiEyeOff } from 'react-icons/fi';
import "../SignInn2/signIn2.css";

// Styled Dialog component
const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2),
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1),
  },
}));

// Validation schema using Yup
const SignUpSchema = Yup.object().shape({
  fullName: Yup.string()
    .trim()
    .required('Full name is required')
    .min(2, 'Full name must be at least 2 characters')
    .test('not-only-whitespace', 'Full name cannot be only whitespace', 
      value => value && value.trim().length > 0),
  email: Yup.string()
    .trim()
    .lowercase()
    .email('Invalid email address')
    .required('Email is required')
    .test('not-only-whitespace', 'Email cannot be only whitespace', 
      value => value && value.trim().length > 0),
  password: Yup.string()
    .required('Password is required')
    .min(10, 'Password must be at least 10 characters')
    .matches(/[A-Z]/, 'Password must contain at least one uppercase letter')
    .matches(/[a-z]/, 'Password must contain at least one lowercase letter')
    .matches(/[0-9]/, 'Password must contain at least one number')
    .test('not-only-whitespace', 'Password cannot be only whitespace', 
      value => value && value.trim().length > 0),
});

export default function SignUp2({open, onClose, switchToSignIn}) {
  const [sentEmail, setSentEmail] = React.useState(false);
  const [showPassword, setShowPassword] = React.useState(false);

  React.useEffect(() => {
    if (open) {
      setSentEmail(false);
    }
  }, [open]);

  const handleModalClose = (event, reason) => {
    if (onClose) {
      onClose(event, reason);
    }
  };

  const handleSubmit = async (values, { setSubmitting, setStatus }) => {
    try {
      const trimmedValues = {
        fullName: values.fullName.trim(),
        email: values.email.trim().toLowerCase(),
        password: values.password.trim()
      };

      const response = await axios.post('/auth/signup', trimmedValues);

      if (response.status === 200 || response.status === 201) {
        localStorage.setItem('email', trimmedValues.email);
        toast.success(response.data?.message || 'Signup successful! Please check your email for verification.');
        setSentEmail(true);
      } else {
        toast.error(response.data?.message || 'Signup failed');
      }
    } catch (error) {
      console.error('Signup error:', error);
      const errorMsg = error.response?.data?.message || 'Signup failed. Please try again.';
      setStatus({ error: errorMsg });
      toast.error(errorMsg);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <>
      {/* <Button variant="outlined" onClick={handleClickOpen}>
        Open Sign Up 2
      </Button> */}

      <BootstrapDialog 
        onClose={handleModalClose} 
        open={open}
        disableEscapeKeyDown={false}
        PaperProps={{
          style: {
            backgroundColor: 'transparent',
            boxShadow: 'none',
            overflow: 'visible',
          },
        }}
      >
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
            zIndex: 1,
          }}
        >
          <CloseIcon />
        </IconButton>

        <DialogContent className="sign-in">
          {sentEmail ? (
            <SentEmail />
          ) : (
            <div className="sign-in-content">
              <h4 className="text-2xl xs:text-3xl font-semibold leading-10 text-white mb-5 text-center">
                Sign up
              </h4>
              <p className="max-w-[350px] mx-auto leading-[30px] font-Montserrat mb-7 text-center">
                Start your learning journey with Inexa from top universities and businesses.
              </p>

              <Formik
                initialValues={{ fullName: '', email: '', password: '' }}
                validationSchema={SignUpSchema}
                onSubmit={handleSubmit}
              >
                {({ isSubmitting, errors, touched, status, values }) => (
                  <Form className="sign-up-fields flex flex-col gap-4 sm:w-[329px] mx-auto">
                    <div className="input-item">
                      <label className="log-label-white" htmlFor="fullName">
                        Full Name <span className="text-red-500">*</span>
                      </label>
                      <Field
                        id="fullName"
                        name="fullName"
                        placeholder="Enter your full name"
                        className={`log-input-item ${errors.fullName && touched.fullName ? 'error' : ''}`}
                        type="text"
                      />
                      <ErrorMessage name="fullName" component="div" className="text-red-500 text-sm mt-1" />
                    </div>

                    <div className="input-item">
                      <label className="log-label-white" htmlFor="email">
                        Email address <span className="text-red-500">*</span>
                      </label>
                      <Field
                        id="email"
                        name="email"
                        placeholder="Enter your email address"
                        className={`log-input-item ${errors.email && touched.email ? 'error' : ''}`}
                        type="email"
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
                          placeholder="Enter your password"
                          className={`log-input-item pr-10 ${errors.password && touched.password ? 'error' : ''}`}
                          type={showPassword ? 'text' : 'password'}
                        />
                        <div
                          className="absolute text-white right-4 top-1/2 -translate-y-1/2 cursor-pointer"
                          onClick={() => setShowPassword(!showPassword)}
                        >
                          {showPassword ? <FiEyeOff size={20} /> : <FiEye size={20} />}
                        </div>
                      </div>
                      
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

                    {status?.error && <div className="text-red-500 text-sm mt-1">{status.error}</div>}

                    <div className="divider mx-auto flex items-center justify-center gap-4 my-7 w-full md:w-[360px]">
                      <div className="line w-full h-[1px] bg-[#CBCAD7]" />
                      <span className="font-medium text-lg">or</span>
                      <div className="line w-full h-[1px] bg-[#CBCAD7]" />
                    </div>

                    <div className="log-opts grid postXs:grid-cols-2 gap-4 w-full sm:w-[360px] mx-auto">
                      {[
                        ['Google', 'Google_1new.svg'],
                        ['Apple', 'Apple_1new.svg'],
                        ['Microsoft', 'MICROSOFT-1.svg'],
                        ['Facebook', 'facebook_1.svg'],
                      ].map(([provider, icon]) => (
                        <a key={provider} className="log-btn-white flex items-center lg:justify-between" href="#">
                          <img className="w-[18px]" alt={provider} src={`/images/${icon}`} />
                          Continue with {provider}
                        </a>
                      ))}
                    </div>

                    <div className="input-item">
                      <button
                        className="btn-blue w-full mt-6 font-Montserrat font-semibold text-[20px]"
                        type="submit"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? 'Signing up...' : 'Sign up'}
                      </button>
                    </div>
                  </Form>
                )}
              </Formik>

              <div className="other-log-opts">
                <div className="exist-accnt text-center pb-5 mt-12">
                  <p className="text-white font-normal">
                    Already on Inexa?{' '}
                    <Link className="white-link font-medium underline" to="" onClick={switchToSignIn}>
                      Log in
                    </Link>
                  </p>
                </div>
                <div className="w-full sm:w-[424px] h-[1px] bg-[#CBCAD7] mx-auto" />
                <p className="text-white text-center mt-10">
                  I Accept Inexa's{' '}
                  <a className="white-link underline px-1 font-medium" href="/about-us">
                    Terms of Use
                  </a>{' '}
                  and
                  <a className="white-link underline px-1 font-medium" href="/about-us">
                    Privacy Notice
                  </a>
                </p>
              </div>
            </div>
          )}
        </DialogContent>
      </BootstrapDialog>
    </>
  );
}
