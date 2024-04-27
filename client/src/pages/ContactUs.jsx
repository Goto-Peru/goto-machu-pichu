import React, { useEffect, useState } from "react";
import ContactUsComponent from "../components/ContactUs/ContactUs";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";
import ButtonWhatsapp from "../components/ButtonWhatsaapp/ButtonWhatsaapp";
import ButtonBot from "../components/ButtonBot/ButtonBot";
import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";
export default function ContactUs() {
  const [open, setOpen] = useState(true);
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
        <ContactUsComponent />
      </div>
      <div>
        <ButtonWhatsapp />
      </div>
      <div>
        <ButtonBot />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}
