import React, { useEffect, useState } from "react";
import RegisterComponent from '../components/Register/Register';
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
export default function Register() {
    const [open, setOpen] = useState(true);


    useEffect(() => {
        setTimeout(() => {
            setOpen(false);
        }, 2000);
      }, []);
    return(
        <div>
          <Backdrop
        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={open}
      >
        <CircularProgress color="inherit" />

      </Backdrop>
            <div>

            <Navbar/>
            </div>

            <div>
                <RegisterComponent/>
            </div>
            <div>
                <Footer/>
            </div>
        </div>
    )
}