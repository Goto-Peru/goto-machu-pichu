import React, { useState, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { postTuristic } from "../../redux/action";
import { useDropzone } from "react-dropzone";
import styles from "./PostTuristic.module.css";
import { Button, message, Space, Upload } from "antd";
import CircularProgress from "@mui/material/CircularProgress";

export default function PostTuristic() {
  const dispatch = useDispatch();
  const [messageApi, contextHolder] = message.useMessage();
const token = useSelector(state => state.token);
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState({
    imageFile: [],
    name: "",
    details: "",
    price: "",
    package: "",

  });
  const success = () => {
    messageApi.open({
      type: "success",
      content: "Publicación creada correctamente",
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(async () => {

    try {
      const formData = new FormData();
      formData.append("name", data.name);
      formData.append("price", data.price);

      formData.append("package", data.package);
      formData.append("details", data.details);

      data.imageFile.forEach((image, index) => {
        formData.append("imageFile", image);
      });

      await dispatch(postTuristic(token, formData));
      success();
      
    } catch (error) {
      console.error("Error al crear el post:", error);
      // Manejo de error, muestra un mensaje de error, etc.
    } finally {
      setData({
        imageFile: [],
        name: "",
        details: "",
        price: "",
        package: "",
      });
      setLoading(false);
    }
  }, 2000);

  };



  const handleImage = useCallback((acceptedFiles) => {
    setData((prevState) => ({
      ...prevState,
      imageFile: Array.isArray(prevState.imageFile)
        ? [...prevState.imageFile, ...acceptedFiles]
        : acceptedFiles,
    }));
  }, []);

  const onDrop = useCallback((acceptedFiles) => {
    handleImage(acceptedFiles);
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
  });

  const handleRemove = (index) => {
    const newFilesArray = [...data.imageFile];
    newFilesArray.splice(index, 1);
    setData((prevState) => ({
      ...prevState,
      imageFile: newFilesArray,
    }));
  };


  return (
    <form onSubmit={handleSubmit}>
      <div className="isolate bg-white px-6 py-24 sm:py-32 lg:px-8">
      <div className={styles.title}>
        <h1>Publicar Lugares turistico</h1>
      </div>
        <div className={styles.dropzone} {...getRootProps()}>
          <input {...getInputProps()} />
          {isDragActive ? (
            <p>Suelta las imágenes aquí...</p>
          ) : (
            <div>
              <p>
                Arrastra y suelta las imágenes aquí o haz clic para seleccionar.
              </p>
              <span>Puedes subir hasta 100 imágenes.</span>
            </div>
          )}
        </div>
        <div>
          {data.imageFile &&
            data.imageFile.map((photo) => <img src={photo} alt="" />)}
          <div className={styles.prev_mini}>
            {data.imageFile &&
              data.imageFile.map((file, index) => (
                <div key={index}>
                  <div className="btn-x">
                    <button type="button" onClick={() => handleRemove(index)}>
                      <strong>X</strong>
                    </button>
                  </div>
                  {file && (
                    <Upload listType="picture-card" disabled>
                      <img
                        alt={`Preview ${index}`}
                        src={URL.createObjectURL(file)}
                        accept=".jpg, .jpeg, .png"
                      />
                    </Upload>
                  )}
                </div>
              ))}
          </div>
        </div>
        <div className="mx-auto mt-16 max-w-xl sm:mt-20">
          <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-semibold leading-6 text-gray-900"
              >
                Nombre del lugar
              </label>
              <div className="mt-2.5">
                <input
                  type="text"
                  name="name"
                  id="name"
                  onChange={(e) => setData({ ...data, name: e.target.value })}
                  value={data.name}
                  className={`block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400  sm:text-sm sm:leading-6 ${styles.input}`}
                  required
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="address"
                className="block text-sm font-semibold leading-6 text-gray-900"
              >
                Precio
              </label>
              <div className="mt-2.5">
                <input
                  type="text"
                  name="price"
                  id="price"
                  onChange={(e) =>
                    setData({ ...data, price: e.target.value })
                  }
                  value={data.price}
                  className={`block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400   sm:text-sm sm:leading-6 ${styles.input}`}
                  required
                />
              </div>
            </div>

     
      
            <div>
              <label
                htmlFor="category"
                className="block text-sm font-semibold leading-6 text-gray-900"
              >
                
              Paquetes turísticos

              </label>
              <div className="mt-2.5">
                <select
                  className={`block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400  sm:text-sm sm:leading-6 ${styles.input}`}
                  onChange={(e) =>
                    setData({ ...data, package: e.target.value })
                  }
                  value={data.package}
                  required

                >
                  <option value="">seleccionar el un paquete</option>
                  <option value="Paquetes a Machu pichu">Paquetes a Machu pichu</option>
                  <option value="Paquetes a Perú">Paquetes a Perú</option>
                  <option value="Camino Inca">Camino Inca</option>
                  <option value="Camino Inca">Treks</option>
                  <option value="Excursiones para cruceros en Lima">Excursiones para cruceros en Lima</option>
                  <option value="Excursiones para cruceros en Paracas">Excursiones para cruceros en Paracas</option>
                

                </select>
              </div>
            </div>
            

        
            <div className="sm:col-span-2">
              <label
                htmlFor="details"
                className="block text-sm font-semibold leading-6 text-gray-900"
              >
                Detalles del Restaurante
              </label>
              <div className="mt-2.5">
                <textarea
                  name="details"
                  id="details"
                  rows={4}
                  className={`block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400  sm:text-sm sm:leading-6 ${styles.input}`}
                  defaultValue={""}
                  value={data.details}
                  onChange={(e) =>
                    setData({ ...data, details: e.target.value })
                  }
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
                  "Publicar"
                )}
            </button>
            {contextHolder}
          </div>
        </div>
      </div>
    </form>
  );
}
