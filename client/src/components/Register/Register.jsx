

import { useState } from "react";
import styles from "./Register.module.css";
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { RegisterUser } from '../../redux/action';
import CircularProgress from "@mui/material/CircularProgress";


export default function Register() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [data, setData] = useState({
    name: "",
    lastName: "",
    email: "",
    password: "",
    phone: "",
  });
  const [loading, setLoading] = useState(false);




  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(async () => {
      try {
        const registers = await dispatch(RegisterUser(data));
        if (registers) {
          alert('Registrado correctamente')
          setTimeout(async () => {
            navigate("/");
          }, 2000);
        }
      } catch (error) {
        alert('El email ya esta registrado')

        console.log(error);
      } finally {
        setLoading(false);
      }
    }, 3000);
  };

  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="isolate bg-white px-6 py-24 sm:py-32 lg:px-8">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Registrarse
        </h2>
      </div>
      <form
     onSubmit={handleSubmit}
        className="mx-auto mt-16 max-w-xl sm:mt-20"
      >
        <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2 ">
          <div>
            <label
              htmlFor="first-name"
              className="block text-sm font-semibold leading-6 text-gray-900"
            >
              Nombre
            </label>
            <div className="mt-2.5">
              <input
                type="text"
                name="name"
                id="name"
                autoComplete="given-name"
                className={`block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400  sm:text-sm sm:leading-6 ${styles.input}`}
               onChange={handleChange}
                required
              />
            </div>
          </div>
          <div>
            <label
              htmlFor="lastName"
              className="block text-sm font-semibold leading-6 text-gray-900"
            >
              Apellido
            </label>
            <div className="mt-2.5">
              <input
                type="text"
                name="lastName"
                id="lastName"
                autoComplete="family-name"
                className={`block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400  sm:text-sm sm:leading-6 ${styles.input}`}
               onChange={handleChange}
               required

             
             />
            </div>
          </div>

          <div className="sm:col-span-2">
            <label
              htmlFor="email"
              className="block text-sm font-semibold leading-6 text-gray-900"
            >
              Email
            </label>
            <div className="mt-2.5">
              <input
                type="email"
                name="email"
                id="email"
                autoComplete="email"
                className={`block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400  sm:text-sm sm:leading-6 ${styles.input}`}
               onChange={handleChange}
               required

              
              />
            </div>
          </div>
          <div className="sm:col-span-2">
            <label
              htmlFor="password"
              className="block text-sm font-semibold leading-6 text-gray-900"
            >
              Contraseña
            </label>
            <div className="mt-2.5">
              <input
                type="password"
                name="password"
                id="password"
                className={`block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400  sm:text-sm sm:leading-6 ${styles.input}`}
               onChange={handleChange}
                
                required

             
             />
            </div>
          </div>
          <div className="sm:col-span-2">
            <label
              htmlFor="phone"
              className="block text-sm font-semibold leading-6 text-gray-900"
            >
              Telefóno
            </label>
            <div className="mt-2.5">
              <input
                type="number"
                name="phone"
                id="phone"
                autoComplete="tel"
                className={`block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400  sm:text-sm sm:leading-6 ${styles.input}`}
                onChange={handleChange}
               
                required
             
             />
            </div>
          </div>
        </div>
        <div className="mt-10">
          <button
            type="submit"
            className={`block w-full rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 ${styles.btn}`}
          >
                 {loading ? (
                  <CircularProgress
                    size={25}
                    thickness={5}
                    sx={{ color: "#fff" }}
                  />
                ) : (
                  "Registrarse"
                )}
          </button>
        </div>
      </form>
    </div>
  );
}
