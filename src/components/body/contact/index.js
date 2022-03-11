import React from 'react'
import  { useRef } from 'react';
import Seperator from '../../common/social-contact/seperator/index'
import gm from "../../../assets/gmail.png";
import gi from "../../../assets/gi.png";
import mob from "../../../assets/mobile.png";
import Button from '@mui/material/Button';
import SocialContact from '../../common/social-contact/index';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import emailjs from 'emailjs-com';
import Divider from '@mui/material/Divider';
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
      setmsg("Plz Fill The Email Field In Form and Submit..Thank you")
    }else if(mobile.length == 0){
      setOpen(true);
      settype("warning")
      setmsg("Plz Fill The Mobile Number In Form and Submit..Thank you")
    }
    else{
    emailjs.sendForm('service_ml4o94m', 'template_x99ppvk', form.current,'s4klRLQI31ZhcVrif')
      .then((result) => {
        setOpen(true)
        settype("success")
        setmsg("Notified Successfully..")
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
        <label className='section-title' style={{textAlign: 'center', marginTop:"20px"}}>Contact Arun</label>
        <label className='section-title_2' style={{textAlign: 'center', marginTop:"20px",opacity:".6"}}>Get in touch with me to get your ideas on fire</label>
        <div className='social-container-2' style={{display: 'flex', justifyContent:"space-evenly", marginLeft:"10%", marginRight:"10%", marginTop:"5%"}}>
          <div className='social-container-div' style={{display:"flex", flexDirection:"column", justifyContent:"center", alignItems: 'center'}}>
            <a href="mailto:toarun25@gmail.com" target='_blank' rel="noreferrer">
            <img src={gm} className='social-icon-n' alt="social-icon" style={{height: '70px'}}/>
            </a>
            <label style={{marginTop:"4%", color:"blue"}}>toarun25@gmail.com</label>
          </div>
          <div className='social-container-div' style={{display:"flex", flexDirection:"column", justifyContent:"center", alignItems: 'center'}}>
            <a href="https://github.com/arun2516" target='_blank' rel="noreferrer">
            <img src={gi} className='social-icon-n' alt="social-icon" style={{height: '70px'}}/>
            </a>
            <label style={{marginTop:"10%", color:"blue"}}>arun2516</label>
          </div>
          <div className='social-container-div' style={{display:"flex", flexDirection:"column", justifyContent:"center", alignItems: 'center'}}>
            <a href="tel:+91 9578767150" target='_blank' rel="noreferrer">
            <img src={mob} className='social-icon-n' alt="social-icon" style={{height: '70px'}}/>
            </a>
            <label style={{marginTop:"4%", color:"blue"}}>+91 9578767150</label>
          </div>
        </div>
        <div style={{width:"30%",height:"5%",backgroundColor:"black", border:"1px solid black", marginTop:"10%",marginLeft:"35%"}}></div>
        <div className="msg" style={{textAlign:"center", fontSize:"25px", fontWeight:"50", marginTop:"3%",opacity:".5"}} >
          Notify Me
        </div>
        <div className='contact-container'>
        <Box
            sx={{
              my: 3,
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
                autoComplete="mobile"
              />
               <TextField
                margin="normal"
                required
                fullWidth
                multiline
                rows={5}
                name="message"
                label="Message"
                id="message"
                autoComplete="message"
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
               
              >
                Notify Arun
              </Button>
              <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity={type} sx={{ width: '100%' }}>
          {msg}
        </Alert>
      </Snackbar>
            </Box>
          </Box>
        </div>
        
    </div>
  )
}

export default Contact