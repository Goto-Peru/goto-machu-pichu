import React, { useEffect, useState } from "react";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import styles from "./Card.module.css";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { AllTuristic} from "../../redux/action";


export default function Cards({ searchTerm }) {
  const dispatch = useDispatch()
  const allturistic = useSelector((state) => state.allturistic.data);
  const [selectedCategory, setSelectedCategory] = useState("Todos");
  const [filteredData, setFilteredData] = useState([]);
console.log(allturistic)
  const categories = [...new Set(allturistic?.map((product) => product.package))];
  useEffect(() => {
    dispatch(AllTuristic());
  }, [dispatch]);
  useEffect(() => {
    filterData();
  }, [searchTerm, selectedCategory, allturistic]);

  const filterData = () => {
    if (!allturistic) return; // Check if allturistic is defined
    const filtered = allturistic
      .filter(
        (data) =>
          (selectedCategory === "Todos" || data.package === selectedCategory) &&
          data.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
    setFilteredData(filtered || []); // Ensure filteredData is always an array
  };

  return (
    <div>
      <h1 className={styles.text}>Los mejores tours </h1>
      <div className="mt-2.5">
        <select
          className={`block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400   sm:text-sm sm:leading-6  ${styles.input}  `}
          onChange={(e) => setSelectedCategory(e.target.value)}
          value={selectedCategory}
        >
          <option value="Todos">Todos los paquetes</option>

          {categories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
      </div>
      <div className={styles.cards_container}>
        {filteredData.length > 0 ? (
          filteredData.map((data) => (
            <Link key={data.id} to={`/detalles/${data.id}`}>
              <Card sx={{ width: 300, height: 400 }}>
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
              </Card>
            </Link>
          ))
        ) : (
          <Typography>No se encontraron resultados.</Typography>
        )}
      </div>
    </div>
  );
}
