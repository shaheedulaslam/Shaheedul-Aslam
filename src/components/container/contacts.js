import emailjs from 'emailjs-com'
import { makeStyles } from '@mui/styles';
import React, { useContext, useRef, useState } from 'react';
import isEmail from 'validator/lib/isEmail';
import { ThemeContext } from '../../contexts/theme-context';
import ContactUI from '../core-ui/contacts/contacts-ui';
import swal from 'sweetalert';


const Contacts = () => {
  const [open, setOpen] = useState(false);

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [success, setSuccess] = useState(false);
  const [errMsg, setErrMsg] = useState('');
  const form = useRef();
  const { theme } = useContext(ThemeContext);

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  const useStyles = makeStyles((t) => ({
    input: {
      border: `2px solid ${theme.buttonColor}`,
      backgroundColor: `${theme.secondary}`,
      color: `${theme.tertiary}`,
      fontFamily: 'var(--primaryFont)',
      fontWeight: 500,
      transition: 'border 0.2s ease-in-out',
      '&:focus': {
        border: `2px solid ${theme.primary}`,
      },
    },
    message: {
      border: `2px solid ${theme.buttonColor}`,
      backgroundColor: `${theme.secondary}`,
      color: `${theme.tertiary}`,
      fontFamily: 'var(--primaryFont)',
      fontWeight: 500,
      transition: 'border 0.2s ease-in-out',
      '&:focus': {
        border: `2px solid ${theme.primary}`,
      },
    },
    label: {
      backgroundColor: `${theme.secondary}`,
      color: `${theme.tertiary}`,
      fontFamily: 'var(--primaryFont)',
      fontWeight: 600,
      fontSize: '0.9rem',
      padding: '0 5px',
      transform: 'translate(25px,50%)',
      display: 'inline-flex',
    },
    socialIcon: {
      width: '45px',
      height: '45px',
      borderRadius: '50%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: '21px',
      backgroundColor: theme.buttonColor,
      color: theme.secondary,
      transition: '250ms ease-in-out',
      '&:hover': {
        transform: 'scale(1.1)',
        color: theme.secondary,
        backgroundColor: theme.primary,
      },
    },
    detailsIcon: {
      backgroundColor: theme.buttonColor,
      color: theme.secondary,
      borderRadius: '50%',
      width: '45px',
      height: '45px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: '23px',
      transition: '250ms ease-in-out',
      flexShrink: 0,
      '&:hover': {
        transform: 'scale(1.1)',
        color: theme.secondary,
        backgroundColor: theme.primary,
      },
    },
    submitBtn: {
      backgroundColor: theme.primary,
      color: theme.secondary,
      transition: '250ms ease-in-out',
      '&:hover': {
        transform: 'scale(1.08)',
        color: theme.secondary,
        backgroundColor: theme.buttonColor,
      },
    },
  }));

  const classes = useStyles();
  // emailjs.init(process.env.NEXT_PUBLIC_YOUR_PUBLIC_KEY)



  const handleContactForm = (e) => {
    e.preventDefault();
  const serviceId =  'service_sniwzb5'
  const publicId ='DB60mLAYOW2gZIcM9'
  const templateId = 'template_s6ftplh'

    if (name && email && message) {
      if (isEmail(email)) {
        emailjs.sendForm(
          serviceId,
          templateId,
          form.current,
         publicId
        )
          .then((result) => {
            swal('Success', 'Email submitted successfully!', 'success');
            setSuccess(true);
            setErrMsg('');
            setName('');
            setEmail('');
            setMessage('');
            setOpen(false);
          })
          .catch((error) => {
            console.log(error);
            setErrMsg('An error occurred while sending the email. Please try again later.');
            setSuccess(false);
          });
      } else {
        setErrMsg('Invalid email');
        setOpen(true);
        setSuccess(false);
      }
    } else {
      setErrMsg('Enter all the fields');
      setOpen(true);
      setSuccess(false);
    }
  };
  

  return (
    <ContactUI
      open={open}
      success={success}
      errMsg={errMsg}
      handleClose={handleClose}
      classes={classes}
      handleContactForm={handleContactForm}
      name={name}
      setName={setName}
      form={form}
      email={email}
      setEmail={setEmail}
      message={message}
      setMessage={setMessage}
    />
  );
};

export default Contacts;





// import { useState, useRef } from 'react';
// import emailjs from 'emailjs-com';

// const Contacts = () => {
//   const [name, setName] = useState('');
//   const [email, setEmail] = useState('');
//   const [message, setMessage] = useState('');
//   const [success, setSuccess] = useState(false);
//   const [errMsg, setErrMsg] = useState('');
//   const formRef = useRef();

//   const handleContactForm = (e) => {
//     e.preventDefault();

//     if (name && email && message) {
//       if (validateEmail(email)) {
//         emailjs
//           .sendForm(
//             process.env.NEXT_PUBLIC_YOUR_SERVICE_ID,
//             process.env.NEXT_PUBLIC_YOUR_TEMPLATE_ID,
//             formRef.current
//           )
//           .then((result) => {
//             console.log(result);
//             setSuccess(true);
//             setErrMsg('');
//             setName('');
//             setEmail('');
//             setMessage('');
//           })
//           .catch((error) => {
//             console.log(error);
//             setErrMsg('An error occurred while sending the email. Please try again later.');
//             setSuccess(false);
//           });
//       } else {
//         setErrMsg('Invalid email');
//         setSuccess(false);
//       }
//     } else {
//       setErrMsg('Please fill in all the fields');
//       setSuccess(false);
//     }
//   };

//   const validateEmail = (email) => {
//     // Use a regular expression or any other email validation method
//     // to validate the email format
//     // Example using a simple regular expression:
//     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     return emailRegex.test(email);
//   };

//   return (
//     <div className='contacts'>
//       {/* Render your contact form UI here */}
//       <form ref={formRef} onSubmit={handleContactForm}>
//         {/* Form input fields */}
//         <input
//           type='text'
//           name='user_name'
//           value={name}
//           onChange={(e) => setName(e.target.value)}
//           placeholder='Your Name'
//         />
//         <input
//           type='email'
//           name='user_email'
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//           placeholder='Your Email'
//         />
//         <textarea
//           name='message'
//           value={message}
//           onChange={(e) => setMessage(e.target.value)}
//           placeholder='Type your message...'
//         />
//         {/* Display success message or error message */}
//         {success && <p>Email sent successfully!</p>}
//         {errMsg && <p>{errMsg}</p>}
//         {/* Submit button */}
//         <button type='submit'>Send</button>
//       </form>
//     </div>
//   );
// };

// export default Contacts;
