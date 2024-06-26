import styles from "./Login.module.css";
import { useState, useEffect } from "react";
import { login } from "../../redux/action";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import CircularProgress from "@mui/material/CircularProgress";
export default function Login() {

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [loadingError, setLoadingError] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [auth, setAuth] = useState(null);
  const role = useSelector((state) => state.role);
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoadingError(true); // Activa el indicador de carga
    setTimeout(async () => {
  
    try {
        const authResult = await dispatch(login(email, password));
        setAuth(authResult);
      if (authResult) {
        setAuth(authResult);
        
      } else {
        alert("el correo y/o la contraseña no coinciden");
      }

    } catch (error) {
      console.error('Error durante el inicio de sesión', error);
    } finally {
      setLoadingError(false); 
    }
  }, 3000);

  };

  useEffect(() => {
    if (auth) {
      if (role === 'user') {
        navigate('/');
      } else if (role === 'admin') {
        navigate('/admin');
      }
    }
  }, [auth, role, navigate]);
  

  return (
    <>
    
      <div className={`flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8 ${styles.login_container}`}>
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <img
            className="mx-auto h-10 w-auto"
            src={require("../../images/Logo.jpg")}
            alt="Your Company"
          />
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Iniciar sesión
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Correo electrónico
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className={`block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400  sm:text-sm sm:leading-6 ${styles.input}`}
                  onChange={(e) => setEmail(e.target.value)}

                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Contraseña
                </label>
              </div>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className={`block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400  sm:text-sm sm:leading-6 ${styles.input}`}
                  onChange={(e) => setPassword(e.target.value)}

                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className={`flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 ${styles.btn}`}
              >
                   {loadingError ? (
              <CircularProgress
                size={25}
                thickness={5}
                sx={{ color: "#fff" }}
              />
            ) : (
              "Iniciar sesión"
            )}
              </button>
            </div>
          </form>

          <p className="mt-10 text-center text-sm text-gray-500">
            No tienes cuenta?{" "}
            <a
              href="/register"
              className={`font-semibold leading-6 text-indigo-600 hover:text-indigo-500 ${styles.color_link}`}
            >
              registrate
            </a>
          </p>
        </div>
      </div>
    </>
  );
}
