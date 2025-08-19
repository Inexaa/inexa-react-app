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
import SentEmail from '../SentEmail';
import { Link } from 'react-router-dom';
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
const SignInSchema = Yup.object().shape({
  fullName: Yup.string()
    .required('Full name is required')
    .min(2, 'Full name must be at least 2 characters'),
  email: Yup.string()
    .email('Invalid email address')
    .required('Email is required'),
  password: Yup.string()
    .required('Password is required')
    .min(4, 'Password must be at least 4 characters')
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
      'Password must contain at least one uppercase letter, one lowercase letter, one number and one special character'
    ),
});

export default function SignUp2({open, onClose, switchToSignIn}) {
  // const [open, setOpen] = React.useState(false);
  const [sentEmail, setSentEmail] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
    setSentEmail(false); // Reset on reopen
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmit = async (values, { setSubmitting, setStatus }) => {
    try {
      const response = await axios.post('/auth/signup', {
        fullName: values.fullName,
        email: values.email,
        password: values.password
      });

      if (response.status === 200) {
        localStorage.setItem('email', values.email);
        toast.success(response.data?.message || 'Signup successful!');
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

      <BootstrapDialog onClose={onClose} open={open}>
        <IconButton
          aria-label="close"
          onClick={onClose}
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
                validationSchema={SignInSchema}
                onSubmit={handleSubmit}
              >
                {({ isSubmitting, errors, touched, status }) => (
                  <Form className="sign-up-fields flex flex-col gap-4 sm:w-[329px] mx-auto">
                    <div className="input-item">
                      <label className="log-label-white" htmlFor="fullName">
                        Full Name
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
                        Email address
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
                        Password
                      </label>
                      <Field
                        id="password"
                        name="password"
                        placeholder="Enter your password"
                        className={`log-input-item ${errors.password && touched.password ? 'error' : ''}`}
                        type="password"
                      />
                      <ErrorMessage name="password" component="div" className="text-red-500 text-sm mt-1" />
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
