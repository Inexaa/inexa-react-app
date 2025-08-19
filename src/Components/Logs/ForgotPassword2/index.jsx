
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
    .email('Invalid email address')
    .required('Email is required'),
});

export default function ForgotPassword({ open, onClose, switchToSignIn }) {
  const handleSubmit = async (values, { setSubmitting, resetForm, setFieldError }) => {
    try {
      // API call using axios
      const response = await axios.post('/api/forgot-password', { 
        email: values.email 
      });

      // Success notification
      toast.success('Password reset link sent to your email!', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });

      // Reset form and close modal on success
      resetForm();
      onClose();

    } catch (error) {
      console.error('Forgot password error:', error);
      
      // Handle different error scenarios
      const errorMessage = error.response?.data?.message || 
                          error.response?.data?.error || 
                          'Failed to send reset link. Please try again.';
      
      // Error notification
      toast.error(errorMessage, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });

      // Set field error for visual feedback if email not found
      if (error.response?.status === 404) {
        setFieldError('email', 'Email address not found');
      }

    } finally {
      setSubmitting(false);
    }
  };

  return (
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
        <div className="forgot-password-content">
          <h4 className="text-2xl xs:text-3xl font-semibold leading-10 text-white mb-5 text-center">
            Forgot password
          </h4>
          
          <Formik
            initialValues={{ email: '' }}
            validationSchema={ForgotPasswordSchema}
            onSubmit={handleSubmit}
          >
            {({ isSubmitting }) => (
              <Form className="flex flex-col gap-4 sm:w-[329px] mx-auto">
                <div className="input-item">
                  <label className="log-label-white" htmlFor="email">
                    Email address
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
                
                <button
                  className="btn-blue w-full mt-3"
                  type="submit"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Sending...' : 'Reset Password'}
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
      </DialogContent>
    </BootstrapDialog>
  );
}