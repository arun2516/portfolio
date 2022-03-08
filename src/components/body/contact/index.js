import React from 'react'
import Seperator from '../../common/social-contact/seperator/index'
import Button from '@mui/material/Button';
import SocialContact from '../../common/social-contact/index';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import "./contact.css"

const handleSubmit=async(e)=>{
  e.preventDefault();
}

function Contact() {
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
              <Typography component="h1" variant="h3" color='blue' fontFamily='Mochiy Pop P One'>
              Contact Form
            </Typography>
            
            <Box component="form" noValidate onSubmit={handleSubmit}  sx={{ mt: 1 }}>
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
                type="mobile"
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
            </Box>
          </Box>
        </div>
        
        <SocialContact style={{fontSize:"20px"}}/>
    </div>
  )
}

export default Contact