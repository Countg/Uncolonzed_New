import React, {useState} from "react";
import { useForm } from "react-hook-form";
import axios from 'axios';
import {Snackbar} from '@material-ui/core';
import MuiAlert from '@material-ui/lab/Alert';

const Alert = (props) => {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}


export default function ContactForm() {
  const [success, setSuccess] = useState(false);
  const [fail, setFail] = useState(false)
  // eslint-disable-next-line
  const [set, setSent] = useState(false);
  
  


const {handleSubmit, register, reset} = useForm();

const onSubmitHandler = (data, e) => {

  e.preventDefault();  
 axios.post('https://uncolonized-site.herokuapp.com/send', data)
         .then(res => {
           setSent(true)
           setSuccess(true)
        
     })
     .catch(err => {
         console.log(err)
         setFail(true)
     })
     e.target.reset() 
        
     };

     const handleClose = (reason) => {
      if (reason === 'clickaway') {
        return;
      }
  
      setSuccess(false);
      setFail(false)
    };




    return(
        <div className="p-8 w-full">
        <form onSubmit={handleSubmit(onSubmitHandler)} reset={reset}>
          <div className="grid grid-cols-2 gap-4">
            <div className="flex flex-col">
              <label htmlFor="firstName">First name</label>
              <input type="text" {...register('firstName', { required: true })}  name="firstName" className="form-input px-3 py-2 rounded-md" required />
            </div>
            <div className="flex flex-col">
              <label htmlFor="lastName">Last name</label>
              <input type="text" {...register('lastName', { required: true })} name="lastName" className="form-input px-3 py-2 rounded-md" required />
            </div>
            <div className="flex flex-col col-span-2">
              <label htmlFor="email">Email</label>
              <input type="email" name="email" {...register('email', { required: true })} className="form-input px-3 py-2 rounded-md" s />
            </div>
            {/* <div className="flex flex-col">
              <label htmlFor="phone">
                <div className="flex align-items">
                  Phone
                  <span className="ml-auto opacity-75">Optional</span>
                </div>
              </label>
              <input type="tel" id="phone" name="phone" className="form-input px-3 py-2 rounded-md" />
            </div> */}
        
            <div className="flex flex-col col-span-2">
              <label htmlFor="message">
                <div className="flex align-items">
                  Message
                  <span className="ml-auto opacity-75">Max. 500 characters</span>
                </div>
              </label>
              <textarea maxLength="500" rows="4" type="text" {...register('message', { required: true })} name="message" className="form-input px-3 py-2 rounded-md"  />
            </div>
          </div>
          <div className="flex justify-end py-4">
            <button type="submit" className="mb-20 md:mb-0 px-8 py-2 rounded-md bg-white shadow-lg text-xl font-Arimo font-semibold flex flex-row space-x-4 items-center dark:text-gray-700">
              Submit
            </button>
          </div>
       

        <Snackbar 
        open={success} 
        autoHideDuration={6000} 
        onClose={handleClose}
        anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'left',
            
        }}

        >
        <Alert  severity="success">
          Your Message Was Sent Successfully!
        </Alert>
      </Snackbar>

      <Snackbar 
        open={fail} 
        autoHideDuration={6000} 
        onClose={handleClose}
        anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'left',
            
        }}

        >
        <Alert  severity="error">
          An Error Has Occurred
        </Alert>
      </Snackbar>
        </form>
      </div>
    )
}