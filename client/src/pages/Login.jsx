import React, { useEffect, useState } from "react";

import LoginComponent from "../components/Login/Login";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import CircularProgress from "@mui/material/CircularProgress";
import Backdrop from "@mui/material/Backdrop";

export default function Login() {
  const [open, setOpen] = React.useState(true);
  useEffect(() => {
    setTimeout(() => {
      setOpen(false);
    }, 2000);
  }, []);
  return (
    <div>
      <Backdrop
        sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={open}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
      <div>

      <Navbar />
      </div>

      <div>
        <LoginComponent />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}
