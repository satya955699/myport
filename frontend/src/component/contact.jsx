import React from 'react';
import { Typography, Divider, Box } from '@mui/material';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import SmartphoneIcon from '@mui/icons-material/Smartphone';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

function Contact() {
  return (
    <section id="contact" className="p-6 text-white">
      <div className="mb-8">
        <Typography variant="h4" className="text-amber-500">Contact</Typography>
        <Divider className="bg-amber-300 w-11 h-1 rounded-2xl" />
      </div>
      <Box className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Contact Details Section */}
        <Box className="space-y-6">
          <Box className="bg-[#3C3C3D] rounded-xl p-6 flex items-center gap-4">
            <MailOutlineIcon className="text-amber-400 text-4xl" />
            <Box>
              <Typography variant="h6" className="font-semibold">Email</Typography>
              <Typography variant="body1" className="text-gray-300">satyaprangya0@gmail.com</Typography>
            </Box>
          </Box>

          <Box className="bg-[#3C3C3D] rounded-xl p-6 flex items-center gap-4">
            <SmartphoneIcon className="text-amber-400 text-4xl" />
            <Box>
              <Typography variant="h6" className="font-semibold">Phone</Typography>
              <Typography variant="body1" className="text-gray-300">+91-9556995358</Typography>
            </Box>
          </Box>

          
           <Box className="bg-[#3C3C3D] rounded-xl p-6 flex items-center gap-4">
            <LinkedInIcon className="text-amber-400 text-4xl" />
            <Box>
              <Typography variant="h6" className="font-semibold">Linkedin</Typography>
              <Typography variant="body1" className="text-gray-300"><a href="https://www.linkedin.com/in/satyadashs/">click here</a></Typography>
            </Box>
          </Box>
          <Box className="bg-[#3C3C3D] rounded-xl p-6 flex items-center gap-4">
            <LocationOnIcon className="text-amber-400 text-4xl" />
            <Box>
              <Typography variant="h6" className="font-semibold">Location</Typography>
              <Typography variant="body1" className="text-gray-300">Bhubaneswar, Odisha</Typography>
            </Box>
          </Box>
        </Box>
        <Box className="bg-[#3C3C3D] rounded-xl overflow-hidden shadow-lg">
          <Typography variant="h6" className="font-semibold p-4">Find Me Here</Typography>

          <iframe className='  bg-gray-400'
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3742.589561498005!2d85.77406407469479!3d20.275850013213056!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a19a7f9d486f7c3%3A0xde71ead59307dcca!2sOdisha%20University%20of%20Technology%20and%20Research!5e0!3m2!1sen!2sin!4v1752837542927!5m2!1sen!2sin" 
            title="My Location on Google Maps"
            width="100%"
            height="350"
            style={{ border: 0,filter: "invert(130%) grayscale(100%)"}}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </Box>
      </Box>
    </section>
  );
}

export default Contact;