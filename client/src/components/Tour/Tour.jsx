import * as React from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import styles from "./Tour.module.css";
import { Link } from 'react-router-dom'


const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function Cards() {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <div>

         <h1 className={styles.text}>
         Los mejores tours a Machu Picchu
   </h1>
    <div className={styles.cards_container}>
   <Link to= "/detalles">


      <Card sx={{ maxWidth: 345,height: 400}}>
        <CardMedia
          component="img"
          height="194"
          image="https://www.machupicchu-tours-peru.com/wp-content/uploads/2015/11/machu-picchu.jpg"
          alt="Paella dish"
        />
        <CardContent>
          <Typography sx={{ textAlign: "center" }}>Peruana</Typography>
        </CardContent>
        <Typography
          variant="body2"
          color="text.secondary"
          sx={{ textAlign: "center", paddingBottom: "2em" }}
        >
          Criollas y mariscos
        </Typography>
      </Card>
      </Link>
      <Link to= "/detalles">

      <Card sx={{ maxWidth: 345, height: 400 }}>
        <CardMedia
          component="img"
          height="194"
          image="https://www.machupicchu-tours-peru.com/wp-content/uploads/2015/11/machu-picchu.jpg"
          alt="Paella dish"
        />
        <CardContent>
          <Typography sx={{ textAlign: "center" }}>Nikkei</Typography>
        </CardContent>
        <Typography
          variant="body2"
          color="text.secondary"
          sx={{ textAlign: "center", paddingBottom: "2em" }}
        >
          Comida Nikkei
        </Typography>
      </Card>

      </Link>
      <Link to= "/detalles">

      <Card sx={{ maxWidth: 345, height: 400 }}>
        <CardMedia
          component="img"
          height="194"
          image="https://www.machupicchu-tours-peru.com/wp-content/uploads/2015/11/machu-picchu.jpg"
          alt="Paella dish"
        />
        <CardContent>
          <Typography sx={{ textAlign: "center" }}>Italiana</Typography>
        </CardContent>
        <Typography
          variant="body2"
          color="text.secondary"
          sx={{ textAlign: "center", paddingBottom: "2em" }}
        >
          Comida Italiana
        </Typography>
      </Card>
      </Link>

      <Link to= "/detalles">

      <Card sx={{ maxWidth: 345, height: 400 }}>
        <CardMedia
          component="img"
          sx={{height:"194px"}}
          
          image="https://www.machupicchu-tours-peru.com/wp-content/uploads/2015/11/machu-picchu.jpg"
          alt="Paella dish"
        />
        <CardContent>
          <Typography sx={{ textAlign: "center" }}>Internacional</Typography>
        </CardContent>
        <Typography
          variant="body2"
          color="text.secondary"
          sx={{ textAlign: "center" }}
        >
          Comida Internacional
        </Typography>
      </Card>
      </Link>

    </div>
    </div>

  );
}
