import React, { useState } from "react";
import Drawer from "@mui/material/Drawer";
import Box from "@mui/material/Box";
import { CiSearch } from "react-icons/ci";
import styles from "./Search.module.css";

export default function Search({ onSearch }) {
  const [state, setState] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSearch = () => {
    onSearch(searchTerm);
    setSearchTerm(""); // Limpiar el valor del input
    setState({ ...state, ["bottom"]: false });
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <div>
      <div>
        <React.Fragment key="bottom">
          <div onClick={toggleDrawer("bottom", true)}>
            <CiSearch className={styles.icons} />
          </div>
          <Drawer
            anchor="bottom"
            open={state["bottom"]}
            onClose={toggleDrawer("bottom", false)}
          >
            <Box
              sx={{ height: 400,}}
              role="presentation"
              className={styles.inputContainer}
            >
              <input
                type="text"
                placeholder="Buscar..."
                value={searchTerm}
                onChange={handleSearchChange}
                onKeyDown={handleKeyDown}
                className={styles.input}
              />
            </Box>
          
          </Drawer>
        </React.Fragment>
      </div>
    </div>
  );
}
