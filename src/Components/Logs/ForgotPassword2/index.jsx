
import * as React from 'react';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import { Link } from 'react-router-dom';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import axios from '../../../api/axiosInstance';
import { toast } from 'react-toastify';
import "../SignInn2/signIn2.css";

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2),
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1),
  },
}));

const ForgotPasswordSchema = Yup.object().shape({
  email: Yup.string()
    .trim()
    .lowercase()
    .required('Email address is required')
    .email('Please enter a valid email address')
    .test('not-only-whitespace', 'Email cannot be only whitespace', 
      value => value && value.trim().length > 0),
});

export default function ForgotPassword2({ open, onClose, switchToSignIn }) {
  const [emailSent, setEmailSent] = React.useState(false);
  const [sentToEmail, setSentToEmail] = React.useState('');

  // Reset state when modal opens
  React.useEffect(() => {
    if (open) {
      setEmailSent(false);
      setSentToEmail('');
    }
  }, [open]);

  const handleSubmit = async (values, { setSubmitting, resetForm, setFieldError }) => {
    try {
      const trimmedEmail = values.email.trim().toLowerCase();
      const response = await axios.post('/auth/forgot-password', { 
        email: trimmedEmail 
      });

      if (response.data.status) {
        // Success notification
        toast.success(response.data.message || 'Password reset link sent to your email!');
        
        // Show success state
        setSentToEmail(trimmedEmail);
        setEmailSent(true);
        resetForm();
      } else {
        toast.error(response.data.message || 'Failed to send reset link');
      }

    } catch (error) {
      console.error('Forgot password error:', error);
      
      // Handle different error scenarios
      const errorMessage = error.response?.data?.message || 
                          'Failed to send reset link. Please try again.';
      
      // Error notification
      toast.error(errorMessage);

      // Set field error for visual feedback if email not found
      if (error.response?.status === 404) {
        setFieldError('email', 'No account found with this email address');
      }

    } finally {
      setSubmitting(false);
    }
  };

  const handleModalClose = (event, reason) => {
    if (onClose) {
      onClose(event, reason);
    }
  };

  return (
    <BootstrapDialog 
      onClose={handleModalClose} 
      open={open}
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
        {emailSent ? (
          <div className="forgot-password-content text-center">
            <div className="mb-6">
              <svg className="w-16 h-16 mx-auto text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <h4 className="text-2xl font-semibold text-white mb-4">
              Check your email
            </h4>
            <p className="text-gray-300 mb-2">
              We've sent a password reset link to:
            </p>
            <p className="text-white font-medium mb-4">
              {sentToEmail}
            </p>
            <p className="text-gray-400 text-sm mb-6">
              The link will expire in 15 minutes. If you don't see the email, check your spam folder.
            </p>
            <button
              className="btn-blue w-full"
              onClick={() => setEmailSent(false)}
            >
              Send another link
            </button>
            <div className="exist-accnt text-center mt-5">
              <p>
                Back to{' '}
                <Link to="" className="font-medium underline" onClick={switchToSignIn}>
                  Log in
                </Link>
              </p>
            </div>
          </div>
        ) : (
          <div className="forgot-password-content">
            <h4 className="text-2xl xs:text-3xl font-semibold leading-10 text-white mb-5 text-center">
              Forgot password
            </h4>
            <p className="text-gray-300 text-center mb-6">
              Enter your email address and we'll send you a link to reset your password.
            </p>
            
            <Formik
              initialValues={{ email: '' }}
              validationSchema={ForgotPasswordSchema}
              onSubmit={handleSubmit}
              validateOnBlur={true}
              validateOnChange={true}
            >
              {({ isSubmitting, errors, touched }) => (
                <Form className="flex flex-col gap-4 sm:w-[329px] mx-auto">
                  <div className="input-item">
                    <label className="log-label-white" htmlFor="email">
                      Email address <span className="text-red-500">*</span>
                    </label>
                    <Field
                      id="email"
                      name="email"
                      type="email"
                      placeholder="Enter your email address"
                      className={`log-input-item ${errors.email && touched.email ? 'border-red-500' : ''}`}
                    />
                    <ErrorMessage name="email" component="div" className="text-red-500 text-sm mt-1" />
                  </div>
                  
                  <button
                    className="btn-blue w-full mt-3"
                    type="submit"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? 'Sending...' : 'Send Reset Link'}
                  </button>
                  
                  <div className="exist-accnt text-center mt-5">
                    <p>
                      Back to{' '}
                      <Link to="" className="font-medium underline" onClick={switchToSignIn}>
                        Log in
                      </Link>
                    </p>
                  </div>
                </Form>
              )}
            </Formik>
          </div>
        )}
      </DialogContent>
    </BootstrapDialog>
  );
}