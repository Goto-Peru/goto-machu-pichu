import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar/Navbar";
import Card from "../components/Card/Card";
import BgHome from "../components/BgHome/BgHome";
import ButtonWhatsapp from "../components/ButtonWhatsaapp/ButtonWhatsaapp";
import ButtonBot from "../components/ButtonBot/ButtonBot";
import Footer from "../components/Footer/Footer";
import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";

export default function Home() {
  const [searchTerm, setSearchTerm] = useState("");
  const [open, setOpen] = useState(true);

  const handleSearch = (term) => {
    setSearchTerm(term);
  };
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
        <Navbar onSearch={handleSearch} />
      </div>
      <div>
        <BgHome />
      </div>
      <div>
        <Card searchTerm={searchTerm} />
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
