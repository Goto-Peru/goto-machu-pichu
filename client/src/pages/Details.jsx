import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar/Navbar";
import DetailsComponents from "../components/Details/Details";
import ButtonWhatsapp from "../components/ButtonWhatsaapp/ButtonWhatsaapp";
import ButtonBot from "../components/ButtonBot/ButtonBot";
import Backdrop from "@mui/material/Backdrop";
import Footer from "../components/Footer/Footer";
import CircularProgress from "@mui/material/CircularProgress";

export default function Details() {
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
        <DetailsComponents />
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
