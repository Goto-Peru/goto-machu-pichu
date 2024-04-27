import styles from "./Cotizador.module.css";
import { CotizationTuristic } from "../../redux/action";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import CircularProgress from "@mui/material/CircularProgress";

export default function Cotizador() {
  const dispatch = useDispatch();
  const [Loading, setLoading] = useState(false);
  const [data, setData] = useState({
    name: "",
    lastName: "",
    phone: "",
    email: "",
    services: "",
    date: "",
    peoples: "",
    more: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(async () => {
      try {
        await dispatch(CotizationTuristic(data));
        alert("Cotización enviada correctamente");
      } catch (error) {
        alert("Error al enviar la cotización");
        console.log("Error en el componente Cotizador:", error);
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
        <h1>¡Bienvenido a nuestro planificador de aventuras!</h1>
        <br />
        <p>
          Estamos emocionados de ayudarte a diseñar el viaje de tus sueños.
          Completa el siguiente formulario para que podamos ofrecerte opciones
          de paquetes turísticos personalizados que se ajusten a tus
          preferencias. Una vez que recibamos tus datos, nuestros especialistas
          en viajes se pondrán en marcha para diseñar una cotización única y
          llena de experiencias inolvidables.
        </p>
        <br />
        <p>
          ¡Gracias por confiar en nosotros! Esperamos ayudarte a crear recuerdos
          maravillosos en tu próxima aventura.
        </p>
      </div>
      <div className={styles.card_container}>
        <div
          className={`flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8 ${styles.card_form}`}
        >
          <div className="sm:mx-auto sm:w-full sm:max-w-sm">
            <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
              Cotiza tu plan de viaje
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
                    htmlFor="lastName"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Apellido
                  </label>
                </div>
                <div className="mt-2">
                  <input
                    id="lastName"
                    name="lastName"
                    type="text"
                    autoComplete="current-password"
                    required
                    className={`block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400  sm:text-sm sm:leading-6 ${styles.input}`}
                    onChange={handleChange}
                    value={data.lastName}
                  />
                </div>
              </div>
              <div>
                <div className="flex items-center justify-between">
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Teléfono
                  </label>
                </div>
                <div className="mt-2">
                  <input
                    id="phone"
                    name="phone"
                    type="number"
                    autoComplete="phone"
                    required
                    className={`block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2  sm:text-sm sm:leading-6 ${styles.input}`}
                    onChange={handleChange}
                    value={data.phone}
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
                    htmlFor="services"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    ¿Qué servicios deseas?
                  </label>
                </div>
                <div className="mt-2">
                  <input
                    id="services"
                    name="services"
                    type="text"
                    required
                    className={`block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6 ${styles.input}`}
                    onChange={handleChange}
                    value={data.services}
                  />
                </div>
              </div>
              <div>
                <div className="flex items-center justify-between">
                  <label
                    htmlFor="peoples"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    ¿Cuántas personas son?
                  </label>
                </div>
                <div className="mt-2">
                  <input
                    id="peoples"
                    name="peoples"
                    type="number"
                    autoComplete="peoples"
                    required
                    className={`block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400  sm:text-sm sm:leading-6 ${styles.input}`}
                    onChange={handleChange}
                    value={data.peoples}
                  />
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between">
                  <label
                    htmlFor="peoples"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    ¿Posible fecha de viaje?
                  </label>
                </div>
                <div className="mt-2">
                  <input
                    id="date"
                    name="date"
                    type="date"
                    autoComplete="peoples"
                    required
                    className={`block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400  sm:text-sm sm:leading-6 ${styles.input}`}
                    onChange={handleChange}
                    value={data.date}
                  />
                </div>
              </div>
              <div>
                <div className="flex items-center justify-between">
                  <label
                    htmlFor="password"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    ¿Algo más que debamos tener en cuenta?
                  </label>
                </div>
                <div className="mt-2">
                  <input
                    id="more"
                    name="more"
                    type="text"
                    className={`block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400  sm:text-sm sm:leading-6 ${styles.input}`}
                    onChange={handleChange}
                    value={data.more}
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
