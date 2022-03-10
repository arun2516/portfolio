import React from 'react'
import  { useRef } from 'react';
import Seperator from '../../common/social-contact/seperator/index'
import Button from '@mui/material/Button';
import SocialContact from '../../common/social-contact/index';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import emailjs from 'emailjs-com';
import "./contact.css"

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});


function Contact() {
  const [open, setOpen] = React.useState(false)
  const [msg,setmsg]= React.useState("")
  const[type,settype]=React.useState("")

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
  
    setOpen(false);
  };
  
  const form = useRef();

  const sendemail=(e)=>{
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    let email = data.get("email")
    let mobile = data.get("mobile")
    if(email === ""){
      setOpen(true);
      settype("warning")
      setmsg("plz fill  the Email field in form and submit..Thank you")
    }else if(mobile.length == 0){
      setOpen(true);
      settype("warning")
      setmsg("plz fill the Mobile Number form and submit..Thank you")
    }
    else{
    emailjs.sendForm('service_ml4o94m', 'template_x99ppvk', form.current,'s4klRLQI31ZhcVrif')
      .then((result) => {
        setOpen(true)
        settype("success")
        setmsg("Thank you for contacting")
          console.log(result.text);
      }, (error) => {
        settype("error")
        setOpen(true)
        setmsg("Sorry Error in Server..plz try it after sometime. Thank you")
          console.log(error.text);
      });
    }
      e.target.reset()

  }


  return (
    <div className='contact'>
        <Seperator/>
        <label className='section-title'>Contact</label>
        <div className='contact-container'>
        <Box
            sx={{
              my: 8,
              mx: 4,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
              
            
            <Box component="form" ref={form} noValidate onSubmit={sendemail}  sx={{ mt: 1 }}>
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="mobile"
                label="Mobile Number"
                id="mobile"
                autoComplete="Mobile Number"
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
               
              >
                contact Arun
              </Button>
              <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity={type} sx={{ width: '100%' }}>
          {msg}
        </Alert>
      </Snackbar>
            </Box>
          </Box>
        </div>
        
        <SocialContact style={{fontSize:"20px"}}/>
    </div>
  )
}

export default Contact