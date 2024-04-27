import styles from "./ContactUs.module.css";
import { ContactUsTuristic } from "../../redux/action";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import CircularProgress from "@mui/material/CircularProgress";

export default function ContactUs() {
  const dispatch = useDispatch();
  const [Loading, setLoading] = useState(false);
  const [data, setData] = useState({
    name: "",
    email: "",
    affair: "",
    message: "",

  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(async () => {
      try {
        await dispatch(ContactUsTuristic(data));
        alert("Email enviada correctamente");
      } catch (error) {
        alert("Error al enviar el Email");
        console.log("Error en el componente ContactUs:", error);
      } finally {
        setLoading(false);
      }
    }, 2000);
  };

  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };
  return (
    <div className={styles.cotizador_container}>
      <div className={styles.cotizador_box}>
        <h1>¡Contactanos!</h1>
        <br />
        <p>
          ¿Listo para comenzar tu aventura en Perú? ¡Nos encantaría escuchar de
          ti! Ponte en contacto con nuestro equipo amigable y experto para
          comenzar a planificar tu viaje personalizado hoy mismo.
        </p>
        <br />
        <p>
          Información de Contacto Teléfono: +51 982 161 686 Correo Electrónico:
          gotomachupicchuperu@gmail.com
        </p>
      </div>
      <div className={styles.card_container}>
        <div
          className={`flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8 ${styles.card_form}`}
        >
          <div className="sm:mx-auto sm:w-full sm:max-w-sm">
            <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
              Contactanos
            </h2>
          </div>

          <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Nombres
                </label>
                <div className="mt-2">
                  <input
                    id="name"
                    name="name"
                    type="text"
                    autoComplete="name"
                    required
                    className={`block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400  sm:text-sm sm:leading-6 ${styles.input}`}
                    onChange={handleChange}
                    value={data.name}
                  />
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between">
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Correo electrónico
                  </label>
                </div>
                <div className="mt-2">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    className={`block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400  sm:text-sm sm:leading-6 ${styles.input}`}
                    onChange={handleChange}
                    value={data.email}
                  />
                </div>
              </div>
              
              <div>
                <div className="flex items-center justify-between">
                  <label
                    htmlFor="affair"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                   Asunto
                  </label>
                </div>
                <div className="mt-2">
                  <input
                    id="affair"
                    name="affair"
                    type="text"
                    className={`block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400  sm:text-sm sm:leading-6 ${styles.input}`}
                    onChange={handleChange}
                    value={data.affair}
                  />
                </div>
              </div>
          

              <div>
                <div className="flex items-center justify-between">
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Mensaje
                  </label>
                </div>
                <div className="mt-2">
                  <textarea
                    id="message"
                    name="message"
                    type="text"
                    className={`block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400  sm:text-sm sm:leading-6 ${styles.input}`}
                    onChange={handleChange}
                    value={data.message}
                  />
                </div>
              </div>

              <div className={styles.btn_container}>
                <button
                  type="submit"
                  className={`flex justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 ${styles.btn}`}
                >
                  {Loading ? (
                    <CircularProgress
                      size={25}
                      thickness={5}
                      sx={{ color: "#fff" }}
                    />
                  ) : (
                    "ENVIAR"
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
