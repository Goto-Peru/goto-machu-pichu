import * as React from "react";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Avatar from "@mui/material/Avatar";
import Tooltip from "@mui/material/Tooltip";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { useState } from "react";
import { Dialog, Popover } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

import styles from "./Navbar.module.css";
import { AiOutlineUser } from "react-icons/ai";
import Logout from "@mui/icons-material/Logout";
import ListItemIcon from "@mui/material/ListItemIcon";
import { useDispatch, useSelector } from "react-redux";
import { dataPersonal } from "../../redux/action";

import { Link } from "react-router-dom";
import Search from "../Search/Search";
export default function Navbar({ onSearch }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);

  const dispatch = useDispatch();

  const token = useSelector((state) => state.token);
  const datapersonal = useSelector((state) => state.datapersonal);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  React.useEffect(() => {
    dispatch(dataPersonal(token));
  }, [dispatch, token]);
  const open = Boolean(anchorEl);

  const handleLogout = () => {

    try {
    localStorage.removeItem("token");
      
    } catch (error) {
      console.log(error);
    } finally {
      window.location.reload();
    }
    // Aquí podrías redirigir al usuario a la página de inicio de sesión u otra página que consideres adecuada
};
  return (
    <header className={`bg-white ${styles.nav}`}>
      <nav
        className={`mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8 `}
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          <Link to="/" className="-m-1.5 p-1.5">
            <span className="sr-only">Your Company</span>
            <img
              className="h-20 w-auto"
              src={require("../../images/Logo.jpg")}
              alt=""
            />
          </Link>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <Popover.Group className="hidden lg:flex lg:gap-x-12">
          <Link
            to="/"
            className="text-sm font-semibold leading-6 text-gray-900"
          >
            Inicio
          </Link>
          <Link
            to="/sobre-nosotros"
            className="text-sm font-semibold leading-6 text-gray-900"
          >
            Sobre nosotros
          </Link>
          <Link
            to="/contactanos"
            className="text-sm font-semibold leading-6 text-gray-900"
          >
            Contactanos
          </Link>
        </Popover.Group>

        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <div>
            <Link to="/cotizador">
              <button
                type="submit"
                className={`flex justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 ${styles.btn} `}
              >
                COTIZADOR
              </button>
            </Link>
          </div>
          <div>
            <Search onSearch={onSearch} />
          </div>
          {token ? (
            <React.Fragment>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  textAlign: "center",
                }}
              >
                <Tooltip title="Account settings">
                  <IconButton
                    onClick={handleClick}
                    size="small"
                    sx={{ ml: 2, marginTop: "-0.5em" }}
                    aria-controls={open ? "account-menu" : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? "true" : undefined}
                  >
                    <Avatar
                      sx={{
                        width: 40,
                        height: 40,
                        backgroundColor: datapersonal.backgroundColor,
                      }}
                    >
                      {datapersonal.name && datapersonal.name[0]}
                    </Avatar>
                  </IconButton>
                </Tooltip>
              </Box>
              <Menu
                anchorEl={anchorEl}
                id="account-menu"
                open={open}
                onClose={handleClose}
                onClick={handleClose}
                PaperProps={{
                  elevation: 0,
                  sx: {
                    overflow: "visible",
                    filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
                    mt: 1.5,
                    "& .MuiAvatar-root": {
                      width: 32,
                      height: 32,
                      ml: -0.5,
                      mr: 1,
                    },
                    "&::before": {
                      content: '""',
                      display: "block",
                      position: "absolute",
                      top: 0,
                      right: 14,
                      width: 10,
                      height: 10,
                      bgcolor: "background.paper",
                      transform: "translateY(-50%) rotate(45deg)",
                      zIndex: 0,
                    },
                  },
                }}
                transformOrigin={{ horizontal: "right", vertical: "top" }}
                anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
              >
                <Link to="/perfil">
                  <MenuItem onClick={handleClose}>
                    <Avatar
                      sx={{ backgroundColor: datapersonal.backgroundColor }}
                    >
                      {datapersonal.name && datapersonal.name[0]}
                    </Avatar>
                    Perfil
                  </MenuItem>
                </Link>

                <Divider />

                <MenuItem onClick={handleLogout}>
                  <ListItemIcon>
                    <Logout fontSize="small" />
                  </ListItemIcon>
                  Cerrar sesión
                </MenuItem>
              </Menu>
            </React.Fragment>
          ) : (
            <div>
              <div>
                <Link to="/login">
                  <AiOutlineUser className={styles.icons} />
                </Link>
              </div>
            </div>
          )}
        </div>
      </nav>
      <Dialog
        as="div"
        className="lg:hidden"
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        <div className="fixed inset-0 z-10" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <a href="/" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <img
                className="h-8 w-auto"
                src={require("../../images/Logo.jpg")}
                alt=""
              />
            </a>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                <a
                  href="/"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Inicio
                </a>
                <a
                  href="/sobre-nosotros"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Sobre nosotros
                </a>
                <a
                  href="/contactanos"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Contactanos
                </a>
                <a
                  href="/cotizador"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Cotizador
                </a>
              </div>
              <div className="py-6">
                {token ? (
                  <>
                    <a
                      href="/login"
                      className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                    >
                      Perfil
                    </a>

                    <a
                      href=""
                      className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                      onClick={handleLogout}
                    >
                      Cerrar sesión
                    </a>
                  </>
                ) : (
                  <a
                    href="/login"
                    className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  >
                    Iniciar sesión
                  </a>
                )}
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  );
}
