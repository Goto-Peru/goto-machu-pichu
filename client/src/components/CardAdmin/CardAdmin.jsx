import * as React from "react";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import styles from "./CardAdmin.module.css";
import {
  AllTuristic,
  UpdateTuristic,
  DetailsTuristic,
  DeleteTuristic,
} from "../../redux/action";
import { useDispatch, useSelector } from "react-redux";
import Modal from "@mui/material/Modal";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import CircularProgress from "@mui/material/CircularProgress";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};
export default function CardAdmin() {
  const dispatch = useDispatch();
  const allturistic = useSelector((state) => state.allturistic.data);
  const detailsturistic = useSelector((state) => state.detailsturistic.data);
  const [open, setOpen] = React.useState(false);

  const [selectDetails, setSelectDetails] = React.useState();

  const [Loading, setLoading] = React.useState(false);

  const updateName =
    detailsturistic && detailsturistic.name ? detailsturistic.name : "";
  const updateDetails =
    detailsturistic && detailsturistic.details ? detailsturistic.details : "";
  const updatePrice =
    detailsturistic && detailsturistic.price ? detailsturistic.price : "";
  const updatePackage =
    detailsturistic && detailsturistic.package ? detailsturistic.package : "";

  const [update, setUpdate] = React.useState({
    name: updateName,
    details: updateDetails,
    price: updatePrice,
    package: updatePackage,
  });

  const handleOpen = (turisticId) => {
    setSelectDetails(turisticId);
    setOpen(true);
  };


  const handleClose = () => setOpen(false);
  React.useEffect(() => {
    if (
      detailsturistic &&
      detailsturistic.name &&
      detailsturistic.details &&
      detailsturistic.price &&
      detailsturistic.package
    ) {
      setUpdate({
        name: detailsturistic.name,
        details: detailsturistic.details,
        price: detailsturistic.price,
        package: detailsturistic.package,
      });
    }
  }, [detailsturistic]);
  React.useEffect(() => {
    dispatch(AllTuristic());
  }, [dispatch]);

  React.useEffect(() => {
    dispatch(DetailsTuristic(selectDetails));
  }, [dispatch, selectDetails]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(async () => {
      try {
        dispatch(UpdateTuristic(detailsturistic.id, update));
        alert("Publicación actualizada");
        window.location.reload();
      } catch (error) {
        alert("Error al actualizar la publicación");

        console.log(error);
      } finally {
        setLoading(false);
      }
    }, 2000);
  };

  const hanldeChange = async (e) => {
    setUpdate({
      ...update,
      [e.target.name]: e.target.value,
    });
  };

  const handleDelete = async (turisticId) => {
    setTimeout(async () => {
      try {
        dispatch(DeleteTuristic(turisticId));
        alert("Publicación Eliminada");
      } catch (error) {
        alert("Error al Eliminar la publicación");

        console.log(error);
      } finally {
        window.location.reload();

      }
    }, 1000);
  };

  return (
    <div>
      <div className={styles.cards_container}>
        {allturistic &&
          allturistic.map((data) => (
            <Card sx={{ width: 300, height: 450 }}>
              <CardMedia
                component="img"
                sx={{ height: "194px" }}
                image={data.imageFile && data.imageFile[0]}
                alt={data.imageFile && data.imageFile[0]}
              />
              <CardContent>
                <Typography sx={{ textAlign: "center" }}>
                  {data.name && data.name}
                </Typography>
              </CardContent>
              <Typography
                variant="body2"
                color="text.secondary"
                sx={{ textAlign: "start", paddingLeft: "2em" }}
              >
                Servicio grupal
              </Typography>
              <Typography
                variant="body2"
                color="text.secondary"
                sx={{
                  textAlign: "start",
                  paddingLeft: "2em",
                  paddingTop: "2em",
                }}
              >
                Guía de turismo
              </Typography>
              <Typography
                variant="body2"
                color="text.secondary"
                sx={{
                  textAlign: "end",
                  paddingRight: "2em",
                  paddingTop: "2em",
                  fontWeight: "bold",
                  fontSize: "1em",
                }}
              >
                US$ <span>{data.price}</span>
              </Typography>
              <Typography
                variant="body2"
                color="text.secondary"
                sx={{
                  textAlign: "end",
                  paddingRight: "2em",
                  paddingTop: "2em",
                  fontWeight: "bold",
                  fontSize: "1em",
                  display: "flex",
                  gap: "1em",
                  justifyContent: "center",
                }}
              >
                <Button variant="contained" onClick={() => handleOpen(data.id)}>
                  Actualizar
                </Button>

                <Button
                  variant="contained"
                  sx={{
                    backgroundColor: "red",
                    ":hover": { backgroundColor: "red" },
                  }}
                  onClick={() => handleDelete(data.id)}
                >
                  Eliminar
                </Button>
              </Typography>
            </Card>
          ))}
      </div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Nombre del lugar
                </label>
                <div className="mt-2">
                  <input
                    id="name"
                    name="name"
                    type="name"
                    required
                    className={`block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400  sm:text-sm sm:leading-6 ${styles.input}`}
                    value={update.name}
                    onChange={hanldeChange}
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="package"
                  className="block text-sm font-semibold leading-6 text-gray-900"
                >
                  Paquetes turísticos
                </label>
                <div className="mt-2.5">
                  <select
                    className={`block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400  sm:text-sm sm:leading-6 ${styles.input}`}
                    value={update.package}
                    onChange={hanldeChange}
                    name="package"
                    id="package"
                  >
                    <option value="">seleccionar el un paquete</option>
                    <option value="Paquetes a Machu pichu">
                      Paquetes a Machu pichu
                    </option>
                    <option value="Paquetes a Perú">Paquetes a Perú</option>
                    <option value="Camino Inca">Camino Inca</option>
                    <option value="Camino Inca">Treks</option>
                    <option value="Excursiones para cruceros en Lima">
                      Excursiones para cruceros en Lima
                    </option>
                    <option value="Excursiones para cruceros en Paracas">
                      Excursiones para cruceros en Paracas
                    </option>
                  </select>
                </div>
              </div>
              <div>
                <div className="flex items-center justify-between">
                  <label
                    htmlFor="price"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Precio
                  </label>
                </div>
                <div className="mt-2">
                  <input
                    id="price"
                    name="price"
                    type="number"
                    onChange={hanldeChange}
                    required
                    className={`block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400  sm:text-sm sm:leading-6 ${styles.input}`}
                    value={update.price}
                  />
                </div>
              </div>
              <div>
                <div className="flex items-center justify-between">
                  <label
                    htmlFor="details"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Detalles del Restaurante
                  </label>
                </div>
                <div className="mt-2">
                  <textarea
                    id="details"
                    name="details"
                    type="details"
                    required
                    className={`block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400  sm:text-sm sm:leading-6 ${styles.input}`}
                    value={update.details}
                    onChange={hanldeChange}
                  />
                </div>
              </div>

              <div>
                <button
                  type="submit"
                  className={`flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 ${styles.btn}`}
                >
                  {Loading ? (
                    <CircularProgress
                      size={25}
                      thickness={5}
                      sx={{ color: "#fff" }}
                    />
                  ) : (
                    "Actualizar"
                  )}
                </button>
              </div>
            </form>
          </div>
        </Box>
      </Modal>
    </div>
  );
}
